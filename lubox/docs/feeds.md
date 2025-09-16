# Feeds

Each of your searchable types must have a separate feed in XML, JSON or CSV format. Before you start implementing the feeds, establish what data you will index and figure out the structure. Read the [Data layout](/indexing/data_layout.html) docs for guidelines.

<div class="row mt-4 mb-4">
  <div class="col-md-4">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title"><i class="bi bi-database-gear"></i> Data layout</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
        <p class="card-text">Structuring the data</p>
        <a href="/indexing/data_layout.html" class="card-link">Read the docs →</a>
      </div>
    </div>
  </div>
</div>

## Product feeds

Product feed is the source of data about your products and the quality of the data in the product feed will have the biggest impact on the search quality. There are 2 aspects of a product feed: structure and contents.

### Structure

We are very flexible regarding feed structure and support any valid XML, JSON or CSV file. However, to make the processing easier for us (and reduce the time to integration), please adhere to following guidelines:

- We prefer XML and JSON over CSV.
- If using XML, avoid using tag attributes. Instead of `<product id="123">...` use `<product><id>123</id></product>`
- If using XML, keep the structure as flat as possible. Nesting tags is ok, but don't use complex nesting if possible. In many cases, nesting is unavoidable and it's ok.
- Name the attributes in a way that makes sense to you, there's no prescribed naming convention.

We frequently encounter these common problems when dealing with XML files, if you can avoid these, it will make the process much faster:

- No encoding of special characters, e.g. `&`. Make sure that all special characters are encoded as entities, or escaped via `CDATA` directive.`<name>Black & White</name>` is not a valid XML. `<name>Black &amp; White</name>` or `<name><![CDATA[Black & White]]></name>` is valid.
- Double encoding of special character using both `CDATA` directive and entities. E.g., `<name><![CDATA[Black &amp; White]]></name>` is syntatically valid, but the `CDATA` directive will prevent special handling of XML entities, and the text will be parsed verbatim, in this case `Black &amp; White`. Use either `CDATA` or entities, not both,

### Contents

Make sure that the feed contains all products that you have, even those that are not in stock. For product attributes, it's useful to think about four aspects of the data in the feed:

- **Required attributes**: We only require two attributes for each product: title and URL. They must be present in the feed for each product (the tag names do not matter) as the bare minimum.
- **Visual attributes**: Look at the product tile in the category listing and all the information that it shows. If you want the product tile in search results to show the same information, it must be present in the feed. This usually includes product image, product price, discounts, various labels. Keep in mind that some information is only visible under certain circumstances, so it's best to check the code that renders the product tile and make sure that all information is included in the feed.
- **Behavioral attributes**: These attributes are not required to render the product tile, but they are essential for some features related to the product tile. For example, if your product tile shows an "Add to cart" button, and this button will trigger an XHR request which sends the internal product ID, make sure that this internal ID is present in the feed.
- **Searchable attributes**: All attributes that your product should be findable by. E.g., if you want your products to be searchable by EAN, you must include product EAN code in the feed. In this regard: more is more, and the more data you provide in the feed, the better the search will be.

### Luigi's Box product XML/JSON feed

