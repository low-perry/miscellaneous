<!--
---
title: "Data Layout and Modeling Guide - Feeds" 
layout: layout 
description: "The definitive guide to structuring your feed data for indexing in Luigi's Box, \
covering core concepts, special fields, and best practices for XML, JSON, and CSV feeds."
---
-->

# Data Layout and Modeling Guide - Feeds

## Introduction

This guide is the central source of truth for structuring your feed data before sending it to Luigi's Box.
Proper data modeling is the single most important factor for achieving high-quality search results and
recommendations.

The concepts and conventions described here apply specifically to [Feeds](/indexing/feeds.html) in XML, JSON, or CSV format. If you're using the [Content Update API](/indexing/api.html), please refer to the separate API data modeling guide.

## Quick Start: Minimal Example

Here's the simplest possible product you can index with just the required fields:

**XML Feed:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<items>
  <item>
    <identity>product-123</identity>
    <title><![CDATA[Blue Cotton T-Shirt]]></title>
    <url>https://example.com/products/blue-tshirt</url>
  </item>
  <!-- more products -->
</items>
```

**JSON Feed:**
```json
{
  "items": [
    {
      "identity": "product-123",
      "title": "Blue Cotton T-Shirt",
      "url": "https://example.com/products/blue-tshirt"
    }
  ]
}
```

This is enough to make your product searchable. However, to unlock the full power of Luigi's Box, you'll want to add more fields as described below.

## Feed Structure Guidelines

We are very flexible regarding feed structure and support any valid XML, JSON or CSV file. However, to make the processing easier (and reduce the time to integration), please follow these guidelines:

### Format Preferences
- **Preferred formats**: XML and JSON over CSV
- **XML specifics**:
  - Avoid using tag attributes. Instead of `<product id="123">...` use `<product><id>123</id></product>`
  - Keep the structure as flat as possible. Nesting tags is ok, but don't use complex nesting if possible
  - In many cases, nesting is unavoidable and it's acceptable
- **Field naming**: Name the attributes in a way that makes sense to you, there's no prescribed naming convention

### Common XML Issues to Avoid

We frequently encounter these problems when dealing with XML files. Avoiding them will make the process much faster:

**1. No encoding of special characters (e.g., `&`)**

```xml
<!-- ❌ WRONG - Invalid XML -->
<title>Black & White</title>

<!-- ✓ CORRECT - Using entities -->
<title>Black &amp; White</title>

<!-- ✓ CORRECT - Using CDATA -->
<title><![CDATA[Black & White]]></title>
```

**2. Double encoding using both CDATA and entities**

```xml
<!-- ❌ WRONG - Double encoded, will display as "Black &amp; White" -->
<title><![CDATA[Black &amp; White]]></title>

