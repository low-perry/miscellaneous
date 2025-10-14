---
title: "Content Update (POST)"
layout: api_reference_layout
stretch: true
description: "Add new objects or completely replace existing ones in your Luigi's Box search index using the POST /v1/content endpoint."
---

<% note_content = capture do %>
  <p>This is a <strong>full replacement operation</strong>. When you update an existing object, any fields you omit from the request will be removed from the index. If you only need to update specific fields, it is more efficient to use the <a href="/indexing/api/partial_update.html">Partial Content Update API.</a></p>
<% end %>

<%= api_section_with_endpoint(
  "
## Overview

This endpoint is the primary method for adding new objects or completely replacing existing ones in your search index. You send an array of objects in a JSON payload, and Luigi's Box processes them in a batch.

#{callout('warning', note_content)}

  ",
  'POST',
  'https://live.luigisbox.com/v1/content',
  '
  '
) %>

<%= api_section(
  '
## The Index-Object

The fundamental unit of data you send is the `index-object`. Your request body must be a JSON object containing a single root key, `objects`, which holds an array of these `index-objects`.

### Top-level Request Structure

| Parameter | Type  | Required | Description                                                              |
|:----------|:------|:---------|:-------------------------------------------------------------------------|
| `objects` | Array | ✓        | An array of one or more objects to be indexed. Recommended batch size: ~100 objects. |

### Index-Object Parameters

Each object in the `objects` array must follow this structure:

| Parameter     | Type   | Required | Description                                                                                                                              |
|:--------------|:-------|:---------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| `identity`    | String | ✓        | A unique identity for the object at the index level. Must match the identity reported by analytics events. See [Identity guide](/identity.html). |
| `type`        | String | ✓        | Object type (e.g., "item", "category", "article"). Different types can be searched separately.                                       |
| `generation`  | String |          | Object generation marker for bulk data synchronization. See [Generations](#generations).                                                |
| `active_from` | String |          | ISO 8601 date/time when object should become searchable (e.g., `2019-05-17T21:12:35+00:00`).                                          |
| `active_to`   | String |          | ISO 8601 date/time when object should stop being searchable (e.g., `2019-05-17T21:12:35+00:00`).                                      |
| `fields`      | Object | ✓        | Object attributes. Every field is searchable and can be used for filtering. Must include a `title` field.                              |
| `nested`      | Array  |          | Array of nested objects (categories, variants, etc.) linked to the current object.                                                     |

## Fields Guidelines

When structuring the `fields` object:

- **Required:** Include a `title` field - this serves as the object\'s display name
- **Numeric fields:** Format as numbers, not strings (`"height": 70.5` not `"height": "70.5"`)  
- **Date fields:** Use ISO 8601 format with T delimiter (`"active_from": "2018-07-15T13:23:50+00:00"`)
- **Array values:** Supported for any field (`"color": ["red", "black", "blue"]`)
- **Nesting:** Use only one level of nesting (avoid deeply nested objects)
- **Facets:** Any field you send can become a facet for filtering search results
  ',
  '
```json
{
  "identity": "SKU-XYZ-123",
  "type": "item",
  "generation": "daily-sync-20241014",
  "active_from": "2024-01-01T00:00:00Z",
  "fields": {
    "title": "Premium Quality T-Shirt",
    "web_url": "/products/premium-t-shirt",
    "price": 25.50,
    "color": ["Red", "Black", "Blue"],
    "availability": 1
  },
  "nested": [
    {
      "type": "category",
      "identity": "cat-apparel",
      "fields": { "title": "Apparel" }
    }
  ]
}
```
  ',
  'Example: Index-Object'
) %>


<%= api_section('
## Index a product

this is the bla bla
', '
```ruby
# --- Ruby Example for POST /v1/content ---
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

http_method = \'POST\'
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

response = connection.post(ENDPOINT_PATH) do |req|
  req.headers[\'Content-Type\'] = content_type
  req.headers[\'Date\'] = current_date
  req.headers[\'Authorization\'] = authorization_header
  req.body = request_body_json
end

response_body = JSON.parse(response.body)
if response.success? && response_body[\'ok_count\'] && 
   response_body[\'ok_count\'] > 0
  puts "Product successfully indexed: " +
       "#{JSON.pretty_generate(response_body)}"
else
  puts "Error indexing product: HTTP Status " +
       "#{response.status}, Response: #{response.body}"
end
```

```php
<?php
// PHP Example for POST /v1/content
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
        \'type\'     => \'item\',
        \'fields\'   => [
            \'title\'        => \'My Very First Item\',
            \'web_url\'      => \'https://www.example.com/\' . 
                              \'products/product-001\',
            \'price\'        => \'€49.99\',
            \'brand\'        => \'CoolBrand\',
            \'availability\' => 1
        ]
    ]
];

$request_body = [\'objects\' => $product_data];

$http_method  = \'POST\';
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
    echo "Product successfully indexed:" . PHP_EOL;
    echo json_encode($response_body, JSON_PRETTY_PRINT);
} else {
    echo "Error indexing product: HTTP Status " . 
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

const httpMethod = \'POST\';
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
    console.log("Product successfully indexed:", 
                JSON.stringify(responseBody, null, 2));
  } else {
    console.error("Error indexing product: " +
                  "HTTP Status " + response.status + ", " +
                  "Response: " + JSON.stringify(responseBody));
  }
})
.catch(error => {
  console.error("Exception:", error.message);
});
```
', 'Example: Index an Item') %>

<%= api_section(
  '
### Variants
For products with multiple variants (size, color, etc.).
  ',
  '
```json
"nested": [
  {
    "type": "variant",
    "identity": "product-123?variant=red-m",
    "fields": {
      "title": "Red T-shirt M",
      "color": "red", 
      "size": "M",
      "web_url": "/products/123?variant=red-m"
    }
  }
]
```
```
  '
) %>


<%= api_section(
  '
### File Processing
Objects with `type: "_file"` trigger automatic file download and content extraction. The processed object gets `type: "file"` and includes a searchable `content` attribute.

### Generations
Use generations for bulk data synchronization:

1. **Mark objects** with a `generation` identifier during import
2. **Commit the generation** via `/v1/content/commit?type=item&generation=YOUR_GENERATION` 
3. **Automatic cleanup** removes objects from previous generations

This ensures your index stays synchronized with your source data without manually tracking deletions.
  ',
  ''
) %>

<%= api_section(
  '
## Error Handling

| HTTP Status               | Description                                                                                                                               |
|:--------------------------|:------------------------------------------------------------------------------------------------------------------------------------------|
| **400 Bad Request**       | Request structure is invalid, JSON is malformed, or some objects failed validation. Check response body for details.                     |
| **413 Payload Too Large** | Request exceeds 5 MB (10 MB if compressed). Reduce batch size or enable compression.                                                     |
| **429 Too Many Requests** | Rate limit exceeded. Check `Retry-After` header and see [Throttling docs](/api_principles.html#throttling).                             |
  ',
  '
```json
{
  "ok_count": 99,
  "errors_count": 1,
  "errors": {
    "http://example.org/products/1": {
      "type": "malformed_input",
      "reason": "incorrect object format",
      "caused_by": {
        "title": ["must be filled"]
      }
    }
  }
}
```
  '
) %>


## Performance Guidelines

For optimal indexing performance, avoid:

- **High nested count:** >10 nested records per object
- **High field count:** >10 fields per object  
- **Large objects:** >30KB per object
- **Large batches:** >100 objects per request

## Related Endpoints

- [Partial Content Update](/indexing/api/partial_update.html) - Update specific fields only
- [Content Removal](/indexing/api/removal.html) - Delete objects from index
- [Update by Query](/indexing/api/update_by_query.html) - Bulk updates based on search criteria
