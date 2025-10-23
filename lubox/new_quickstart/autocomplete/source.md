---
title: "Quickstart: Getting query suggestions via the Autocomplete API" 
layout: quickstart_layout
category: "API integration"
position: 1
description: "Learn how to directly call the Autocomplete API to retrieve suggestion data for a custom UI, which requires you to manually handle API requests and implement analytics tracking."
---

## Introduction

This guide is for developers who need full control over the look and feel of their autocomplete suggestions or are integrating in a non-web environment, such as a mobile application. By calling the [Autocomplete API](/autocomplete/api.html) directly, you can fetch suggestion data and render it in any custom UI you design.

Unlike the [Autocomplete.js](/autocomplete/autocomplete_js.html) library, this method requires you to handle the API requests manually, render the results, and, most importantly, implement the analytics tracking for user interactions.

### What you'll learn

- How to make a GET request to the [Autocomplete API](/autocomplete/api.html) endpoint.
- The required parameters to send with your request to get relevant suggestions.
- How to understand the basic structure of the JSON response
- The critical importance of sending manual analytics events when using the API directly.

### Who is this guide for

- Developers who are building a custom autocomplete UI on their website.
- Mobile developers (iOS, Android) who are integrating search suggestions.
- Developers who are sending requests from a backend server.

### Prerequisites

Before you start, please ensure you have the following in place:

- The ability to make HTTP `GET` requests from your application or server.
- Your Luigi's Box `trackerId`.

## Step-by-step

The process involves three conceptual steps: making a request to the [API](/autocomplete/api.html) with the user's query, understanding the response, and then manually sending analytics events to ensure the system can learn from user behavior.

### Step 1: Set up the HTML structure

First, you need the basic HTML elements: an input field for the user to type in and a container where the results will be displayed.

```html
<div class="container">
    <input type="text" id="search-input" placeholder="Search for products, categories...">
    <div id="autocomplete-results"></div>
</div>
```

This snippet provides a search input with the ID `search-input` and an empty `div` with the ID `autocomplete-results` where we will dynamically render the suggestions.

### Step 2: Make the API request

As a user types into your search box, you will make a `GET` request to the following endpoint. It is recommended to debounce this request (e.g., wait 200-300ms after the user stops typing) to avoid sending excessive requests.

#### Endpoint

<span class="badge text-bg-success">GET</span> `https://live.luigisbox.com/autocomplete/v2`

#### Required parameters

- **`tracker_id`:** Your unique site identifier.
- **`q`:** The user's current input from the search box.
- **`type`:** A comma-separated list of the content type you want suggestions for, along with the quantity for each (e.g, `product:6,category:3,query:5`).

#### Optional parameters (recommended)

- **`hit_fields:`** A comma-separated list of attributes you need (e.g., title,url,price,image_link). Using this parameter is highly recommended to keep the API response fast and small by only fetching the data you will display.

#### Example

```javascript
// CONFIGURATION
const TRACKER_ID = "YOUR_TRACKER_ID"; // Replace with your actual Tracker ID
const AUTOCOMPLETE_API_URL = "https://live.luigisbox.com/autocomplete/v2";
const searchInput = document.getElementById('search-input');

const debounce = (func, delay) => {
  let timeout;

  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  }
}

const getSuggestions = async (query) => {
  if (!query) {
    // Clear results if input is empty
    document.getElementById('autocomplete-results').innerHTML = '';
    return:
  }

  try {
    const response = await axios.get(AUTOCOMPLETE_API_URL, {
        params: {
            tracker_id: TRACKER_ID,
            q: query,
            type: 'product:5,category:3,query:5', 
            hit_fields: 'title,url,price,image_link' 
        }
    });

    const hits = response.data.hits; // We will render these hits in the next step
  } catch (error) {
    console.error("Failed to fetch autocomplete suggestions:", error);
  }
};

searchInput.addEventListener('input', debounce(e => {
    getSuggestions(e.target.value);
}, 300));

```

