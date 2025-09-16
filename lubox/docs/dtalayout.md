# Data layout

Luigi's Box is built using the "convention over configuration" concept. There
are not many configuration options available to you as the API implementator,
but instead, the APIs expect you to index the data in the specific format and
naming convention. If you adhere to these conventions, you will get better
quality of the results and recommendations as opposed to when you provide data
in a random structure.

The concepts, conventions and naming listed here apply to all of the indexing
methods, regardless of whether you are using [Feeds](/indexing/feeds.html) or
[API](/indexing/api.html).

# Your data

The data that you store in Luigi's Box takes form of key-value pairs. The key is the attribute name, such as "Length" and the value is an arbitrary data which fits into one of the Luigi's Box supported [Data types](#data-types).

When naming the keys (attributes), use lowercase, uppercase letters and spaces. E.g., attribute name "Neck width" is perfectly valid. Avoid using dots `.` and brackets `[]` in the attribute names as they may interfere with how you are accessing data in the output JSON structure (note that bot dot and brackets have special interpretation in JSON).

Luigi's Box supports storing arrays of values (in fact, all of the data is [stored as arrays internally](#output-data-structure)). To index an array via [API](/indexing/api.html) use the array notation in JSON, e.g.

```json
{
  "identity": 827827,
  "fields": {
    "title": "Shirt",
    "Fit": ["Regular", "Slim"]
  }
}
```

To index an array via feeds, repeat the XML tag, e.g.

```xml
<product>
  <identity>827827</identity>
  <title>Shirt</title>
  <Fit>Regular</Fit>
  <Fit>Slim</Fit>
</product>
```

# What should be included in the data?

In general the data you index should include the attributes that:

- Make the objects findable. The attributes that make the objects findable will usually be titles, product codes, EAN codes, SKUs, categories, brands, descriptions (annotations) and product parameters. 
- Allow you to render the product tile. This will usually be data like product labels or delivery dates. This data may usually not impact findability, but you may need it to render the product tile, if you want to avoid additional round-trip to your internal database to fetch the missing data.
- Affect the [Ranking](/search/ranking.html). See the [Special fields](#special-fields) for more information.
- Allow your end-users to filter the data using the facets. This will usually be product parameters.

Consider what makes sense from the perspective of your business. In general, the more (wide) data you index, the better the findability of your data will be. Remember that search is a long tail, most of the phrases are unique and very specific.

# Special fields

There are several fields which have special behavior:

Field name       | Description
-----------------|-------------------------
`title`          | Required field. If you are using our [Autocomplete widget](/autocomplete/autocomplete_js.html), the `title` field will be automatically used by the widget as the result title.
`web_url`        | URL of the object on the web. See [Web URL](#special-fields-web-url) for more details.
`availability`   | If you send this field, it must have numeric value of 1 - meaning the product is available or 0 - product is unavailable. We are automatically sorting available results first. If an object does not have this field, we treat it as if it was available.
`availability_rank` | This is a more advanced and granular version of the `availability` field. See [Availability rank](#special-fields-availability-rank) for more details.
 `availability_rank_text` | The exact availability text as it should appear in the product tile, e.g. "Ships within 14 days" |
`_*`             | Any attributes starting with underscore character `_` are treated as hidden. They are searchable, but we will not expose them in API responses. This is useful if you don't want to expose some private attributes to the world, but still want to be able to search them.
`price*`         | The `price` attribute should be a fully formatted string, including currency. Feel free to use formatting that is acceptable for the specific locale where the price will be displayed. Some valid values for `price` attribute are `1,232.60 €`, `kr12,341` or `8 129 zł`. When we encounter a `price` attribute, we will do a best-effort extraction of a corresponding float value into a field called `price_amount`. If you are using an unusual price format or you want to have complete control over the extracted value, send the `price_amount` as part of the payload. When we encounter an existing `_amount` field, the auto-extraction will be skipped. Note that this behavior also applies to any field starting with `price_` prefix, e.g., `price_eur`, or `price_czk`. For every `price_`-prefixed field, a corresponding `_amount` field will be auto-extracted, unless you send its value explicitely, e.g. `price_eur_amount` or `price_czk_amount`.
`geo_*`             | Any attributes starting with `geo_` are considered as geographical location points, e.g., `"geo_location" => {"lat" => 49.0448, "lon" => 18.5530}`. If possible, use `geo_location` name as your first choice.
`image_link`     | Picked by our autocomplete.js, search.js and recco.js libraries to show an image for this record.
`_margin`        | If you send this field, it must have a float value of <0;1> (e.g., 0.42) - meaning the relative margin (e.g., margin is 42% of product price). If an object does not have this field, we treat it as if there is no margin. This information is used to prefer items with higher margin when sorting search results.
`introduced_at`        | Date when the product was added. This serves as a ranking signal. See [Introduced at](#special-fields-introduced-at) for more details.
`boost` | Boost the product in the ranking. See [Boosting](#special-fields-boost) for more details.
`_category` | Reserved. Do not use. The field is used for internal purposes.

## Web URL

The `web_url` attribute specifies the URL to the object (product, category, brand, article, etc.) at which it can be accessed on the website.

Luigi's Box standard libraries ([Search.js](/search/search_js.html), [Autocomplete.js](/autocomplete/autocomplete_js.html) and [Recco.js](/recommendations/recco_js.html)) use this attribute to render links in the HTML code. If you are using these libraries and do not set `web_url`, the libraries will fallback to the [Identity](/identity.html) as URL. If you are using immutable identities such as IDs as we recommend, then you must set the `web_url` for the links to work properly.

## Availability rank

While `availability` is binary &mdash; a product is either available or not, `availability_rank` allows you to encode various availability "degrees". If you send this field, it must have a numeric value between 1 and 15. The semantics of this field is that the lower the number, the more available the product. It is up to you to devise an encoding between your domain availability semantics and `availability_rank` field.

For example, you may set `availability_rank: 1` for products which are ready for immediate shipment, `availability_rank: 2` for products which will ship within 2 days,  `availability_rank: 3` for products which will ship within a week and `availability_rank: 15` for products which are no longer available. Luigi's Box is automatically sorting "more available" results first.

In case you set inconsistent `availability_rank` and `availability` values, `availability_rank` takes priority and `availability` will be automatically corrected.

## Margin

Margin has an effect on the ranking. Once you start indexing a margin attribute, Luigi's Box rankers will pick it up automatically and use it to affect the sorting of the products. See [Ranking by margin](/search/ranking.html#influencing-ranking-ranking-by-margin) for more details.

The field must have a float value of <0;1> (e.g., 0.42) - meaning the relative margin (e.g., margin is 42% of product price). If an object does not have this field, we treat it as if there is no margin.

## Introduced at

The `introduced_at` field must have a date/timestamp value in the ISO 8601 format. This field represents the novelty of a product &emdash; the date when the product will start / started to sell. When available, this information is used to prefer newer items when sorting search results.

The table below summarizes the different ISO 8601 options that you can use to format the date.

&nbsp;   |  &nbsp;
---------|---------
`2023-11-23` | Just the date part, without time information
`2023-11-23T06:27:19Z` | Date and time in UTC
`2023-11-23T06:27:19+02:00` | Date and time in specific timezone

See [Ranking by freshness](/search/ranking.html#influencing-ranking-ranking-by-freshness) for more details about the effect on ranking.

## Boost

Use the `boost` field to manage boosting level for a particular object. Luigi's Box supports 3 boosting levels, encoded as 1, 2 and 3. The higher the number, the stronger the boosting effect. Use this field judiciously to avoid interfering with the core ranking algorithm too much. You can always set up boosting in the Luigi's Box application, boosting via feed data is primarily intended for synchronization purposes where you propagate boosting rules from another system.

See [Boosting](/search/ranking.html#influencing-ranking-boosting) for more details about the effect on ranking.

# Searchable fields

Everything you index is searchable by default. If you don't want some attribute
to be searchable, we recommend that you simply do not index it. For the cases
where you need to index an attribute and at the same time ensure that is not
used for searching, contact our support.

# Hidden fields

The APIs will return all indexed attributes by default. If you want to index an
attribute but do not want to expose it in the API responses, because it
contains sensitive information, simply prefix the attribute name with an
underscore character, e.g. `_margin`. Margin is a good example of this concept.
You may want to index the margin because you want to setup the search to prefer
products where your margin is higher, but at the same time, you do not want to
expose the margin data publicly in the API responses.

# Data types

Luigi's Box is using these data types internally:

- text
- numeric
- boolean
- date

The type of the attribute is automatically inferred based on the first
attribute value that we see. Once we infer the attribute type, it cannot be
changed using API. Contact us via support if you need help with changing a data
type.

# Output data structure

All attributes will be returned as arrays in the various APIs, even if you
indexed them as scalars. This may be surprising at the first sight, but will
lead to a simpler data management in the long run. You can freely switch from
scalar to arrays without worrying about the API consumers who are already
treating all data as arrays.

The only exception to this rule are the following attributes, which are stored as scalars:

- title
- price
- price_old
- price_amount
- price_old_amount
- availability
- availability_rank
- description
- item_id
- boost
- image_link

# Derived fields

The data processing pipeline will derive some attributes in the background.
These attributes will appear in the data you get from the APIs and you can use
them as any other attributes. The automatically derived attributes are:

- `_count` attributes
- `category_lvl_1`, `category_lvl_2`, ..., `category_lvl_5` which represent product category titles at the respective levels in the nesting hierarchy
