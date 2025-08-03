# PLP API

To build a product listing page (PLP), you will use the standard [Search API](/search/api.html) endpoint. The key is to construct the request without a search query (`q` parameter) and instead use filters to define the product set for a given category or brand.

## API request Structure

All PLP requests are `GET` calls to the [Search API](/search/api.html) endpoint.

### Endpoint

`https://live.luigisbox.com/search`

### Required parameters

&nbsp; | &nbsp;
--------- | -----------
`tracker_id` | Your public site identifier within Luigi's Box. You can see this identifier in every URL in [the Luigi's Box app](https://app.luigisbox.com) once you are logged-in.
`f[]` or `f_must[]` | The filter(s) used to define the product set. For PLPs, this will be a simple category, a brand etc,.
`plp` | **Critical:** Signals a PLP request and identifies the filter key for applying merchandising rules. The value of `plp` **must exactly match** the key used in your `f[]` filter.

There are several additional optional parameters you can use to enhance your request, such as `facets` to retrieve filtering options, `size` and `page` for pagination, and `hit_fields` to specify which product attributes to return. [See more](/search/api.html#search-optional-parameters).

**Example: Request**

```ruby
require 'faraday'
require 'json'

# --- Configuration ---
TRACKER_ID = 'YOUR_TRACKER_ID'
CATEGORY_NAME = 'Kalimbas'
API_ENDPOINT = 'https://live.luigisbox.com'

begin
  conn = Faraday.new(
    url: API_ENDPOINT,
    params: {
      tracker_id: TRACKER_ID,
      'f[]': ['type:product', "category:#{CATEGORY_NAME}"],
      plp: 'category'
    }
  )

  response = conn.get('/search')
  
  if response.success?
    puts JSON.parse(response.body)
  else
    puts "Error fetching data: #{response.status} #{response.body}"
  end

rescue Faraday::Error => e
  puts "Error fetching data: #{e.message}"
end
```

```php
<?php
require 'vendor/autoload.php';

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

// --- Configuration ---
$trackerId = 'YOUR_TRACKER_ID';
$categoryName = 'Kalimbas';
$apiEndpoint = 'https://live.luigisbox.com/search';

$client = new Client();

try {
    $response = $client->request('GET', $apiEndpoint, [
        'query' => [
            'tracker_id' => $trackerId,
            'f' => ['type:product', 'category:' . $categoryName],
            'plp' => 'category'
        ]
    ]);

    echo $response->getBody();

} catch (RequestException $e) {
    // Handle client errors (4xx) and server errors (5xx)
    echo "Error fetching data: " . $e->getMessage();
}
?>
```

```javascript
const axios = require('axios');

// --- Configuration ---
const TRACKER_ID = 'YOUR_TRACKER_ID';
const CATEGORY_NAME = 'Kalimbas';
const API_ENDPOINT = 'https://live.luigisbox.com/search';

(async () => {
  const params = {
    tracker_id: TRACKER_ID,
    'f[]': ['type:product', `category:${CATEGORY_NAME}`],
    plp: 'category'
  };

  try {
    const response = await axios.get(API_ENDPOINT, { params });
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
})();
```

## API response structure

A successful request returns a rich JSON object containing everything needed to build the user interface. The main `results` object contains the following key fields:

- **`hits`:** An array of product objects, ranked and personalized for the user. Each object contains the product attributes you requested in hit_fields.
- **`total_hits`:** The total number of products found that match the filters. This is used for building pagination.
- **`facets`:** An array of facet objects. Each object represents an attribute you requested in the `facets` parameter (e.g., `brand`, `price_amount`) and contains the available filter values and their corresponding product counts.

**Example: Response**

```json
{
  "results": {
    "total_hits": 17,
    "hits": [
      {
        "url": "/cascha-hh-2145-mahagony-10-kalimba/",
        "attributes": {
          "title": "Cascha HH 2145 Mahagony 10 Kalimba",
          "price_amount": 39.9,
          "image_link": "https://cdn.myshoptet.com/usr/demoshop.luigisbox.com/user/shop/detail/1777383_cascha-hh-2145-mahagony-10-kalimba.jpg?673488c5"
        },
        "nested": [
          {
            "type": "brand",
            "attributes": { "title": "Cascha" }
          }
        ],
        "type": "product"
      },
      {
        "url": "/bolf-kalimbas-chroma-2-row-chromatic-21-kalimba/",
        "attributes": {
          "title": "Bolf Kalimbas Chroma 2-Row Chromatic 21 Kalimba",
          "price_amount": 149,
          "image_link": "https://cdn.myshoptet.com/usr/demoshop.luigisbox.com/user/shop/detail/1793271_bolf-kalimbas-chroma-2-row-chromatic-21-kalimba.jpg?673488c5"
        },
        "nested": [
          {
            "type": "brand",
            "attributes": { "title": "Bolf Kalimbas" }
          }
        ],
        "type": "product"
      }
    ],
    "facets": [
      {
        "name": "brand",
        "type": "text",
        "values": [
          { "value": "Cascha", "hits_count": 2 },
          { "value": "Bolf Kalimbas", "hits_count": 5 }
        ]
      }
    ],
    "campaigns": [
      {
        "id": 266,
        "target_url": "https://www.luigisbox.com/",
        "banners": {
          "search_header": {
            "desktop_url": "https://luigisbox-tmp-public-feeds.s3.eu-central-1.amazonaws.com/1024x160.png"
          }
        }
      }
    ]
  },
  "next_page": "https://live.luigisbox.com/search?tracker_id=...&page=2"
}
```

## Hierarchical filtering

Understanding how Luigi's Box handles category hierarchies is essential for a successful integration. There are two special filters designed for this purpose: `category_path` and `all_categories_path`.

To filter by a full category path, individual steps in the hierarchy must be separated by a double pipe `||`. For example: `f[]=category_path:Women||Footwear||Sandals`. As with other filters, you can use multiple path filters together to create `OR` (by repeating the `f[]` parameter) or `AND` (using `f_must[]`) combinations.

### Primary vs. any category path

| Filter |  Behaviour & use case |
| ------ | --------------------- |
| `category_path` | **Exact match (primary path only):** This filter matches against a product's single primary category path. A product's primary path is determined by the first **category hierarchy** defined for it in your product feed's `nested` array. |
| `all_categories_path`| **Hierarchical match (any path):** This is the recommended filter for PLPs. It matches against any category path associated with a product, including its primary path and all secondary paths. This ensures a product appears in every relevant category listing. |

**Example: Indexing a Product in Multiple Hierarchies**

Consider a "Cheddar cheese" product indexed with two category paths.

```json
{
  "identity": "cheddar-cheese-product",
  "type": "item",
  "nested": [
    {
      // The FIRST object defines the primary path: Dairy||Cow milk
      "type": "category",
      "fields": { "title": "Cow milk", "ancestors": [{ "title": "Dairy" }] }
    },
    {
      // The SECOND object defines a secondary path: Wine||Snacks
      "type": "category",
      "fields": { "title": "Snacks", "ancestors": [{ "title": "Wine" }] }
    }
  ]
}
```

In this case, `category_path` will only match `Dairy||Cow milk`. In contrast, `all_categories_path` will match both `Dairy||Cow milk` and `Wine||Snacks`.

**Example: Hierarchical request**

```ruby
require 'faraday'
require 'json'

# --- Configuration ---
TRACKER_ID = 'YOUR_TRACKER_ID'
CATEGORY_PATH = 'Musicians||Guitars'
API_ENDPOINT = 'https://live.luigisbox.com'

begin
  conn = Faraday.new(
    url: API_ENDPOINT,
    params: {
      tracker_id: TRACKER_ID,
      'f[]': ['type:product', "all_categories_path:#{CATEGORY_PATH}"],
      plp: 'all_categories_path'
    }
  )
  response = conn.get('/search')
  
  if response.success?
    puts JSON.parse(response.body)
  else
    puts "Error fetching data: #{response.status} #{response.body}"
  end
rescue Faraday::Error => e
  puts "Error fetching data: #{e.message}"
end

```

```php
<?php
require 'vendor/autoload.php';

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

// --- Configuration ---
$trackerId = 'YOUR_TRACKER_ID';
$categoryPath = 'Musicians||Guitars';
$apiEndpoint = 'https://live.luigisbox.com/search';

$client = new Client();

try {
    $response = $client->request('GET', $apiEndpoint, [
        'query' => [
            'tracker_id' => $trackerId,
            'f' => ['type:product', 'all_categories_path:' . $categoryPath],
            'plp' => 'all_categories_path'
        ]
    ]);
    echo $response->getBody();
} catch (RequestException $e) {
    echo "Error fetching data: " . $e->getMessage();
}
?>

```

```javascript
const axios = require('axios');

// --- Configuration ---
const TRACKER_ID = 'YOUR_TRACKER_ID';
const CATEGORY_PATH = 'Musicians||Guitars';
const API_ENDPOINT = 'https://live.luigisbox.com/search';

(async () => {
  const params = {
    tracker_id: TRACKER_ID,
    'f[]': ['type:product', `all_categories_path:${CATEGORY_PATH}`],
    plp: 'all_categories_path'
  };

  try {
    const response = await axios.get(API_ENDPOINT, { params });
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
})();
```
