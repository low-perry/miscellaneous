---
title: "Quickstart: Structuring your data for indexing"
layout: quickstart_layout
description: "Learn how to structure your data effectively for Luigi's Box indexing by understanding the required formats, data types, special fields, and best practices for optimal search results."
---

## Introduction

This guide provides a walkthrough for developers to understand how to structure their product data (or any content) before sending it to Luigi's Box for indexing. Properly structured data is fundamental for effective search and recommendations.

### What you'll learn

By following this guide, you will learn:

- The basic "index-object" structure Luigi's Box expects.
- Key principles for naming and formatting your data fields.
- How to represent different types of data (like text, numbers, arrays, and dates).
Which special fields Luigi's Box uses for specific functionalities (e.g., title, price, availability).
- General best practices for preparing your data for any indexing method (API or Feeds).

### Who is this guide for

This guide is intended for:

- Developers new to Luigi's Box who need to understand data formatting requirements.
- Technical users responsible for preparing catalog data for synchronization with Luigi's Box.
- Anyone who wants to ensure their data is optimally structured for Luigi's Box search and recommendation features.

### Prerequisites

Before you begin, it's helpful to have:

- **A general understanding of your own data:** Know what information you have for your products, articles, or other content you wish to index (e.g., names, descriptions, prices, categories, custom attributes).
- **Basic understanding of JSON:** Familiarity with JSON (JavaScript Object Notation) data format structure. This guide will use JSON examples as it's common for API interactions.

## Core concepts of Luigi's Box data layout

Luigi's Box is designed with a "convention over configuration" philosophy. Adhering to specific data formats and naming conventions helps you achieve better results with minimal explicit configuration.

### The `index-object`: Your fundamental data unit

The data you send to Luigi's Box, whether via API or feeds, is conceptualized as a collection of `index-objects`. Each `index-object` represents a single item you want to make searchable, like a product, a category, an article, or a brand.

Each `index-object` typically has:

- **`identity`:** A unique identifier for this object across all types (e.g., your product SKU). This is crucial.
- **`type`:** The kind of object this is (e.g., "item", "product", "category", "article"). This is also crucial.
- **`fields`:** A collection of key-value pairs representing the attributes of the object. This is where most of your data will go.
- **`title`:** Required within fields. The primary display name.
- **`web_url`:** Highly recommended within **`fields`**. The canonical URL to the item on your website.
- **`nested`** (Optional): An array for related objects, like product variants or categories associated with a product.

### Your data: Key-value pairs in `fields`

Inside the `fields` object, your data takes the form of key-value pairs.

- **Key**: The attribute name (e.g., "Color", "Product Name", "Stock Level").
- **Value**: The actual data for that attribute (e.g., "Red", "Awesome T-Shirt", 100).

**Naming conventions for keys (attributes)**:

- Use lowercase letters, uppercase letters, and spaces (e.g., "Screen Size" is valid).
- Avoid using dots (.) and brackets ([]) in attribute names, as these can interfere with data access in JSON.

### Indexing arrays (multiple values for an attribute)

Luigi's Box supports storing multiple values for a single attribute. Internally, all data is stored as arrays.

```json
"fields": {
  "Available Colors": ["Red", "Blue", "Green"],
  "tags": ["New", "Eco-friendly"]
}
```

### What data should You include in fields?

To maximize effectiveness, your fields should generally include attributes that:

- **Make Objects Findable**: Titles, product codes (EANs, SKUs), categories, brands, detailed descriptions, specific parameters (e.g., "Material: Cotton").
- **Allow You to Render Product Tiles/Listings**: Information needed for display in search results (image URLs, labels like "Sale", delivery estimates).
- **Affect Ranking (Special Fields)**: Certain fields influence ranking (see below).
- **Enable Faceted Filtering**: Attributes users can use to refine search results (e.g., "Size", "Color", "Brand").

**General Rule**: The more comprehensive and well-structured your data, the better the findability and relevance.

### Special fields and their behavior

Luigi's Box recognizes certain field names within fields (or at the top level of the index-object) as "special," having predefined behaviors:


| **Field Name**          | **Description**                                                    | **Expected Data Type** |
|-------------------------|------------------------------------------------------------------|-----------------------|
| `title`                   | Required. Primary display name.                                 | Text                  |
| `web_url`                 | Canonical URL to the object. Crucial if using immutable IDs.    | Text (URL)            |
| `availability`            | 1 for available, 0 for unavailable. Affects sorting.            | Numeric (0 or 1)      |
| `availability_rank`       | Granular availability (1-15, lower is more available).          | Numeric (1-15)        |
| `availability_rank_text`  | Exact text for availability (e.g., "Ships in 2 days").          | Text                  |
| `price`                   | Fully formatted display price (e.g., "€19.99").                 | Text                  |
| `price_amount`            | Numeric value of the price. Auto-extraction is skipped if sent. | Numeric (Float)       |
| `price_old`               | Original price if on sale.                                      | Text                  |
| `image_link`              | URL to an image. Variants like image_link_s, _m, _l are valid.  | Text (URL)            |
| `_margin`                 | Hidden Field. Relative margin (0-1). Affects ranking.          | Numeric (Float)       |
| `introduced_at`           | Date product added (ISO 8601). Newer items ranked higher.      | Date (ISO 8601)       |
| `boost`                   | Ranking boost (1, 2, or 3).                                    | Numeric (1,2,3)       |
| `geo_location`            | Geographical point: `{"lat": 49.0, "lon": 18.5}`.              | Geo Point             |
| `description`             | A textual description of the item.                            | Text                  |
| `category`                | Category information, often with hierarchy (e.g., "Electronics, Audio"). | Text        |
| `brand`                   | The brand of the item.                                         | Text                  |