> Examples of XML and JSON feeds if you are not using product variants

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
    <!-- If the product is in multiple categories, feel free to add each category+hierarchy as separate tag. -->
    <!-- Make sure that the primary category is marked with primary="true" attribute -->
    <category><![CDATA[Seasons | Summer | Shirts]]></category>
    <brand><![CDATA[Nike]]></brand>
    <price>$78.9</price>
    <price_old>$81.9</price_old>
    <price_eur>65 EUR</price_eur> <!-- Use only if you want to index prices in several currencies -->
    <price_eur_old>67.50 EUR</price_eur_old> <!-- Use only if you want to index prices in several currencies -->
    <image_link_s>https://example.org/images/thumbs/100x100/2172.png</image_link_s>
    <image_link_m>https://example.org/images/thumbs/200x200/2172.png</image_link_m>
    <image_link_l>https://example.org/images/thumbs/600x600/2172.png</image_link_l>
    <description><![CDATA[A nice & comfortable shirt. It's ok to use <strong>html tags</strong> in description, as long as you wrap the contents inside CDATA directive.]]></description>
    <labels><![CDATA[Summer sale, Free shipping]]></labels>
    <product_code>NK8277S</product_code>
    <ean>8288881881818</ean>
    <to_cart_id>2172</to_cart_id>
    <margin>0.42</margin>
    <boost>1</boost> <!-- You can control boosting via the boost tag -->
    <introduced_at>2021-07-15</introduced_at>
    <parameters>
      <param>
        <name><![CDATA[Size]]></name> <!-- avoid using dots in names, e.g. "N. Size" is not a valid name -->
        <value><![CDATA[XS, M, L, XL]]></value>
      </param>
      <param>
        <name><![CDATA[Material]]></name>
        <value><![CDATA[Cotton (80%), Polyester (20%)]]></value>
      </param>
    </parameters>
  </item>
  <!-- more products/items -->
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
      // first category hierarchy in array is treated as 'primary' category
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
    // more products/items
  ]
}
```

Luigi's Box accepts data from an arbitrary data feed structure, though to make the integration process smooth and fast, we recommend that you prepare the data in the Luigi's Box feed structure. Every ecommerce store is different, has different data and requirements, so keep the above information in mind when deciding what to put into the feed.

The Luigi's Box product feed format contains a set of required "tags" (attributes), which should be applicable regardless of the kind of products that you sell. For each product, you should also supply parameters in the flexible name/value format. You can use arbitrary names with a single rule - avoid dots in the parameter name.

| Attribute | Description |
|-----------|-------------|
| `identity` | Product [Identity](/identity.html)
| `title` | Product title, make sure the encode the title with entities if necessary, e.g. "Black &amp;amp; Decker" or simply wrap the data in CDATA directive. |
| `url` | Canonical URL of the product. Often a single product can have several URLs, use the canonical URL for this feed |
| `availability` | Binary attribute. 1 = Product is orderable, 0 = Product is not orderable. To distinguish variation in availability, use availability_rank attribute |
| `availability_rank` | Numeric, strictly within <1, 15>, which encodes the availability of the product. The higher the number, the less available the product is. If your store uses 4 availabilities: "In stock", "Ships within 7 days", "Ships within 14 days", "Out of stock", then a good encoding scheme for availability_rank would be 1, 3, 7, 15. For unavailable products, the `availability_rank` must be 15 and `availability: 0` (in case of inconsistent `availability_rank` and `availability`, rank has priority and `availability` will be automatically corrected). |
| `availability_rank_text` | The exact availability text as it should appear in the product tile, e.g. "Ships within 14 days" |
| `category` | Product category with full hierarchy. **This exact category with hierarchy must appear in the category feed.** If the product is categorized within multiple categories, simply use the `<category>` tag several times, for each hierarchy and mark the primary category with `primary="true"` attribute. For JSON feeds use array for categories (as in feed example), first category hierarchy will be treated as primary one. |
| `brand` | Product brand. **This exact brand must appear in the brand feed.** |
| `price` | The fully formatted price as you want it to appear in the product tile, including currency. This is the price for which the product is available for purchase. |
| `price_old` | If the product is in sale, then this is the original price. |
| `price_$currency` <span class="optional">optional</span>| The fully formatted price as you want it to appear in the product tile, in the specific $currency. E.g., if you need to display price in USD and EUR, include the "main" price in the `<price>` attribute, and the price in EUR in `<price_eur>`. Add as many per-currency prices as you need. |
| `price_$currency_old` <span class="optional">optional</span>| The same rules apply as for `<price_$currency>` tag. E.g., to include original price in EUR, use `<price_eur_old>` tag. |
| `image_link_s` <span class="optional">optional</span>| Link to the tiny image used for variants previews. Best size is around 100x100px |
| `image_link_m` <span class="optional">optional</span>| Link to the image suitable for autocomplete, around 200x200 px. |
| `image_link_l` | Link to image suitable for product tile in search results. Best size si 600x600 px. Use the same image that you use for rendering your present search result tile if possible. |
| `description` | Long-form description of the product. Feel free to use formatted HTML, but make sure it is correctly encoded, or enclosed in CDATA section. |
| `labels` | Comma separated list of labels, such as "Free shipping" or "Sale". |
| `product_code` | SKU code. Based on our experience, people often search for products using their codes, especially in B2B segments. |
| `ean` <span class="optional">optional</span> | EAN of the product, if you have it available. |
| `to_cart_id` <span class="optional">optional</span> | If you want the ability to add products to cart directly from search results page, make sure to include the internal ID of the product necessary. This may not be applicable in all cases, but include all attributes necessary to add product to cart. See [Add to cart](#add-to-cart) for more details. |
| `geo_location` <span class="optional">optional</span> | If you include this field, it must have a geo_point format "geo_location": { "lat": 49.0448, "lon": 18.553} - meaning the location of a product. If an object does not have this field, we treat it as if there is no location. This information is used to prefer items within certain distance from user when sorting search results. |
| `margin` <span class="optional">optional</span> | If you include this field, it must have a float value of <0;1> (e.g., 0.42) - meaning the relative margin (e.g., margin is 42% of product price). If an object does not have this field, we treat it as if there is no margin. This information is used to prefer items with higher margin when sorting search results. |
| `introduced_at` <span class="optional">optional</span> | If you include this field, it must have a date/timestamp value in ISO 8601 format - meaning the novelty of a product or a date when product will start / started to sell. If an object does not have this field, we ignore the novelty. When available, this information is used to prefer newer items when sorting search results. |
| `boost` <span class="optional">optional</span> | You can use the boost field to manage boosting level for a particular product. Luigi's Box support 3 boosting levels, encoded as 1, 2 and 3. The higher the number, the stronger the boosting effect. Use this field judiciously to avoid interfering with the core ranking algorithm too much. You can always set up boosting in the Luigi's Box application, boosting via feed data is primarily intended for synchronization purposes where you propagate boosting rules from another system. |
| `parameters`| Arbitrary product parameters in name/value format |

<div class="row mt-4 mb-4">
  <div class="col-md-4">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title"><i class="bi bi-signpost-2"></i> Splitting product data into several feeds</h5>
        <a href="#multiple-product-feeds" class="card-link">Read more →</a>
      </div>
    </div>
  </div>
</div>

### Variants in the feed

Lugi's Box Search has a mode called "variants search", where we aggregate individual variants, and only show best match for each variant group. To activate this feature, we require that the individual variants are linked in the feed using item_group_id attribute and that they are listed in the feed together, i.e., they go one after another without being separated by any other unrelated product.

Example of XML/JSON feed if you are using product variants

```xml
<?xml version="1.0" encoding="UTF-8"?>
<items>
  <!-- Each item contains extra item_group_id attribute which links variants -->
  <item>
    <identity>NH7636A</identity>
    <title>Black Nike Shirt</title>
    <url>https://example.org/2172-black-nike-shirt</url>
    <item_group_id>8272</item_group_id>
    <!-- other attributes, excluded for brevity -->
  </item>
  <item>
    <identity>NH7636B</identity>
    <title>White Nike Shirt</title>
    <url>https://example.org/2173-white-nike-shirt</url>
    <item_group_id>8272</item_group_id>
  </item>
  <item>
    <identity>NH7636C</identity>
    <title>Red Nike Shirt</title>
    <url>https://example.org/2ii174-red-nike-shirt</url>
    <item_group_id>8272</item_group_id>
  </item>
  <!-- All variants of the same product MUST follow each other, variant by variant in the feed -->
  <item>
    <identity>NM2887A</identity>
    <title>Black Hoodie</title>
    <url>https://example.org/2175-black-hoodie</url>
    <item_group_id>8273</item_group_id>
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
      "item_group_id": "8272"
      // other attributes, excluded for brevity
    },
    {
      "identity": "NH7636B",
      "title": "White Nike Shirt",
      "url": "https://example.org/2173-white-nike-shirt",
      "item_group_id": "8272"
    },
    {
      "identity": "NH7636C",
      "title": "Red Nike Shirt",
      "url": "https://example.org/2ii174-red-nike-shirt",
      "item_group_id": "8272"
    },
    // All variants of the same product MUST follow each other, variant by variant in the feed
    {
      "identity": "NM2887A",
      "title": "Black Hoodie",
      "url": "https://example.org/2175-black-hoodie",
      "item_group_id": "8273"
    }
    // more products/items
  ]
}
```

<div class="clear"></div>

### Your existing feeds

You may already have some data feeds ready that you use elsewhere and they may be useable for search. Below is a table of feeds that we frequently encounter and their usability.

| Type | Usable | Comments |
|------|--------|----------|
| Heureka | No | Uses heureka-specific categories and usually contains only a subset of products |
| Google Merchant | Yes | Usually usable, or requires slight modifications |

## Category feeds

> This feed lives on your site, e.g. at `https://example.org/feeds/categories.xml`

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
  </category>
  <category>
    <identity>3</identity>
    <name>Blazers</name>
    <url>https://example.org/categories/blazers-women</url>
    <hierarchy>Apparel | Women</hierarchy>
  </category>
  <!-- more categories -->
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
      "hierarchy": "Apparel | Men"
    },
    {
      "identity": "3",
      "name": "Blazers",
      "url": "https://example.org/categories/blazers-women",
      "hierarchy": "Apparel | Women"
    }
    // more categories
  ]
}
```

Category feeds are simpler than product feeds and we only require 2 attributes: title and URL.

The feed must be flat, no nesting is allowed (i.e., `<category>` nested in another `<category>` tag). If your categories are nested in a category tree, use a separate `hierarchy` tag to denote parent categories. **Make sure that the name + hierarchy matches the categories that you use in the product feed to ensure correct pairing.**

Attribute     | Description
--------------|-----------------------
`identity`<span class="required">REQUIRED</span> | Category [Identity](/identity.html).
`name`<span class="required">REQUIRED</span> | Category name.
`url`<span class="required">REQUIRED</span> | Canonical URL pointing to category listing. This is the URL where you want to take your users when they click on category suggestion in autocomplete.
`hierarchy`<span class="required">REQUIRED</span> | Category hierarchy, where the &#124; character serves as a category delimiter and does not include the category itself (only the path to it). We will automatically convert the hierarchy into an array that you can use to display category hierarchy in the autocomplete UI.
`image_url`<span class="optional">optional</span> | URL pointing to an image to show in the autocomplete UI. Make sure that the image is sized appropriately. We recommend that the images are not larger than 100x100 pixels.

We can also process feeds in other formats (even your custom format), contact us to discuss.


## Brand feeds

> This feed lives on your site, e.g. at `https://example.org/feeds/brands.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<brands>
  <brand>
    <identity>7</identity>
    <name>NiceShirts</name>
    <url>https://example.org/brands/nice-shirts</url>
  </brand>
  <brand>
    <identity>8</identity>
    <name>Blue</name>
    <url>https://example.org/brands/blue</url>
  </brand>
  <!-- more brands -->
