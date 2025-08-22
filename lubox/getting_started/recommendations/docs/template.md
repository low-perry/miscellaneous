---
layout: quickstart_layout
title: "Quickstart: Indexing with Luigi's Box"
description: "Learn how to send your product data to Luigi's Box for indexing using the Content Update API with step-by-step instructions and multi-language code examples."
category: "API integration"
---


## Introduction

This guide provides a step-by-step walkthrough for developers to send their first product data to Luigi's Box for indexing using the [Content Update API](/indexing/api.html). The Content Update API is the recommended method for ensuring your search index remains fresh and up-to-date.

### What you'll learn

By following this guide, you will learn how to:

- Prepare your product data in the required JSON format.
- Authenticate your requests to the Luigi's Box Content Update API using HMAC.
- Send your product data to Luigi's Box to be indexed using POST /v1/content.
- Send a partial update to an existing product using PATCH /v1/content.
- Understand the basic responses from these API endpoints.

### Who is this guide for

This guide is intended for:

- Developers who are new to integrating with Luigi's Box indexing.
- Technical users responsible for synchronizing an e-commerce catalog or other content with Luigi's Box.

### Prerequisites

Before you begin, ensure you have the following:

- **Luigi's Box account:** Access to the Luigi's Box application/dashboard. If you don't have an account, please contact the Luigi's Box sales or support team.
- **API keys (Public & Private):** Credentials required to authenticate your API requests for a specific Luigi's Box tracker. These are generated within the Luigi's Box application. Consult the application's help section or your account manager for specific instructions.
- **Basic understanding of JSON:** Familiarity with JSON (JavaScript Object Notation) data format structure.
- **HTTP request tool / programming language:** Ability to make HTTP POST and PATCH requests. This guide provides conceptual examples for:
  - **PHP** (using GuzzleHttp)
  - **JavaScript (Node.js)** (using axios)
  - **Ruby** (using faraday gem)
- **Understanding of Data Layout:** It's highly recommended to first review the ["Quickstart: Structuring your data for indexing"](data_layout.html) guide.

<% info_content = capture do %>
  <p>Your Luigi's Box API keys can be found in your Luigi's Box application in "General settings" > "Integration settings".</p>
<% end %>
<%= callout("info", info_content) %>


## Core concepts of Luigi's Box indexing (a brief primer)

Before diving into the steps, let's briefly cover a few core concepts:

