# Quickstart: Publishing Batch Recommendations

## Introduction
This guide shows you how to use Luigi’s Box **Recommendation Batch Publisher** to:
1. Upload a list of users to generate recommendations for.  
2. Retrieve the published recommendations.  
3. Understand how recommendations integrate into your system.  

<% note_content = capture do %>
  <p>This guide shows a basic integration example. In production, consult the <a href="/recommender/api.html">full Batch Publisher API reference</a> for advanced options and scaling.</p>
<% end %>
<%= callout("warning", note_content) %>

### What you’ll learn
- How to prepare and upload a list of users (`auth_user_id`) via the **Batching Users API**.
- How Luigi’s Box generates scheduled recommendation batches.
- How to access the recommendation output (JSON, XML, or direct integration).
- How analytics is automatically tracked using `recommendation_id`.

### Who is this guide for
- Developers setting up newsletter or campaign integrations with Luigi’s Box.
- Technical teams integrating recommendation results with third-party platforms like **SmartEmailing** or **Klaviyo**.

### Prerequisites
- Your Luigi’s Box **Tracker ID**.
- **Public & Private API keys** (for HMAC authentication).
- A list of user identifiers (`auth_user_id`) to upload.
- Basic ability to make HTTP requests (examples in **Ruby Faraday**, **PHP Guzzle**, **Node.js Axios**).

---

## Step 1: Prepare a user list
The Batch Publisher generates recommendations only for known users (by `auth_user_id`).  
Format your user file as JSON Lines or CSV.

**Example: JSON Lines**
```json
{"auth_user_id": "u123"}
{"auth_user_id": "u234"}
{"auth_user_id": "u345"}
```

**Example: CSV**
```csv
"u123"
"u234"
"u345"
```

---

## Step 2: Upload users via the Batching Users API

#### Endpoint
<span class="badge text-bg-success">POST</span>  
`https://live.luigisbox.com/v1/recommender/batching/<TRACKER_ID>/users`

- The request must be `multipart/form-data`.
- Each upload replaces the previously stored list for that tracker.

#### Example: Upload with Ruby (Faraday)
```ruby
require 'faraday'
require 'openssl'
require 'base64'
require 'time'

def generate_digest(private_key, method, path, date, content_type)
  data = "#{method}\n#{content_type}\n#{date}\n#{path}"
  Base64.strict_encode64(OpenSSL::HMAC.digest('sha256', private_key, data)).strip
end

PUBLIC_KEY = "your_public_key"
PRIVATE_KEY = "your_private_key"
TRACKER_ID = "your_tracker_id"
PATH = "/v1/recommender/batching/#{TRACKER_ID}/users"
DATE = Time.now.httpdate
CTYPE = "multipart/form-data"

sig = generate_digest(PRIVATE_KEY, "POST", PATH, DATE, CTYPE)
auth = "ApiAuth #{PUBLIC_KEY}:#{sig}"

conn = Faraday.new(url: "https://live.luigisbox.com")
res = conn.post(PATH) do |req|
  req.headers['Date'] = DATE
  req.headers['Authorization'] = auth
  req.body = { file: Faraday::UploadIO.new("users.jsonl", "application/json") }
end

puts res.status, res.body
```

#### Example: Upload with PHP (Guzzle)
```php
<?php
require 'vendor/autoload.php';
use GuzzleHttp\Client;

function digest($key, $method, $path, $date, $ctype) {
  return base64_encode(hash_hmac('sha256', "$method\n$ctype\n$date\n$path", $key, true));
}

$PUB = "your_public_key";
$PRIV = "your_private_key";
$TRACKER = "your_tracker_id";
$PATH = "/v1/recommender/batching/$TRACKER/users";
$DATE = gmdate('D, d M Y H:i:s') . ' GMT';
$CTYPE = "multipart/form-data";
$SIG = digest($PRIV, "POST", $PATH, $DATE, $CTYPE);
$AUTH = "ApiAuth $PUB:$SIG";

$client = new Client();
$res = $client->post("https://live.luigisbox.com$PATH", [
  'headers' => ['Date' => $DATE, 'Authorization' => $AUTH],
  'multipart' => [['name' => 'file', 'contents' => fopen('users.jsonl','r')]]
]);

echo $res->getBody();
```

#### Example: Upload with Node.js (Axios, async/await)
```javascript
const axios = require("axios");
const crypto = require("crypto");
const fs = require("fs");
const FormData = require("form-data");

function digest(key, method, path, date, ctype) {
  return crypto.createHmac("sha256", key)
    .update(`${method}\n${ctype}\n${date}\n${path}`)
    .digest("base64")
    .trim();
}

const PUB = "your_public_key";
const PRIV = "your_private_key";
const TRACKER = "your_tracker_id";
const PATH = `/v1/recommender/batching/${TRACKER}/users`;
const HOST = "https://live.luigisbox.com";

(async () => {
  try {
    const DATE = new Date().toUTCString();
    const CTYPE = "multipart/form-data";
    const SIG = digest(PRIV, "POST", PATH, DATE, CTYPE);
    const AUTH = `ApiAuth ${PUB}:${SIG}`;

    const form = new FormData();
    form.append("file", fs.createReadStream("users.jsonl"));

    const res = await axios.post(`${HOST}${PATH}`, form, {
      headers: {
        ...form.getHeaders(),
        Date: DATE,
        Authorization: AUTH,
      },
    });

    console.log(res.data);
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
})();
```

---

## Step 3: Luigi’s Box generates recommendations
Once users are uploaded, Luigi’s Box prepares recommendations at the configured schedule.  
- Each user gets their own personalized set.  
- A `default` set is generated for anonymous/new users.  

