---
title: "Quickstart: Integrating search.js for a full search page" 
layout: quickstart_layout
category: library integration
description: "Learn to quickly build a feature-rich search results page on your website using the Search.js library."
position: 1
---

## Introduction

This guide provides the fastest way to build a feature-rich and interactive search results page on your website using the Search.js library. This library is the recommended integration path for most websites, as it handles all the complex parts for you: it makes the API calls, renders a professional UI with filters and pagination, and automatically tracks all necessary analytics to improve results over time.
By the end of this guide, you will have a fully functional, single-page-application-style search interface that you can easily customize.

### What you'll learn

- How to create a dedicated search results page on your site.
- How to configure your site's search forms to direct users to this new page.
- How to include and initialize the Search.js library with essential configurations.
- How to enable key features like filtering (facets) right out of the box.

### Who is this guide for

- Developers looking for a fast, out-of-the-box solution for a search results page.
- Users who want to quickly implement powerful features like faceting and pagination without needing to work directly with the API.

### Prerequisites

Before you start, please ensure you have the following in place:

- The ability to create new pages and edit HTML on your website.
- Your Luigi's Box `TrackerId`.

## Step-by-step: Building the search page

### Step 1: Create a new search page

First, create a new HTML page on your site where the search results will be displayed. For example, you can name it `search.html` and place it in the root directory of your website.
This page should include your standard site layout (header, footer, etc.) and a placeholder element where Search.js will render the entire search interface. We recommend giving this placeholder a loading indicator to ensure a smooth user experience.

#### Example: `search.html` body

```html
<body>
  <!-- Your website's standard header -->
  <header>
    ...
  </header>

  <!-- This is the placeholder where the search UI will be rendered -->
  <div id="search-ui">
    <!-- Optional: Add a loading spinner for a better user experience -->
    <div class="loading-spinner"></div>
  </div>

  <!-- Your website's standard footer -->
  <footer>
    ...
  </footer>

  <!-- Luigi's Box Scripts will go here -->
</body>
```


### Step 2: Point search forms to the new page

Next, update the search forms across your website to ensure that when a user submits a query, they are redirected to the new search page.
Update your search `<form>` tag to use the `GET` method and set the action attribute to point to the new page you created. Make sure your search `<input>` has a name attribute (e.g., `name="q"`), as this will be used in the URL.

#### Example: Search form

```html
<form action="/search.html" method="GET">
  <input type="search" name="q" placeholder="Search for products...">
  <button type="submit">Search</button>
</form>
```

Now, when a user types "laptops" and hits enter, their browser will navigate to `/search.html?q=laptops`.


### Step 3: Add and initialize the search.js script

On your new `search.html` page, add the following script block just before the closing `</body>` tag. This will load and initialize the `Search.js` library.

#### Example: Initialize search.js

```html
<!-- Add this script at the end of your <body> on the search.html page -->
<script src="https://cdn.luigisbox.com/search.js"></script>
<script>
  // This initializes the Luigi's Box Search UI
  Luigis.Search(
    {
      // --- Configuration Start ---
      TrackerId: 'YOUR_TRACKER_ID', // Replace with your actual Tracker ID
      Theme: 'boo',                 // Use the 'boo' theme for a modern look
      
      // Tell Search.js to only search for products by default
      DefaultFilters: {
        type: 'product'
      },

      // Define which filters (facets) to show the user
      Facets: ['brand', 'category', 'price_amount'],
      // --- Configuration End ---
    },
    '[name="q"]',   // CSS selector for the search input field on this page
    '#search-ui'    // CSS selector for the placeholder element
  );
</script>
```

### Step 4: Verify your integration

You're all set! To verify the integration:

1. Go to any page on your website with a search box.
2. Type a query for a product you know is in your catalog and press <kdb>Enter</kbd>.
3. You should be redirected to your `search.html` page.
4. The page should display a fully interactive search UI with results and filters for brand, category, and price, all rendered inside your `#search-ui` div.

## Best practices

- **Automatic analytics:** One of the advantages of Search.js is that it handles sending all necessary analytics events automatically. You do not need to implement any manual tracking.
- **Theming:** The Theme option is a powerful way to control the look and feel. Luigi’s Box recommends starting with `'boo'` for a modern, responsive design that works well on all devices.
- **Loading states:** To prevent page flicker and content shifting, style your `#search-ui` placeholder with a fixed height and a loading indicator. This is what users will see for a moment before the `Search.js` library loads and renders the results.

## Next steps

Now that you have a basic search page running, you can explore more advanced features:

<% content_for :next_steps do %>
<ul>
  <li>
    <strong>Customize the UI:</strong>
    Learn how to change the layout and appearance of results and filters by reading our
    <a href="/quickstartguides/search/personalizing_search_js.html">"Personalizing the Search UI with Search.js Templates"</a> guide.
  </li>
  <li>
    <strong>Integrate directly with the API:</strong>
    If you need more control than the Search.js library provides, your next step would be to read the
    <a href="/quickstartguides/search/building_custom_search_ui.html">"Building a custom search UI with the Search API"</a> guide.
  </li>
</ul>
<% end %>