<!--
---
title: "Data Layout and Modeling Guide" 
layout: layout 
description: "The definitive guide to structuring your data for indexing in Luigi's Box, \
covering core concepts, special fields, and advanced modeling for nested data."
---
-->

# Data Layout and Modeling Guide

## Introduction

This guide is the central source of truth for structuring your data before sending it to Luigi's Box.
Proper data modeling is the single most important factor for achieving high-quality search results and
recommendations.

The concepts and conventions described here apply to all indexing methods, whether you are using
the real-time [Content Update API](/indexing/api.html) or providing periodic [Feeds](/indexing/feeds.html).

## Quick Start: Minimal Example

Here's the simplest possible product you can index with just the required fields:

```json
{
  "identity": "product-123",
  "type": "item",
  "fields": {
    "title": "Blue Cotton T-Shirt",
    "web_url": "https://example.com/products/blue-tshirt"
  }
}
```

This is enough to make your product searchable. However, to unlock the full power of Luigi's Box, you'll want to add more fields as described below.

## The `index-object`: The core data structure

The fundamental unit of information in Luigi's Box is the `index-object`. Think of it as a container
for a single, searchable item, such as a product, category, brand, or article.

While the concept is the same for both the API and Feeds, the way you structure the data is different.
The API utilizes a nested JSON object, whereas Feeds typically employ a flatter XML or JSON structure.

Every index-object follows this basic structure:

```json
{
  "identity": "<unique-identity>",
  "type": "<object-type>",
  "active_from": "<iso-8601-date>",
  "active_to": "<iso-8601-date>",
  "fields": {
    "title": "<title>",
    "web_url": "<web-url>",
    "...": "..."
  },
  "nested": [
    { "...": "..." }
  ]
}
```

### Top-level parameters

| Parameter     | Type   | Required | Description                                                                                                                                      |
|:------------- |:------ |:-------- |:-------------------------------------------------------------------------------------------------------------------------------------------------|
| `identity`    | String | ✓        | Unique identifier for the object at the index level. Must match the identity reported by analytics events. See [Identity guide](/identity.html). |
| `type`        | String | ✓        | Object type (e.g., `item`, `category`, `article`). Different types can be searched separately.                                                   |
| `generation`  | String |          | Object generation marker for bulk data synchronization.                                                         |
| `active_from` | String |          | ISO 8601 date/time when the object becomes searchable (e.g., `2019-05-17T21:12:35+00:00`).                                                       |
| `active_to`   | String |          | ISO 8601 date/time when the object stops being searchable (e.g., `2019-05-17T21:12:35+00:00`).                                                   |
| `fields`      | Object | ✓        | Object attributes. Every field is searchable and can be used for filtering. Must include a `title` field.                                        |
| `nested`      | Array  |          | Array of nested objects (categories, variants, etc.) linked to the current object.                                                               |

### Indexing types

For a typical ecommerce store, you will want to index several types of content. The `type` parameter
determines how the content is categorized and searched.