---

## Step 4: Retrieve recommendations

How you fetch recommendations depends on your integration:

### Option A: Klaviyo integration
Luigi’s Box writes recommendations directly into user profiles under `attributes.properties`.  

**Example Klaviyo profile with recommendations:**
```json
{
  "data": {
    "type": "profile",
    "id": "01GDDKASAP8TKDDA2GRZDSVP4H",
    "attributes": {
      "email": "sarah.mason@klaviyo-demo.com",
      "properties": {
        "mail-recommender-1": [
          {
            "id": "product1-id",
            "url": "https://shop.com/product1?recommendation_id=1234",
            "title": "Product 1",
            "image_link": "https://shop.com/product1.jpg"
          }
        ]
      }
    }
  }
}
```

#### Example: Fetch with Node.js (Axios, async/await)
```javascript
const axios = require("axios");

(async () => {
  try {
    const res = await axios.get("https://a.klaviyo.com/api/profiles", {
      headers: {
        Authorization: "Klaviyo-Private-API-Key your_private_key",
      },
    });

    for (const profile of res.data.data) {
      const recs = profile.attributes.properties["mail-recommender-1"];
      if (recs) {
        console.log(profile.attributes.email, recs);
      }
    }
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
})();
```

---

### Option B: Custom integration (XML export)

After Luigi's Box generates the batch, it can provide you with an **XML file** (or JSON file) containing recommendations for each user. This option is useful when you are building a **custom newsletter pipeline** or integrating with a system that cannot directly receive recommendations (unlike Klaviyo or SmartEmailing).

By parsing this XML, you can:

- Access the recommendations for each user.
- Insert product titles, images, and links into your newsletter templates.
- Handle fallback logic (e.g., show trending products if no personalized recs are available).

> Luigi's Box will provide you with a tracker-specific URL where the XML/JSON export can be downloaded. The examples below use a placeholder URL (`https://example.com/recommendations/export.xml`). Replace it with the real export URL provided by Luigi's Box support or your integration settings.

**Example XML structure:**
```xml
<users>
  <user>
    <auth_user_id>u123</auth_user_id>
    <data>
      <recommendations>
        <recommendation>
          <recommendation_type>mail-recommender-1</recommendation_type>
          <results>
            <result>
              <id>product1-id</id>
              <url>https://shop.com/product1?recommendation_id=abcd1234</url>
              <title>Product 1</title>
              <image_link>https://shop.com/img/product1.jpg</image_link>
            </result>
          </results>
        </recommendation>
      </recommendations>
    </data>
  </user>
</users>
```

#### Example: Fetch & parse XML in Ruby
```ruby
require 'net/http'
require 'nokogiri'

url = URI("https://example.com/recommendations/export.xml")
res = Net::HTTP.get(url)
doc = Nokogiri::XML(res)

doc.xpath("//user").each do |user|
  uid = user.at_xpath("auth_user_id").text
  recs = user.xpath(".//result")
  puts "User #{uid} recommendations:"
  recs.each do |r|
    puts "- #{r.at_xpath('title').text} (#{r.at_xpath('url').text})"
  end
end
```

#### Example: Fetch & parse XML in PHP
```php
<?php
$xml = file_get_contents("https://example.com/recommendations/export.xml");
$data = new SimpleXMLElement($xml);

foreach ($data->user as $user) {
  $uid = (string)$user->auth_user_id;
  echo "User $uid recommendations:\n";
  foreach ($user->data->recommendations->recommendation as $rec) {
    foreach ($rec->results->result as $r) {
      echo "- {$r->title} ({$r->url})\n";
    }
  }
}
```

#### Example: Fetch & parse XML in Node.js (Axios + async/await)
```javascript
const axios = require("axios");
const xml2js = require("xml2js");

(async () => {
  try {
    const res = await axios.get("https://example.com/recommendations/export.xml");
    const json = await xml2js.parseStringPromise(res.data);

    for (const user of json.users.user) {
      const uid = user.auth_user_id[0];
      console.log(`User ${uid} recommendations:`);
      for (const rec of user.data[0].recommendations[0].recommendation) {
        for (const r of rec.results[0].result) {
          console.log(`- ${r.title[0]} (${r.url[0]})`);
        }
      }
    }
  } catch (err) {
    console.error(err.message);
  }
})();
```

---

## Step 5: Deliver recommendations
At this point, you send the retrieved recommendation data to your customers (e.g., via newsletters).  
Luigi’s Box does **not** send emails — your integrated platform is responsible for delivery.  


## Step 6: Analytics tracking
All recommendation URLs include a `recommendation_id`. Luigi’s Box Analytics automatically tracks user interactions. You can monitor performance in the **Recommenders Analytics Dashboard**.  

For custom tracking, send the `recommendation_id` with your [Events API Impression](https://docs.luigisbox.com/analytics/api.html#event-api-impression-event).

---

## Best practices
- **Keep user lists fresh**: Only upload IDs of active users (last 6 months recommended).  
- **Handle file size limits**: Max 300MB, 10-minute upload window.  
- **Test before production**: Validate uploaded user IDs exist in your analytics data.  
- **Monitor analytics**: Use the dashboard to measure newsletter recommendation performance.  

---

## Next steps
- Automate batch uploads from your CRM or email platform.  
- Explore multiple **recommender logics** (e.g., “Trending products” vs. “You might like”).  
- Implement fallback flows using the `default` recommendations set.  

---

✅ With this, you now have a complete pipeline:  
**Upload → Generate → Retrieve → Deliver → Track.**