<!-- ✓ CORRECT - Use either CDATA or entities, not both -->
<title><![CDATA[Black & White]]></title>
<!-- OR -->
<title>Black &amp; White</title>
```

**3. HTML in descriptions**

```xml
<!-- ✓ CORRECT - HTML tags inside CDATA -->
<description><![CDATA[A nice & comfortable shirt. It's ok to use <strong>html tags</strong> in description.]]></description>
```

## Feed Types and Structure

Each of your searchable types must have a separate feed. Here's how to structure each type:

### Product Feeds

Product feeds use `<items>` or `<products>` as the root element:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<items>
  <item>
    <!-- product attributes -->
  </item>
  <item>
    <!-- product attributes -->
  </item>
</items>
```

### Category Feeds

Category feeds use `<categories>` as the root element:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<categories>
  <category>
    <!-- category attributes -->
  </category>
</categories>
```

### Brand Feeds

Brand feeds use `<brands>` as the root element:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<brands>
  <brand>
    <!-- brand attributes -->
  </brand>
</brands>
```

### Article Feeds

Article feeds use `<articles>` as the root element:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<articles>
  <article>
    <!-- article attributes -->
  </article>
</articles>
```

## Feed Contents: What to Include

Make sure that the feed contains all products that you have, **even those that are not in stock**. For product attributes, it's useful to think about four aspects of the data in the feed:

### 1. Required Attributes
We only require two attributes for each product: **title** and **URL**. They must be present in the feed for each product (the tag names do not matter) as the bare minimum.

### 2. Visual Attributes
Look at the product tile in the category listing and all the information that it shows. If you want the product tile in search results to show the same information, it must be present in the feed. This usually includes:
- Product image
- Product price
- Discounts
- Various labels

Keep in mind that some information is only visible under certain circumstances, so it's best to check the code that renders the product tile and make sure that all information is included in the feed.

### 3. Behavioral Attributes
These attributes are not required to render the product tile, but they are essential for some features related to the product tile. For example, if your product tile shows an "Add to cart" button, and this button will trigger an XHR request which sends the internal product ID, make sure that this internal ID is present in the feed.

### 4. Searchable Attributes
All attributes that your product should be findable by. E.g., if you want your products to be searchable by EAN, you must include product EAN code in the feed. In this regard: **more is more**, and the more data you provide in the feed, the better the search will be.

## Field Naming Best Practices

Following consistent naming conventions makes your data easier to maintain and debug:

### Do's
- ✓ Use descriptive, human-readable names: `screen_size`, `color`, `brand`
- ✓ Be concise but clear: `color` instead of `c`, `brand` instead of `brand_name_of_manufacturer`
- ✓ Use consistent naming across all feeds: if you use `color` for one product, use `color` for all products
- ✓ Use lowercase with underscores (snake_case) for consistency
- ✓ Use plural for comma-separated values: `labels`, `tags`, `sizes`

### Don'ts
- ✗ Avoid dots in parameter names: `product.color` (use `product_color` instead)
- ✗ Especially in `<parameters>` tags: `"N. Size"` is not valid (use `"Size"` instead)
- ✗ Avoid brackets: `price[eur]` (use `price_eur` instead)
- ✗ Avoid spaces: `screen size` (use `screen_size` instead)
- ✗ Avoid mixed case: `ScreenSize` or `screenSize` (use `screen_size` instead)

## Special Fields Reference

Certain field names have special, built-in behaviors that power ranking, filtering, and display logic.

### Core Required Fields

| Field Name | Type | Required | Description | Example |
|:-----------|:-----|:---------|:------------|:--------|
| `identity` | String | ✓ | **Required.** Unique identifier for the object. Must match the identity reported by analytics events. See [Identity guide](/identity.html). | `NH757A` |
| `title` | String | ✓ | **Required.** The primary display name of the object. Used as the title in autocomplete and search widgets. Must be properly encoded or wrapped in CDATA. | `<title><![CDATA[Black & Decker Drill]]></title>` |
| `url` | String | ✓ | **Required.** Canonical URL of the object. Often a single product can have several URLs, use the canonical URL for the feed. | `https://example.org/products/drill-123` |

### Display Fields

| Field Name | Type | Required | Description | Example |
|:-----------|:-----|:---------|:------------|:--------|
| `image_link_s` | String | | Tiny image for variant previews. Best size is around 100x100px. | `https://example.org/images/thumbs/100x100/2172.png` |
| `image_link_m` | String | | Medium image suitable for autocomplete, around 200x200px. | `https://example.org/images/thumbs/200x200/2172.png` |
| `image_link_l` | String | | Large image suitable for product tile in search results. Best size is 600x600px. Use the same image that you use for rendering your current search result tile if possible. | `https://example.org/images/thumbs/600x600/2172.png` |
| `description` | String | | Long-form description of the product. Feel free to use formatted HTML, but make sure it is correctly encoded or enclosed in CDATA section. | `<description><![CDATA[A comfortable <strong>cotton</strong> shirt.]]></description>` |
| `labels` | String | | Comma-separated list of labels, such as "Free shipping" or "Sale". | `Summer sale, Free shipping` |

### Pricing Fields

| Field Name | Type | Required | Description | Example |
|:-----------|:-----|:---------|:------------|:--------|
| `price` | String | | The fully formatted price as you want it to appear in the product tile, including currency. This is the price for which the product is available for purchase. A numeric `price_amount` is automatically extracted for sorting. | `$78.9` or `65 EUR` |
| `price_old` | String | | If the product is on sale, this is the original price. Formatted the same as `price`. | `$81.9` or `67.50 EUR` |
| `price_*` | String | | Per-currency price fields. The fully formatted price in a specific currency (e.g., `price_eur`, `price_usd`, `price_czk`). Add as many per-currency prices as you need. A corresponding `_amount` field is automatically extracted. | `<price_eur>65 EUR</price_eur>` |
| `price_*_old` | String | | Original price in a specific currency before discount (e.g., `price_eur_old`, `price_usd_old`). | `<price_eur_old>67.50 EUR</price_eur_old>` |

**Multi-currency example:**
```xml
<price>$78.9</price>
<price_old>$81.9</price_old>
<price_eur>65 EUR</price_eur>
<price_eur_old>67.50 EUR</price_eur_old>
<price_czk>1,850 Kč</price_czk>
```

### Availability Fields

| Field Name | Type | Required | Description | Example |
|:-----------|:-----|:---------|:------------|:--------|
| `availability` | Number | | Binary attribute. `1` = Product is orderable, `0` = Product is not orderable. Available results are automatically prioritized in ranking. If omitted, the product is treated as available. | `1` or `0` |
| `availability_rank` | Number | | Numeric value strictly within `<1, 15>`, which encodes the availability of the product. The higher the number, the less available the product is. Takes precedence over `availability` if both are provided. For unavailable products, must be `15` with `availability: 0`. | `1`, `3`, `7`, or `15` |
| `availability_rank_text` | String | | The exact availability text as it should appear in the product tile. This field does not affect ranking but is used for frontend display. | `Ships within 14 days` or `In external warehouse / Ships within 5 days` |

**Recommended availability_rank encoding scheme:**

If your store uses 4 availability states: "In stock", "Ships within 7 days", "Ships within 14 days", "Out of stock", then a good encoding would be:
- `1`: In stock (immediately available)
- `3`: Ships within 7 days
- `7`: Ships within 14 days
- `15`: Out of stock (unavailable)

**Example:**
```xml
<availability>1</availability>
<availability_rank>3</availability_rank>
<availability_rank_text><![CDATA[In external warehouse / Ships within 5 days]]></availability_rank_text>
```

### Ranking Signal Fields

| Field Name | Type | Required | Description | Example |
|:-----------|:-----|:---------|:------------|:--------|
| `boost` | Number | | Manual ranking boost for the product. Luigi's Box supports 3 boosting levels: `1`, `2`, and `3`. The higher the number, the stronger the boosting effect. Use judiciously to avoid interfering with the core ranking algorithm too much. You can also set up boosting in the Luigi's Box application. | `1`, `2`, or `3` |
| `introduced_at` | Date | | Date/timestamp value in ISO 8601 format indicating the novelty of a product or when it started/will start to sell. Used to prefer newer items when sorting search results. If omitted, novelty is ignored. | `2021-07-15` or `2021-07-15T08:00:00Z` |
| `margin` | Number | | Relative profit margin of the product. Must be a float value between `<0, 1>` (e.g., `0.42` means 42% margin of product price). Used to prefer items with higher margin when sorting search results. If omitted, treated as if there is no margin. | `0.42` |

**Example:**
```xml
<boost>2</boost>
<introduced_at>2021-07-15</introduced_at>
<margin>0.42</margin>
```

### Category and Brand Fields

| Field Name | Type | Required | Description | Example |
|:-----------|:-----|:---------|:------------|:--------|
| `category` | String | | Product category with full hierarchy using pipe (`|`) delimiter. **This exact category with hierarchy must appear in the category feed.** If the product is in multiple categories, use the `<category>` tag multiple times. For XML, mark the primary category with `primary="true"` attribute. For JSON, the first element in the array is treated as primary. | `<category primary="true"><![CDATA[Apparel | Men | Shirts]]></category>` |
| `brand` | String | | Product brand. **This exact brand must appear in the brand feed.** | `Nike` |

**XML example with multiple categories:**
```xml
<category primary="true"><![CDATA[Apparel | Men | Shirts]]></category>
<category><![CDATA[Seasons | Summer | Shirts]]></category>
```

**JSON example with multiple categories:**
```json
{
  "category": [
    ["Apparel", "Men", "Shirts"],
    ["Seasons", "Summer", "Shirts"]
  ]
}
```

### Product Identification Fields

| Field Name | Type | Required | Description | Example |
|:-----------|:-----|:---------|:------------|:--------|
| `product_code` | String | | SKU code. Based on our experience, people often search for products using their codes, especially in B2B segments. | `NK8277S` |
| `ean` | String | | EAN barcode of the product, if available. | `8288881881818` |
| `to_cart_id` | String | | Internal ID of the product necessary for add-to-cart functionality. Include all attributes necessary to add product to cart. May not be applicable in all cases. See [Add to cart](/indexing/feeds.html#add-to-cart) for more details. | `2172` |

### Variant Fields

| Field Name | Type | Required | Description | Example |
|:-----------|:-----|:---------|:------------|:--------|
| `item_group_id` | String | | Links individual product variants together for variants search mode. All variants of the same product must share the same `item_group_id` and **must be listed consecutively** in the feed (no other products between them). See [Variants in the feed](/indexing/feeds.html#variants-in-the-feed). | `8272` |

**Example:**
```xml
<item>
  <identity>NH7636A</identity>
  <title>Black Nike Shirt</title>
  <item_group_id>8272</item_group_id>
  <!-- other attributes -->
</item>
<item>
  <identity>NH7636B</identity>
  <title>White Nike Shirt</title>
  <item_group_id>8272</item_group_id>
  <!-- All variants must follow each other -->
</item>
```

### Geographic Location Fields

| Field Name | Type | Required | Description | Example |
|:-----------|:-----|:---------|:------------|:--------|
| `geo_location` | Object | | Geographic location point in geo_point format with `lat` and `lon` properties. Used to prefer items within certain distance from user when sorting search results. If omitted, treated as if there is no location. | `{"lat": 49.0448, "lon": 18.553}` |

**Example:**
```xml
<geo_location>{"lat": 49.0448, "lon": 18.553}</geo_location>
```

```json
{
  "geo_location": {"lat": 49.0448, "lon": 18.553}
}
```

### Product Parameters

| Field Name | Type | Required | Description | Example |
|:-----------|:-----|:---------|:------------|:--------|
| `parameters` | Array/Object | | Arbitrary product parameters in name/value format. You can use any names with one rule: **avoid dots in the parameter name** (e.g., "N. Size" is not valid). | See below |

**XML example:**
```xml
<parameters>
  <param>
    <name><![CDATA[Size]]></name>
    <value><![CDATA[XS, M, L, XL]]></value>
  </param>
  <param>
    <name><![CDATA[Material]]></name>
    <value><![CDATA[Cotton (80%), Polyester (20%)]]></value>
  </param>
</parameters>
```

**JSON example:**
```json
{
  "parameters": [
    {
      "name": "Size",
      "value": "XS, M, L, XL"
    },
    {
      "name": "Material",
      "value": "Cotton (80%), Polyester (20%)"
    }
  ]
}
```

## Complete Feed Examples

### Product Feed Example

**XML:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<items>
  <item>
    <identity>NH757A</identity>
    <title><![CDATA[Black Nike Shirt]]></title>
    <url>https://example.org/2172-black-nike-shirt</url>
    
    <availability>1</availability>
    <availability_rank>3</availability_rank>
    <availability_rank_text><![CDATA[In external warehouse / Ships within 5 days]]></availability_rank_text>
    
    <category primary="true"><![CDATA[Apparel | Men | Shirts]]></category>
    <category><![CDATA[Seasons | Summer | Shirts]]></category>
    <brand><![CDATA[Nike]]></brand>
    
    <price>$78.9</price>
    <price_old>$81.9</price_old>
    <price_eur>65 EUR</price_eur>
    <price_eur_old>67.50 EUR</price_eur_old>
    
    <image_link_s>https://example.org/images/thumbs/100x100/2172.png</image_link_s>
    <image_link_m>https://example.org/images/thumbs/200x200/2172.png</image_link_m>
    <image_link_l>https://example.org/images/thumbs/600x600/2172.png</image_link_l>
    
    <description><![CDATA[A nice & comfortable shirt. It's ok to use <strong>html tags</strong> in description.]]></description>
    <labels><![CDATA[Summer sale, Free shipping]]></labels>
    
    <product_code>NK8277S</product_code>
    <ean>8288881881818</ean>
    <to_cart_id>2172</to_cart_id>
    
    <margin>0.42</margin>
    <boost>1</boost>
    <introduced_at>2021-07-15</introduced_at>
    
    <parameters>
      <param>
        <name><![CDATA[Size]]></name>
        <value><![CDATA[XS, M, L, XL]]></value>
      </param>
      <param>
        <name><![CDATA[Material]]></name>
        <value><![CDATA[Cotton (80%), Polyester (20%)]]></value>
      </param>
    </parameters>
  </item>
  <!-- more products -->
</items>
```

**JSON:**
```json
{
  "items": [
    {
      "identity": "NH757A",
      "title": "Black Nike Shirt",
      "url": "https://example.org/2172-black-nike-shirt",
      
      "availability": 1,
      "availability_rank": 3,
      "availability_rank_text": "In external warehouse / Ships within 5 days",
      
      "category": [
        ["Apparel", "Men", "Shirts"],
        ["Seasons", "Summer", "Shirts"]
      ],
      "brand": "Nike",
      
      "price": "$78.9",
      "price_old": "$81.9",
      "price_eur": "65 EUR",
      "price_eur_old": "67.50 EUR",
      
      "image_link_s": "https://example.org/images/thumbs/100x100/2172.png",
      "image_link_m": "https://example.org/images/thumbs/200x200/2172.png",
      "image_link_l": "https://example.org/images/thumbs/600x600/2172.png",
      
      "description": "A nice & comfortable shirt. It's ok to use <strong>html tags</strong> in description.",
      "labels": "Summer sale, Free shipping",
      
      "product_code": "NK8277S",
      "ean": "8288881881818",
      "to_cart_id": "2172",
      
      "margin": 0.42,
      "boost": 1,
      "introduced_at": "2021-07-15",
      
      "parameters": [
        {
          "name": "Size",
          "value": "XS, M, L, XL"
        },
        {
          "name": "Material",
          "value": "Cotton (80%), Polyester (20%)"
        }
      ]
    }
  ]
}
```

### Category Feed Example

**XML:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<categories>
  <category>
    <identity>1</identity>
    <name>Shirts</name>
    <url>https://example.org/categories/shirts</url>
  </category>
  <category>
    <identity>2</identity>
    <name>Blazers</name>
    <url>https://example.org/categories/blazers-men</url>
    <hierarchy>Apparel | Men</hierarchy>
    <image_url>https://example.org/images/categories/blazers.png</image_url>
  </category>
  <category>
    <identity>3</identity>
    <name>Blazers</name>
    <url>https://example.org/categories/blazers-women</url>
    <hierarchy>Apparel | Women</hierarchy>
    <image_url>https://example.org/images/categories/blazers-women.png</image_url>
  </category>
</categories>
```

**JSON:**
```json
{
  "categories": [
    {
      "identity": "1",
      "name": "Shirts",
      "url": "https://example.org/categories/shirts"
    },
    {
      "identity": "2",
      "name": "Blazers",
      "url": "https://example.org/categories/blazers-men",
      "hierarchy": "Apparel | Men",
      "image_url": "https://example.org/images/categories/blazers.png"
    },
    {
      "identity": "3",
      "name": "Blazers",
      "url": "https://example.org/categories/blazers-women",
      "hierarchy": "Apparel | Women",
      "image_url": "https://example.org/images/categories/blazers-women.png"
    }
  ]
}
```

**Category Feed Fields:**

| Field Name | Type | Required | Description |
|:-----------|:-----|:---------|:------------|
| `identity` | String | ✓ | Category [Identity](/identity.html). |
| `name` | String | ✓ | Category name. |
| `url` | String | ✓ | Canonical URL pointing to category listing. This is where users go when they click on category suggestion in autocomplete. |
| `hierarchy` | String | | Category hierarchy where the `|` character serves as a delimiter and does **not include** the category itself (only the path to it). We will automatically convert the hierarchy into an array for displaying in the autocomplete UI. **Make sure the name + hierarchy matches the categories in the product feed.** |
| `image_url` | String | | URL pointing to an image to show in the autocomplete UI. Images should not be larger than 100x100 pixels. |

**Important notes about categories:**
- The feed must be **flat** - no nesting is allowed (no `<category>` nested in another `<category>` tag)
- If your categories are nested in a category tree, use the `hierarchy` tag to denote parent categories
- **The name + hierarchy must match exactly** with what you use in the product feed to ensure correct pairing

### Brand Feed Example

**XML:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<brands>
  <brand>
    <identity>7</identity>
    <name>NiceShirts</name>
    <url>https://example.org/brands/nice-shirts</url>
    <image_url>https://example.org/images/brands/niceshirts-logo.png</image_url>
  </brand>
  <brand>
    <identity>8</identity>
    <name>Blue</name>
    <url>https://example.org/brands/blue</url>
  </brand>
</brands>
```

**JSON:**
```json
{
  "brands": [
    {
      "identity": "7",
      "name": "NiceShirts",
      "url": "https://example.org/brands/nice-shirts",
      "image_url": "https://example.org/images/brands/niceshirts-logo.png"
    },
    {
      "identity": "8",
      "name": "Blue",
      "url": "https://example.org/brands/blue"
    }
  ]
}
```

**Brand Feed Fields:**

| Field Name | Type | Required | Description |
|:-----------|:-----|:---------|:------------|
| `identity` | String | ✓ | Brand [Identity](/identity.html). |
| `name` | String | ✓ | Brand name. **Must match the brand name used in the product feed.** |
| `url` | String | ✓ | Canonical URL pointing to brand listing. This is where users go when they click on brand suggestion in autocomplete. |
| `image_url` | String | | URL pointing to an image to show in the autocomplete UI. Images should not be larger than 100x100 pixels. |

### Article Feed Example

**XML:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<articles>
  <article>
    <identity>37271</identity>
    <name>Lorem ipsum title of the blog post</name>
    <annotation>Short description, perex</annotation>
    <text>Full text of the article goes here...</text>
    <url>https://example.org/article/blog-post-lorem</url>
  </article>
  <article>
    <identity>37272</identity>
    <name>Another blog post title</name>
    <annotation>Another short description</annotation>
    <text>Full text of this article...</text>
    <url>https://example.org/article/blog-post-ipsum</url>
  </article>
</articles>
```

**JSON:**
```json
{
  "articles": [
    {
      "identity": "37271",
      "name": "Lorem ipsum title of the blog post",
      "annotation": "Short description, perex",
      "text": "Full text of the article goes here...",
      "url": "https://example.org/article/blog-post-lorem"
    },
    {
      "identity": "37272",
      "name": "Another blog post title",
      "annotation": "Another short description",
      "text": "Full text of this article...",
      "url": "https://example.org/article/blog-post-ipsum"
    }
  ]
}
```

**Article Feed Fields:**

| Field Name | Type | Required | Description |
|:-----------|:-----|:---------|:------------|
| `identity` | String | ✓ | Article [Identity](/identity.html). |
| `name` | String | ✓ | Article name/title. |
| `url` | String | ✓ | Canonical URL pointing to the article. This is where users go when they click on article suggestion in autocomplete. |
| `annotation` | String | | Short annotation or perex of the article. |
| `text` | String | | Complete text of the article. |

## Category Hierarchy in Feeds

Understanding how to properly structure category hierarchies is crucial for accurate search results and navigation.

### How Categories Work in Feeds

Categories are handled using two separate feeds that work together:

1. **Product Feed**: Contains products with their full category paths using pipe (`|`) delimiter
2. **Category Feed**: Contains all categories with their hierarchical relationships

### Product Feed Category Structure

In your product feed, include the full category path from top-level to the most specific category:

**XML:**
```xml
<item>
  <identity>white-tshirt-123</identity>
  <title><![CDATA[White T-shirt]]></title>
  <url>/products/white-tshirt</url>
  <!-- Full category path: Top-level | Parent | Leaf -->
  <category primary="true"><![CDATA[Apparel | Men | T-shirts]]></category>
</item>
```

**JSON:**
```json
{
  "identity": "white-tshirt-123",
  "title": "White T-shirt",
  "url": "/products/white-tshirt",
  "category": [
    ["Apparel", "Men", "T-shirts"]
  ]
}
```

### Category Feed Structure

In your category feed, define each category with its `hierarchy` showing the path **to** it (not including itself):

**XML:**
```xml
<categories>
  <!-- Top-level category - no hierarchy -->
  <category>
    <identity>category-apparel</identity>
    <name>Apparel</name>
    <url>/categories/apparel</url>
  </category>
  
  <!-- Second-level category - hierarchy shows parent -->
  <category>
    <identity>category-men</identity>
    <name>Men</name>
    <url>/categories/