</brands>
```
```json
{
  "brands": [
    {
      "identity": "7",
      "name": "NiceShirts",
      "url": "https://example.org/brands/nice-shirts"
    },
    {
      "identity": "8",
      "name": "Blue",
      "url": "https://example.org/brands/blue"
    }
    // more brands
  ]
}
```


Brand feeds are very similar to categories. **Make sure that the brand name matches the brand that you use in the product feed to ensure correct pairing.**

Attribute     | Description
--------------|-----------------------
`identity`<span class="required">REQUIRED</span> | Brand [Identity](/identity.html).
`name`<span class="required">REQUIRED</span> | Brand name.
`url`<span class="required">REQUIRED</span> | Canonical URL pointing to brand listing. This is the URL where you want to take your users when they click on brand suggestion in autocomplete.
`image_url`<span class="optional">optional</span> | URL pointing to an image to show in the autocomplete UI. Make sure that the image is sized appropriately. We recommend that the images are not larger than 100x100 pixels.


## Articles feeds

> This feed lives on your site, e.g. at `https://example.org/feeds/articles.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<articles>
  <article>
    <identity>37271</identity>
    <name>Lorem ipsum title of the blog post</name>
    <annotation>Short description, perex</annotation>
    <text>Text of the article</text>
    <url>https://example.org/article/blog-post-lorem</url>
  </article>
  <article>
    <identity>37272</identity>
    <name>Lorem ipsum title of the article</name>
    <annotation>Short description, perex</annotation>
    <text>Text of the article</text>
    <url>https://example.org/brands/blog-post-ipsum</url>
  </article>
  <!-- more articles -->
