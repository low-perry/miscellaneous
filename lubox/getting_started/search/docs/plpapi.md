# PLP API

To build a product listing page (PLP), you will use the standard [Search API](/search/api.html) endpoint. The key is to construct the request without a search query (`q` parameter) and instead use filters to define the product set for a given category or brand.

## API request Structure

All PLP requests are `GET` calls to the [Search API](/search/api.html) endpoint.

### Endpoint

`https://live.luigisbox.com/search`

### Parameters


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
$trackerId = '179075-204259';
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
const TRACKER_ID = '179075-204259';
const CATEGORY_NAME = 'Kalimbas';
const API_ENDPOINT = 'https://live.luigisbox.com/search';

// Using an async IIFE (Immediately Invoked Function Expression)
// to allow for top-level await style.
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
```

## Hierarchical filtering

Understanding how Luigi's Box handles category hierarchies is essential for a successful integration. A product can belong to multiple category paths, but one is always considered its primary path.

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
