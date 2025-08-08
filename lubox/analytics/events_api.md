# Event API

The Events API accepts structured JSON events describing the interaction of the users with the website or mobile app. The events received via the Events API feed into the [feedback loop](/analytics.html#identity-and-the-feedback-loop), allow the system to learn and contribute to the performance of many of the models used in the background.

Note that sending events directly via the low-level API is an advanced use-case and you should consider using the [JavaScript collector](/analytics/collector.html) for websites. Using the Events API directly is mostly useful when:

- You want to provide feedback from a mobile app
- You want to avoid relying on a 3rd party script (the [Luigi's Box JavaScript collector](/analytics/collector.html) on your website.

The API can receive following types of events:

- impression (“pv”) - which can hold information about a pageview (if the site has a URL available) or a catalog object shown to the user
- click - which is used to capture interaction with the site, mainly with products lists
- event - an event, which is analogous to `impression`, but triggered without an actual page reload - mainly if you need to report a new list, which appeared asynchronously.

All events are expected to be HTTP POST-ed to `https://api.luigisbox.com`.

## Impression event

The impression event is a basic event which tracks a visit on a page (when a user visits a page that has URL). This event can be also used to track an object impression done by the user -- when the user displays a "detail" of any object that you have indexed in [Luigi's Box catalog](/indexing.html).

All impression events that track object are automatically paired to the catalog data using the "url" attribute, which must contain the [object identity](/identity.html). The attribute is called `url` historically (you can read a [story about the "why" here](/identity.html#identity-migrating-from-urls-to-identities)), but it holds the object identity.

You should send Impression event in these scenarios:
<ul>
  <li>user visits any page on your website that has a URL (homepage, basket, ...)</li>
  <li>user visits a detail of an object that is present in our catalog</li>
  <ul>
    <li>Products</li>
    <li>Category listing pages</li>
    <li>Brand listing pages</li>
    <li>Article (blog posts)</li>
  </ul>
</ul>

<span class="badge text-bg-success">POST</span> `https://api.luigisbox.com/`

```javascript
{
  "type": "pv",
  "id": "f3f6917c-2e94-4e38-a744-24cbb82f284d", // Globally unique identifier of the event
  "url": "2372711",   // In case of catalog object, use object identity, even though the field is called "url"
  "tracker_id": "1234-56678",
  "client_id": 6969470340316755000,
  // The rest of the attributes is optional, feel free to leave them out
  "title": "White sneakers GLX 23",
  "customer_id": 4739473924329473000,
  "local_timestamp": 1626386701,
  "platform": "iOS",
  "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0",
  "referer": "",
  "context": {
    "warehouse": "Berlin"
  },
  "ab_test_variant": "Luigis",
  "consent_granted": true,
  "recommendation_id": "1abc2de3-f456-7890-1g23-hijk45l6789m"
}
```

The impression event defines the basic event structure that you'll be using for all other event types:

| attribute                                               | explanation                                                                                                                                                                                                                                                                                      |
|---------------------------------------------------------|-----------------------------------------------------------------------------------|
| `type`<span class="required">REQUIRED</span>            | Use `pv` for impression. |
| `id`<span class="required">REQUIRED</span>              | Globally unique ID of the event  |
| `url`<span class="required">REQUIRED</span>             | [Object identity](/identity.html) of the object as indexed in the [Luigi's Box catalog](/indexing.html) |
| `tracker_id`<span class="required">REQUIRED</span>      | The site's tracker_id, you can find it in the [Luigi's Box application](https://app.luigisbox.com/) in "General settings" > "Integration settings" screen. |
| `client_id`<span class="required">REQUIRED</span>       | A generated unique numeric identifier of the user. |
| `customer_id`<span class="optional">optional</span>     | Your system identifier of the logged in user. Make sure that it is unique for each registered user. |
| `local_timestamp`<span class="optional">optional</span> | Local timestamp in seconds. The event will be automatically timestamped by Luigi's Box servers and you don't have to send one explicitely. **Make sure that the timestamp is in seconds and not in milliseconds.** Sending an incorrect timestamp (in the future or too far in the past will cause the event to get droppped). |
| `user_agent`<span class="optional">optional</span>      | User agent string ([read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent)). |
| `title`<span class="optional">optional</span>           | Title of the page. Only used for presentation in Luigi's Box analytics, has no impact on the feedback loop. |
| `platform`<span class="optional">optional</span>        | Platform of your integration (iOS, Android, desktop). If you want to specify both the platform and the version of your app, please use an array format (e.g., <code>[iOS, 1.0.2]</code>). When this field is filled in, the app_version attribute will be ignored and replaced with the value from platform field. You can use this field for segmentation in Luigi's Box analytics later (App Version segmentation filter). |
| `referer`<span class="optional">optional</span>         | Referer URL. |
| `context`<span class="optional">optional</span>         | Context of the session / user (e.g. used warehouse within session). Should hold the key-value pairs consistent with what is pushed into the catalog data. See [context in analytics](/analytics.html#concepts-context) and the [Multi-warehouse solution](/solutions/multi_warehouse.html#constraining-the-feedback-loop) for a use-case. |
| `ab_test_variant`<span class="optional">optional</span> | Variant of the session / user in case there is an ongoing AB test (example values: Original, Luigis). |
| `consent_granted`<span class="optional">optional</span> | Set `true`, if a user has granted consent for personalization.
| `recommendation_id`<span class="optional">optional</span> | Identifier of the recommendation list from which the user was redirected to your site (e.g. identifier of the newsletter recommendation list). Only applicable for use-cases where you are generating recommendations into email newletters. |
| `app_version`<span class="optional">deprecated</span>     | Deprecated. Version string of your integration. To explicitly differentiate platform (iOS, Android), please use "platform" field. You can use this field for segmentation in Luigi's Box analytics later. |

<div class="alert alert-danger">
Pay special attention to <code>local_timestamp</code> and make sure that it is in <strong>seconds</strong>. A very common mistake that we see is that the timestamp is in milliseconds. If you send the timestamp in milliseconds, we will decode it to a date far in the future and drop the event as invalid.
</div>

### Client ID vs. Customer ID

The `client_id` attribute is what identifies every user and maintains a continuity in the event stream of a single user. `customer_id` is an ID of the logged in customer that will not be available until the user signs in to you app/website. To reiterate:

- Always send the `client_id`.
- When the user signs in keeps sending both `client_id` and `customer_id`.
- When the user signs out, keep sending just the `client_id`.

The `client_id` must always be the same for the same user even in the most complex scenario when the user starts as anonymous guest, signs in and then signs out. If you switch to a different `client_id` mid-session, the original session will be closed and a new session will start for the new user.

### AB Tests reporting

In the ongoing AB test, you can use `ab_test_variant` field (example values: Original, Luigis) to report the AB test variant of the whole analytics session. You can use this key for all the events.

## Search event

Report searches and search results as a search event which describes the search inputs (query and filters) and search results.

<div class="alert alert-info">
Note that the search API calls you make do not track data into analytics implicitely and you have to report searches explicitely. There are many reasons for this, mainly:
<ul>
<li>The analytics should track what the user has seen. Sometimes, you may want to filter out some products that the search API returned or display a slight variations of the results that the API returned.</li>
<li>The information presented to the user may be different than what the API returned, this is most frequently the case with B2B pricing where you load and display different prices for different customers.</li>
<li>Some information is only available on the frontend, such as you user ID or cookie consent information.</li>
</div>

<span class="badge text-bg-success">POST</span> `https://api.luigisbox.com/`

```javascript
{
 "id": "f3f6917c-2e94-4e38-a744-24cbb82f284d",
 "tracker_id": "1234-5678",
 "client_id": 6667519810961010000,
 "type": "event",
 "lists": {
   "Search Results": {
     "items": [
       {
         "title": "White shirt v-neck",
         "type": "item", // The catalog type
         "url": "39818", // Object identity
         "position": 1,
         "price": 19
       },
       {
         "title": "White button-up shirt",
         "type": "item", // The catalog type
         "url": "288828", // Object identity
         "position": 2,
         "price": null
       },
       {
         "title": "White shirt, short-sleeves",
         "type": "item", // The catalog type
         "url": "928127", // Object identity
         "position": 3,
         "price": 351.36
       }
     ],
     "query": {
       "string": "white shirt",
       "filters": {
          "brand": "Loona fashion",
          "sort by": "price_amount:asc",
          "_Variant": "Luigis"
        }
     }
   }
 },
 "platform": "iOS",
 "ab_test_variant": "Luigis",
 "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0"
}
```

Search event contains a "Search Results" list (this exact name is important, do not change it) which contains [list of search results](#event-api-search-event-search-results) and [query definition](#event-api-search-event-query) including search query and search filters applied for that search.

### Search results

The search results (inside the "items" attribute) contain the following attributes:

| attribute | explanation |
|------------|------------|
| `title`<span class="required">REQUIRED</span>    | Title of the item. Only used in Luigi's Box analytics for presentation purposes, has no impact on the feedback loop. |
| `type`<span class="required">REQUIRED</span>     | Type of the search result, consistent with the type that object is indexed with in the Luigi's Box catalog. |
| `url`<span class="required">REQUIRED</span>      | [Identity](/identity.html) of the object, consistent with how the object is indexed in the Luigi's Box catalog. |
| `position`<span class="required">REQUIRED</span> | Position of the item in a list. Does not neccessarily have to start at 1, e.g. when sending an event for 2nd page of the search results, the position will be offset by the number of results on the previous page. |
| `price`<span class="optional">optional</span>    | Price of the item, used for presentation purposes in Luigi's Box analytics to calculate cart values. |

If you are using pagination, then you must send a pv event for every subsequent pagination view. Positions of the items should be relative to the first page, e.g., if a user was presented with second page of results and you have 20 items per page, the first item position should be 21. If you are using infinite-scroll style pagination, make sure that you are only sending the list items that were appended to the infinite list and NOT all items from the beginning.

### Query

The "query" part of the list consists of "string" and "filters". The query "string" (always needs to be a string) is required and represents a query that the user typed in the searchbox, the "filters" part is optional and represents the filters that the user selected to narrow down the search. Read more about the [concept of filters, including an example](/analytics.html#concepts-filters).

Filters can hold not only information about real filters, but also about other factors that influence search results
and their ordering ("sort by" option) or even internal information with effect on search results (algorithm version etc.).
You can segment sessions based on presence of filters later on in Luigi's Box Analytics application.

### AB Tests reporting

In the ongoing AB test, use "filters" to report the AB test variant of a particular list. The selected variant should be stored in the `_Variant` filter (example values: Original, Luigis). You can use this field for all types of lists (Autocomplete, Search, Product Listing, and Recommendation).

Alternatively, you can use `ab_test_variant` field (example values: Original, Luigis) to report the AB test variant of the whole analytics session. You can use this key for all the events.

## Autocomplete event

See the description of [Search event](#event-api-search-event) above for more details. The Autocomplete has mostly the same structure and semantics. The notable differences from the Search event are:

- The list name in the JSON data is "Autocomplete". It is important that you use exactly this name without modifications.
- Autocomplete usually does not have any filtering, it is safe to skip the "filters" part inside "query".
- Defer sending the Autocomplete event until the user stopped typing (we recommend a 500ms cutoff time). Even if you don't implement the defer, the Events API will automatically detect and ignore autocomplete queries which are prefix of a following query in the user's stream of events. The ignored list will not contribute to the feedback loop, it will however count towards your units usage.

<span class="badge text-bg-success">POST</span> `https://api.luigisbox.com/`

```javascript
{
  "id": "b1a371fb-e7a2-4ed9-a86c-ce6747f4f65c",
  "tracker_id": "1234-5678",
  "client_id": 6667519810961010000,
  "type": "event",
  "lists": {
    "Autocomplete": {
      "items": [
        {
          "title": "Shirts",
          "type": "category", // The catalog type
          "url": "c398818", // Object identity
          "position": 1
        },
        {
          "title": "White shirt v-neck",
          "type": "item", // The catalog type
          "url": "39818", // Object identity
          "position": 2,
          "price": 19
        },
        {
          "title": "White button-up shirt",
          "type": "item", // The catalog type
          "url": "288828", // Object identity
          "position": 3,
          "price": null
        },
        {
          "title": "White shirt, short-sleeves",
          "type": "item", // The catalog type
          "url": "928127", // Object identity
          "position": 4,
          "price": 351.36
        }
      ],
      "query": {
        "string": "white shirt",
        "filters": {
          "_Variant": "Luigis"
        }
      }
    }
  },
  "platform": "iOS",
  "ab_test_variant": "Luigis",
  "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0"
}
```

## Product Listing event

Report products listing as a Product listing event which contains the listing scope (filters such as category, brand etc.) along with any additional listing criteria and listing results.

<div class="alert alert-info">
Note that the Product listing API calls you make do not track data into analytics implicitly and you have to report impressions of listings explicitly. There are many reasons for this, mainly:
<ul>
<li>The analytics should track what the user has seen. Sometimes, you may want to filter out some products that the Product listing API returned or display a slight variations of the results that the API returned.</li>
<li>The information presented to the user may be different than what the API returned, this is most frequently the case with B2B pricing where you load and display different prices for different customers.</li>
<li>Some information is only available on the frontend, such as user ID or cookie consent information.</li>
</div>

<span class="badge text-bg-success">POST</span> `https://api.luigisbox.com/`

```javascript
{
 "id": 6667520098487994000,
 "tracker_id": "1234-5678",
 "client_id": 6667519810961010000,
 "type": "event",
 "lists": {
   "Product Listing": {
     "items": [
       {
         "title": "White shirt v-neck",
         "type": "item", // The type of record in catalog
         "url": "39818", // Record identity
         "position": 1,
         "price": 19
       },
       {
         "title": "White button-up shirt",
         "type": "item", // The type of record in catalog
         "url": "288828", // Record identity
         "position": 2,
         "price": null
       },
       {
         "title": "White shirt, short-sleeves",
         "type": "item", // The type of record in catalog
         "url": "928127", // Record identity
         "position": 3,
         "price": 351.36
       }
     ],
     "query": {
       "filters": {
          "sort by": "price_amount:asc",
          "_Variant": "Luigis"
        },
        "scopes": {
          "_category_label": "Clothing||Shirts"
          "_category_identity": "category_10283"
        }
     }
   }
 },
 "platform": "iOS",
 "ab_test_variant": "Luigis",
 "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0"
}
```

Product Listing event contains a "Product Listing" list (this exact name is important, do not change it) which includes [list of results](#event-api-product-listing-event-results) and [filters definition](#event-api-product-listing-event-filters) with filters and scopes applied for that listing (see details below).

### Results

Each item in the product listing results (inside the `items` attribute) contains the following attributes:

| attribute | explanation |
|------------|------------|
| `title`<span class="required">REQUIRED</span>    | Title of the item. Only used in Luigi's Box analytics for presentation purposes, has no impact on the feedback loop. |
| `type`<span class="required">REQUIRED</span>     | Type of the product listing result, consistent with the type that object is indexed with in the Luigi's Box catalog. |
| `url`<span class="required">REQUIRED</span>      | [Identity](/identity.html) of the object, consistent with how the object is indexed in the Luigi's Box catalog. It does not need to be an url, the name of the attribute (`url`) is for legacy reasons. |
| `position`<span class="required">REQUIRED</span> | Position of the item in a list. Does not neccessarily have to start at 1, e.g. when sending an event for 2nd page of the product listing results, the position will be offset by the number of results on the previous page. |
| `price`<span class="optional">optional</span>    | Price of the item, used for presentation purposes in Luigi's Box analytics to calculate cart values. |

If you are using pagination, then you must send an Impression event (pv) for every subsequent pagination view. Positions of the items should be relative to the first page, e.g., if a user was presented with second page of results and you have 20 items per page, the `position` of the first reported item should be 21. If you are using infinite-scroll style pagination, make sure that you are only sending the list items that were appended to the infinite list and NOT all items from the beginning.

### Scopes and Filters

The "query" part of the list consists of "scopes" and "filters". While `scopes` define implicit criteria for a given product listing page (a category, brand, or your custom predefined set of filters), `filters` are used to catch subsequent filtering of the result set. For example, if a user clicks on the category link in your menu, that category is considered a scope. Another example can be a link to a landing page that shows products that have a specific tag (for example "Christmas products") -- a set of filters that pre-select desired products are considered a scope. When a user later narrows down the results by picking additional (explicit) filters, these are reported in `filters`.

The "scopes" part is required. There are three common scenarios which are covered by it:
<ul>
<li><em>Category</em> - input of the Product listing is a category (for example a user visits some category from the menu on your site),</li>
<li><em>Brand</em> - input of the Product listing is a brand (for example a user visits some brand from the product detail page),</li>
<li><em>Custom filters</em> - input of the Product listing is a combination of one or more filters (for example you have an ad that directs user to the listing of t-shirts for women).</li>
</ul>

You can also combine Category / Brand with Custom filters. Custom filters follow the same structure as "filters" (see "filters" below). The difference here is that the filters within scopes are implicitly set by the product listing page. There is a specific structure for the Category and Brand scope.

If an input of the Product listing is a category, report information about category in `scopes` using the following keys:

| key | explanation |
|------------|------------|
|`_category_label`<span class="required">REQUIRED</span>    | Human readable name of the category. |
|`_category_identity`<span class="required">REQUIRED</span> | Identity of the category. Please use the same identity as in our catalog. |

Alternatively, you can report a category identity with the filters you use when sending a request to get Product Listing results. In this case, you can replace `_category_identity` with the name of the filter(s) you use. Please note, that the `_category_label` is still required.

For example, for the request

<span class="badge text-bg-success">GET</span> `https://live.luigisbox.com/search?tracker_id=123456-789&f[]=type:product&f[]=nested_category_id:10283&f[]=color:blue`

report Product Listing query part of the event as follows:

```javascript
"query": {
  "filters": {
    "color": "blue"
  },
  "scopes": {
    "_category_label": "Clothing||Shirts"
    "nested_category_id": "10283"
  }
}
```

Note: In case you have a category within the category tree, provide the full category path in `_category_label`. Divide particular levels with pipe symbol `||`. For example, category <em>Women -> Clothing -> T-Shirts</em> should be stored in `_category_label` as follows: `Women||Clothing||T-Shirts`.

If an input of the Product listing is a brand, report information about brand in `scopes` using the following keys:

| key | explanation |
|------------|------------|
|`_brand_label`<span class="required">REQUIRED</span>    | Human readable name of the brand. |
|`_brand_identity`<span class="required">REQUIRED</span> | Identity of the brand. Please use the same identity as in our catalog. |

Alternatively, you can report a brand identity with the filters you use when sending a request to get Product Listing results. In this case, you can replace `_brand_identity` with the name of the filter(s) you use. Please note, that the `_brand_label` is still required.

For example, for the request

<span class="badge text-bg-success">GET</span> `https://live.luigisbox.com/search?tracker_id=123456-789&f[]=type:product&f[]=nested_brand_id:123456&f[]=color:blue`

report Product Listing query part of the event as follows:

```javascript
"query": {
  "filters": {
    "color": "blue"
  },
  "scopes": {
    "_brand_label": "Samsung"
    "nested_brand_id": "123456"
  }
}
```

If a user decided to further narrow down the results of a shown listing by using filters (facets), for instance by choosing to see only products under certain price amount, report such behavior using "filters" (an explicit user input). Read more about the [concept of filters, including an example](/analytics.html#concepts-filters).


Filters can hold not only information about real filters, but also about other factors that influence results
and their ordering ("sort by" option) or even internal information with effect on results (algorithm version etc.).
You can segment sessions based on presence of filters later on in Luigi's Box Analytics application.

### AB Tests reporting

In the ongoing AB test, use "filters" to report the AB test variant of a particular list. The selected variant should be stored in the `_Variant` filter (example values: Original, Luigis). You can use this field for all types of lists (Autocomplete, Search, Product Listing, and Recommendation).

Alternatively, you can use `ab_test_variant` field (example values: Original, Luigis) to report the AB test variant of the whole analytics session. You can use this key for all the events.

## Recommendation event

Report recommended products as a recommendation event which describes the recommendation inputs (query and filters) and recommended objects.

<div class="alert alert-info">
Note that the recommender API calls you make do not track data into analytics implicitely and you have to report recommendations explicitely. There are many reasons for this, mainly:
<ul>
<li>The analytics should track what the user has seen. Sometimes, you may want to filter out some products that the recommender API returned or display a slight variations of the recommendations that the API returned.</li>
<li>The information presented to the user may be different than what the API returned, this is most frequently the case with B2B pricing where you load and display different prices for different customers.</li>
<li>Some information is only available on the frontend, such as you user ID or cookie consent information.</li>
</div>


<span class="badge text-bg-success">POST</span> `https://api.luigisbox.com/`

```javascript
{
 "id": "3f1a615c-fce8-4d48-87bd-3a0fed760bcd",
 "type": "event",
 "tracker_id": "1234-5678",
 "client_id": 6667519810961010000,
 "lists": {
   "Recommendation": {
     "items": [
       {
         "title": "Off-white long-sleeve shirt",
         "type": "item",
         "url": "283838", // Object identity
         "position": 1,
         "price": 89
       },
       {
         "title": "Khaki slacks",
         "type": "item",
         "url": "881818", // Object identity
         "position": 2,
         "price": 45.50
       },
       {
         "title": "Knitted sweater",
         "type": "item",
         "url": "993939", // Object identity
         "position": 3,
         "price": 351.36
       }
     ],
     "query": {
       "filters": {
          "ItemIds": ["39818"],
          "RecommendationId": "1abc2de3-f456-7890-1g23-hijk45l6789m",
          "Recommender": "homepage_personalized",
          "RecommenderClientId": "homepage_personalized",
          "Type": "complementary_combined_assoc",
          "_Variant": "Luigis"
        }
     }
   }
 },
 "platform": "iOS",
 "ab_test_variant": "Luigis",
 "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0"
}
```

Each recommendation list event must contain query filters with the following key-value pairs. Values for the keys can be found in the recommendation request or recommendation request result.

| key | explanation |
|------------|------------|
| `RecommenderClientId`<span class="required">REQUIRED</span> | Unique identifier of the recommender  (`recommender_client_identifier` from recommendation *result*). Its value should define type of recommender user along with its position on the site (e.g., `product_detail_bottom_alternatives`). See [Placement and model reuse](/recommendations/concepts.html#basic-concepts-placement-and-model-reuse) for more details. |
| `RecommendationId`<span class="required">REQUIRED</span> | Unique identifier of a set of recommended items  (`recommendation_id` from recommendation *result*). Required for new integrations of Luigi's Box Recommender. We strongly recommend to update existing integrations as well. |
| `ItemIds`<span class="optional">optional</span>             | List of input items of a recommendation request (`item_ids` from recommendation *request*). |
| `Recommender`<span class="optional">optional</span>         | Name of the recommender (`recommender` from recommendation *result*). |
| `Type`<span class="optional">optional</span>                | Type of the recommender (`recommendation_type` from recommendation *result*). |

### RecommenderClientId

RecommenderClientId usually consists of three parts:

- location of the recommender (e.g., `item_detail`, `basket`, `basket_popup`, `homepage`, `news`),
- recommendation type (same as `recommendation_type`, e.g. `personalized`, <em>optional</em>),
- A/B test variant (`original`/`luigis`, when not requesting Luigis' Box Recommender, always use `original`).

These three parts must always be lowercased and joined by a symbol `_`. Please, avoid using any other characters than a-z and `_`.

Several examples of Recommender Client Identifiers:

- in item's detail:`item_detail_complement_original`, `item_detail_original`, `item_detail_personalized_original`,
- basket: `basket_popup_original`, `basket_original`,
- homepage: `homepage_personalized_original`, `homepage_last_seen_original`, `homepage_trends_original`,
- other: `category_original`, `news_original`, `discounted_original`.

### AB Tests reporting

In the ongoing AB test, use "filters" to report the AB test variant of a particular list. The selected variant should be stored in the `_Variant` filter (example values: Original, Luigis). You can use this field for all types of lists (Autocomplete, Search, Product Listing, and Recommendation).

Alternatively, you can use `ab_test_variant` field (example values: Original, Luigis) to report the AB test variant of the whole analytics session. You can use this key for all the events.

## Click Event

Report a click event for any click interaction with search results, autocomplete results or recommendations.

<span class="badge text-bg-success">POST</span> `https://api.luigisbox.com/`

```javascript
{
  "id": "cecceeef-f82f-4fd0-9caf-aaeef2981370",
  "type": "click",
  "tracker_id": "1234-5678",
  "client_id": 6667519810961010000,
  "action": {
    "type": "click",
    "resource_identifier": "983838"
  },
  "platform": "Android",
  "ab_test_variant": "Luigis",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1"
}
```

Click event contains an `action` attribute:

| attribute | explanation |
|------------|------------|
| `type`<span class="required">REQUIRED</span> | Must contain value `click`.  |
| `resource_identifier`<span class="optional">required</span> | Identity of the clicked item which points to a clicked item from the search results / recommendation. If the type of the clicked item is `query`, `resource_identifier` should contain its title. Otherwise, it should contain item identity exactly as it is reported in other lists (Autocomplete, Search Results, Recommendation). |

## Conversion event

Conversion event represents a user's explicit interest into an item displayed in a list (search, autocomplete or recommender). This will typically be "add to cart", "add to wishlist", "add to favorite".

<span class="badge text-bg-success">POST</span> `https://api.luigisbox.com/`

```javascript
{
  "id": "4a6de937-4e16-48fc-b2c9-024c45d0ef29",
  "type": "click",
  "tracker_id": "1234-5678",
  "client_id": 6667519810961010000,
  "action": {
    "type": "buy",
    "resource_identifier": "https://www.eshop.com/another-product"
  },
  "platform": "Android",
  "ab_test_variant": "Luigis",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1"
}
```

Anything different from action.type "click" is considered a conversion (e.g., "buy", "add-to-favorites", "add-to-comparison"). Make sure to provide the `resource_identifier` (see "[Click event](#event-api-click-event)" section above).

Send the conversion event from the following places:

- The page/mobile app screen where the search/recommendation list is shown, e.g. a search results page, or a title page with a recommender box.
- The product detail page/mobile app screen.

The identity in the `resource_identifier` field will be used to scan the event stream backwards and attribute the conversion to a prior list and service interaction.

## Transaction event

To report a purchase use a transaction event, which contains all the items with their quantities and applied discounts.

<span class="badge text-bg-success">POST</span> `https://api.luigisbox.com/`

```javascript
{
 "id": "03dd16c3-4dd5-44c0-87c4-b3a652c06a87",
 "type": "transaction",
 "tracker_id": "1234-5678",
 "client_id": 6667519810961010000,
 "items": [
    {
      "title": "White shirt, round neck, short sleeves",
      "url": "9339993",
      "count": 1,
      "total_price": 19,
      "was_discounted": false,
      "was_volume_discounted": false
    },
    {
      "title": "Brown overcoat",
      "url": "299299",
      "count": 2,
      "total_price": 268.50,
      "was_discounted": true,
      "was_volume_discounted": false
    }
  ],
  "ab_test_variant": "Luigis",
}
```

Each transaction must contain a list of items that were purchased. Each item is a hash with the following key-value pairs:

| key | explanation |
|-------------------------|------------|
| `title`<span class="optional">optional</span>                 | Title of the product. |
| `url`<span class="required">REQUIRED</span>                   | [Identity](/identity.html) of the purchased product |
| `count`<span class="required">REQUIRED</span>                 | Quantity of the purchased product. |
| `total_price`<span class="required">REQUIRED</span>           | Price of the product after taking into account quantity, discounts, and volume discounts (e.g. product with price `10` was added to basket `3` times, thus `total_price` is `30`). |
| `was_discounted`<span class="required">REQUIRED</span>        | Determines, whether the product was discounted (true or false). |
| `was_volume_discounted`<span class="required">REQUIRED</span> | Determines, whether the product was discounted based on the quantity within purchase (true or false). |

# Scenarios

This section provides a rough guidelines for the events in different environments.

## Web application

Note that these are just rough guidelines and the events may vary depending on your use case, the Luigi's Box services you use and the content that you index.

| When | Event |
|------|-------|
| Product detail page shown | Send [Impression event](#event-api-impression-event) for the product identity. |
| Category listing page shown | Send [Impression event](#event-api-impression-event) for the category identity. |
| Brand listing page shown | Send [Impression event](#event-api-impression-event) for the brand identity. |
| Search results shown | Send [Search event](#event-api-search-event) describing the search. |
| Autocomplete results shown | Send [Autocomplete event](#event-api-autocomplete-event) describing the autocomplete. |
| Search or autocomplete result clicked | Send [Click event](#event-api-click-event) with a `resource_identifier` set to the identity of the clicked object. |
| Recommendation shown | Send [Recommendation event](#event-api-recommendation-event) describing the recommendations. |
| Recommendation clicked | Send [Click event](#event-api-click-event) with a `resource_identifier` set to the identity of the clicked object. |
| Product added to cart | Send [Converstion event](#event-api-conversion-event) with a `resource_identifier` set to the identity of the clicked object. Make sure to send this from every place where the product can be added to basket. |
| Transaction completed / products purchased | Send [Transaction event](#event-api-transaction-event) describing the purchase. |

## Mobile application

Note that these are just rough guidelines and the events may vary depending on your use case, the Luigi's Box services you use and the content that you index.

| When | Event |
|------|-------|
| Product detail screen shown | Send [Impression event](#event-api-impression-event) for the product identity. |
| Category listing screen shown | Send [Impression event](#event-api-impression-event) for the category identity. |
| Brand listing screen shown | Send [Impression event](#event-api-impression-event) for the brand identity. |
| Search results shown | Send [Search event](#event-api-search-event) describing the search. |
| Autocomplete results shown | Send [Autocomplete event](#event-api-autocomplete-event) describing the autocomplete. |
| Search or autocomplete result clicked | Send [Click event](#event-api-click-event) with a `resource_identifier` set to the identity of the clicked object. |
| Recommendation shown | Send [Recommendation event](#event-api-recommendation-event) describing the recommendations. |
| Recommendation clicked | Send [Click event](#event-api-click-event) with a `resource_identifier` set to the identity of the clicked object. |
| Product added to cart | Send [Converstion event](#event-api-conversion-event) with a `resource_identifier` set to the identity of the clicked object. Make sure to send this from every place where the product can be added to basket. |
| Transaction completed / products purchased | Send [Transaction event](#event-api-transaction-event) describing the purchase. |

# Limits

Events API has the following limits tied to the combination of Tracker ID and User (the value of `client_id` from events):

- A maximum of 30 events **per User per 15 seconds**.
- A maximum of 400 events **per User per session**. A session ends after 30 minutes of inactivity.


# Support

Troubles? Cannot get it to work? Contact us at <a href="mailto:support@luigisbox.com">support@luigisbox.com</a>, we are glad to help!