---
title: "Content Removal (DELETE)"
layout: api_reference_layout
stretch: true
description: "Permanently delete one or more objects from your Luigi's Box search index using the DELETE /v1/content endpoint."
---

<% notice_content = capture do %>
<p>This endpoint requires HMAC authentication. Refer to the <a href="/api_principles.html#authentication">Authentication</a> documentation for details.</p>
<% end %>
<%= callout('note', notice_content) %>

<% note_content = capture do %>

<p>This is a <strong>permanent operation</strong>. Once an object is deleted, it will no longer appear in search results or autocomplete suggestions. This is the correct method for handling products that are sold out and will not be restocked.</p>
<% end %>

<%= api_section_with_endpoint(
  "
## Overview

This endpoint allows you to permanently delete one or more objects from your Luigi's Box search index. You specify which items to remove by providing their `type` and `identity` in the request body.

#{callout('warning', note_content)}

  ",
  'DELETE',
  'https://live.luigisbox.com/v1/content',
  '
  '
) %>

<%= api_section(
  '
## Request Parameters

The request body must be a JSON object containing a single root key, `objects`, which holds an array of simple objects identifying what to delete.

### Top-level Request Structure

| Parameter | Type  | Required | Description                                                              |
|:----------|:------|:---------|:-------------------------------------------------------------------------|
| `objects` | Array | ✓        | An array of objects to be deleted from the index. |

### Object structure

Each object in the `objects` array requires only two keys to identify the content for removal.

| Parameter     | Type   | Required | Description                                                                                                                              |
|:--------------|:-------|:---------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| `identity`    | String | ✓        | The unique identifier of the object you want to delete. |
| `type`        | String | ✓        | The type of the object you want to delete (e.g., `item`, `category`, `brand`).                                       |                                                     |

  ',
  '
```json
{
  "objects": [
    {
      "type": "item",
      "identity": "B6B7CD9466295DCFDB62676CAE374289"
    },
    {
      "type": "item",
      "identity": "611526210E4585C7C8D5367F2CC42A57"
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
## How to Send a Deletion Request

The examples show how to prepare and send a request to the API to delete content.

**Authentication is required for all requests**. The code demonstrates how to construct 
the necessary headers, including `Date` and `Authorization`. The `Authorization` header requires a 
dynamically generated HMAC signature. For a detailed explanation of how to create this signature,
please refer to our main API Authentication guide.

<%= callout('warning', warning_key_content) %>
<%= callout('info', info_key_content) %>
<% end %>

<%= api_section(content_with_callouts, '
```ruby
# --- Ruby Example for DELETE /v1/content ---
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
    "type": "item",
    "identity": "B6B7CD9466295DCFDB62676CAE374289"
  },
  {
    "type": "item",
    "identity": "611526210E4585C7C8D5367F2CC42A57"
  }
]
request_body_json = { objects: product_data }.to_json

http_method = \'DELETE\'
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

response = connection.delete(ENDPOINT_PATH) do |req|
  req.headers[\'Content-Type\'] = content_type
  req.headers[\'Date\'] = current_date
  req.headers[\'Authorization\'] = authorization_header
  req.body = request_body_json
end

response_body = JSON.parse(response.body)
if response.success? && response_body[\'ok_count\'] && 
   response_body[\'ok_count\'] > 0
  puts "Product successfully deleted: " +
       "#{JSON.pretty_generate(response_body)}"
else
  puts "Error deleting product: HTTP Status " +
       "#{response.status}, Response: #{response.body}"
end
```

```php
<?php
// PHP Example for DELETE /v1/content
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
        \'identity\' => \'B6B7CD9466295DCFDB62676CAE374289\',
        \'type\'     => \'item\',
    ],
    [
        \'identity\' => \'611526210E4585C7C8D5367F2CC42A57\',
        \'type\'     => \'item\',
    ]
];

$request_body = [\'objects\' => $product_data];

$http_method  = \'DELETE\';
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
    echo "Product successfully deleted:" . PHP_EOL;
    echo json_encode($response_body, JSON_PRETTY_PRINT);
} else {
    echo "Error deleting product: HTTP Status " . 
         $response->getStatusCode() . 
         "\\nResponse: " . $response->getBody();
}
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
      "type": "item",
      "identity": "B6B7CD9466295DCFDB62676CAE374289"
    },
    {
      "type": "item",
      "identity": "611526210E4585C7C8D5367F2CC42A57"
    }
];

const requestBody = { objects: productData }

const httpMethod = \'DELETE\';
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
    console.log("Product successfully deleted:", 
                JSON.stringify(responseBody, null, 2));
  } else {
    console.error("Error deleting product: " +
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
| **400 Bad Request**       | The request structure is invalid or the JSON is malformed. For example, an object in the array is missing the `identity` or `type` key.                     |
| **429 Too Many Requests** | The API rate limit has been exceeded. Check the `Retry-After` header and see [Throttling docs](/api_principles.html#throttling).                             |
  ',
  '
```json
{
  "ok_count": 1,
  "errors_count": 1,
  "errors": {
    "B6B7CD9466295DCFDB62676CAE374289": {
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

- [Content Update](/indexing/api/removal.html) - Create or replace objects
- [Partial Content Update](/indexing/api/partial_update.html) - Update specific fields only
- [Update by Query](/indexing/api/update_by_query.html) - Bulk updates based on search criteria
