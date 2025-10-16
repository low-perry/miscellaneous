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
| Categories | `category` | Index as a `nested` object along with the product it belongs to. See [Nested categories](#data-layout-and-modeling-guide-advanced-data-modeling-using-the-code-nested-code-array-nested-categories-ancestors). |
| Brands | `brand` | Index as a nested object along with the product it belongs to. |
| Articles / Blog posts | `article` | Index as a standalone object. |

### Structuring the `fields` object: Core principles

The `fields` object is hwere you will define most of your searchable data.

**Field naming conventions**

- Use descriptive, human-readable names (e.g, "Screen Size", "color").
- Avoid using dots (` . `) or brackets (` [] `) in your field names.
  These characters can interfere with data access.

**Data types**

Luigi's Box automatically infers the data type (`text`, `numeric`, `boolean`, `date`) from the first
value it sees for an attribute. Once set, the type for a given field cannot be changed via the API.
For dates, always use the **ISO 8601 format** (e.g., `2025-10-14T10:00:00Z`).

**Using arrays**

You can provide multiple values for any attribute by using an array.
This is useful for things like tags, available colors, available sizes and so on.

```json
"fields": {
  "other attributes": "..."
  "color": ["Red", "Black", "Blue"],
  "tags": ["New Arrival", "Eco-Friendly"]
}
```

**Special fields**

Certain field names have special, built-in behaviors that power ranking, filtering, and display logic.
Using them is key to unlocking the full potential of the platform.

| Parameter     | Type   | Required | Description                                                                                                                                      |
|:------------- |:------ |:-------- |:-------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`    | String | ✓        | The primary display name of the object. |
| `web_url`        | String | ✓        | The canonical URL of the object. Used to generate links in search results.                                                   |
| `avaliability`  | Number |          | A binary `1` (available) or `0` (unavailable). Affects ranking.                                                         |
| `availability_rank` | Number |          | A more granular availability score from 1 (most available) to 15 (unavailable).                                                       |
| `price`   | String |          | A fully formatted price string (e.g., "€19.99"). A numeric `price_amount` is automatically extracted for sorting.                                                   |
| `price_old`      | String |         | The original price, for displaying discounts.                                        |
| `image_link`      | String  |          | A URL to the primary image for the object.                                                               |
| `boost`      | Number  |          | A numeric value (1, 2, or 3) to manually increase an item's ranking.                                                               |
| `introduced_at`      | Date  |          | The date the item was added (ISO 8601 format). Used to rank newer items higher.                                                               |
| `_margin`      | Number  |          | A hidden field representing the item's relative margin (0.0 to 1.0). Used as a ranking signal.                                                               |

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

- First ancestor: "Apparel"
- Second ancestor: "Men"

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
          "type": "category", // This is the LEAF category (most specific)
          "identity": "category-t-shirts",
          "fields": {
            "title": "T-shirts",
            "web_url": "/categories/apparel/men/t-shirts",
            "ancestors": [
              {
                "type": "category", // FIRST ancestor (top-level parent)
                "identity": "category-apparel",
                "fields": {
                  "title": "Apparel",
                  "web_url": "/categories/apparel"
                }
              },
              {
                "type": "category", // SECOND ancestor (immediate parent of T-shirts)
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
          // FIRST CATEGORY PATH: Dairy > Cow milk
          "type": "category", // LEAF category for first path (Cow Milk)
          "identity": "1692378648",
          "fields": {
            "title": "Cow milk",
            "image_link": "/images/cow-milk.png",
            "ancestors": [{ // Path: Dairy → Cow milk
              "type": "category", // Top-level parent for first path (Dairy)
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
          // SECOND CATEGORY PATH: Wine > Snacks 
          "type": "category", // LEAF category for second path (Snacks)
          "identity": "category-snacks",
          "fields": {
            "title": "Snacks",
            "web_url": "/categories/wine/snacks",
            "image_link": "/images/snacks.png",
            "ancestors": [{
              "type": "category",  // Top-level parent for second path (Wine)
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
  "fields": { "title": "Premium T-shirt" },
  "nested": [
    {
      "type": "variant",
      "identity": "tshirt-main-product-red-m",
      "fields": {
        "title": "Red T-shirt - M",
        "color": "Red",
        "size": "M",
        "web_url": "/products/tshirt?variant=red-m"
      }
    },
    {
      "type": "variant",
      "identity": "tshirt-main-product-blue-l",
      "fields": {
        "title": "Blue T-shirt - L",
        "color": "Blue",
        "size": "L",
        "web_url": "/products/tshirt?variant=blue-l"
      }
    }
  ]
}
```

## Post-Indexing Information

### Searchability and visibility

- **Searchable by default**: Every field you send is automatically searchable.
- **Hidden fields**: To index an attribute for internal use (like for ranking) but prevent it from appearing
in public API responses, prefix its name with an underscore (e.g., `_margin`).

### Output data structure

- **Arrays by default**: In API responses, all field values are returned as arrays, even if you
indexed a single scalar value. This simplifies frontend development by eliminating the need to check
the data type.

### Derived fields

The system automatically creates some fields for you during processing (e.g., `category_lvl_1`,
`category_lvl_2`,`...`, `category_lvl_5`). You do not need to send these in your indexing requests.
