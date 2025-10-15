---
title: "Partial Content Update (PATCH)"
layout: api_reference_layout
stretch: true
description: "Update specific fields of existing objects without sending the full payload using the PATCH /v1/content endpoint."
---
<% notice_content = capture do %>
<p>This endpoint requires HMAC authentication. Refer to the <a href="/api_principles.html#authentication">Authentication</a> documentation for details.</p>
<% end %>
<%= callout('note', notice_content) %>

<% note_content = capture do %>

<p>For adding new products or completely overwriting existing ones, use the <a href="/indexing/api/updates.html">Content Update (POST)</a> endpoint instead. This endpoint is only for modifying existing objects.</p>
<% end %>

<%= api_section_with_endpoint(
  "
## Overview

This endpoint is ideal for making small, frequent updates to existing objects, such as changing a product's price, description, or availability. You only need to send the `identity` of the object and the specific `fields` you wish to add or modify.

### Key Behaviour:

- This operation is **incremental**; it does not affect fields you omit from the request.
- It **cannot** be used to create new objects. If an `identity` is not found, it will result in an error.
- You cannot change an object's `type`.

### Common Use Cases:
- Updating prices or stock levels
- Adding a new promotional label or updating a product description.
- Changing `availability` status
- Synchronizing real-time data from your database to the search index without a full re-index.


The batch limit for this endpoint is 300 objects per request.

#{callout('warning', note_content)}

  ",
  'PATCH',
  'https://live.luigisbox.com/v1/content',
  '
  '
) %>

<%= api_section(
  '
## Request Parameters

The root of your request body must be a JSON object containing a single key, `objects`.

### Top-level Request Structure

| Parameter | Type  | Required | Description                                                              |
|:----------|:------|:---------|:-------------------------------------------------------------------------|
| `objects` | Array | ✓        | An array of one or more objects to be partially updated. |

### Object Structure

Each object in the `objects` array must contain an `identity` and the fields you wish to change.

| Parameter     | Type   | Required | Description                                                                                                                              |
|:--------------|:-------|:---------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| `identity`    | String | ✓        | The unique identifier of the object you want to update. |                               |
| `fields`      | Object |         | A key-value map of the attributes to add or modify.                              |
| `nested`      | Array  |          | An array of nested objects. **Warning:** Sending this key will replace the entire existing nested array for the object.                                                     |
  ',
  '
```json
{
  "objects": [
    {
      "identity": "product-001",
      "fields": {
        "price": "€44.99"
      }
    },
    {
      "identity": "product-002",
      "fields": {
        "description": "Now with an updated, more detailed description!"
      }
    }
  ]
}
```
  ',
  'Example: Request Body (JSON)'
) %>

<% warning_key_content = capture do %>

<p>Your <strong>Private Key</strong> is a secret and should never be exposed in client-side code (like frontend JavaScript). It should only be used on a secure server.</p>
<% end %>

<% info_key_content = capture do %>

<p>Your API Keys can be found in the Luigi's Box application under "General settings" > "Integration settings".</p>
<% end %>

<% content_with_callouts = capture do %>

## How to Send a Partial Update Request

The examples show how to prepare and send a request to the API endpoint.

**Authentication is required for all requests**. The code demonstrates how to construct 
the necessary headers, including `Date` and `Authorization`. The `Authorization` header requires a 
dynamically generated HMAC signature. For a detailed explanation of how to create this signature,
please refer to our main API Authentication guide.

<%= callout('warning', warning_key_content) %>
<%= callout('info', info_key_content) %>
<% end %>

