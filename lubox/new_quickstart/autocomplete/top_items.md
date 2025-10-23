---
title: "Quickstart: Implementing 'Top Items' suggestions with the API"
layout: quickstart_layout
category: "API integration"
position: 2
description: "Learn how to use the 'Top Items' and 'Personalized Top' Items APIs to show suggestions when a user clicks into an empty search bar."
---

## Introduction

A powerful way to enhance product discovery is to provide suggestions the moment a user shows intent by clicking into your search bar, even before they start typing. This guide will show you how to use the [Top Items API](/autocomplete/top_items.html) to implement this feature for a custom UI.

This approach is for developers who need full control over the user experience and are responsible for rendering the suggestions and tracking all related analytics events.

### What you'll learn

- How to call the [Top Items API](/autocomplete/top_items.html) to fetch popular items.
- How to call the [Personalized Top Items API](/autocomplete/top_items.html#personalized-top-items-last-searched-queries) to fetch user-specific suggestions.
- The critical importance of manually tracking analytics for these "on focus" suggestions.

### Who is this guide for

- Developers who have understood the ["Quickstart: Getting query suggestions via the Autocomplete API"](/quickstartguides/autocomplete/autocomplete_query_suggestions.html) and now want to add on-focus suggestions.
- Mobile developers (iOS, Android) who are integrating search suggestions.
- Any developer needing to fetch top or personalized item data directly.

### Prerequisites

Before you start, please ensure you have the following in place:

- A working search input field in your application.
- The ability to make HTTP `GET` requests from your application and render the results.
- Your Luigi's Box `trackerId`.
- A setup for manually sending analytics events, as detailed in the Events API guides.

## Step-by-step

We will now modify the code from the previous guide. The changes involve adding a new API endpoint, creating a function to fetch top items, updating your analytics tracking, and adding a `focus` event listener.

### Step 1: Add the Top Items API endpoint

In your JavaScript configuration section, add a new constant for the Top Items API URL.

#### Example

```javascript
// --- CONFIGURATION ---
const TRACKER_ID = "YOUR_TRACKER_ID";
const TOP_ITEMS_API_URL = "https://live.luigisbox.com/v1/top_items"; // <-- ADD THIS
const AUTOCOMPLETE_API_URL = "https://live.luigisbox.com/autocomplete/v2";
// ... rest of your config
```

### Step 2: Create a function to fetch Top Items

Next, add a new asynchronous function specifically for fetching top items. This function will call the `TOP_ITEMS_API_URL` and then use your existing `renderResults` function to display the data.

#### Endpoint

<span class="badge text-bg-success">GET</span> `https://live.luigisbox.com/v1/top_items`

#### Required parameters

- **`tracker_id`:** Your unique site identifier.
- **`type`:** A comma-separated list of the content type you want suggestions for, along with the quantity for each (e.g, `product:6,category:3`).

#### Optional parameters (recommended)

- **`hit_fields:`** A comma-separated list of attributes you need (e.g., title,url,price,image_link). Using this parameter is highly recommended to keep the API response fast and small by only fetching the data you will display.

#### Example: Add this new function to your core logic

```javascript
const getTopItemsSuggestions = async () => {
    try {
        const response = await axios.get(TOP_ITEMS_API_URL, {
            params: {
                tracker_id: TRACKER_ID,
                type: 'product:5,category:3',
                hit_fields: 'title,url,price,image_link'
            }
        });
        const hits = response.data.hits;
        
        // Override the default group titles for this specific view
        const customTitles = { item: 'Popular Products', category: 'Top Categories' };
        renderResults(hits, customTitles); 
        
        // We will send analytics in the next step
        
    } catch (error) {
        console.error("Failed to fetch top items:", error);
    }
};

```

This function is very similar to your existing `getQuerySuggestions` function but calls a different endpoint and doesn't require a `q` (query) parameter. It also prepares custom titles for the suggestion groups.

### Step 3: Update Analytics for different suggestion types

To distinguish between regular query-based suggestions and these new "on-focus" suggestions, we need to modify our analytics tracking. We will update the `sendAutocompleteViewAnalytics` function to accept a custom filter.

#### Example: Replace your existing `sendAutocompleteViewAnalytics` function with this enhanced version

```javascript
// This function replaces your previous analytics function
function sendAutocompleteViewAnalytics(query, hits, customFilters = {}) {
    const analyticsPayload = {
        id: uuid.v4(),
        type: "event",
        tracker_id: TRACKER_ID,
        client_id: CLIENT_ID,
        lists: {
            "Autocomplete": {
                query: { 
                    string: query || "",
                    // Add custom filters to distinguish the source
                    filters: customFilters 
                },
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
```

#### Example: Update the two fetcher functions

In `getTopItemSuggestions`, add this line after `renderResults(hits)`:

```javascript
// Send analytics with a filter to identify this as an "on-focus" event
if (hits && hits.length > 0) {
    sendAutocompleteViewAnalytics(null, hits, { source: 'top_items_on_focus' });
}
```

In your existing `getQuerySuggestions`, modify the analytics call:

```javascript
// Change the original analytics call to this:
if (hits && hits.length > 0) {
    sendAutocompleteViewAnalytics(query, hits); // No custom filter needed here
}
```

### Step 4: Add the `focus` event listener

Finally, add a `focus` event listener to your search input. This will trigger your new `getTopItemsSuggestions` function whenever a user clicks into an empty search box.

#### Example

```javascript
// --- EVENT LISTENERS ---
searchInput.addEventListener('input', debounce(e => getQuerySuggestions(e.target.value), 300));

// ADD THIS NEW LISTENER
searchInput.addEventListener('focus', () => {
    // Only fetch top items if the search box is empty
    if (searchInput.value === '') {
        getTopItemsSuggestions();
    }
});
```

## Advanced: Adding personalized Top items

### Step 1: Add the Personalized API endpoint

First, add the URL for the personalized API to your configuration constants.

#### Example: Add the following line to your configuration

```javascript
const PERSONALIZED_TOP_ITEMS_API_URL = "https://live.luigisbox.com/v1/personalized_top_items";
```

### Step 2: Create a function for personalized suggestions

Now, create a new function to handle fetching personalized data. This function calls the personalized endpoint and requires a `user_id` parameter.

#### Example: Add the following function to your core logic

```javascript
const getPersonalizedTopItemsSuggestions = async (userId) => {
    if (!userId) return; // Don't run if there's no user ID

    try {
        const response = await axios.get(PERSONALIZED_TOP_ITEMS_API_URL, {
            params: {
                tracker_id: TRACKER_ID,
                user_id: userId, // The specific user's ID
                type: 'items:5,query:3' // e.g., personalized items and last searched queries
            }
        });
        const hits = response.data.hits;
        const customTitles = { item: 'Recommended For You', query: 'Your Recent Searches' };
        renderResults(hits, customTitles);

        // Add the analytics call for this new function
        if (hits && hits.length > 0) {
            sendAutocompleteViewAnalytics(null, hits, { source: 'personalized_top_items' });
        }
    } catch (error) {
        console.error("Failed to fetch personalized top items:", error);
    }
};
```

### Step 3: Update the `focus` event listener

The final step is to update your focus event listener with logic to choose which function to call based on whether a user is logged in.

#### Example: Replace your existing `focus` listener with the following version

```javascript
// Replace the previous searchInput.addEventListener('focus', ...) with this:
searchInput.addEventListener('focus', () => {
    if (searchInput.value === '') {
        // In a real application, you would check if the user is logged in
        // and get their actual ID from your session or auth system.
        const currentUserId = "user-123"; // Example: get this from your session
        
        if (currentUserId) {
            getPersonalizedTopItemsSuggestions(currentUserId);
        } else {
            getTopItemsSuggestions();
        }
    }
});
```

## Best Practices

- **You are in control:** Remember that when using the direct API, you are fully responsible for the implementation, including all analytics tracking. Failure to send analytics events will prevent the system from learning.
- **Use `hit_fields`**: To minimize the response size and improve speed, use the optional `hit_fields` parameter in your API call to request only the attributes you actually need to display (e.g., `&hit_fields=title,price,image_link`).
- **Match user IDs for personalization** For the Personalized Top Items API to be effective, the `user_id` you send in the API request must match the `customer_id` you send in your analytics events for that same user.

## Next Steps

Now that your on-focus suggestions are working, you can continue to enhance your autocomplete experience.

<% content_for :next_steps do %>
  <ul>
    <li><strong>Implement trending queries</strong> Learn how to fetch and display popular search terms by following our <a href="/quickstartguides/autocomplete/implementing_trending_queries_suggestions.html">"Implementing 'Trending Queries' suggestions"</a> guide.</li>
  </ul>
<% end %>