<% note_content = capture do %>
  <p>Attributes in fields starting with an underscore (<code> _ </code>) (e.g., <code>_internal_code</code>, <code>_margin</code>) are hidden fields: searchable but not exposed in API responses.</p>
<% end %>
<%= callout("note", note_content) %>

### Data types

Luigi's Box automatically infers the data type (text, numeric, boolean, date) based on the first value it sees for an attribute.


<% warning_content = capture do %>
  <p>Date: Expects ISO 8601 format (e.g., "2023-11-23T06:27:19Z").</p>
<% end %>
<%= callout("warning", warning_content) %>

### Output data structure (when retrieving data via API calls)

Generally, all attributes are returned as arrays, even if indexed as a single value. Exceptions (returned as scalars) include `title`, `price`, `availability`, `description`, etc.

### Derived Fields

Luigi's Box automatically derives some attributes (e.g., `category_lvl_1`, `_count` attributes). You don't need to index these.

## Step-by-Step: Preparing your first product data

Let's imagine you want to index a product. Here's how you'd structure the data for one product, keeping the above concepts in mind. This is what you would prepare before making an API call or constructing a feed.

Example `index-object` for a product:

```json
{
  {
  "identity": "SKU67890",
  "type": "item",
  "active_from": "2025-01-01T00:00:00Z",
  "fields": {
    "title": "Eco-Friendly Carbon Fiber Bicycle",
    "web_url": "https://www.example.com/products/eco-bike-67890",
    "description": "Ride in style with our lightweight carbon fiber-frame bicycle. Built for speed, durability, and urban commuting.",
    "price": "€999.99",
    "price_eur": "€999.99",
    "price_eur_amount": 999.99,
    "price_old": "€1,099.99",
    "brand": "EcoRide",
    "category": [
      "Bicycles | Urban Commuters",
      "Sustainable Products | Mobility"
    ],
    "image_link": "https://www.example.com/images/eco-bike-67890.jpg",
    "image_link_m": "https://www.example.com/images/medium/eco-bike-67890.jpg",
    "labels": ["New Arrival", "Eco-Friendly", "Lightweight"],
    "Color": "Matte Black",
    "Frame Material": ["Carbon Fiber", "Aluminum"],
    "Gear System": "7-Speed Shimano",
    "Wheel Size (cm)": 71,
    "Brake Type": "Disc Brakes",
    "availability": 1,
    "availability_rank": 1,
    "availability_rank_text": "In Stock",
    "stock_quantity": 50,
    "introduced_at": "2024-06-01T10:00:00Z",
    "_margin": 0.40,
    "boost": 1
  }
}
```

### Explanation of the example

- `identity` and `type` are clearly defined.
- `fields` contain various attributes:
  - Required `title` and `web_url`.
  - Descriptive fields like `description`, `brand`, and `category`.
  - Pricing information including `price_old` for comparison.
  - Multiple `image_link` sizes for different uses.
  - Arrays for `labels` and `Frame Material` to enhance searchability.
  - Custom attributes like `Gear System`, `Brake Type`, and `Wheel Size (cm)`.
  - Availability data including `availability_rank_text` and `stock_quantity`.

## Best practices summary for data layout

- **Be Consistent**: Use consistent naming and data types for your attributes.
- **Be Comprehensive**: The more relevant, well-structured data you provide, the better the search and recommendations.
- **Use Conventions**: Adhere to naming conventions for special fields to unlock built-in features.
- **Mind Your Dots and Brackets**: Avoid `.` and `[]` in attribute names within fields.
- **Plan for Arrays**: Use arrays for attributes that can have multiple values.
- **Test Your Structure**: After indexing, use the Catalog Browser in the Luigi's Box app or API search requests to verify how your data has been processed and stored.

## Next steps

Once your data is structured like the example above (as an array of one or more such index-objects if sending via API), you would then proceed to:


<% content_for :next_steps do %>
  <ul>
  <li>Obtain API Keys (if using the API).</li>
  <li>
    Construct the full API request payload (<code>{"objects": [ ...your index-objects here... ]}</code>).
  </li>
  <li>Implement HMAC Authentication for your API request.</li>
  <li>
    Send the data to the appropriate Luigi's Box endpoint (e.g., <code>POST /v1/content</code>).
  </li>
</ul>
<p>
  For details on making API calls, refer to the <a href="/quickstartguides/indexing/indexing.html">"Quickstart: Indexing with Luigi's Box"</a> guide.
  If you're using feeds instead, format your XML, JSON, or CSV file based on these principles.
</p>
<% end %>

