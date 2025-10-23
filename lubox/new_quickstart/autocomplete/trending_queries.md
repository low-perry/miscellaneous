---
title: "Quickstart: Implementing 'Trending Queries' suggestions" 
layout: quickstart_layout
category: "API integration"
position: 3
description: "Learn how to use the Trending Queries API to fetch and display a list of popular search terms in a custom user interface."
---

## Introduction

In addition to showing suggestions based on user input or popular items, you can guide users by displaying "Trending Queries"—a list of popular and relevant search phrases. This list is based on your site's analytics and can be customized directly from the Luigi's Box application dashboard.

This guide will show you how to use the [Trending Queries API](/autocomplete/trending_queries.html) to fetch this list and how to implement it in your custom UI, for example, as initial suggestions or as an animated search box placeholder.

### What you'll learn

- How to call the Trending Queries API to fetch a list of popular search terms.
- How to understand the simple JSON response structure.
- Practical examples of how to use this data to enhance your user interface.

### Who is this guide for

- Developers looking to add another layer of guidance to their custom search implementation.
- Developers who want to implement features like animated search box placeholders or a "Trending Searches" section on their site.

### Prerequisites

Before you start, please ensure you have the following in place:

- A working search input field in your application.
- The ability to make HTTP `GET` requests from your application and render the results.
- Your Luigi's Box `trackerId`.
- A setup for manually sending analytics events, as detailed in the Events API guides.

## Step-by-step

The process involves making a simple GET request to the API and then using the returned list of queries in your UI.

### Step 1: Add the Top Items API endpoint

Unlike other APIs, this endpoint does not take a user query (`q`) or a type parameter. The list of queries is controlled entirely from your Luigi's Box application dashboard, where you can set the number of queries, ban terms, or add your own.

#### Endpoint

<span class="badge text-bg-success">GET</span> `https://live.luigisbox.com/v2/trending_queries`

#### Required parameters

- **`tracker_id`:** Your unique site identifier

#### Example

```ruby
require 'faraday'
require 'json'

TRACKER_ID = "YOUR_TRACKER_ID"
BASE_URL = "https://live.luigisbox.com"
API_ENDPOINT = "/v2/trending_queries"

conn = Faraday.new(url: BASE_URL)
response = conn.get(API_ENDPOINT, { tracker_id: TRACKER_ID })

if response.success?
  puts JSON.pretty_generate(JSON.parse(response.body))
else
  puts "Error: #{response.status}"
end
```

```php
<?php
require 'vendor/autoload.php';
use GuzzleHttp\Client;

$trackerId = "YOUR_TRACKER_ID";
$apiEndpoint = "https://live.luigisbox.com/v2/trending_queries";

$client = new Client();
$response = $client->request('GET', $apiEndpoint, [
    'query' => ['tracker_id' => $trackerId]
]);

echo $response->getBody()->getContents();
?>
```

```javascript
const axios = require('axios');

const TRACKER_ID = "YOUR_TRACKER_ID";
const API_ENDPOINT = "https://live.luigisbox.com/v2/trending_queries";

async function getTrendingQueries() {
  try {
    const response = await axios.get(API_ENDPOINT, {
      params: { tracker_id: TRACKER_ID }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch trending queries:", error);
    return [];
  }
}

getTrendingQueries();
```

### Step 2: Understand the JSON Response

The API returns a simple array of objects. Each object contains a `title` (the query string) and an optional `links` array if you have configured a `"top hit"` URL for that query in the Luigi's Box application.

### Example: JSON response

```json
[
  {
    "title": "women's running shoes"
  },
  {
    "title": "kids backpacks",
    "links": [{
      "rel": "top_content",
      "href": "https://yourshop.com/kids/backpacks"
    }]
  },
  {
    "title": "water bottle"
  }
]
```

### Step 3: Implement the feature

You can use the list of trending queries in several ways. A common and engaging implementation is to create an animated placeholder for your search input.

#### Example: Animated placeholder

The following JavaScript snippet shows how to fetch the trending queries and cycle through them as the placeholder text in your search input.

```javascript
async function animatePlaceholder() {
    const searchInput = document.getElementById('search-input');
    const trendingItems = await getTrendingQueries();
    const queries = trendingItems.map(item => item.title);

    if (!queries || queries.length === 0) return;

    const typingSpeed = 100; // Time in ms between each character
    const pauseBeforeDelete = 2000; // Time in ms to wait before deleting
    const deletingSpeed = 50; // Time in ms between each character deletion
    const pauseAfterDelete = 500; // Time in ms to wait after a word is deleted

    let queryIndex = 0;

    // Helper function to create a delay using promises
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Infinite loop to cycle through queries
    while (true) {
        const currentQuery = queries[queryIndex];
        
        // --- Typing effect ---
        for (let i = 0; i < currentQuery.length; i++) {
            searchInput.placeholder = `Search... ${currentQuery.substring(0, i + 1)}`;
            await sleep(typingSpeed);
        }

        // Pause with the full query displayed
        await sleep(pauseBeforeDelete);

        // --- Deleting effect ---
        for (let i = currentQuery.length; i > 0; i--) {
            searchInput.placeholder = `Search... ${currentQuery.substring(0, i - 1)}`;
            await sleep(deletingSpeed);
        }
        
        // Pause after deletion before starting the next word
        await sleep(pauseAfterDelete);

        // Move to the next query, or loop back to the first
        queryIndex = (queryIndex + 1) % queries.length;
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', animatePlaceholder);
```

### Analytics for trending queries

No special "view" analytics event is needed for displaying trending queries. However, if a user clicks on a trending query suggestion that you've rendered in a list, your application should:

1. Populate the search input with that query string.
2. Execute a search for that term.
3. This will then trigger your standard "Search Results" view event, as detailed in the analytics guides.

## Best Practices

- **Manage queries in the UI:** Remember that the content of the trending queries list is managed from the Luigi's Box application dashboard ("Search > Search Suggestions Customization"), not through API parameters. This allows non-developers to curate the list easily.
- **Use for guidance**: Trending queries are best used as a gentle guide to help users who don't know what to search for, rather than as primary search results themselves.

## Next Steps

You have now learned how to implement all the core API-driven features of a custom autocomplete.

<% content_for :next_steps do %>
  <ul>
    <li><strong>Combine all features:</strong> Integrate query-based suggestions, on-focus <a href="/quickstartguides/autocomplete/implementing_top_items_suggestions_api.html">Top Items</a>, and <a href="/quickstartguides/autocomplete/implementing_trending_queries_suggestions.html">Trending Queries</a> into a single, seamless user experience.
    </li>
    <li><strong>Consider Autocomplete.js</strong> If managing the UI, API calls, and manual analytics becomes complex, remember that our Autocomplete.js library handles all of this logic automatically with a simple configuration. It's a great alternative for quickly deploying a <a href="/quickstartguides/autocomplete/autocomplete_with_autocompletejs.html">full-featured widget</a>.</li>
</ul>
<% end %>

