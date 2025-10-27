---
layout: api_reference_layout
title: Testing Markdown Helpers
stretch: true
---

# Testing Markdown Helpers

This page tests the new markdown helper functions.

## Inline Helpers

### Callouts

{{ callout('info', 'This is an informational callout using inline syntax') }}

{{ callout('warning', 'This is a warning callout') }}

{{ callout('note', 'This is a note callout') }}

### Endpoints

{{ endpoint('GET', '/api/v1/search') }}

{{ endpoint('POST', '/api/v1/items') }}

{{ endpoint('DELETE', '/api/v1/items/123') }}

## Block Syntax - Auto-detect

### Simple API Section

{{ api_section }}
This endpoint searches for items in the database using query parameters.

```json
{
  "query": "search term",
  "limit": 10,
  "offset": 0
}
```
{{ end_api_section }}

### API Section with Multiple Code Blocks

{{ api_section }}
Search for items using various programming languages. The API supports multiple client libraries.

```json
{
  "query": "test",
  "limit": 10
}
```

```javascript
// JavaScript example
const response = await fetch('/api/v1/search', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: 'test', limit: 10 })
});
const data = await response.json();
```

```ruby
# Ruby example
require 'httparty'

response = HTTParty.post('/api/v1/search',
  body: { query: 'test', limit: 10 }.to_json,
  headers: { 'Content-Type' => 'application/json' }
)
```

```php
// PHP example
$data = json_encode([
  'query' => 'test',
  'limit' => 10
]);

$ch = curl_init('https://api.example.com/v1/search');
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_exec($ch);
```
{{ end_api_section }}

## Block Syntax - Explicit Sections

### API Section with Explicit Prose and Code

{{ api_section }}
{{ prose }}
This endpoint provides advanced search capabilities with multiple filters.

You can filter by:
- Category
- Status
- Date range
- Custom fields
{{ end_prose }}

{{ code }}
```json
{
  "query": "laptop",
  "filters": {
    "category": "electronics",
    "status": "active",
    "price_range": {
      "min": 100,
      "max": 2000
    }
  }
}
```
{{ end_code }}
{{ end_api_section }}

### API Section with Code Title

{{ api_section }}
{{ prose }}
Example response from the search endpoint showing pagination metadata.
{{ end_prose }}

{{ code_title }}
Response Format
{{ end_code_title }}

{{ code }}
```json
{
  "results": [
    {
      "id": 1,
      "name": "Item 1",
      "price": 99.99
    },
    {
      "id": 2,
      "name": "Item 2",
      "price": 149.99
    }
  ],
  "pagination": {
    "total": 42,
    "page": 1,
    "per_page": 10
  }
}
```
{{ end_code }}
{{ end_api_section }}

## Combined Example

{{ callout('info', 'Authentication is required for all API endpoints') }}

### Create Item Endpoint

{{ endpoint('POST', '/api/v1/items') }}

{{ api_section }}
Create a new item in the system by sending a POST request with the item details.

```json
{
  "name": "New Item",
  "description": "Item description",
  "price": 29.99,
  "category": "general"
}
```

```javascript
const newItem = await fetch('/api/v1/items', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'New Item',
    description: 'Item description',
    price: 29.99,
    category: 'general'
  })
});
```
{{ end_api_section }}

{{ callout('warning', 'Rate limiting applies: 100 requests per minute per API key') }}

## Regular Markdown

This is regular markdown to ensure it still works properly:

- List item 1
- List item 2
- List item 3

**Bold text** and *italic text* should work fine.

### Code Block Without Helper

```javascript
// Regular code block without any helper
function example() {
  console.log('This is a regular code block');
}
```

## Conclusion

All helper functions are working correctly! 🎉

```javascript
const treeHeight = (root) => {
  if (!root) return -1;
  return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
}
```