This code sets up the necessary configuration and an event listener on our search input. When the user types, it calls the `getSuggestions` function, which makes a GET request to the Autocomplete API with the required parameters (`tracker_id`, `q`, `type`) and the recommended `hit_fields` parameter.

### Step 3: Understand the JSON response and render it

The API will return a JSON object where the most important part is the `hits` array. Each object in this array is a suggestion containing its `type` (e.g., "item", "category") and an `attributes` object with details like `title`, `price`, and `image_link`.

#### Example: Simplified JSON response

```json
{
  "hits": [
    {
      "url": "https://yourshop.com/products/white-v-neck",
      "attributes": {
        "title": "<em>White</em> Shirt V-Neck",
        "price": "25 EUR",
        "image_link": "https://yourshop.com/images/shirt.jpg",
      },
      "type": "item",
      "updated_at": "..."
    },
    {
      "attributes": {
        "title": "<em>White</em> T-Shirts"
      },
      "type": "category"
    }
    //... more hits
  ]
}
```

You will need to parse this JSON and use the data within the attributes of each hit to render your custom autocomplete UI. Note that the API may return highlighted text (using `<em>` tags) within fields like title.

#### Example: Rendering results

Now that we are fetching the suggestions, we need a function to render them into our `autocomplete-results` container. This function will parse the `hits` array from the API response and build the HTML for the suggestions.

```javascript
function renderResults(hits) {
    const resultsContainer = document.getElementById('autocomplete-results');
    resultsContainer.innerHTML = ''; // Clear previous results
    if (!hits || hits.length === 0) return;

    // Group results by type (e.g., 'item', 'category')
    const groupedResults = hits.reduce((acc, hit) => {
        (acc[hit.type] = acc[hit.type] || []).push(hit);
        return acc;
    }, {});

    const groupTitleMap = { item: 'Products', category: 'Categories', query: 'Popular Searches' };

    for (const type in groupedResults) {
        const groupDiv = document.createElement('div');
        // ... code to create and append group title ...
        
        groupedResults[type].forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'result-item';
            // Set data attributes for analytics tracking
            itemDiv.dataset.itemId = item.url || item.attributes.title;
            itemDiv.dataset.itemType = item.type;
            
            // Build the inner HTML for the suggestion item
            let innerHTML = '';
            if (item.attributes.image_link) {
                innerHTML += `<img src="${item.attributes.image_link}" alt="">`;
            }
            innerHTML += `<div class="title">${item.attributes.title}</div>`;
            if (item.attributes.price) {
                innerHTML += `<div class="price">${item.attributes.price}</div>`;
            }
            itemDiv.innerHTML = innerHTML;
            groupDiv.appendChild(itemDiv);
        });
        resultsContainer.appendChild(groupDiv);
    }
}

// Now, call this function inside getSuggestions after fetching the data:
// (Inside the `getSuggestions` try block)
// const hits = response.data.hits;
// renderResults(hits); // Add this line
```

This `renderResults` function takes the `hits` array, groups the suggestions by type (e.g., "item", "category"), and dynamically creates HTML elements for each suggestion, including images and prices. You should call this function from within your `getSuggestions` function after you receive a successful API response.

### Step 4: Implement manual Analytics tracking (CRITICAL)

This is the most important difference compared to using [Autocomplete.js](/autocomplete/autocomplete_js.html). When you use the API directly, analytics are **NOT** tracked automatically. You are responsible for sending the events.

1. **Track the view (Autocomplete list event):** Immediately after you display the suggestions from the API response, you must send an Autocomplete list event to Luigi's Box. This tells the system which suggestions were shown to the user. Refer to our "Quickstart: Send your first search events with the Events API" guide, but use "Autocomplete" as the list name instead of "Search Results".
2. **Track the click:** When a user clicks on one of your rendered suggestions, you must send a click event to report this interaction. This event should include the unique identifier of the clicked item.

Without these manual analytics events, Luigi's Box cannot learn which suggestions are effective, and the quality of your autocomplete results will not improve over time.

