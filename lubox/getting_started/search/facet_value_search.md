# Facet value search

The facet value search endpoint enables targeted searching within specific facet values. This is particularly useful when working with facets that contain many options, where the standard facet listing doesn't provide sufficient filtering capabilities.

This endpoint processes the `facet_q` parameter to search within a specified facet's values and returns only matching facet values with their corresponding hit counts.

<div class="alert alert-info" role="alert">
  <h5 class="mb-2"><strong>📋 Prerequisites</strong></h5>
  <p class="mb-1">
    Luigi's Box must synchronize your product database with its search index before using this feature.
  </p>
  <p class="mb-0">
    See <a href="/indexing.html">Indexing the data</a> for setup instructions.
  </p>
</div>

<div class="alert alert-info">
This endpoint is publicly available and requires no authentication.
</div>

## Endpoint

<span class="badge text-bg-success">GET</span> `https://live.luigisbox.com/v1/facet_value`

## Required Parameters

&nbsp; | &nbsp;
--------- | -----------
`tracker_id` | Your site identifier within Luigi's Box (visible in all URLs when logged into [the Luigi's Box app](https://app.luigisbox.com)) |
`f[]` | Result type filter using `key:value` syntax (e.g., `f[]=type:item`) |
`facet_q` | User input - the query string to search within facet values. |
`facets` | Name of the facet to search within (e.g., `facets=category`) |

<div class="alert alert-warning" role="alert">
  <h5 class="mb-2"><strong>⚠️ Important Limitations</strong></h5>
  <ul class="mb-0">
    <li>Only <strong>one facet</strong> can be specified (unlike the standard Search API)</li>
    <li>The <code>facet_q</code> parameter only works with this endpoint, it's ignored in regular search requests</li>
    <li>While <code>facet_name:values_count</code> syntax is supported (e.g., <code>facets=category:10</code>), it limits returned results</li>
  </ul>
</div>

## Optional Parameters

This endpoint supports most optional parameters from the standard search endpoint, allowing you to maintain the consistent filtering and context when searching within facet values.
You can reuse URL parameters from your search requests, simply change the endpoint to `v1/facet_value` and add the required `facet_q` and `facets` parameters.

<div class="alert alert-warning"> 
Note: When transferring parameters from the `/search` endpoint to the facet value search endpoint, ensure that the `facets` parameter includes only the single facet the user wants to search within.
</div>
<div class="alert alert-warning">
Note: The `facet_q` parameter is only processed when using the facet value search endpoint. If you include `facet_q` in a regular search request, it will be ignored.
</div>

## Examples

### Standard search request

<span class="badge text-bg-success">GET</span> `https://live.luigisbox.com/search?tracker_id=179075-204259&f[]=type:product&q=a&facets=brand,color,price_amount&size=24`

### Corresponsding facet value search

<span class="badge text-bg-success">GET</span> `https://live.luigisbox.com/v1/facet_value?tracker_id=179075-204259&f[]=type:product&q=a&facets=brand&size=24&facet_q=fo`

### Response format

```json
{
    "results": {
        "query": "a",
        "corrected_query": null,
        "facet_value_query": "fo",
        "filters": [
            "type:product"
        ],
        "facets": [
            {
                "name": "brand",
                "type": "text",
                "values": [
                    {
                        "value": "FOX",
                        "hits_count": 29
                    },
                    {
                        "value": "Foxgear",
                        "hits_count": 7
                    }
                ]
            }
        ]
    }
}
```

### Implementation examples

```ruby
require 'faraday'
require 'faraday_middleware'
require 'json'

BASE_URL = 'https://live.luigisbox.com'
FACET_VALUE_ENDPOINT = '/v1/facet_value'
TRACKER_ID = 'YOUR_TRACKER_ID'

def search_facet_values(facet_query, tracker_id = TRACKER_ID)
  connection = Faraday.new(url: BASE_URL) do |conn|
    conn.use FaradayMiddleware::Gzip
  end

  response = connection.get(FACET_VALUE_ENDPOINT, {
    tracker_id: tracker_id,
    'f[]' => 'type:product',
    q: 'a',
    facets: 'brand',
    size: 24,
    facet_q: facet_query
  })

  if response.success?
    puts JSON.pretty_generate(JSON.parse(response.body))
  else
    puts "Error, HTTP status #{response.status}"
    puts response.body
  end
end

# Usage
search_facet_values('fo')
```

```php
<?php
// Install Guzzle: composer require guzzlehttp/guzzle
require 'vendor/autoload.php';

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

// Constants
const BASE_URL = 'https://live.luigisbox.com';
const FACET_VALUE_ENDPOINT = '/v1/facet_value';
const TRACKER_ID = 'YOUR_TRACKER_ID';

/**
 * Search within facet values using Luigi's Box API
 */
function searchFacetValues($facetQuery, $trackerId = TRACKER_ID) {
    $client = new Client();
    
    try {
        $response = $client->request('GET', BASE_URL . FACET_VALUE_ENDPOINT, [
            'query' => [
                'tracker_id' => $trackerId,
                'f[]' => 'type:product',
                'q' => 'a',
                'facets' => 'brand',
                'size' => 24,
                'facet_q' => $facetQuery
            ],
            'headers' => [
                'Accept-Encoding' => 'gzip'
            ]
        ]);
        
        echo "Status: " . $response->getStatusCode() . "\n";
        echo $response->getBody();
        
        return json_decode($response->getBody(), true);
    } catch (RequestException $e) {
        echo "Error: " . $e->getMessage() . "\n";
        if ($e->hasResponse()) {
            echo "Status: " . $e->getResponse()->getStatusCode() . "\n";
            echo $e->getResponse()->getBody();
        }
        throw $e;
    }
}

// Usage
searchFacetValues('fo');
?>
```

```javascript
const axios = require('axios');

const BASE_URL = 'https://live.luigisbox.com';
const FACET_VALUE_ENDPOINT = '/v1/facet_value';
const TRACKER_ID = 'YOUR_TRACKER_ID';

const searchFacetValues = async (facetQuery) => {
  const params = {
    tracker_id: TRACKER_ID,
    'f[]': 'type:product',
    q: 'a',
    facets: 'brand',
    size: 24,
    facet_q: facetQuery
  };

  try {
    const response = await axios.get(BASE_URL + FACET_VALUE_ENDPOINT, {
      params: params,
      headers: { 'Accept-Encoding': 'gzip' }
    });
    
    console.log('Status:', response.status);
    console.log(JSON.stringify(response.data, null, 2));
    return response.data;
  } catch (error) {
    console.error('Error:', error.response?.status || error.message);
    if (error.response) {
      console.error(error.response.data);
    }
    throw error;
  }
};

// Usage
searchFacetValues('fo');
```

## Error handling

### Common errors

**Multiple or Missing Facets (400 Bad Request)**

```json
{
    "facet_q": [
        "facet_q The request contained zero or more than one facet. Please specify one and only one facet with this type of request."
    ]
}
```

## Best practices

1. **Single facet requirement**: Always specify exactly one facet in the `facets` parameter.
2. **Parameter consistency**: Maintain the same filtering context when transitioning from search to facet value search.
3. **Error handling**: Implement proper error handling for HTTP status codes and API-specific error responses.
