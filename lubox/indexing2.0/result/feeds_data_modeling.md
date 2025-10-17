# Feeds Data Modeling Guide

This guide explains how to structure your **Feeds** (XML, JSON, or CSV) for Luigi’s Box. Think of feeds as snapshots of your catalog — they define what gets indexed and how it appears in search.

If you’re new to data modeling, start with the [Data Layout Guide](/indexing/data_layout.html) for general principles.

---

## 1. Feed Types

Each searchable type has its own feed. All follow similar principles but contain different attributes.

| Feed Type | Description |
|------------|--------------|
| **Product Feed** | The main feed — contains your products, prices, images, and availability. |
| **Category Feed** | Lists all categories and their hierarchies. |
| **Brand Feed** | Lists brands available in your catalog. |
| **Article Feed** | Lists articles or blog posts. |

---

## 2. Product Feed

Your product feed is the most important one. It drives how products appear and rank in search.

### Structure

We accept any valid XML, JSON, or CSV structure. To keep processing fast and smooth:

- Prefer **XML or JSON** over CSV.
- Avoid XML tag attributes (use `<id>123</id>` instead of `<product id="123">`).
- Keep structure flat when possible.
- Always encode special characters: use `&amp;` or wrap text in `CDATA`.

#### Common XML Issues

```xml
<!-- ❌ Wrong -->
<title>Black & White</title>

<!-- ✅ Correct -->
<title>Black &amp; White</title>
<!-- or -->
<title><![CDATA[Black & White]]></title>
```

Use either entities **or** CDATA — not both.

### Required Fields

| Field | Type | Required | Description |
|:------|:------|:---------|:------------|
| `identity` | String | ✓ | Unique product ID matching analytics events. |
| `title` | String | ✓ | Product title. Use CDATA or entities if needed. |
| `url` | String | ✓ | Canonical product URL. |

### Recommended Fields

| Field | Type | Description |
|:------|:------|:------------|
| `image_link_s`, `image_link_m`, `image_link_l` | String | Small, medium, and large product images. Use ~100×100px, ~200×200px, ~600×600px. |
| `description` | String | Full product description (HTML allowed inside CDATA). |
| `labels` | String | Comma-separated product badges (e.g., `Sale, Free shipping`). |
| `availability` | Number | `1` = available, `0` = not available. |
| `availability_rank` | Number | Range `1–15`. Lower means more available. Use for nuanced availability states. |
| `availability_rank_text` | String | User-facing availability note (`Ships within 5 days`). |
| `category` | String | Full category path using `|` as a separator. Must match entries in the Category Feed. |
| `brand` | String | Product brand. Must match entries in the Brand Feed. |
| `price` | String | Formatted price (`€19.99`, `$25`, `65 EUR`). |
| `price_old` | String | Original price before discount. |
| `price_*` | String | Multi-currency field (`price_eur`, `price_usd`). |
| `price_*_old` | String | Original multi-currency price before discount. |
| `margin` | Number | Relative margin (`0.42` = 42%). Used for ranking. |
| `boost` | Number | Manual ranking boost (`1–3`). Higher = stronger boost. |
| `introduced_at` | Date | ISO 8601 date when product was introduced. |
| `geo_location` | Object | Geographic coordinates `{ "lat": 49.04, "lon": 18.55 }`. |
| `product_code` | String | SKU code. Often used in B2B search. |
| `ean` | String | EAN barcode. |
| `to_cart_id` | String | Internal ID for Add to Cart integration. |
| `parameters` | Array | Name/value pairs of product parameters. |

### Example (XML)

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
    <brand><![CDATA[Nike]]></brand>
    <price>$78.9</price>
    <price_old>$81.9</price_old>
    <image_link_l>https://example.org/images/thumbs/600x600/2172.png</image_link_l>
    <labels><![CDATA[Summer sale, Free shipping]]></labels>
    <margin>0.42</margin>
    <boost>1</boost>
    <introduced_at>2021-07-15</introduced_at>
  </item>