</articles>
```
```json
{
  "articles": [
    {
      "identity": "37271",
      "name": "Lorem ipsum title of the blog post",
      "annotation": "Short description, perex",
      "text": "Text of the article",
      "url": "https://example.org/article/blog-post-lorem"
    },
    {
      "identity": "37272",
      "name": "Lorem ipsum title of the article",
      "annotation": "Short description, perex",
      "text": "Text of the article",
      "url": "https://example.org/brands/blog-post-ipsum"
    }
    // more articles
  ]
}
```

Articles feeds are very similar to categories and brands.

Attribute     | Description
--------------|-----------------------
`identity`<span class="required">REQUIRED</span> | Article [Identity](/identity.html).
`name`<span class="required">REQUIRED</span> | Article name.
`url`<span class="required">REQUIRED</span> | Canonical URL pointing to the article. This is the URL where you want to take your users when they click on article suggestion in autocomplete.
`annotation`<span class="optional">optional</span> | Short annotation or perex of the article.
`text`<span class="optional">optional</span> | Complete text of the article.

We can also process feeds in other formats (even your custom format), contact us to discuss.

# Add to cart

If you are planning to use managed Luigi's Box Search interface and want to enable "Add to cart" functionality directly from the search results page, we need an "interface" on your side to manage the actual adding to cart and any UI interaction it involves.

Please refer to the solution below for more detail.

<div class="row mt-4 mb-4">
  <div class="col-md-4">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title"><i class="bi bi-signpost-2"></i> Add to cart</h5>
        <a href="/lbx/requirements/add_to_cart.html" class="card-link">Read more →</a>
      </div>
    </div>
  </div>
</div>

# Dynamic pricing

If your store uses dynamic pricing, i.e. different users may see different pricing for the same product, refer to the solutions below. Depending on the complexity of your scenario, you may need to provide all of the pricing data, or implement a pricing API.

<div class="row mt-4 mb-4">
  <div class="col-md-4">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title"><i class="bi bi-signpost-2"></i> Pricing levels</h5>
        <p class="card-text">If you are using up to 20 pricing levels</p>
        <a href="/lbx/solutions/pricing_levels.html" class="card-link">Read more →</a>
      </div>
    </div>
  </div>

  <div class="col-md-4">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title"><i class="bi bi-signpost-2"></i> Pricing API</h5>
        <p class="card-text">For complex pricing scenarios</p>
        <a href="/lbx/solutions/pricing_api.html" class="card-link">Read more →</a>
      </div>
    </div>
  </div>
</div>

# Multiple product feeds

Luigi's Box is able to join and merge product data from several feeds to build the full product data. There are many situations when exporting a single product feed with all of the data may be problematic, either because of performance problems associated with taking a full data snapshot, or with limitations when accessing multiple data stores on your side.

To use the feature, you need to prepare a single driving feed and then up to 4 additional feeds. Lugi's Box will then process the driving feed and for each product, lookup and merge product data from the additional feeds.

Usually the driving feed will contain product data that is not changing frequently, such as product descriptions, link to images or product parameters. To save performance on your side, you may only regenerate this feeds once per day. The dynamic data, such as pricing or availability will be present in the second feed, which you will regenerate hourly.

Luigi's Box can combine up to 5 different feeds to build full product data. The feature depends on a single "join attribute" being present in the driving feed and in all of the joined feeds. This "join attribute" can be an arbitrary attribute that will be used to uniquely identify and match product data across all feeds. Most frequently, you will use product ID.

<div class="alert alert-info">
Note that Luigi's Box currently does not support multiple driving feeds. You cannot split your full product database into several driving feeds, each containing full product data, i.e. first feed contains 50% products and second feed the other 50%.
</div>

# Updating data via feeds and API simultaniously

While it is technically possible to provide product updates using feeds and API at the same time, it is an approach that we do not recommend as it will lead to subtle and hard-to-debug data discrepancies. The intuitive expectation is that you may be able to provide Luigi's Box a feed with the product data that will be processed periodically and then you will use the Partial update API to update frequently changing product attributes such as pricing or availability in real time.

This approach will however, lead to unexpected data inconsistencies. The feed processing is not instant, but rather takes some time depending on the number of products, structure of the data and other factors. The feed processing mechanism downloads the feed &mdash; a snapshot of your data at the time of the download &mdash; and processes it product by product. It is possible that you update the product using API and then minutes later, the feed processing mechanism which is in progress will overwrite the product data back to the state that it was found in the feed at the time of the download. Luigi's Box currently doesn't provide any protection against this kind of data inconsistency so the combination of feeds and API is best avoided.

As an alternative to this combination, you may consider simply increasing feeds processing frequency, possibly combined with [splitting product data into several feeds](#multiple-product-feeds) to decrease the load on your side.