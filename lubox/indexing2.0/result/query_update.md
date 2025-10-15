---
title: "Update by Query (PATCH)"
layout: api_reference_layout
stretch: true
description: "Perform asynchronous bulk updates on objects that match a specific set of criteria using the PATCH /v1/update_by_query endpoint."
---
<% notice_content = capture do %>
<p>This endpoint requires HMAC authentication. Refer to the <a href="/api_principles.html#authentication">Authentication</a> documentation for details.</p>
<% end %>
<%= callout('note', notice_content) %>

<% note_content = capture do %>

<p>This is an <strong>asynchronous endpoint</strong>. The initial API call starts a background job and returns a status URL. You must make a separate <code>GET</code> request to that URL to check the completion status of the update.</p>
<% end %>

<%= api_section_with_endpoint(
  "
## Overview

This endpoint allows you to perform bulk updates on objects that match a specific set of criteria. It is an **asynchronous** operation: the API call initiates a background job, and you must poll a status URL to check its progress. This is ideal for large-scale changes, such as applying a sale to an entire brand, without requiring a list of individual identities.

  ",
  'PATCH',
  'https://live.luigisbox.com/v1/update_by_query',
  '
  '
) %>

<%= api_section(
  '
## Request Structure

The request body consists of two main parts: a `search` object to define the update criteria and an `update` object to specify the changes.

### Request Body Structure

| Parameter | Type  | Required | Description                                                              |
|:----------|:------|:---------|:-------------------------------------------------------------------------|
| `search`  | Object| ✓        | An object containing rules to select which items will be updated.                                  |
| `update`  | Object| ✓        | An object specifying the field changes to apply to all matching items.                          |

### `search` Object Parameters

| Parameter     | Type   | Required | Description                                                                                                                              |
|:--------------|:-------|:---------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| `types`    | Array | ✓        | An array of strings specifying the object types to include in the search (e.g., ["item"]).                                          |
| `partial`        | Object | ✓        | An object containing the fields to match. Currently, only `fields` is supported within `partial`.                                       | 

### `update` Object Parameters

| Parameter     | Type   | Required | Description                                                                                                                              |
|:--------------|:-------|:---------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| `fields`      | Object | ✓        | An object specifying the fields to update and their new values.                                                                          |

  ',
  '
```json
{
  "search": {
    "types": [
      "product"
    ],
    "partial": {
      "fields": {
        "color": "olive"
      }
    }
  },
  "update": {
    "fields": {
      "color": "green"
    }
  }
}
```
  ',
  'Example: request body (JSON)'
) %>

<% warning_key_content = capture do %>

<p>Your <strong>Private Key</strong> is a secret and should never be exposed in client-side code (like frontend JavaScript). It should only be used on a secure server.</p>
<% end %>

<% info_key_content = capture do %>

<p>Your API Keys can be found in the Luigi's Box application under "General settings" > "Integration settings".</p>
<% end %>

<% content_with_callouts = capture do %>
## How to Initiate an Update Job

The process involves two steps. First, you send a `PATCH` request with your `search` and `update` rules to start the background job.

**Authentication is required for all requests**. The code demonstrates how to construct 
the necessary headers, including `Date` and `Authorization`. The `Authorization` header requires a 
dynamically generated HMAC signature. For a detailed explanation of how to create this signature,
please refer to our main API Authentication guide.

<%= callout('warning', warning_key_content) %>
<%= callout('info', info_key_content) %>

The `search` criteria work on a partial match principle for array values and are case-sensitive. For example, a search for `color: 'olive'` will match a product with `color: ['olive', 'red']`. However, a search for `category: 'jeans'` will not match a product with `category: 'Jeans'`.

**Important**: The update operation is a **replacement** for the specified fields, not an incremental change.
<% end %>

