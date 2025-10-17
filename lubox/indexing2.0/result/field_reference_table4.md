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

The concepts and conventions described here apply specifically to [Feeds](/indexing/feeds.html) in XML,
JSON, or CSV format. If you're using the [Content Update API](/indexing/api.html), please refer to the
separate API data modeling guide.

## Quick Start: Minimal Example

Here's the simplest possible product you can index with just the required fields:

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

This is enough to make your product searchable. However, to unlock the full power of Luigi's Box,
you'll want to add more fields as described below.

## Feed Structure Guidelines

Luigi's Box is very flexible regarding feed structure and supports any valid XML, JSON or CSV file.
However, to make the processing easier (and reduce the time to integration), please follow these guidelines:

### Format Preferences

- **Preferred formats**: XML and JSON over CSV
- **XML specifics**:
  - Avoid using tag attributes. Instead of `<product id="123">...` use `<product><id>123</id></product>`
  - Keep the structure as flat as possible. Nesting tags is ok, but don't use complex nesting if possible
  - In many cases, nesting is unavoidable and it's acceptable
- **Field naming**: Name the attributes in a way that makes sense to you, there's no prescribed naming
  convention

### Common XML Issues to Avoid

These problems are frequently encountered when dealing with XML files. Avoiding them will make the process
much faster:

**1. No encoding of special characters (e.g., `&`)**

```xml
<!-- ✗ WRONG - Invalid XML -->
<title>Black & White</title>

<!-- ✓ CORRECT - Using entities -->
<title>Black &amp; White</title>

<!-- ✓ CORRECT - Using CDATA -->
<title><![CDATA[Black & White]]></title>
```

**2. Double encoding using both CDATA and entities**

```xml
<!-- ✗ WRONG - Double encoded, will display as "Black &amp; White" -->
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

Make sure that the feed contains all products that you have, **even those that are not in stock**.
For product attributes, it's useful to think about four aspects of the data in the feed:

### 1. Required Attributes

Luigi's Box only requires two attributes for each product: **title** and **URL**.  
They must be present in the feed for each product (the tag names do not matter) as the bare minimum.

### 2. Visual Attributes

Look at the product tile in the category listing and all the information that it shows.  
If you want the product tile in search results to show the same information, it must be present in
the feed.
This usually includes:

- Product image
- Product price
- Discounts
- Various labels

Keep in mind that some information is only visible under certain circumstances, so it's best to check
the code that renders the product tile and make sure that all information is included in the feed.

### 3. Behavioral Attributes

These attributes are not required to render the product tile, but they are essential for some features
related to the product tile. For example, if your product tile shows an "Add to cart" button, and this
button will trigger an XHR request which sends the internal product ID, make sure that this internal
ID is present in the feed.

### 4. Searchable Attributes

All attributes that your product should be findable by.  
E.g., if you want your products to be searchable by EAN, you must include product EAN code in the feed.
In this regard: **more is more**, and the more data you provide in the feed, the better the search
will be.

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
| `identity` | String | ✓ | Unique identifier for the object. Must match the identity reported by analytics events. See [Identity guide](/identity.html). | `NH757A` |
| `title` | String | ✓ | The primary display name of the object. Used as the title in autocomplete and search widgets. Must be properly encoded or wrapped in CDATA. | `<title><![CDATA[Black & Decker Drill]]></title>` |
| `url` | String | ✓ | Canonical URL of the object. Often a single product can have several URLs, use the canonical URL for the feed. | `https://example.org/products/drill-123` |

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

If your store uses 4 availability states: "In stock", "Ships within 7 days", "Ships within 14 days",
"Out of stock", then a good encoding would be:

- `1`: In stock (immediately available)
- `3`: Ships within 7 days
- `7`: Ships within 14 days
- `15`: Out of stock (unavailable)