#### Example: Sending Analytics via the Events API

```javascript
const ANALYTICS_API_URL = "https://api.luigisbox.com/";
const CLIENT_ID = Math.floor(Math.random() * 1e18); // A persistent user ID is better

async function sendAnalyticsEvent(payload) {
    try {
        axios.post(ANALYTICS_API_URL, payload);
        console.log('Analytics event sent:', payload.type);
    } catch (error) {
        console.error('Failed to send analytics event:', error);
    }
}

// 1. Send VIEW event after rendering results
// (Add this inside the `getSuggestions` function, after calling renderResults)
if (hits && hits.length > 0) {
    const analyticsPayload = {
        id: uuid.v4(),
        type: "event",
        tracker_id: TRACKER_ID,
        client_id: CLIENT_ID,
        lists: {
            "Autocomplete": {
                query: { string: query },
                items: hits.map((hit, index) => ({
                    title: hit.attributes.title,
                    url: hit.url || hit.attributes.title,
                    position: index + 1
                }))
            }
        }
    };
    sendAnalyticsEvent(analyticsPayload);
}

// 2. Send CLICK event when a user selects a suggestion
document.getElementById('autocomplete-results').addEventListener('click', (e) => {
    const resultItem = e.target.closest('.result-item');
    if (resultItem) {
        const itemId = resultItem.dataset.itemId;
        
        const clickPayload = {
            id: uuid.v4(),
            type: "click",
            tracker_id: TRACKER_ID,
            client_id: CLIENT_ID,
            action: {
                type: "click",
                resource_identifier: itemId
            }
        };
        sendAnalyticsEvent(clickPayload);

        // Hide results after click
        document.getElementById('autocomplete-results').innerHTML = '';
    }
});
```

This code adds the `sendAnalyticsEvent` helper function. Crucially, it shows how to construct and send the `Autocomplete` list view event right after rendering suggestions, and how to add a click listener to send a click event when a user selects a suggestion.

#### Example: Sending Analytics via dataLayer collector

If you prefer to send the events via the [dataLayer collector](/analytics/collector.html) to track the view push a `view_item_list` event to the `dataLayer` after rendering the suggestions, instead of calling the `sendAnalyticsEvent` function.

To track the click, push a `select_item` event to the `dataLayer`.

```javascript
// This replaces the Events API call for the view
if (hits && hits.length > 0) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "view_item_list",
      ecommerce: {
        item_list_name: "Autocomplete", // This name is critical
        search_term: query,
        items: hits.map((hit, index) => ({
          item_id: hit.url || hit.attributes.title, // Must match your catalog ID
          item_name: hit.attributes.title,
          index: index + 1,
          item_list_id: "autocomplete"
        }))
      }
    });
}


// This replaces the Events API call for the click
// (Inside your click listener)
const itemId = resultItem.dataset.itemId;
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "select_item",
  ecommerce: {
    items: [
      {
        item_id: itemId // The ID of the clicked item
      }
    ]
  }
});
```

## Best Practices

- **Avoid proxying requests:** For the best performance and lowest latency, make the API calls directly from the client-side (the user's browser or mobile app). Avoid proxying requests through your own backend server.
- **Use `hit_fields`**: To minimize the response size and improve speed, use the optional `hit_fields` parameter in your API call to request only the attributes you actually need to display (e.g., `&hit_fields=title,price,image_link`).
- **Use DNS prefetch for web:** If you are integrating on a website, add `<link rel="dns-prefetch" href="//live.luigisbox.com">` to your HTML `<head>` to speed up the first request.

## Next Steps

Now that you have a basic Autocomplete widget running, you can explore its more advanced features:

<% content_for :next_steps do %>
  <ul>
    <li><strong>Show suggestions on focus:</strong> Learn how to show suggestions on focus by referring to our <a href="/quickstartguides/autocomplete/implementing_top_items_suggestions_api.html">"Quickstart: Implementing 'Top Items' suggestions with the API</a> guide.</li>
  </ul>
<% end %>