<%= api_section(content_with_callouts, '
```ruby
# --- Ruby Example for PATCH /v1/update_by_query ---
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
ENDPOINT_PATH = \'/v1/update_by_query\'

update_request = {
  search: {
    types: ["product"],
    partial: { fields: { color: "olive" } }
  },
  update: { fields: { color: "green" } }
}
request_body_json = update_request.to_json

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

puts response.body
```

```php
<?php
// PHP Example for PATCH /v1/update_by_query
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
$ENDPOINT_PATH    = \'/v1/update_by_query\';

$update_request = [
    \'search\' => [
        \'types\' => [\'product\'],
        \'partial\' => [\'fields\' => [\'color\' => \'olive\']]
    ],
    \'update\' => [
        \'fields\' => [\'color\' => \'green\']
    ]
];

$request_body = $update_request;

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
  
echo $response->getBody();
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
const ENDPOINT_PATH = \'/v1/update_by_query\';

// Product data
const updateRequest = {
  search: {
    types: ["product"],
    partial: { fields: { color: "olive" } }
  },
  update: { fields: { color: "green" } }
};

const requestBody = updateRequest;

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
.then(response => console.log(response.data))
.catch(error => console.error(error.response.data));
```
', 'Example: Initiate Job') %>

<%= api_section(
  '
## Check Job Status

After a successful `PATCH` request, the API will respond with a `status_url`. You must then make a `GET` request to this URL to check the status of the background job. You may need to poll this endpoint until the `status` field changes from `"in_progress"` to `"complete"`.

**Status Check Request:**
```
GET https://live.luigisbox.com/v1/update_by_query?job_id=12345
```

The response will show the current status of your bulk update operation.
  ',
  '
```json
{
  "status_url": "/v1/update_by_query?job_id=12345"
}
```
  ',
  'Initial PATCH Response'
) %>

<%= api_section(
  '
## Job Completion Response

Once the job is finished, the `GET` request to the status URL will return a summary of the results, including the number of successful updates and any failures.

### Response Fields

| Field             | Type    | Description                                           |
|:------------------|:--------|:------------------------------------------------------|
| `tracker_id`      | String  | Your tracker identifier                               |
| `status`          | String  | Job status: "in_progress", "complete", or "failed"   |
| `updates_count`   | Integer | Number of objects successfully updated                |
| `failures_count`  | Integer | Number of objects that failed to update              |
| `failures`        | Object  | Details about any failures (empty if none)           |
  ',
  '
```json
{
  "tracker_id": "YOUR-TRACKER-ID",
  "status": "complete",
  "updates_count": 5,
  "failures_count": 0,
  "failures": {}
}
```
  ',
  'Complete Job Response'
) %>

<%= api_section(
  '
## Error Handling

| HTTP Status               | Description                                                                                                                               |
|:--------------------------|:------------------------------------------------------------------------------------------------------------------------------------------|
| **400 Bad Request**       | The request structure is invalid, JSON is malformed, or some objects failed validation. Check response body for details.                     |
| **403 Forbidden**         | The request is not allowed for your site in Luigi\'s Box.                                                                                |
| **405 Method Not Allowed** | The request method is not supported for the specified resource.                             |
| **413 Payload Too Large** | The request exceeds 5 MB (10 MB if compressed). Reduce batch size or enable compression.                                                     |
  ',
  '
```json
{
  "tracker_id": "YOUR-TRACKER-ID",
  "status": "complete",
  "updates_count": 4,
  "failures_count": 1,
  "failures": {
    "/products/1": {
      "type": "data_schema_mismatch",
      "reason": "failed to parse [attributes.price]",
      "caused_by": {
        "type": "number_format_exception",
        "reason": "For input string: \\"wrong sale price\\""
      }
    }
  }
}
```
  ',
  'Example: Job Failure Response'
) %>


## Related Endpoints

- [Content Update](/indexing/api/removal.html) - Create or replace objects
- [Partial Content Update](/indexing/api/partial_update.html) - Update specific fields only
- [Content Removal](/indexing/api/removal.html) - Delete objects from index