```xml
<availability>1</availability>
<availability_rank>3</availability_rank>
<availability_rank_text><![CDATA[In external warehouse / Ships within 5 days]]></availability_rank_text>
```

### Ranking Signal Fields

| Field Name | Type | Required | Description | Example |
|:-----------|:-----|:---------|:------------|:--------|
| `boost` | Number | | Manual ranking boost for the product. Luigi's Box supports 3 boosting levels: `1`, `2`, and `3`. The higher the number, the stronger the boosting effect. Use judiciously to avoid interfering with the core ranking algorithm too much. Boosting can also be set up in the Luigi's Box application. | `1`, `2`, or `3` |
| `introduced_at` | Date | | Date/timestamp value in ISO 8601 format indicating the novelty of a product or when it started/will start to sell. Used to prefer newer items when sorting search results. If omitted, novelty is ignored. | `2021-07-15` or `2021-07-15T08:00:00Z` |
| `margin` | Number | | Relative profit margin of the product. Must be a float value between `<0, 1>` (e.g., `0.42` means 42% margin of product price). Used to prefer items with higher margin when sorting search results. If omitted, treated as if there is no margin. | `0.42` |

```xml
<boost>2</boost>
<introduced_at>2021-07-15</introduced_at>
<margin>0.42</margin>
```

### Category and Brand Fields

