---
title: "Content Update (POST)"
layout: api_reference_layout
stretch: true
description: "Add new objects or completely replace existing ones in your Luigi's Box search index using the POST /v1/content endpoint."
---

<%= api_section_with_endpoint(
  '
## Overview

This endpoint allows you to update objects in the Luigi\'s Box search index. It accepts a JSON payload containing an array of objects to be indexed or updated. Each object in the array represents a single item with its attributes.

**Important:** Updates to object attributes are not incremental. The object in Luigi\'s Box index is always **replaced** with the attributes you send. If you need to update only specific fields, use the [Partial Content Update](/indexing/api/partial_update.html) endpoint instead.
  ',
  'POST',
  'https://live.luigisbox.com/v1/content',
  '
```json
{
  "objects": [
    {
      "identity": "8a4d91b896fae60341ee51fb4c86facd",
      "type": "item",
      "fields": {
        "title": "Blue Socks",
        "web_url": "/products/1",
        "description": "Comfortable socks",
        "price": "2.9 EUR",
        "color": "blue",
        "material": "wool"
      },
      "nested": [
        {          
          "identity": "category-socks",
          "type": "category",
          "fields": {
            "title": "socks",
            "web_url": "/category/socks"
          }
        }
      ]
    }
  ]
}
```
  '
) %>

<%= api_section(
  '
## Request Parameters

### Top-level Structure

| Parameter | Type  | Required | Description                                                              |
|:----------|:------|:---------|:-------------------------------------------------------------------------|
| `objects` | Array | ✓        | An array of objects to be indexed. Recommended batch size: ~100 objects. |

### Object Structure

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
  "identity": "unique-product-id",
  "type": "item",
  "generation": "2024-01-15",
  "active_from": "2024-01-01T00:00:00Z",
  "active_to": "2024-12-31T23:59:59Z",
  "fields": {
    "title": "Product Name",
    "price": 29.99,
    "category": "electronics"
  },
  "nested": [...]
}
```
  '
) %>

<%= api_section(
  '
## Nested Objects

The `nested` array supports various object types:

### Categories
Include categories as nested objects with the full hierarchy using `ancestors`.
  ',
  '
```json
"nested": [
  {
    "type": "category",
    "identity": "category-t-shirts", 
    "fields": {
      "title": "T-shirts",
      "web_url": "/categories/apparel/men/t-shirts",
      "ancestors": [
        {
          "type": "category",
          "identity": "category-apparel",
          "fields": {
            "title": "Apparel",
            "web_url": "/categories/apparel"
          }
        },
        {
          "type": "category", 
          "identity": "category-men",
          "fields": {
            "title": "Men",
            "web_url": "/categories/apparel/men"
          }
        }
      ]
    }
  }
]
```
  '
) %>

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