| Logical Type | Recommended `type` Name | How to Index |
|:------------- |:------ |:-------- |
| Products | `item` or `product` | Index as a standalone object. This is your primary content. |
| Categories | `category` | Index as a `nested` object along with the product it belongs to. See [Nested categories](#nested-categories--ancestors). |
| Brands | `brand` | Index as a nested object along with the product it belongs to. |
| Articles / Blog posts | `article` | Index as a standalone object. |

### Structuring the `fields` object: Core principles

The `fields` object is where you will define most of your searchable data.

**Field naming conventions**

- Use descriptive, human-readable names (e.g., "screen_size", "color").
- Use lowercase with underscores (snake_case) for consistency.
- Avoid using dots (`.`) or brackets (`[]`) in your field names. These characters can interfere with data access.
- Keep names concise but descriptive.

**Data types**

Luigi's Box automatically infers the data type (`text`, `numeric`, `boolean`, `date`) from the first
value it sees for an attribute. Once set, the type for a given field cannot be changed via the API.
For dates, always use the **ISO 8601 format** (e.g., `2025-10-14T10:00:00Z`).

**Using arrays**

You can provide multiple values for any attribute by using an array.
This is useful for things like tags, available colors, available sizes and so on.

```json
"fields": {
  "color": ["Red", "Black", "Blue"],
  "tags": ["New Arrival", "Eco-Friendly"],
  "size": ["S", "M", "L", "XL"]
}
```

### Special fields

Certain field names have special, built-in behaviors that power ranking, filtering, and display logic.
Using them is key to unlocking the full potential of the platform.

**Core display fields**

| Field Name | Type | Required | Description |
|:-----------|:-----|:---------|:------------|
| `title` | String | ✓ | **Required.** The primary display name of the object. Used as the title in autocomplete and search widgets. This field is essential for search relevance and should contain the most important identifying information. |
| `web_url` | String | ✓ | **Required.** The canonical URL of the object on the web. Used to generate clickable links in search results and autocomplete. Must be a valid, absolute URL (e.g., `https://example.com/products/item-123`). |
| `image_link` | String | | A URL to the primary image for the object. Used by autocomplete.js, search.js, and recco.js libraries to display product images in search results and recommendations. Should be an absolute URL to a web-accessible image. |

**Pricing fields**

| Field Name | Type | Required | Description |
|:-----------|:-----|:---------|:------------|
| `price` | String | | A fully formatted price string including currency symbols and locale-appropriate formatting (e.g., "€19.99", "1,232.60 €", "kr12,341", "8 129 zł"). The system automatically extracts a numeric value into `price_amount` for sorting and filtering. If you use an unusual format or need precise control, explicitly send `price_amount`. |
| `price_amount` | Number | | The numeric value of the price, auto-extracted from `price` if not provided. Used for sorting, filtering, and range queries. Send this explicitly if your `price` format is non-standard or if you want to ensure accuracy. |
| `price_old` | String | | The original price before discount, formatted like `price`. Used to calculate and display discount percentages or savings in the UI. Useful for showing "was/now" pricing. |
| `price_old_amount` | Number | | The numeric value of the old price, auto-extracted from `price_old` if not provided. |
| `price_*` | String | | Any field starting with `price_` (e.g., `price_eur`, `price_usd`, `price_czk`) is treated as a price field. A corresponding `_amount` field (e.g., `price_eur_amount`) is automatically extracted unless explicitly provided. Useful for multi-currency stores where you need to support multiple price points. |

**Availability fields**

| Field Name | Type | Required | Description |
|:-----------|:-----|:---------|:------------|
| `availability` | Number | | A binary availability indicator. Must be `1` (available) or `0` (unavailable). Available results are automatically prioritized in ranking. If omitted, the object is treated as available. |
| `availability_rank` | Number | | A more advanced and granular version of `availability`. Accepts values from 1 (most available) to 15 (unavailable). Use this for nuanced availability states like "low stock" (e.g., `3`), "backorder" (e.g., `8`), or "out of stock" (e.g., `15`). Takes precedence over `availability` if both are provided. Lower numbers rank higher. |
| `availability_rank_text` | String | | The exact availability message to display to users (e.g., "Ships within 14 days", "Only 2 left in stock", "Pre-order", "Usually ships in 24 hours"). This field does not affect ranking but is used for frontend display. |

**Ranking signal fields**

| Field Name | Type | Required | Description |
|:-----------|:-----|:---------|:------------|
| `boost` | Number | | A manual ranking boost for the object. Accepts values `1`, `2`, or `3`, where higher values increase the item's position in search results. Use sparingly for promotional items, featured products, or seasonal highlights. Overuse can diminish search relevance. |
| `introduced_at` | Date | | The date when the product was added to your catalog (ISO 8601 format, e.g., `2025-10-14T10:00:00Z`). Used as a ranking signal to prioritize newer items. Particularly useful for fashion, electronics, or time-sensitive content where recency matters. |
| `_margin` | Number | | A hidden field representing the item's relative profit margin. Must be a float between 0.0 and 1.0 (e.g., `0.42` = 42% margin). Used internally as a ranking signal to prioritize higher-margin products in search results. Not exposed in API responses. Prefix with underscore to keep it hidden. |

**Pattern-based special fields**

| Field Name | Type | Required | Description |
|:-----------|:-----|:---------|:------------|
| `_*` | Any | | Any field starting with an underscore (e.g., `_internal_note`, `_supplier_id`, `_cost`) is treated as hidden. These fields are fully searchable and can be used for filtering, but are never exposed in public API responses. Useful for internal metadata, ranking signals, sensitive information, or business logic that shouldn't be visible to end users. |
| `geo_*` | Object | | Any field starting with `geo_` (e.g., `geo_location`, `geo_store`, `geo_warehouse`) is treated as a geographical location point. Value must be an object with `lat` and `lon` properties: `{"lat": 49.0448, "lon": 18.5530}`. Use `geo_location` as the standard field name for the primary location. Enables location-based search, filtering, and distance calculations. |

**Reserved Fields**

| Field Name | Description |
|:-----------|:------------|
| `_category` | **Reserved for internal use.** Do not use this field name in your data. The system uses it for internal category processing and hierarchy management. Using this field may cause unexpected behavior. |

### Special fields: Complete example

Here's a comprehensive example showing how to use multiple special fields together:

```json
{
  "identity": "premium-headphones-2024",
  "type": "item",
  "fields": {
    "title": "Premium Wireless Headphones",
    "web_url": "https://example.com/products/premium-headphones",
    "image_link": "https://cdn.example.com/images/headphones.jpg",
    
    "price": "€249.99",
    "price_old": "€299.99",
    "price_usd": "$279.99",
    
    "availability": 1,
    "availability_rank": 2,
    "availability_rank_text": "Only 3 left in stock",
    
    "boost": 2,
    "introduced_at": "2024-09-15T08:00:00Z",
    "_margin": 0.35,
    
    "color": ["Black", "Silver"],
    "brand": "AudioTech",
    "_supplier_id": "SUPP-8842",
    "_cost": 150.00,
    
    "geo_location": {
      "lat": 40.7128,
      "lon": -74.0060
    }
  }
}
```

## Advanced data modeling: Using the `nested` array

The `nested` array allows you to model complex relationships between your objects, such as categories,
brands, and product variants.

### Nested categories / ancestors

Most often, products belong to a category which is part of a hierarchy
(e.g., a "White T-Shirt" product belongs to the "T-Shirts" category,
which is under "Men", which is under "Apparel").

To correctly represent a product's full category path (e.g., "Apparel > Men > T-shirts"), you must
provide the complete hierarchy. This is essential for powering user-facing features like breadcrumb
navigation and hierarchical faceting.
This is achieved by sending the most specific category that a product belongs to (the "leaf" category)
as a `nested` object, and then listing all of its parent categories in a special `ancestors` array.

### Conceptual model

Imagine a product, a "White T-shirt", has a category path of "Apparel > Men > T-shirts".

1. **The leaf category:** The most specific category the product belongs to is "T-shirts".
   This will be your primary `nested` object.
2. **The ancestors:** The parent categories that form the path to this leaf are "Apparel" and "Men".
   These will go into the `ancestors` array.
3. **The order:** The order is crucial.  
The `ancestors` array **must** be ordered from top-level down to immediate parent:

- First ancestor: "Apparel" (top-level)
- Second ancestor: "Men" (immediate parent)

### Implementation

Based on the model above, here is how you would structure the JSON payload.

**Rule 1: The `nested` object is the leaf category**

The `nested` array should contain an object for the most specific category, in this case, "T-shirts".

**Rule 2: The `ancestors` array defines the path**

Inside the `fields` of the "T-shirts" category, you add the `ancestors` array.

**Rule 3: The `ancestors` array must be in order**

The array must list "Apparel" first, followed by "Men".

**Example: Product in a single hierarchy**

```json
{
  "objects": [
    {
      "identity": "74f5cdd860b5d9585b18edfab7c21670",
      "type": "item",
      "fields": {
        "title": "White T-shirt",
        "web_url": "/products/1"
      },
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
    }
  ]
}
```

### Multiple category hierarchies

If a product belongs to more than one category path (e.g., "Cheddar cheese" is in both
"Dairy > Cow milk" and "Wine > Snacks"), provide a `nested` object for each leaf category,
with each one containing its own respective `ancestors` path.

**Example: Product in multiple hierarchies**

```json
{
  "objects": [
    {
      "identity": "5e119a13ec6511e323bfdc41cd181fdb",
      "type": "item",
      "fields": {
        "title": "Cheddar cheese",
        "web_url": "/products/1"
      },
      "nested": [
        {
          "type": "category",
          "identity": "1692378648",
          "fields": {
            "title": "Cow milk",
            "image_link": "/images/cow-milk.png",
            "ancestors": [{
              "type": "category",
              "identity": "category-dairy",
              "fields": {
                 "title": "Dairy", 
                 "web_url": "/categories/dairy",
                 "image_link": "/images/dairy.png"
              }
            }]
          }
        },
        {
          "type": "category",
          "identity": "category-snacks",
          "fields": {
            "title": "Snacks",
            "web_url": "/categories/wine/snacks",
            "image_link": "/images/snacks.png",
            "ancestors": [{
              "type": "category",
              "identity": "category-wine",
              "fields": {
                "title": "Wine",
                "web_url": "/categories/wine",
                "image_link": "/images/wine.png"
              }
            }]
          }
        }
      ]
    }
  ]
}
```

If you are integrating [Product listing](/plp.html), see
[searching within full category hierarchy](/plp/api.html#best-practices-filtering-within-full-category-hierarchy)
to make sure you get the best results.

### Nested Variants

For products that come in different variations (e.g., by size or color), you can index them as nested
objects with the type set to "variant". Each variant must have its own unique identity. This allows
the search to group variants and display the most relevant one.

```json
{
  "identity": "tshirt-main-product",
  "type": "item",
  "fields": { 
    "title": "Premium T-shirt",
    "web_url": "/products/tshirt",
    "price": "€29.99",
    "image_link": "/images/tshirt-default.jpg"
  },
  "nested": [
    {
      "type": "variant",
      "identity": "tshirt-main-product-red-m",
      "fields": {
        "title": "Red T-shirt - M",
        "color": "Red",
        "size": "M",
        "web_url": "/products/tshirt?variant=red-m",
        "availability": 1
      }
    },
    {
      "type": "variant",
      "identity": "tshirt-main-product-blue-l",
      "fields": {
        "title": "Blue T-shirt - L",
        "color": "Blue",
        "size": "L",
        "web_url": "/products/tshirt?variant=blue-l",
        "availability": 0
      }
    }
  ]
}
```

## Field Naming Best Practices

Following consistent naming conventions makes your data easier to maintain and debug:

### Do's
- ✓ Use lowercase with underscores: `screen_size`, `battery_life`, `shipping_weight`
- ✓ Be descriptive but concise: `color` instead of `c`, `brand_name` instead of `brand_name_of_manufacturer`
- ✓ Use consistent naming across all objects: if you use `color` for one product, use `color` for all products
- ✓ Use plural for arrays: `tags`, `categories`, `sizes`
- ✓ Prefix hidden fields with underscore: `_internal_id`, `_cost_price`

### Don'ts
- ✗ Avoid dots: `product.color` (use `product_color` instead)
- ✗ Avoid brackets: `price[eur]` (use `price_eur` instead)
- ✗ Avoid spaces: `screen size` (use `screen_size` instead)
- ✗ Avoid mixed case: `ScreenSize` or `screenSize` (use `screen_size` instead)
- ✗ Don't use `_category` (reserved field)

## Common Mistakes and How to Avoid Them

### 1. Incorrect ancestor ordering
**Problem:** Ancestors not ordered from top-level to immediate parent.

```json
// ❌ WRONG
"ancestors": [
  { "title": "Men" },      // immediate parent listed first
  { "title": "Apparel" }   // top-level listed second
]

// ✓ CORRECT
"ancestors": [
  { "title": "Apparel" },  // top-level listed first
  { "title": "Men" }       // immediate parent listed second
]
```

### 2. Inconsistent data types
**Problem:** Sending different data types for the same field across objects.

```json
// ❌ WRONG - mixing types
{ "identity": "prod-1", "fields": { "price_amount": 19.99 } }
{ "identity": "prod-2", "fields": { "price_amount": "29.99" } }

// ✓ CORRECT - consistent types
{ "identity": "prod-1", "fields": { "price_amount": 19.99 } }
{ "identity": "prod-2", "fields": { "price_amount": 29.99 } }
```

### 3. Missing unique identities for nested objects
**Problem:** Nested objects without their own unique identity.

```json
// ❌ WRONG
"nested": [{
  "type": "variant",
  // missing identity!
  "fields": { "color": "Red" }
}]

// ✓ CORRECT
"nested": [{
  "type": "variant",
  "identity": "prod-123-red",
  "fields": { "color": "Red" }
}]
```

### 4. Using dots in field names
**Problem:** Field names with dots can cause data access issues.

```json
// ❌ WRONG
"fields": {
  "product.color": "Blue",
  "price.eur": "19.99"
}

// ✓ CORRECT
"fields": {
  "product_color": "Blue",
  "price_eur": "19.99"
}
```

### 5. Not using ISO 8601 for dates
**Problem:** Using non-standard date formats.

```json
// ❌ WRONG
"introduced_at": "10/14/2024"
"active_from": "2024-10-14"

// ✓ CORRECT
"introduced_at": "2024-10-14T10:00:00Z"
"active_from": "2024-10-14T00:00:00+00:00"
```

### 6. Accidentally using reserved fields
**Problem:** Using `_category` which is reserved.

```json
// ❌ WRONG
"fields": {
  "_category": "Electronics"  // This is reserved!
}

// ✓ CORRECT
"fields": {
  "category_name": "Electronics"
}
```

## Post-Indexing Information

### Searchability and visibility

- **Searchable by default**: Every field you send is automatically searchable.
- **Hidden fields**: To index an attribute for internal use (like for ranking) but prevent it from appearing
in public API responses, prefix its name with an underscore (e.g., `_margin`, `_cost`, `_supplier_id`).

### Output data structure

- **Arrays by default**: In API responses, all field values are returned as arrays, even if you
indexed a single scalar value. This simplifies frontend development by eliminating the need to check
the data type.

Example:
```json
// You send:
{ "color": "Blue" }

// You receive:
{ "color": ["Blue"] }
```

### Derived fields

The system automatically creates some fields for you during processing (e.g., `category_lvl_1`,
`category_lvl_2`, `...`, `category_lvl_5`). You do not need to send these in your indexing requests.
These are generated from your `nested` category structure to enable hierarchical filtering and faceting.

## Performance Tips

### Optimal field count
- **Sweet spot**: 15-30 fields per object provides good searchability without performance impact
- **Too many fields** (100+): Can slow down indexing and increase response times
- **Too few fields** (< 5): May limit search relevance and filtering options

### When to use nested vs. flat structure
- **Use nested** for: Categories (with ancestors), product variants, related items, brands with multiple attributes
- **Use flat** for: Simple attributes like color, size, tags, prices

### Array field considerations
- Arrays are powerful but use them judiciously
- Large arrays (100+ values) can impact search performance
- Consider if a field truly needs multiple values or if you should normalize the data

### Indexing frequency
- **Real-time updates**: Use the API for immediate changes (price updates, stock changes)
- **Bulk updates**: Use feeds for complete catalog refreshes (daily/weekly)
- **Avoid**: Sending the same data repeatedly without changes

## Troubleshooting

### "My prices aren't sorting correctly"
**Solution:** Ensure `price_amount` is being extracted correctly. If your price format is unusual, send `price_amount` explicitly as a number.

### "Categories not showing hierarchy"
**Solution:** Verify that your `ancestors` array is ordered correctly (top-level first) and that all category objects have unique identities.

### "Hidden fields appearing in results"
**Solution:** Make sure the field name starts with an underscore (`_`). Check for typos like `_margin` vs `margin`.

### "Search results not updating"
**Solution:** Verify that you're using the correct `identity` and that it matches what's being sent in analytics events.

### "Date fields not filtering correctly"
**Solution:** Ensure you're using ISO 8601 format (e.g., `2024-10-14T10:00:00Z`). Dates without time zones may be interpreted incorrectly.

### "Boost not working"
**Solution:** Remember that `boost` values must be `1`, `2`, or `3`. Other values are ignored. Also, overusing boost can reduce overall search relevance.

## Additional Resources

- [Content Update API Documentation](/indexing/api.html)
- [Feed Format Documentation](/indexing/feeds.html)
- [Identity Guide](/identity.html)
- [Product Listing Pages (PLP)](/plp.html)
- [Category Hierarchy Best Practices](/plp/api.html#best-practices-filtering-within-full-category-hierarchy)