</items>
```

### Example (JSON)

```json
{
  "items": [
    {
      "identity": "NH757A",
      "title": "Black Nike Shirt",
      "url": "https://example.org/2172-black-nike-shirt",
      "availability": 1,
      "availability_rank": 3,
      "availability_rank_text": "Ships within 5 days",
      "category": [["Apparel", "Men", "Shirts"]],
      "brand": "Nike",
      "price": "$78.9",
      "price_old": "$81.9",
      "margin": 0.42,
      "boost": 1,
      "introduced_at": "2021-07-15"
    }
  ]
}
```

---

## 3. Variants in the Feed

If you have product variants (e.g., size or color), link them using `item_group_id`. Variants must follow each other in the feed.

```xml
<item>
  <identity>NH7636A</identity>
  <title>Black Nike Shirt</title>
  <item_group_id>8272</item_group_id>
</item>
<item>
  <identity>NH7636B</identity>
  <title>White Nike Shirt</title>
  <item_group_id>8272</item_group_id>
</item>
```

---

## 4. Category Feed

Each category must appear once, flat (no nested `<category>` tags). The `hierarchy` field defines the path to the category (not including the category itself).

### Required Fields

| Field | Type | Required | Description |
|:------|:------|:---------|:------------|
| `identity` | String | ✓ | Unique category ID. |
| `name` | String | ✓ | Category name. |
| `url` | String | ✓ | Category page URL. |
| `hierarchy` | String | | Parent categories separated by `|` (e.g., `Apparel | Men`). |
| `image_url` | String | | Optional category image (max 100×100px). |

### Example

```xml
<categories>
  <category>
    <identity>2</identity>
    <name>Blazers</name>
    <url>https://example.org/categories/blazers-men</url>
    <hierarchy>Apparel | Men</hierarchy>
  </category>
</categories>
```

---

## 5. Brand Feed

Keep brand names identical to what’s used in the product feed.

| Field | Type | Required | Description |
|:------|:------|:---------|:------------|
| `identity` | String | ✓ | Unique brand ID. |
| `name` | String | ✓ | Brand name. |
| `url` | String | ✓ | Canonical brand page URL. |
| `image_url` | String | | Optional brand logo (max 100×100px). |

---

## 6. Article Feed

Use for content or blog posts.

| Field | Type | Required | Description |
|:------|:------|:---------|:------------|
| `identity` | String | ✓ | Unique article ID. |
| `name` | String | ✓ | Article title. |
| `url` | String | ✓ | Article page URL. |
| `annotation` | String | | Short description or teaser. |
| `text` | String | | Full article content. |

---

## 7. Field Naming Rules

Keep field names consistent across all feeds.

| Do | Don’t |
|----|--------|
| `screen_size`, `price_eur`, `brand_name` | `ScreenSize`, `price[eur]`, `product.color` |
| Use lowercase + underscores | Avoid dots, spaces, and brackets |
| Use plural for lists: `tags`, `sizes` |  |

---

## 8. Advanced Topics

### Add to Cart

If you plan to allow adding products directly from search results, include the `to_cart_id` in your feed and implement the interface described in [Add to Cart docs](/lbx/requirements/add_to_cart.html).

### Dynamic Pricing

If your pricing changes per user or segment, see [Pricing Levels](/lbx/solutions/pricing_levels.html) and [Pricing API](/lbx/solutions/pricing_api.html).

### Multiple Product Feeds

Luigi’s Box can merge up to **5 feeds** into one dataset. You’ll need:
- One **driving feed** with stable product data (descriptions, parameters).
- Up to four **additional feeds** for dynamic attributes (price, stock, etc.).

Each feed must share a **join attribute** (usually product ID).

### Feeds + API Together

Avoid mixing feeds and API updates for the same products. Feeds process asynchronously, and updates may overwrite each other. Instead, increase feed frequency or split data into smaller feeds.

---

**Next steps:**
- [Data Layout & Modeling Guide](/indexing/data_layout.html)
- [Feeds Setup Guide](/indexing/feeds.html)
- [Content Update API](/indexing/api.html)

