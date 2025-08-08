---
title: "Quickstart: Building a navigable category page with the PLP API"
layout: quickstart_layout
category: API integration
description: "Build a complete, interactive PLP with breadcrumbs, subcategory navigation, and pagination using the Luigi's Box API."
position: 2
---

## Introduction

While a basic PLP is a good start, a modern e-commerce site requires a rich browsing experience that allows users to navigate up and down your category tree seamlessly. This guide will show you how to leverage the Luigi's Box API's hierarchical capabilities to build that experience.
By the end of this guide, you will have a single-file code example that creates a dynamic PLP, complete with clickable breadcrumbs, subcategory links, interactive filters, and a full pagination component, all powered by your own client-side JavaScript.
[See full example](/pages/plp_breadcrumbs.html).


### What you'll learn

- How to use the `all_categories_path` filter for hierarchical listings.
- How to request and parse the hierarchical facet response to build a category tree.
- How to render a complete UI with breadcrumbs, subcategories, filters, and pagination.
- How to track the necessary analytics events for a PLP.

### Who is this guide for

- Developers who need to build a complete, hierarchical category browsing experience.
- Developers who want to understand the core API mechanics before building a full-featured integration.

### Prerequisites

- Your Luigi's Box `TrackerId`.
- The ability to write and serve a standard HTML, CSS, and JavaScript file.
- Hierarchical category data synced with your Luigi's Box catalog.
- Familiarity with the concepts in the first quickstart guide, ["Quickstart: Your first API-powered product listing"](/quickstartguides/building_custom_plp.html).

## Step-by-step

### Step 1: Set up the HTML structure

First, create the HTML skeleton for your page. This will include placeholders for all the dynamic components: breadcrumbs, subcategories, filters, the product grid, and pagination.

#### Example: Basic HTML layout

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Category Page | My Super Shop</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>
<body>
    <header>
        <h1>My Super Shop</h1>
    </header>
    <main>
      <nav id="breadcrumbs-container"></nav>
      <div id="subcategories-container"></div>
      <div class="search-layout">
        <aside id="facets-container"></aside>
        <div class="search-main-content">
          <h2 id="results-heading">Loading...</h2>
          <div id="results-container"></div>
          <div id="pagination-container"></div>
        </div>
      </div>
    </main>
    <script>
        // All our JavaScript will go here
    </script>
</body>
</html>
```

### Step 2: Define configuration and state

Inside your `<script>` tag, define the constants for your API configuration and the variables to manage the page's state.

##### Example: Configuration and state variables

```javascript
// --- CONFIGURATION ---
const TRACKER_ID = "YOUR_TRACKER_ID"; // Replace with your actual Tracker ID
const API_ENDPOINT = "https://live.luigisbox.com/search";
const RESULTS_PER_PAGE = 9;

// --- DOM ELEMENTS ---
const resultsContainer = document.getElementById("results-container");
const facetsContainer = document.getElementById("facets-container");
const resultsHeading = document.getElementById("results-heading");
const paginationContainer = document.getElementById("pagination-container");
const breadcrumbsContainer = document.getElementById("breadcrumbs-container");
const subcategoriesContainer = document.getElementById("subcategories-container");