- **index-object:** This is the fundamental unit of data you send to Luigi's Box for indexing. Each `index-object` represents an item like a product, category, or article.
- **identity (required):** Every `index-object` must have an `identity` that must be unique across all types because an object indexed later will replace the data of any former object that shares the same ID.
- **type (required):** A label that classifies the object (e.g., "product", "category", "article").
- **full vs. partial updates:**
  - **full update ([POST /v1/content](/indexing/api.html#content-updates-content-update)):** This method replaces the entire object in the index with the data you send. If you omit fields that were previously indexed, they will be removed. This guide uses full updates.
  - **partial update ([PATCH /v1/content](/indexing/api.html#content-updates-partial-content-update)):** This method allows you to update only specific fields of an existing object without sending the entire object.
- **index freshness:** Keeping your index up-to-date with your catalog (e.g., price changes, stock availability) is vital for a good user experience. The Content Update API allows for near real-time updates, which is generally preferred over scheduled feed processing that can result in a temporarily stale index.
- **HMAC Authentication:** All requests must be authenticated. The actual HMAC signature generation is complex and requires precise adherence to the main Luigi's Box [Authentication documentation](/api_principles.html#authentication).


## Step-by-step: Indexing and updating your first product (Content Update API)

Let's embark on indexing and then updating "My Very First Item."

### Setting Up: Obtaining API keys

Ensure you have your **Public Key** and **Private Key** from your Luigi's Box account dashboard. Keep the **Private Key** secure. We'll refer to these as `YOUR_PUBLIC_KEY` and `YOUR_PRIVATE_KEY` in the examples.

###  Part 1: Indexing your first product (full update with POST /v1/content)

We'll create our "My Very First Item" product in the Luigi's Box index.

#### 1. Prepare your product data (JSON)

This is the initial data for our product.

```json
{
    "identity": "product-001",
    "type": "item",
    "fields": {
      "title": "My Very First Item",
      "web_url": "https://www.example.com/products/product-001",
      "price": "€49.99",
      "brand": "CoolBrand",
      "availability": 1
    }
  }
```

#### 2. Send the data

```ruby
# --- Ruby Example for POST /v1/content ---
# Assumes 'faraday' gem is installed (gem install faraday)

require 'faraday'
require 'json'
require 'time'
require 'openssl'
require 'base64'

# Helper function for authentication
def generate_luigisbox_digest(private_key, http_method, endpoint_path, date_header, content_type_header)
  data = "#{http_method}\n#{content_type_header}\n#{date_header}\n#{endpoint_path}"
  dg = OpenSSL::Digest.new('sha256')
  Base64.strict_encode64(OpenSSL::HMAC.digest(dg, private_key, data)).strip
end

YOUR_PUBLIC_KEY = "your_public_api_key"
YOUR_PRIVATE_KEY = "your_private_api_key" # Keep secure!
LUIGISBOX_HOST = 'https://live.luigisbox.com'
ENDPOINT_PATH = '/v1/content'

product_data = [
  {
    identity: "product-001",
    type: "item",
    fields: {
      title: "My Very First Item",
      web_url: "https://www.example.com/products/product-001",
      price: "€49.99",
      brand: "CoolBrand",
      availability: 1
    }
  }
]
request_body_json = { objects: product_data }.to_json

http_method = 'POST'
content_type = 'application/json; charset=utf-8'
current_date = Time.now.httpdate

signature = generate_luigisbox_digest(YOUR_PRIVATE_KEY, http_method, ENDPOINT_PATH, current_date, content_type)
authorization_header = "ApiAuth #{YOUR_PUBLIC_KEY}:#{signature}"

connection = Faraday.new(url: LUIGISBOX_HOST) do |conn|
  conn.use FaradayMiddleware::Gzip
end

response = connection.post(ENDPOINT_PATH) do |req|
  req.headers['Content-Type'] = content_type
  req.headers['Date'] = current_date
  req.headers['Authorization'] = authorization_header
  req.body = request_body_json
end

response_body = JSON.parse(response.body)
if response.success? && response_body['ok_count'] && response_body['ok_count'] > 0
  puts "Product GADGET-001 successfully indexed: #{JSON.pretty_generate(response_body)}"
else
  puts "Error indexing product: HTTP Status #{response.status}, Response: #{response.body}"
end
```

```php
<?php
// PHP Example for POST /v1/content
// Assumes Guzzle (http://guzzle.readthedocs.io/en/latest/overview.html#installation) is installed (composer require guzzlehttp/guzzle)

require 'vendor/autoload.php';

use GuzzleHttp\Client;

function generateLuigisboxDigest($privateKey, $httpMethod, $endpointPath, $dateHeader, $contentTypeHeader) {
    $data = "{$httpMethod}\n{$contentTypeHeader}\n{$dateHeader}\n{$endpointPath}";
    $hash = hash_hmac('sha256', $data, $privateKey, true);
    return trim(base64_encode($hash));
}

$YOUR_PUBLIC_KEY  = "your_public_api_key";
$YOUR_PRIVATE_KEY = "your_private_api_key";  // Keep secure!
$LUIGISBOX_HOST   = 'https://live.luigisbox.com';
$ENDPOINT_PATH    = '/v1/content';

$product_data = [
    [
        'identity' => 'product-001',
        'type'     => 'item',
        'fields'   => [
            'title'        => 'My Very First Item',
            'web_url'      => 'https://www.example.com/products/product-001',
            'price'        => '€49.99',
            'brand'        => 'CoolBrand',
            'availability' => 1
        ]
    ]
];

$request_body = ['objects' => $product_data];

$http_method  = 'POST';
$content_type = 'application/json; charset=utf-8';

// Create a HTTP-date string (e.g., "Tue, 22 May 2025 14:32:00 GMT")
$current_date = gmdate('D, d M Y H:i:s') . ' GMT';

$signature = generateLuigisboxDigest($YOUR_PRIVATE_KEY, $http_method, $ENDPOINT_PATH, $current_date, $content_type);
$authorization_header = "ApiAuth {$YOUR_PUBLIC_KEY}:{$signature}";

$client = new GuzzleHttp\Client();
$response = $client->request($http_method, "{$LUIGISBOX_HOST}{$ENDPOINT_PATH}", [
        'headers' => [
            'Accept-Encoding' => 'gzip, deflate',
            'Content-Type'  => $content_type,
            'Date'          => $current_date,
            'Authorization' => $authorization_header,
        ],
        'json' => $request_body
    ]);
  
$response_body = json_decode($response->getBody(), true);

if($response->getStatusCode() == 200 && isset($response_body['ok_count']) && $response_body['ok_count'] > 0) {
    echo "Product successfully indexed:" . PHP_EOL;
    echo json_encode($response_body, JSON_PRETTY_PRINT);
} else {
    echo "Error indexing product: HTTP Status " . $response->getStatusCode() . "\nResponse: " . $response->getBody();
}

?>
```

```javascript
const axios = require('axios');
const crypto = require('crypto');


function generateLuigisBoxDigest(privateKey, httpMethod, endpointPath, dateHeader, contentTypeHeader) {
  const data = `${httpMethod}\n${contentTypeHeader}\n${dateHeader}\n${endpointPath}`;
  const hmac = crypto.createHmac('sha256', privateKey);
  hmac.update(data);
  return hmac.digest('base64').trim();
}

// Configuration
const YOUR_PUBLIC_KEY = "your_public_api_key";
const YOUR_PRIVATE_KEY = "your_private_api_key"; // Keep secure!
const LUIGISBOX_HOST = 'https://live.luigisbox.com';
const ENDPOINT_PATH = '/v1/content';

// Product data
const productData = [
  {
    identity: "product-001",
    type: "item",
    fields: {
      title: "My Very First Item",
      web_url: "https://www.example.com/products/product-001",
      price: "€49.99",
      brand: "CoolBrand",
      availability: 1
    }
  }
];

const requestBody = { objects: productData }

const httpMethod = 'POST';
const contentType = 'application/json; charset=utf-8';
// Create current date in HTTP date format
const currentDate = new Date().toUTCString();

const signature = generateLuigisBoxDigest(YOUR_PRIVATE_KEY, httpMethod, ENDPOINT_PATH, currentDate, contentType);
const authorizationHeader = `ApiAuth ${YOUR_PUBLIC_KEY}:${signature}`;

// Make the HTTP request with Axios
axios({
  method: httpMethod,
  url: `${LUIGISBOX_HOST}${ENDPOINT_PATH}`,
  headers: {
    'Content-Type': contentType,
    'Date': currentDate,
    'Authorization': authorizationHeader
  },
  data: requestBody
})
.then(response => {
  const responseBody = response.data;
  if (response.status === 200 && responseBody.ok_count && responseBody.ok_count > 0) {
    console.log("Product successfully indexed:", JSON.stringify(responseBody, null, 2));
  } else {
    console.error(`Error indexing product: HTTP Status ${response.status}, Response: ${JSON.stringify(responseBody)}`);
  }
})
.catch(error => {
  console.error("Exception:", error.message);
});
```

#### 3. Understand the response

If successful, Luigi's Box API will respond with an HTTP 200 OK (or 201 Created / 202 Accepted depending on the exact processing). The JSON response body will typically look like this:

```json
{
  "ok_count": 1,
  "errors_count": 0,
  "errors": {}
}
```

An `ok_count` of 1 means our product was successfully accepted for indexing.

### Part 2: Updating your indexed product (partial update with PATCH /v1/content)

#### 1. Prepare your product data (JSON)

We only need to send the identity of the product and the fields we want to add or change.

```json
{
  "identity": "product-001",
  "type": "item",
  "fields": {
    "description": "The latest and greatest product from CoolBrand, now with more awesome!",
  }
}
```

#### 2. Send the update

```ruby
# --- Ruby Example for PATCH /v1/content ---
# Assumes 'faraday' gem is installed (gem install faraday)

require 'faraday'
require 'json'
require 'time'
require 'openssl'
require 'base64'

# Helper function for authentication
def generate_luigisbox_digest(private_key, http_method, endpoint_path, date_header, content_type_header)
  data = "#{http_method}\n#{content_type_header}\n#{date_header}\n#{endpoint_path}"
  dg = OpenSSL::Digest.new('sha256')
  Base64.strict_encode64(OpenSSL::HMAC.digest(dg, private_key, data)).strip
end

YOUR_PUBLIC_KEY = "your_public_api_key"
YOUR_PRIVATE_KEY = "your_private_api_key" # Keep secure!
LUIGISBOX_HOST = 'https://live.luigisbox.com'
ENDPOINT_PATH = '/v1/content'

product_data = [
  {
    "identity": "product-001",
    "type": "item",
    "fields": {
      "description": "The latest and greatest product from CoolBrand, now with more awesome!",
    }
  }
]
request_body_json = { objects: product_data }.to_json

http_method = 'PATCH'
content_type = 'application/json; charset=utf-8'
current_date = Time.now.httpdate

signature = generate_luigisbox_digest(YOUR_PRIVATE_KEY, http_method, ENDPOINT_PATH, current_date, content_type)
authorization_header = "ApiAuth #{YOUR_PUBLIC_KEY}:#{signature}"

connection = Faraday.new(url: LUIGISBOX_HOST) do |conn|
  conn.use FaradayMiddleware::Gzip
end

response = connection.post(ENDPOINT_PATH) do |req|
  req.headers['Content-Type'] = content_type
  req.headers['Date'] = current_date
  req.headers['Authorization'] = authorization_header
  req.body = request_body_json
end

response_body = JSON.parse(response.body)
if response.success? && response_body['ok_count'] && response_body['ok_count'] > 0
  puts "Product successfully updated: #{JSON.pretty_generate(response_body)}"
else
  puts "Error updating the product: HTTP Status #{response.status}, Response: #{response.body}"
end
```
```php
<?php
// PHP Example for PATCH /v1/content
// Assumes Guzzle (http://guzzle.readthedocs.io/en/latest/overview.html#installation) is installed (composer require guzzlehttp/guzzle)

require 'vendor/autoload.php';

use GuzzleHttp\Client;

function generateLuigisboxDigest($privateKey, $httpMethod, $endpointPath, $dateHeader, $contentTypeHeader) {
    $data = "{$httpMethod}\n{$contentTypeHeader}\n{$dateHeader}\n{$endpointPath}";
    $hash = hash_hmac('sha256', $data, $privateKey, true);
    return trim(base64_encode($hash));
}

$YOUR_PUBLIC_KEY  = "your_public_api_key";
$YOUR_PRIVATE_KEY = "your_private_api_key";  // Keep secure!
$LUIGISBOX_HOST   = 'https://live.luigisbox.com';
$ENDPOINT_PATH    = '/v1/content';

$product_data = [
    [
        'identity' => 'product-001',
        'type'     => 'item',
        'fields'   => [
            'description' => 'The latest and greatest product from CoolBrand, now with more awesome!'
        ]
    ]
];

$request_body = ['objects' => $product_data];

$http_method  = 'PATCH';
$content_type = 'application/json; charset=utf-8';

// Create a HTTP-date string (e.g., "Tue, 22 May 2025 14:32:00 GMT")
$current_date = gmdate('D, d M Y H:i:s') . ' GMT';

$signature = generateLuigisboxDigest($YOUR_PRIVATE_KEY, $http_method, $ENDPOINT_PATH, $current_date, $content_type);
$authorization_header = "ApiAuth {$YOUR_PUBLIC_KEY}:{$signature}";

$client = new GuzzleHttp\Client();
$response = $client->request($http_method, "{$LUIGISBOX_HOST}{$ENDPOINT_PATH}", [
        'headers' => [
            'Accept-Encoding' => 'gzip, deflate',
            'Content-Type'  => $content_type,
            'Date'          => $current_date,
            'Authorization' => $authorization_header,
        ],
        'json' => $request_body
    ]);
  
$response_body = json_decode($response->getBody(), true);

if($response->getStatusCode() == 200 && isset($response_body['ok_count']) && $response_body['ok_count'] > 0) {
    echo "Product successfully indexed:" . PHP_EOL;
    echo json_encode($response_body, JSON_PRETTY_PRINT);
} else {
    echo "Error indexing product: HTTP Status " . $response->getStatusCode() . "\nResponse: " . $response->getBody();
}

?>

```

```javascript
// JavaScript Example for PATCH /v1/content
// Assumes axios is installed (npm install axios)

const axios = require('axios');
const crypto = require('crypto');

// Helper function for authentication
function generateLuigisboxDigest(privateKey, httpMethod, endpointPath, dateHeader, contentTypeHeader) {
  const data = `${httpMethod}\n${contentTypeHeader}\n${dateHeader}\n${endpointPath}`;
  const hmac = crypto.createHmac('sha256', privateKey);
  hmac.update(data);
  return hmac.digest('base64');
}

const YOUR_PUBLIC_KEY = "your_public_api_key";
const YOUR_PRIVATE_KEY = "your_private_api_key"; // Keep secure!
const LUIGISBOX_HOST = 'https://live.luigisbox.com';
const ENDPOINT_PATH = '/v1/content';

const productData = [
  {
    "identity": "product-001",
    "type": "item",
    "fields": {
      "description": "The latest and greatest product from CoolBrand, now with more awesome!",
    }
  }
];

const requestBody = { objects: productData };

const httpMethod = 'PATCH';
const contentType = 'application/json; charset=utf-8';
const currentDate = new Date().toUTCString();

const signature = generateLuigisboxDigest(YOUR_PRIVATE_KEY, httpMethod, ENDPOINT_PATH, currentDate, contentType);
const authorizationHeader = `faraday ${YOUR_PUBLIC_KEY}:${signature}`;

// Make the HTTP request with Axios
axios({
  method: httpMethod,
  url: `${LUIGISBOX_HOST}${ENDPOINT_PATH}`,
  headers: {
    'Content-Type': contentType,
    'Date': currentDate,
    'Authorization': authorizationHeader
  },
  data: requestBody
})
.then(response => {
  const responseBody = response.data;
  if (response.status === 200 && responseBody.ok_count && responseBody.ok_count > 0) {
    console.log("Product successfully indexed:", JSON.stringify(responseBody, null, 2));
  } else {
    console.error(`Error indexing product: HTTP Status ${response.status}, Response: ${JSON.stringify(responseBody)}`);
  }
})
.catch(error => {
  console.error("Exception:", error.message);
});
});
```

#### 3. Understand the response

The success response for a PATCH request is similar to POST:

```json
{
  "ok_count": 1,
  "errors_count": 0,
  "errors": {}
}
```

If the identity "product-001" was not found (e.g., if the initial `POST` failed or you had a typo), you would receive an error in the `errors` object, and `ok_count` would be 0. For example:

```json
{
  "ok_count": 0,
  "errors_count": 1,
  "errors": {
    "GADGET-001": { 
      "type": "not_found",
      "reason": "Identity not in catalog"
    }
  }
}
```

## Verifying your changes

After performing these operations, you can verify your data in Luigi's Box:

- **Catalog Browser:** Log in to your Luigi's Box application and navigate to "Catalog > Catalog browser." Search for your product by its identity ("product-001") or title.
  - After the `POST`, you should see the initial fields: title, web_url, price, brand, availability.
  - After the `PATCH`, you should see the added description, along with the original fields. The price, brand, etc., should remain unchanged because `PATCH` only modifies the fields you send.
- **Search API:** You can also query the [Search API](/search.html) directly for your product to inspect its indexed data.

## Best practices

- **Use API for dynamic data:** Implement the API for frequent updates like price changes and stock availability to keep your index fresh.
- **`POST` vs. `PATCH`:** Use `POST /v1/content` for creating new items or completely overwriting existing ones. Use `PATCH /v1/content` for updating only specific fields of an existing item.
- **Manage object identity carefully:** Consistency in identity and type is key for accurate updates and analytics.
- **Handle HMAC authentication securely:** Protect your Private Key diligently.
- **Optimize payloads:**
  - Use compression (e.g., Gzip) for request bodies if sending large amounts of data.
  - Send only necessary data, especially for partial updates.
- **Test thoroughly:** Always test your integration in a staging or development environment before deploying to production. Verify data in the Catalog Browser.
- **Monitor your integration:** Keep an eye on API responses and logs to catch any issues early.

## Next steps

Congratulations! You've indexed and updated your first product using the Luigi's Box Content Update API. Here's what you can explore further:


<% content_for :next_steps do %>
  <ul>
    <li><strong>Implement real HMAC:</strong> Ensure the <code>generateLuigisBoxDigest</code> functions match the official <a href="/api_principles.html#authentication">Luigi's Box HMAC SHA256 signature</a> generation.</li>
    <li><strong>Error handling:</strong> Implement robust error handling for <a href="/indexing/api.html#content-updates-content-update-error-handling">API errors</a>, network issues, and unexpected responses.</li>
    <li><strong>Batching:</strong> For multiple products, send them in batches (e.g., up to 100 for <code>POST</code>, up to 300 for <code>PATCH</code>).</li>
    <li><strong>Explore other endpoints:</strong>
      <ul>
        <li><code>DELETE /v1/content</code> for <a href="/indexing/api.html#content-updates-content-removal">removing items</a>.</li>
        <li><code>PATCH /v1/update_by_query</code> for <a href="/indexing/api.html#content-updates-update-by-query">bulk updates</a>.</li>
        <li>Content Generations for <a href="/indexing/api.html#content-updates-generations">catalog synchronizations</a>.</li>
      </ul>
    </li>
    <li><strong>Refer to API reference:</strong> Consult the complete Luigi's Box <a href="/indexing/api.html">Content Update API documentation</a> for advanced scenarios and error codes.</li>
  </ul>
<% end %>