<%= api_section(content_with_callouts, '
```ruby
# --- Ruby Example for PATCH /v1/content ---
# Assumes \'faraday\' gem is installed (gem install faraday)

require \'faraday\'
require \'json\'
require \'time\'
require \'openssl\'
require \'base64\'

# Helper function for authentication
def generate_luigisbox_digest(private_key, http_method, 
                              endpoint_path, date_header, 
                              content_type_header)
  data = "#{http_method}\\n#{content_type_header}\\n" +
         "#{date_header}\\n#{endpoint_path}"
  dg = OpenSSL::Digest.new(\'sha256\')
  Base64.strict_encode64(
    OpenSSL::HMAC.digest(dg, private_key, data)
  ).strip
end

YOUR_PUBLIC_KEY = "your_public_api_key"
YOUR_PRIVATE_KEY = "your_private_api_key" # Keep secure!
LUIGISBOX_HOST = \'https://live.luigisbox.com\'
ENDPOINT_PATH = \'/v1/content\'

product_data = [
  {
      "identity": "product-001",
      "fields": {
        "price": "€44.99"
      }
    },
    {
      "identity": "product-002",
      "fields": {
        "description": "Now with an updated, more detailed description!"
      }
    }
]
request_body_json = { objects: product_data }.to_json

http_method = \'PATCH\'
content_type = \'application/json; charset=utf-8\'
current_date = Time.now.httpdate

signature = generate_luigisbox_digest(
  YOUR_PRIVATE_KEY, http_method, ENDPOINT_PATH, 
  current_date, content_type
)
authorization_header = "ApiAuth #{YOUR_PUBLIC_KEY}:#{signature}"

connection = Faraday.new(url: LUIGISBOX_HOST) do |conn|
  conn.use FaradayMiddleware::Gzip
end

response = connection.patch(ENDPOINT_PATH) do |req|
  req.headers[\'Content-Type\'] = content_type
  req.headers[\'Date\'] = current_date
  req.headers[\'Authorization\'] = authorization_header
  req.body = request_body_json
end

response_body = JSON.parse(response.body)
if response.success? && response_body[\'ok_count\'] && 
   response_body[\'ok_count\'] > 0
  puts "Product successfully updated: " +
       "#{JSON.pretty_generate(response_body)}"
else
  puts "Error updating product: HTTP Status " +
       "#{response.status}, Response: #{response.body}"
end
```

```php
<?php
// PHP Example for PATCH /v1/content
// Assumes Guzzle is installed: 
// composer require guzzlehttp/guzzle

require \'vendor/autoload.php\';

use GuzzleHttp\\Client;

function generateLuigisboxDigest($privateKey, $httpMethod, 
                                 $endpointPath, $dateHeader, 
                                 $contentTypeHeader) {
    $data = "{$httpMethod}\\n{$contentTypeHeader}\\n" .
            "{$dateHeader}\\n{$endpointPath}";
    $hash = hash_hmac(\'sha256\', $data, $privateKey, true);
    return trim(base64_encode($hash));
}

$YOUR_PUBLIC_KEY  = "your_public_api_key";
$YOUR_PRIVATE_KEY = "your_private_api_key";  // Keep secure!
$LUIGISBOX_HOST   = \'https://live.luigisbox.com\';
$ENDPOINT_PATH    = \'/v1/content\';

$product_data = [
    [
        \'identity\' => \'product-001\',
        \'fields\'   => [
            \'price\'        => \'€49.99\',
        ]
    ],
    [
        \'identity\' => \'product-002\',
        \'fields\'   => [
            \'description\' => \'Now with an updated, more detailed description!\',
        ]
    ]
];

$request_body = [\'objects\' => $product_data];

$http_method  = \'PATCH\';
$content_type = \'application/json; charset=utf-8\';

// Create HTTP-date string 
// (e.g., "Tue, 22 May 2025 14:32:00 GMT")
$current_date = gmdate(\'D, d M Y H:i:s\') . \' GMT\';

$signature = generateLuigisboxDigest(
    $YOUR_PRIVATE_KEY, $http_method, 
    $ENDPOINT_PATH, $current_date, $content_type
);
$authorization_header = "ApiAuth {$YOUR_PUBLIC_KEY}:{$signature}";

$client = new GuzzleHttp\\Client();
$response = $client->request(
    $http_method, 
    "{$LUIGISBOX_HOST}{$ENDPOINT_PATH}", 
    [
        \'headers\' => [
            \'Accept-Encoding\' => \'gzip, deflate\',
            \'Content-Type\'  => $content_type,
            \'Date\'          => $current_date,
            \'Authorization\' => $authorization_header,
        ],
        \'json\' => $request_body
    ]
);
  
$response_body = json_decode($response->getBody(), true);

if($response->getStatusCode() == 200 && 
   isset($response_body[\'ok_count\']) && 
   $response_body[\'ok_count\'] > 0) {
    echo "Product successfully updated:" . PHP_EOL;
    echo json_encode($response_body, JSON_PRETTY_PRINT);
} else {
    echo "Error updating product: HTTP Status " . 
         $response->getStatusCode() . 
         "\\nResponse: " . $response->getBody();
}

?>
```

```javascript
const axios = require(\'axios\');
const crypto = require(\'crypto\');

function generateLuigisBoxDigest(privateKey, httpMethod, 
                                endpointPath, dateHeader, 
                                contentTypeHeader) {
  const data = httpMethod + "\\n" + contentTypeHeader + "\\n" +
               dateHeader + "\\n" + endpointPath;
  const hmac = crypto.createHmac(\'sha256\', privateKey);
  hmac.update(data);
  return hmac.digest(\'base64\').trim();
}

// Configuration
const YOUR_PUBLIC_KEY = "your_public_api_key";
const YOUR_PRIVATE_KEY = "your_private_api_key"; // Keep secure!
const LUIGISBOX_HOST = \'https://live.luigisbox.com\';
const ENDPOINT_PATH = \'/v1/content\';

// Product data
const productData = [
 {
    "identity": "product-001",
    "fields": {
      "price": "€44.99"
    }
  },
  {
    "identity": "product-002",
    "fields": {
      "description": "Now with an updated, more detailed description!"
    }
  }
];

const requestBody = { objects: productData }

const httpMethod = \'PATCH\';
const contentType = \'application/json; charset=utf-8\';
// Create current date in HTTP date format
const currentDate = new Date().toUTCString();

const signature = generateLuigisBoxDigest(
  YOUR_PRIVATE_KEY, httpMethod, ENDPOINT_PATH, 
  currentDate, contentType
);
const authorizationHeader = 
  "ApiAuth " + YOUR_PUBLIC_KEY + ":" + signature;

// Make the HTTP request with Axios
axios({
  method: httpMethod,
  url: LUIGISBOX_HOST + ENDPOINT_PATH,
  headers: {
    \'Content-Type\': contentType,
    \'Date\': currentDate,
    \'Authorization\': authorizationHeader
  },
  data: requestBody
})
.then(response => {
  const responseBody = response.data;
  if (response.status === 200 && 
      responseBody.ok_count && 
      responseBody.ok_count > 0) {
    console.log("Product successfully updated:", 
                JSON.stringify(responseBody, null, 2));
  } else {
    console.error("Error updating product: " +
                  "HTTP Status " + response.status + ", " +
                  "Response: " + JSON.stringify(responseBody));
  }
})
.catch(error => {
  console.error("Exception:", error.message);
});
```
', 'Code Examples') %>

<%= api_section(
  '
## Error Handling

| HTTP Status               | Description                                                                                                                               |
|:--------------------------|:------------------------------------------------------------------------------------------------------------------------------------------|
| **400 Bad Request**       | The request structure is invalid, the JSON is malformed, or an object was not found.                     |
| **413 Payload Too Large** | The request exceeds 5 MB (10 MB if compressed). Reduce batch size or enable compression.                                                     |
| **429 Too Many Requests** | The rate limit has been exceeded. Check `Retry-After` header and see [Throttling docs](/api_principles.html#throttling).                             |
  ',
  '
```json
{
  "ok_count": 0,
  "errors_count": 1,
  "errors": {
    "product-001": {
      "type": "not_found",
      "reason": "Identity not in catalog"
    }
  }
}
```
  ',
  'Example: Error Response'
) %>


## Related Endpoints

- [Content Update](/indexing/api/partial_update.html) - Create or replace objects
- [Content Removal](/indexing/api/removal.html) - Delete objects from index
- [Update by Query](/indexing/api/update_by_query.html) - Bulk updates based on search criteria