| Field Name | Type   | Required | Description | Example |
|:-----------|:-------|:---------|:------------|:--------|
| `category` | String |          | Product category with full hierarchy using pipe ( <code>&#124;</code> ) delimiter. **This exact category with hierarchy must appear in the category feed.** If the product is in multiple categories, use the `<category>` tag multiple times. For XML, mark the primary category with `primary="true"` attribute. For JSON, the first element in the array is treated as primary. | <code>&lt;category primary="true"&gt;&lt;![CDATA[Apparel &#124; Men &#124; Shirts]]&gt;&lt;/category&gt;</code> |
| `brand`    | String |          | Product brand. **This exact brand must appear in the brand feed.** | `Nike` |

```xml
<category primary="true"><![CDATA[Apparel | Men | Shirts]]></category>
<category><![CDATA[Seasons | Summer | Shirts]]></category>
```

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
| `product_code` | String | | SKU code. Based on experience, people often search for products using their codes, especially in B2B segments. | `NK8277S` |
| `ean` | String | | EAN barcode of the product, if available. | `8288881881818` |
| `to_cart_id` | String | | Internal ID of the product necessary for add-to-cart functionality. Include all attributes necessary to add product to cart. May not be applicable in all cases. See [Add to cart](/indexing/feeds.html#add-to-cart) for more details. | `2172` |

### Variant Fields

| Field Name | Type | Required | Description | Example |
|:-----------|:-----|:---------|:------------|:--------|
| `item_group_id` | String | | Links individual product variants together for variants search mode. All variants of the same product must share the same `item_group_id` and **must be listed consecutively** in the feed (no other products between them). See [Variants in the feed](/indexing/feeds.html#variants-in-the-feed). | `8272` |

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

```xml
<parameters>
  <param>
    <n><![CDATA[Size]]></n>
    <value><![CDATA[XS, M, L, XL]]></value>
  </param>
  <param>
    <n><![CDATA[Material]]></n>
    <value><![CDATA[Cotton (80%), Polyester (20%)]]></value>
  </param>
</parameters>
```

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
        <n><![CDATA[Size]]></n>
        <value><![CDATA[XS, M, L, XL]]></value>
      </param>
      <param>
        <n><![CDATA[Material]]></n>
        <value><![CDATA[Cotton (80%), Polyester (20%)]]></value>
      </param>
    </parameters>
  </item>
  <!-- more products -->
</items>
```

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

```xml
<?xml version="1.0" encoding="UTF-8"?>
<categories>
  <category>
    <identity>1</identity>
    <n>Shirts</n>
    <url>https://example.org/categories/shirts</url>
  </category>
  <category>
    <identity>2</identity>
    <n>Blazers</n>
    <url>https://example.org/categories/blazers-men</url>
    <hierarchy>Apparel | Men</hierarchy>
    <image_url>https://example.org/images/categories/blazers.png</image_url>
  </category>
  <category>
    <identity>3</identity>
    <n>Blazers</n>
    <url>https://example.org/categories/blazers-women</url>
    <hierarchy>Apparel | Women</hierarchy>
    <image_url>https://example.org/images/categories/blazers-women.png</image_url>
  </category>
</categories>
```

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
| `hierarchy` | String | | Category hierarchy where the `\|` character serves as a delimiter and does **not include** the category itself (only the path to it). Luigi's Box will automatically convert the hierarchy into an array for displaying in the autocomplete UI. **Make sure the name + hierarchy matches the categories in the product feed.** |
| `image_url` | String | | URL pointing to an image to show in the autocomplete UI. Images should not be larger than 100x100 pixels. |

**Important notes about categories:**

- The feed must be **flat** - no nesting is allowed (no `<category>` nested in another `<category>` tag)
- If your categories are nested in a category tree, use the `hierarchy` tag to denote parent categories
- **The name + hierarchy must match exactly** with what you use in the product feed to ensure correct pairing

### Brand Feed Example

```xml
<?xml version="1.0" encoding="UTF-8"?>
<brands>
  <brand>
    <identity>7</identity>
    <n>NiceShirts</n>
    <url>https://example.org/brands/nice-shirts</url>
    <image_url>https://example.org/images/brands/niceshirts-logo.png</image_url>
  </brand>
  <brand>
    <identity>8</identity>
    <n>Blue</n>
    <url>https://example.org/brands/blue</url>
  </brand>
</brands>
```

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

```xml
<?xml version="1.0" encoding="UTF-8"?>
<articles>
  <article>
    <identity>37271</identity>
    <n>Lorem ipsum title of the blog post</n>
    <annotation>Short description, perex</annotation>
    <text>Full text of the article goes here...</text>
    <url>https://example.org/article/blog-post-lorem</url>
  </article>
  <article>
    <identity>37272</identity>
    <n>Another blog post title</n>
    <annotation>Another short description</annotation>
    <text>Full text of this article...</text>
    <url>https://example.org/article/blog-post-ipsum</url>
  </article>
</articles>
```

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

```xml
<item>
  <identity>white-tshirt-123</identity>
  <title><![CDATA[White T-shirt]]></title>
  <url>/products/white-tshirt</url>
  <!-- Full category path: Top-level | Parent | Leaf -->
  <category primary="true"><![CDATA[Apparel | Men | T-shirts]]></category>
</item>
```

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

```xml
<categories>
  <!-- Top-level category - no hierarchy -->
  <category>
    <identity>category-apparel</identity>
    <n>Apparel</n>
    <url>/categories/apparel</url>
  </category>
  
  <!-- Second-level category - hierarchy shows parent -->
  <category>
    <identity>category-men</identity>
    <n>Men</n>
    <url>/categories/apparel/men</url>
    <hierarchy>Apparel</hierarchy>
  </category>
  
  <!-- Third-level category - hierarchy shows full path to it -->
  <category>
    <identity>category-t-shirts</identity>
    <n>T-shirts</n>
    <url>/categories/apparel/men/t-shirts</url>
    <hierarchy>Apparel | Men</hierarchy>
  </category>
</categories>
```

```json
{
  "categories": [
    {
      "identity": "category-apparel",
      "name": "Apparel",
      "url": "/categories/apparel"
    },
    {
      "identity": "category-men",
      "name": "Men",
      "url": "/categories/apparel/men",
      "hierarchy": "Apparel"
    },
    {
      "identity": "category-t-shirts",
      "name": "T-shirts",
      "url": "/categories/apparel/men/t-shirts",
      "hierarchy": "Apparel | Men"
    }
  ]
}
```

### Key Principles for Category Hierarchies

1. **Product feed contains full paths**: `Apparel | Men | T-shirts`
2. **Category feed contains path TO each category**: 
   - "Apparel" has no hierarchy (it's top-level)
   - "Men" has hierarchy `Apparel`
   - "T-shirts" has hierarchy `Apparel | Men`
3. **Exact matching is required**: The category name and hierarchy in the product feed must match exactly with the category feed

### Multiple Category Hierarchies

If a product belongs to multiple category paths, include all paths in the product feed:

```xml
<item>
  <identity>cheddar-cheese-456</identity>
  <title><![CDATA[Cheddar Cheese]]></title>
  <url>/products/cheddar-cheese</url>
  <category primary="true"><![CDATA[Dairy | Cow milk]]></category>
  <category><![CDATA[Wine | Snacks]]></category>
</item>
```

```json
{
  "identity": "cheddar-cheese-456",
  "title": "Cheddar Cheese",
  "url": "/products/cheddar-cheese",
  "category": [
    ["Dairy", "Cow milk"],
    ["Wine", "Snacks"]
  ]
}
```

The corresponding category feed would include all categories from both hierarchies:

```xml
<categories>
  <category>
    <identity>category-dairy</identity>
    <n>Dairy</n>
    <url>/categories/dairy</url>
  </category>
  <category>
    <identity>category-cow-milk</identity>
    <n>Cow milk</n>
    <url>/categories/dairy/cow-milk</url>
    <hierarchy>Dairy</hierarchy>
  </category>
  <category>
    <identity>category-wine</identity>
    <n>Wine</n>
    <url>/categories/wine</url>
  </category>
  <category>
    <identity>category-snacks</identity>
    <n>Snacks</n>
    <url>/categories/wine/snacks</url>
    <hierarchy>Wine</hierarchy>
  </category>
</categories>
```

```json
{
  "categories": [
    {
      "identity": "category-dairy",
      "name": "Dairy",
      "url": "/categories/dairy"
    },
    {
      "identity": "category-cow-milk",
      "name": "Cow milk",
      "url": "/categories/dairy/cow-milk",
      "hierarchy": "Dairy"
    },
    {
      "identity": "category-wine",
      "name": "Wine",
      "url": "/categories/wine"
    },
    {
      "identity": "category-snacks",
      "name": "Snacks",
      "url": "/categories/wine/snacks",
      "hierarchy": "Wine"
    }
  ]
}
```

## Product Variants in Feeds

For products that come in different variations (e.g., by size or color), Luigi's Box offers a "variants search" mode where individual variants are aggregated and only the best match for each variant group is shown.

### Requirements for Variant Search

To activate this feature:

1. Link individual variants using the `item_group_id` attribute
2. List all variants of the same product **consecutively** in the feed (no other products between them)

### Variant Feed Structure

```xml
<?xml version="1.0" encoding="UTF-8"?>
<items>
  <!-- First variant group -->
  <item>
    <identity>NH7636A</identity>
    <title>Black Nike Shirt</title>
    <url>https://example.org/2172-black-nike-shirt</url>
    <item_group_id>8272</item_group_id>
    <color>Black</color>
    <size>M</size>
    <availability>1</availability>
    <price>$45.00</price>
    <!-- other attributes -->
  </item>
  <item>
    <identity>NH7636B</identity>
    <title>White Nike Shirt</title>
    <url>https://example.org/2173-white-nike-shirt</url>
    <item_group_id>8272</item_group_id>
    <color>White</color>
    <size>M</size>
    <availability>1</availability>
    <price>$45.00</price>
  </item>
  <item>
    <identity>NH7636C</identity>
    <title>Red Nike Shirt</title>
    <url>https://example.org/2174-red-nike-shirt</url>
    <item_group_id>8272</item_group_id>
    <color>Red</color>
    <size>L</size>
    <availability>0</availability>
    <price>$45.00</price>
  </item>
  
  <!-- All variants with item_group_id=8272 must be listed together -->
  <!-- Now start a new variant group -->
  
  <item>
    <identity>NM2887A</identity>
    <title>Black Hoodie - Small</title>
    <url>https://example.org/2175-black-hoodie</url>
    <item_group_id>8273</item_group_id>
    <color>Black</color>
    <size>S</size>
    <availability>1</availability>
    <price>$65.00</price>
  </item>
  <item>
    <identity>NM2887B</identity>
    <title>Black Hoodie - Medium</title>
    <url>https://example.org/2176-black-hoodie-m</url>
    <item_group_id>8273</item_group_id>
    <color>Black</color>
    <size>M</size>
    <availability>1</availability>
    <price>$65.00</price>
  </item>
  <!-- more products/items -->
</items>
```

```json
{
  "items": [
    {
      "identity": "NH7636A",
      "title": "Black Nike Shirt",
      "url": "https://example.org/2172-black-nike-shirt",
      "item_group_id": "8272",
      "color": "Black",
      "size": "M",
      "availability": 1,
      "price": "$45.00"
    },
    {
      "identity": "NH7636B",
      "title": "White Nike Shirt",
      "url": "https://example.org/2173-white-nike-shirt",
      "item_group_id": "8272",
      "color": "White",
      "size": "M",
      "availability": 1,
      "price": "$45.00"
    },
    {
      "identity": "NH7636C",
      "title": "Red Nike Shirt",
      "url": "https://example.org/2174-red-nike-shirt",
      "item_group_id": "8272",
      "color": "Red",
      "size": "L",
      "availability": 0,
      "price": "$45.00"
    },
    {
      "identity": "NM2887A",
      "title": "Black Hoodie - Small",
      "url": "https://example.org/2175-black-hoodie",
      "item_group_id": "8273",
      "color": "Black",
      "size": "S",
      "availability": 1,
      "price": "$65.00"
    },
    {
      "identity": "NM2887B",
      "title": "Black Hoodie - Medium",
      "url": "https://example.org/2176-black-hoodie-m",
      "item_group_id": "8273",
      "color": "Black",
      "size": "M",
      "availability": 1,
      "price": "$65.00"
    }
  ]
}
```

### Variant Best Practices

- **Each variant needs a unique identity**: Even though they belong to the same product group, each variant must have its own unique `identity`
- **Keep variants together**: All variants with the same `item_group_id` must appear consecutively in the feed
- **Include distinguishing attributes**: Add fields like `color`, `size`, or other variant-specific attributes so users can distinguish between variants
- **Maintain consistent data**: All variants in a group should have similar base information (brand, category, description) but can differ in variant-specific attributes (color, size, availability, price)

## Common Mistakes and How to Avoid Them

### 1. Category Mismatch Between Feeds

**Problem:** Category in product feed doesn't match category feed exactly.

```xml
<!-- ✗ WRONG - Product feed -->
<category>Apparel | Men's | T-shirts</category>

<!-- Category feed -->
<category>
  <n>T-shirts</n>
  <hierarchy>Apparel | Men</hierarchy>
</category>
<!-- The "Men's" vs "Men" mismatch will break the pairing -->

<!-- ✓ CORRECT - Product feed -->
<category>Apparel | Men | T-shirts</category>

<!-- Category feed -->
<category>
  <n>T-shirts</n>
  <hierarchy>Apparel | Men</hierarchy>
</category>
```

### 2. Variants Not Listed Consecutively

```xml
<!-- ✗ WRONG - Variants separated by other products -->
<item>
  <identity>shirt-red-m</identity>
  <item_group_id>shirt-123</item_group_id>
</item>
<item>
  <identity>different-product</identity>
  <item_group_id>other-456</item_group_id>
</item>
<item>
  <identity>shirt-blue-m</identity>
  <item_group_id>shirt-123</item_group_id>
</item>

<!-- ✓ CORRECT - All variants together -->
<item>
  <identity>shirt-red-m</identity>
  <item_group_id>shirt-123</item_group_id>
</item>
<item>
  <identity>shirt-blue-m</identity>
  <item_group_id>shirt-123</item_group_id>
</item>
<item>
  <identity>different-product</identity>
  <item_group_id>other-456</item_group_id>
</item>
```

### 3. Inconsistent Data Types

**Problem:** Sending different data types for the same field across products.

```xml
<!-- ✗ WRONG - Mixing types -->
<item>
  <identity>prod-1</identity>
  <availability>1</availability>
  <margin>0.42</margin>
</item>
<item>
  <identity>prod-2</identity>
  <availability>yes</availability>  <!-- Should be 1 or 0 -->
  <margin>42%</margin>  <!-- Should be 0.42 -->
</item>

<!-- ✓ CORRECT - Consistent types -->
<item>
  <identity>prod-1</identity>
  <availability>1</availability>
  <margin>0.42</margin>
</item>
<item>
  <identity>prod-2</identity>
  <availability>1</availability>
  <margin>0.42</margin>
</item>
```

### 4. Using Dots in Parameter Names

```xml
<!-- ✗ WRONG -->
<parameters>
  <param>
    <n>N. Size</n>  <!-- Dots are not allowed -->
    <value>M</value>
  </param>
</parameters>

<!-- ✓ CORRECT -->
<parameters>
  <param>
    <n>Size</n>
    <value>M</value>
  </param>
</parameters>
```

### 5. Incorrect availability_rank Values

```xml
<!-- ✗ WRONG - Values outside allowed range -->
<availability_rank>20</availability_rank>  <!-- Max is 15 -->
<availability_rank>0</availability_rank>   <!-- Min is 1 -->

<!-- ✓ CORRECT -->
<availability_rank>1</availability_rank>   <!-- In stock -->
<availability_rank>7</availability_rank>   <!-- Ships in 7-14 days -->
<availability_rank>15</availability_rank>  <!-- Out of stock -->
```

### 6. Missing Primary Category Marker

```xml
<!-- ✗ WRONG - Multiple categories without primary marker in XML -->
<category>Apparel | Men | Shirts</category>
<category>Seasons | Summer | Shirts</category>

<!-- ✓ CORRECT - Primary category marked -->
<category primary="true">Apparel | Men | Shirts</category>
<category>Seasons | Summer | Shirts</category>
```

## Troubleshooting

### "My categories aren't showing up in search"

**Solution:** Verify that:
- The category name + hierarchy in the product feed exactly matches the category feed
- There are no extra spaces or different delimiters
- The pipe character (`|`) is used consistently with spaces around it

### "Prices aren't sorting correctly"

**Solution:** Ensure your price format is consistent and recognizable. Luigi's Box automatically extracts numeric values, but unusual formats may cause issues. Use standard formats like:
- `$45.00`
- `45.00 USD`
- `€45,00`
- `1 234,56 Kč`

### "Variants aren't grouping together"

**Solution:** Check that:
- All variants share the same `item_group_id`
- All variants with the same `item_group_id` appear consecutively in the feed
- There are no other products between variants of the same group

### "Special characters appearing incorrectly"

**Solution:** Use proper XML encoding:
- Wrap text in CDATA: `<title><![CDATA[Black & White]]></title>`
- Or use entities: `<title>Black &amp; White</title>`
- Never use both CDATA and entities together

### "Search results not updating"

**Solution:** Verify that:
- Your feed is accessible from the Luigi's Box servers
- The XML/JSON is valid (use an online validator)
- The `identity` values are unique and consistent with analytics events

## Using Existing Feeds

Luigi's Box can work with feeds you may already have for other services:

| Feed Type | Usability | Comments |
|-----------|-----------|----------|
| Heureka | No | Uses Heureka-specific categories and usually contains only a subset of products |
| Google Merchant | Yes | Usually usable, or requires slight modifications |
| Custom feeds | Contact us | Luigi's Box can process feeds in custom formats - contact support to discuss |

## Multiple Product Feeds

Luigi's Box can join and merge product data from several feeds to build full product data. This is useful when:

- Performance problems exist with taking a full data snapshot
- Multiple data stores need to be accessed
- Different data changes at different rates (e.g., static data vs. pricing)

### How It Works

Luigi's Box can combine up to 5 different feeds:

1. **One driving feed**: Contains the primary product data
2. **Up to 4 additional feeds**: Contains supplementary data that gets merged

### Requirements

- A single "join attribute" must be present in all feeds (typically product ID)
- The driving feed is processed first
- For each product, data from additional feeds is looked up and merged

### Example Use Case

**Driving feed** (regenerated daily):
- Product descriptions
- Images
- Product parameters
- Categories

**Additional feed** (regenerated hourly):
- Pricing
- Availability
- Stock levels

<div class="alert alert-warning">
Note: Luigi's Box currently does not support multiple driving feeds. The product database cannot be split into several driving feeds where each contains different products (e.g., 50% in one feed, 50% in another).
</div>

## Updating Data: Feeds vs API

While it is technically possible to provide product updates using both feeds and API simultaneously, this approach is **not recommended** as it will lead to subtle and hard-to-debug data discrepancies.

### Why This Causes Issues

The intuitive expectation might be to:
1. Provide Luigi's Box a feed with product data that processes periodically
2. Use the Partial Update API to update frequently changing attributes (pricing, availability) in real time

However, this leads to unexpected inconsistencies because:

- Feed processing is not instant - it takes time depending on the number of products
- The feed is a snapshot of data at download time
- While processing is in progress, API updates may occur
- The feed processing will then overwrite those API updates back to the old snapshot state
- Luigi's Box currently doesn't provide protection against this data inconsistency

### Recommended Alternatives

Instead of combining feeds and API:

1. **Increase feed processing frequency**: Process feeds more often (e.g., every 15 minutes instead of hourly)
2. **Split product data into multiple feeds**: Use the [multiple feeds feature](#multiple-product-feeds) to separate static data (updated daily) from dynamic data (updated hourly)
3. **Use API exclusively**: If real-time updates are critical, use the API for all data updates

## Performance Tips

### Optimal Feed Size

- **Sweet spot**: 10,000-50,000 products per feed processes efficiently
- **Large feeds** (100,000+ products): Consider splitting into multiple feeds by category or brand
- **Very large catalogs** (500,000+ products): Contact Luigi's Box support for optimization strategies

### Feed Processing Time

Factors that affect processing speed:
- Number of products
- Number of fields per product
- Complexity of category hierarchies
- Number of variants per product
- Image validation (if enabled)

### Reducing Processing Load

1. **Split static and dynamic data**: Put rarely-changing data in one feed (daily updates) and frequently-changing data in another (hourly updates)
2. **Use incremental updates**: If possible, provide only changed products rather than full catalog each time
3. **Optimize XML structure**: Keep the structure as flat as possible, avoid unnecessary nesting
4. **Compress feeds**: Use gzip compression for large feeds to reduce transfer time

## Additional Resources

- [Feeds Documentation](/indexing/feeds.html) - Complete feeds reference
- [Content Update API](/indexing/api.html) - API-based indexing alternative
- [Identity Guide](/identity.html) - Understanding product identities
- [Add to Cart](/lbx/requirements/add_to_cart.html) - Implementing cart functionality
- [Dynamic Pricing Solutions](/lbx/solutions/pricing_levels.html) - Handling complex pricing scenarios
- [Product Listing Pages (PLP)](/plp.html) - Category page search integration