// --- STATE MANAGEMENT ---
let currentCategoryPath = '';
let activeFilters = {};
let currentPage = 1;
```

### Step 3: Fetch the product listing data

Create the main function that calls the Luigi's Box API. This function will take the current category path, filters, and page number to construct the request. Note the use of `all_categories_path` to get all products in the tree and `facets=category_path` to get the data for the navigation UI.

##### Example: Fetching PLP data

```javascript
async function getProductListing(categoryPath, filters = {}, page = 1) {
  resultsHeading.textContent = 'Loading...';
  // Clear all containers before rendering new data
  resultsContainer.innerHTML = ''; 
  facetsContainer.innerHTML = '';
  paginationContainer.innerHTML = '';
  subcategoriesContainer.innerHTML = '';

  const params = {
    tracker_id: TRACKER_ID,
    'f[]': ['type:product'],
    facets: 'brand,price_amount,category_path',
    hit_fields: 'title,url,price_amount,image_link,brand,id',
    size: RESULTS_PER_PAGE,
    page: page,
  };
  
  if (categoryPath) {
      params['f[]'].push(`all_categories_path:${categoryPath}`);
      params.plp = 'all_categories_path';
  }

  for (const key in filters) {
    filters[key].forEach(value => {
      params['f[]'].push(`${key}:${value}`);
    });
  }

  try {
    const response = await axios.get(API_ENDPOINT, { params });
    const data = response.data;
    
    // Update state
    currentCategoryPath = categoryPath;
    currentPage = page;
    activeFilters = filters;

    // Call rendering functions (we will create these next)
    renderResults(data.results);
    renderFacets(data.results.facets);
    renderSubcategories(data.results.facets);
    renderPagination(data.results.total_hits);
    renderBreadcrumbs(currentCategoryPath);
    updateURL(currentCategoryPath, activeFilters, currentPage);
    trackListView(data.results.hits); // Track analytics

  } catch (error) {
    console.error("Error fetching product listing:", error);
    resultsHeading.textContent = "Error";
  }
}
```


### Step 4: Render the navigation (breadcrumbs & subcategories)

These functions parse the hierarchical facet response to build the UI that allows users to navigate up and down the category tree

#### Example: Rendering breadcrumbs and subcategories

```javascript
function renderBreadcrumbs(pathString) {
    if (!pathString) {
        breadcrumbsContainer.innerHTML = `<strong>Home</strong>`;
        return;
    }
    const pathParts = pathString.split('||');
    let accumulatedPath = '';
    const breadcrumbHTML = pathParts.map((part, index) => {
        accumulatedPath += (index > 0 ? '||' : '') + part;
        if (index === pathParts.length - 1) {
            return ` / <strong>${part}</strong>`;
        } else {
            const categoryUrl = `?category=${encodeURIComponent(accumulatedPath)}`;
            return ` / <a href="${categoryUrl}" class="breadcrumb-item">${part}</a>`;
        }
    }).join('');
    breadcrumbsContainer.innerHTML = `<a href="?" class="breadcrumb-item">Home</a>` + breadcrumbHTML;
}

function renderSubcategories(facetsData) {
    const categoryFacet = facetsData.find(f => f.name === 'category_path');
    if (!categoryFacet || !categoryFacet.values) return;

    let nodesToRender = [];
    if (!currentCategoryPath) {
        nodesToRender = categoryFacet.values;
    } else {
        const pathParts = currentCategoryPath.split('||');
        let currentLevelNodes = categoryFacet.values;
        let targetNode = null;
        for (const part of pathParts) {
            targetNode = currentLevelNodes.find(node => node.value === part);
            if (targetNode && targetNode.children) {
                currentLevelNodes = targetNode.children;
            } else {
                targetNode = null;
                break;
            }
        }
        if (targetNode) {
            nodesToRender = targetNode.children || [];
        }
    }

    if (nodesToRender.length === 0) return;
    
    const listItems = nodesToRender.map(cat => {
        const fullPath = currentCategoryPath ? `${currentCategoryPath}||${cat.value}` : cat.value;
        const categoryUrl = `?category=${encodeURIComponent(fullPath)}`;
        return `<li><a href="${categoryUrl}" class="subcategory-link">${cat.value} (${cat.hits_count})</a></li>`;
    }).join('');

    subcategoriesContainer.innerHTML = `<h3>Browse Subcategories</h3><ul>${listItems}</ul>`;
}
```

### Step 5: Render results, facets, and pagination

These functions render the product grid, the filter sidebar, and the page navigation controls.

#### Example: Rendering products, facets, and pagination

```javascript
function renderResults(resultsData) {
  const categoryName = currentCategoryPath.split('||').pop() || 'All Products';
  resultsHeading.textContent = `Showing ${resultsData.total_hits} results for "${categoryName}"`;

  if (resultsData.hits.length === 0) {
    resultsContainer.innerHTML = "<p>No products found in this category.</p>";
    return;
  }

  resultsContainer.innerHTML = resultsData.hits.map(result => {
    const imageUrl = result.attributes.image_link || "https://placehold.co/200x200/eee/ccc?text=No+Image";
    return `
      <div class="product-card">
        <a href="${result.url}" target="_blank" class="product-link" data-product-id="${result.attributes.id?.[0]}">
          <img src="${imageUrl}" alt="${result.attributes.title}" style="width:100%;">
        </a>
        <div class="product-info">
          <h3>${result.attributes.title}</h3>
          <p>${result.attributes.brand?.[0]}</p>
        </div>
      </div>`;
  }).join('');
}

function renderFacets(facetsData) {
    const filteredFacets = facetsData.filter(f => f.name !== 'category_path');
    facetsContainer.innerHTML = filteredFacets.map(facet => {
        const content = facet.values.map(val => {
            const isChecked = activeFilters[facet.name]?.includes(val.value) ? "checked" : "";
            return `
                <li>
                    <label>
                        <input type="checkbox" name="${facet.name}" value="${val.value}" ${isChecked}>
                        ${val.value} <span>(${val.hits_count})</span>
                    </label>
                </li>`;
        }).join('');
        return `
            <div>
                <h3>${facet.name.replace(/_/g, ' ')}</h3>
                <ul style="list-style:none;padding:0;">${content}</ul>
            </div>`;
    }).join('');
}

function renderPagination(totalHits) {
    const totalPages = Math.ceil(totalHits / RESULTS_PER_PAGE);
    paginationContainer.innerHTML = "";
    if (totalPages <= 1) return;
    // ... (pagination rendering logic from previous examples)
}

function updateURL(categoryPath, filters, page) {
    const urlParams = new URLSearchParams();
    if (categoryPath) urlParams.set('category', categoryPath);
    if (page > 1) urlParams.set("page", page);
    for (const key in filters) {
      filters[key].forEach(value => urlParams.append('f[]', `${key}:${value}`));
    }
    const newQueryString = urlParams.toString();
    const newRelativePath = newQueryString ? `?${newQueryString}` : window.location.pathname;
    try {
        if (window.location.search !== (newQueryString ? `?${newQueryString}`: '')) {
            history.pushState({ categoryPath, filters, page }, null, newRelativePath);
        }
    } catch (e) {
        console.warn("history.pushState failed.", e.message);
    }
}
```

### Step 6: Track analytics events

Analytics are not optional. Add the configuration and functions needed to track view_item_list and click events.

```javascript
#### Example: Track list view and click events

```javascript
// --- ANALYTICS CONFIGURATION ---
const ANALYTICS_API_URL = "https://api.luigisbox.com/";
const CLIENT_ID = Math.floor(Math.random() * 1e18); 

async function sendAnalyticsEvent(payload) {
    try {
        await axios.post(ANALYTICS_API_URL, payload);
        console.log('Analytics event sent:', payload.type);
    } catch (error) {
        console.error('Failed to send analytics event:', error);
    }
}

function trackListView(hits) {
    if (!hits || hits.length === 0) return;
    const analyticsPayload = {
        id: crypto.randomUUID(),
        type: "event",
        tracker_id: TRACKER_ID,
        client_id: CLIENT_ID,
        lists: {
            "Product Listing": {
                items: hits.map((hit, index) => ({
                    title: hit.attributes.title,
                    url: hit.url,
                    position: (currentPage - 1) * RESULTS_PER_PAGE + index + 1
                }))
            }
        }
    };
    sendAnalyticsEvent(analyticsPayload);
}

function trackClickEvent(productId) {
    const clickPayload = {
        id: crypto.randomUUID(),
        type: "click",
        tracker_id: TRACKER_ID,
        client_id: CLIENT_ID,
        action: {
            type: "click",
            resource_identifier: productId
        }
    };
    sendAnalyticsEvent(clickPayload);
}

productGrid.addEventListener('click', function(e) {
    const productLink = e.target.closest('.product-link');
    if (productLink) {
        const productId = productLink.dataset.productId;
        if (productId) {
            trackClickEvent(productId);
        }
    }
});
```

## Best Practices

- **Analytics is not optional:** When building a custom UI, you are responsible for sending all analytics events. This is essential for the learning models that power search relevance and personalization.
- **Use a persistent `CLIENT_ID`:** In this example, we generate a random `CLIENT_ID` on each page load. In a production environment, you should generate this ID once and store it in a long-term cookie or localStorage to track users across sessions.
- **Use `all_categories_path` for browsing:** This is the recommended filter for category pages as it correctly fetches products from the category and all its subcategories, while also providing the necessary data in the facets response to build the subcategory navigation.

## Next Steps

You now have a robust, client-side implementation of a dynamic PLP. The logical next step for a production environment is to move the API call from the user's browser to your own backend.

<% content_for :next_steps do %>

<ul>
<li>
<strong>Understand Your Data:</strong>
This guide relies on a correctly structured product feed. See our
<a href="#">Reference Guide for Indexing Hierarchical Products</a> to learn how to prepare your data.
</li>
</ul>
<% end %>