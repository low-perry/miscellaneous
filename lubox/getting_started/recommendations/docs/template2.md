---
title: "Quickstart: Building a custom Search UI with the Search API" 
layout: quickstart_layout
category: API integration
description: "Learn how to build a minimal but functional search results page using Luigi's Box Search API and your own JavaScript."
---

## Introduction

This guide provides a comprehensive walkthrough for building a feature-rich, custom search results page by calling the [Search API](/search/api.html) directly from your frontend. This approach gives you complete control over the final look and feel, allowing you to create a user experience that is perfectly tailored to your brand.

By the end of this guide, you will have a fully functional search page with interactive filters, numbered pagination, and dynamic product variant swatches, all powered by your own client-side JavaScript. Click here to see the [result](/pages/custom_search_ui.html).

<% note_content = capture do %>
  <p>This is a <strong>demonstration guide</strong>, not production code. In real-world application, for frontend integration, Luigi's box recommends using <a href="/search/search_js.html">Search.js</a>, which provides a more robust, maintainable, and production-ready code.</p>
  <p>The recommended way to use the <a href="/search/api.html">Search API</a> is through your own backend proxy.</p>
<% end %>
<%= callout("warning", note_content) %>

### What you'll learn

- How to call the Search API directly from the frontend.
- How to render search results, facets, and pagination controls from the API response.
- How to implement interactive features like filters and variant image previews.
- How to manage the browser's URL to create a shareable search experience.

### Who is this guide for

- Developers building single-page or custom storefront UIs.
- Anyone evaluating the Search API for custom integration.

### Prerequisites

- Your Luigi's Box `TrackerId`.
- The ability to write and serve a standard HTML, CSS, and JavaScript file.
- The ability to make HTTP requests from your frontend code.

## Step-by-step

### Step 1: Set up the HTML structure

Start by creating the basic structure of your search page. This will include a search form, placeholders for results and facets, and containers for pagination.

#### Example: Basic HTML layout
```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Search Demo</title>
</head>
<body>
  <form id="search-form">
    <input id="search-input" type="search" placeholder="Search products..." />
  </form>
  <div id="facets-container"></div>
  <h2 id="results-heading"></h2>
  <div id="results-container"></div>
  <div id="pagination-container"></div>

  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <script>
  // --- DOM ELEMENTS ---
      const searchForm = document.getElementById("search-form");
      const searchInput = document.getElementById("search-input");
      const resultsContainer = document.getElementById("results-container");
      const facetsContainer = document.getElementById("facets-container");
      const resultsHeading = document.getElementById("results-heading");
      const paginationContainer = document.getElementById(
        "pagination-container"
      );

      // --- STATE MANAGEMENT ---
      let activeFilters = {};
      let currentPage = 1;
    // JS will go here
  </script>
</body>
</html>
```

<% info_content = capture do %>
  <p>Styling is omitted in this guide for clarity. You can bring your styles to customize the look and feel.</p>
<% end %>
<%= callout("info", info_content) %>

### Step 2: Understand the Search API request

To get results, you send a `GET` request to the Search API endpoint.

#### Endpoint

<span class="badge text-bg-success">GET</span> `https://live.luigisbox.com/search`

#### Required parameters

- `tracker_id`: Your Luigi's Box Tracker ID.

#### Optional parameters (recommended for a functional search page)

- `q`: The user's search query. While optional (for filter-only pages), this is the primary input for any search box interaction.
- `f[]`: An array of filters using `key:value` syntax. (**Highly Recommended**) You should almost always include `f[]=type:product` to ensure you only get results for your main content type.
- `hit_fields`:  A comma-separated list of product attributes to return. (**Highly Recommended**) Requesting only the fields you need (e.g., `title,url,price,image_link`) significantly improves performance by reducing the response size.
- `facets`:  A comma-separated list of attributes for which you want to receive filter options (e.g., `brand,category,price_amount`).
- `size`: The number of results per page (default is 10).
- `page`: The page number for pagination (default is 1).

#### Example: Search API request URL

<span class="badge text-bg-success">GET</span> `https://live.luigisbox.com/search?tracker_id=<YOUR_TRACKER_ID>&q=digital+piano&f[]=type:product&facets=brand,category,price_amount&hit_fields=title,url,price_amount,image_link,brand,nested,color_code,color,id&page=1`

### Step 3: Understand the API response

The API responds with a JSON object containing everything needed to render the page.

#### Example: Search API response

```json
{
  "results": {
    "query": "digital piano",
    "filters": [
      "type:product"
    ],
    "hits": [
      {
        "url": "/smart-piano-the-one-digital-piano/?variantId=2369748",
        "attributes": {
          "brand": [
            "Smart piano"
          ],
          "color": [
            "Black"
          ],
          "title": "Smart piano The ONE Digital Piano",
          "id": [
            "2369748"
          ],
          "price_amount": 629,
          "image_link": "https://cdn.myshoptet.com/usr/demoshop.luigisbox.com/user/shop/detail/1774257-1.jpg",
          "color_code": [
            "#3d2b1f"
          ]
        },
        "nested": [
          {
            "url": "/digital-pianos/",
            "attributes": {
              "title": "Digital Pianos"
            },
            "type": "category"
          },
          {
            "url": "/smart-piano/",
            "attributes": {
              "title": "Smart piano"
            },
            "type": "brand"
          },
          {
            "url": "",
            "attributes": {
              "id": [
                "2369745"
              ],
              "brand": [
                "Smart piano"
              ],
              "price_amount": 1279,
              "image_link": "https://cdn.myshoptet.com/usr/demoshop.luigisbox.com/user/shop/detail/1774257.jpg",
              "color": [
                "White"
              ],
              "title": "Smart piano The ONE Digital Piano",
              "color_code": [
                "#ffffff"
              ]
            },
            "type": "variant"
          } // more nested objects 
        ],
        "type": "product"
      }
    ],
    "facets": [
      {
        "name": "brand",
        "type": "text",
        "values": [
          {
            "value": "Yamaha",
            "hits_count": 37
          } // more values
        ]
      },
      {
        "name": "category",
        "type": "text",
        "values": [
          {
            "value": "Musicians",
            "hits_count": 172
          } // more values
        ]
      },
      {
        "name": "price_amount",
        "type": "float",
        "values": [
          {
            "value": "2.89|213.0",
            "hits_count": 36,
            "normalized_hits_count": 0.21
          } //more values
        ]
      }
    ],
    "total_hits": 172
  },
  "next_page": "https://live.luigisbox.com/search?tracker_id=179075-204259&q=digital%20piano&f[]=type:product&facets=brand,category,price_amount&hit_fields=title,url,price_amount,image_link,brand,nested,color_code,color,id&page=2"
}
```

#### Key fields overview

- `results.total_hits`: The total number of products found for the query, used for building pagination.
- `results.hits`: An array of the product results for the current page. Each `hit` contains:
    - `attributes`: An object with all the product data you've indexed, like `title`, `price_amount`, and `image_link`.
    - `nested`: An array containing product variants (e.g., different colors or sizes) if they exist. This allows you to display variant-specific information, like a different image for each color.
- `results.facets`: An array of filter groups (e.g., "brand," "price"). Each facet contains a `name` and an array of values, where each value has the number of matching products (`hits_count`).
- `next_page`: A pre-built URL to fetch the next page of results, which is useful for "load more" style pagination.

### Step 4: Fetch search results

Here's how to call the Search API with filters and optional query text. This function handles pagination and invokes the rendering functions.

#### Example: Fetching search results with Axios

```javascript
// --- CONFIGURATION ---
const TRACKER_ID = 'YOUR_TRACKER_ID';
const API_ENDPOINT = 'https://live.luigisbox.com/search';
const RESULTS_PER_PAGE = 9;


// --- API CALL ---
async function getSearchResults(query, filters = {}, page = 1) {
    const params = {
        tracker_id: TRACKER_ID,
        'f[]': ['type:product'],
        facets: 'brand,category,price_amount',
        hit_fields: 'title,url,price_amount,image_link,brand,nested,color_code,color,id',
        size: RESULTS_PER_PAGE,
        page: page
    };

    if (query) {
        params.q = query;
    }

    for (const key in filters) {
        filters[key].forEach(value => {
            params['f[]'].push(`${key}:${value}`);
        });
    }

    try {
        const response = await axios.get(API_ENDPOINT, { params });
        const data = response.data;
        
        currentPage = page;
        renderResults(data.results);
        renderFacets(data.results.facets);
        renderPagination(data.results.total_hits);
        updateURL(query, filters, page);

        // Track the search event for analytics
        trackSearchView(query, data.hits, page);

    } catch (error) {
        console.error("Error fetching search results:", error);
    }
}
```

### Step 5: Render search results and filters

These functions take the API response and generate the HTML for product cards, filter checkboxes, and pagination buttons.

#### Example: Render products, facets, and page controls

- `renderResults(resultsData)`: This function takes the results object from the API response. It iterates through the hits array to build and display a product card for each item, including its image, title, brand, price, and an "Add to cart" button. It also updates the main heading to show the total number of results found.
- `renderFacets(facetsData)`: This function takes the facets array from the API response. It processes this array to create the filter sidebar, rendering each facet (like "brand" or "price") as a group of checkboxes with the corresponding value and the count of matching items.
- `renderPagination(totalHits)`: This function takes the `total_hits` number from the API response. It calculates how many pages are needed based on the `RESULTS_PER_PAGE` constant and then generates the numbered pagination buttons, including the "next" and "previous" controls.
- `updateURL(query, filters, page)`: This function manages the browser's history. It takes the current search query, active filters, and page number and updates the URL in the address bar. This creates a shareable link for the current search state and allows the browser's back and forward buttons to work correctly.

```javascript
// --- RENDERING FUNCTIONS ---
function renderResults(resultsData) {
  const queryText = resultsData.query
    ? ` for "${resultsData.query}"`
    : "";
  resultsHeading.textContent = `Showing ${resultsData.hits.length} of ${resultsData.total_hits} results${queryText}`;

  if (resultsData.hits.length === 0) {
    resultsContainer.innerHTML = "<p>No products found.</p>";
    return;
  }

  resultsContainer.innerHTML = resultsData.hits
    .map((result) => {
      const { url, attributes, nested } = result;
      const imageUrl =
        attributes.image_link ||
        "https://placehold.co/400x400/eee/ccc?text=No+Image";
      const title = attributes.title || "No Title Available";
      const brand = attributes.brand ? attributes.brand[0] : "";
      const price = attributes.price_amount
        ? `${attributes.price_amount} EUR`
        : "";
      const productId = attributes.id ? attributes.id[0] : "";

      return `
              <div class="product-card" data-main-image="${imageUrl}">
                  <a href="${url}" target="_blank" class="product-link" data-product-id="${productId}">
                      <img src="${imageUrl}" alt="" class="product-image" onerror="this.onerror=null;this.src='https://placehold.co/400x400/eee/ccc?text=No+Image';">
                  </a>
                  <div class="product-info">
                      <h3 class="product-title">${title}</h3>
                      <p class="product-brand">${brand}</p>
                      <div class="product-price-section">
                          <div class="product-price">${price}</div>
                          <button class="add-to-cart-btn" data-product-id="${productId}">
                              <svg height="200px" width="200px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#fff;} </style> <g> <path class="st0" d="M198.745,439.889c-5.698-3.854-12.636-6.128-20.013-6.119c-4.921,0-9.659,1-13.943,2.82 c-6.434,2.721-11.875,7.244-15.737,12.958c-3.862,5.698-6.128,12.636-6.112,20.012c-0.008,4.912,0.993,9.651,2.812,13.934 c2.728,6.443,7.244,11.884,12.95,15.737c5.706,3.871,12.652,6.128,20.029,6.128c4.912,0,9.643-1.001,13.926-2.82 c6.442-2.721,11.883-7.253,15.746-12.958c3.854-5.698,6.12-12.645,6.12-20.022c0-4.911-1.009-9.642-2.82-13.934 C208.975,449.184,204.451,443.743,198.745,439.889z M192.03,475.176c-1.092,2.58-2.936,4.805-5.243,6.359 c-2.316,1.555-5.028,2.456-8.055,2.464c-2.026-0.008-3.903-0.405-5.615-1.142c-2.572-1.074-4.805-2.927-6.36-5.226 c-1.555-2.324-2.456-5.044-2.464-8.072c0.009-2.018,0.413-3.887,1.133-5.615c1.083-2.572,2.936-4.796,5.242-6.358 c2.316-1.555,5.037-2.448,8.064-2.457c2.018,0,3.887,0.406,5.607,1.133c2.58,1.083,4.796,2.927,6.351,5.243 c1.563,2.315,2.464,5.028,2.464,8.054C193.154,471.587,192.75,473.456,192.03,475.176z"></path> <path class="st0" d="M216.525,283.808c7.278-2.117,11.462-9.75,9.328-17.036l-35.576-121.796 c-2.117-7.286-9.742-11.462-17.028-9.337c-7.285,2.126-11.453,9.75-9.336,17.028l35.576,121.812 C201.622,281.757,209.247,285.941,216.525,283.808z"></path> <path class="st0" d="M256.98,265.416c2.134,7.286,9.759,11.462,17.035,9.336c7.278-2.125,11.463-9.749,9.329-17.035 l-32.996-112.972c-2.117-7.285-9.742-11.462-17.027-9.344c-7.286,2.133-11.462,9.758-9.337,17.035L256.98,265.416z"></path> <path class="st0" d="M314.554,256.625c2.125,7.286,9.758,11.462,17.035,9.337c7.278-2.126,11.462-9.759,9.328-17.036 l-30.49-104.412c-2.126-7.286-9.75-11.462-17.028-9.328c-7.285,2.117-11.462,9.75-9.336,17.027L314.554,256.625z"></path> <path class="st0" d="M371.945,247.248c2.134,7.286,9.758,11.462,17.035,9.336c7.278-2.133,11.462-9.749,9.337-17.035 l-27.828-95.275c-2.117-7.285-9.75-11.453-17.036-9.336c-7.277,2.134-11.453,9.758-9.328,17.035L371.945,247.248z"></path> <path class="st0" d="M168.726,392.844c-3.871,0-7.492-0.778-10.817-2.176c-4.97-2.1-9.246-5.64-12.239-10.089 c-2.878-4.276-4.582-9.312-4.714-14.836c0.148-6.592,2.249-12.313,5.937-16.887c1.91-2.357,4.267-4.424,7.128-6.136 c2.828-1.687,6.161-3.027,10.073-3.87l244.335-39.769c15.961-2.605,28.663-14.81,31.888-30.664l29.887-146.928v-0.016 c0.347-1.704,0.513-3.44,0.513-5.16c0-5.938-2.035-11.743-5.855-16.424c-4.93-6.02-12.306-9.518-20.088-9.518h-338.32 L94.928,50.769v0.008c-5.293-17.705-19.814-31.118-37.875-34.988L15.688,6.931C8.691,5.426,1.795,9.892,0.289,16.896 c-1.496,7.004,2.96,13.901,9.974,15.398l41.348,8.865c8.798,1.885,15.878,8.418,18.458,17.052l75.584,259.634 c-1.703,0.794-3.349,1.654-4.937,2.605c-8.146,4.855-14.679,11.669-19.061,19.624c-4.194,7.558-6.418,16.126-6.632,24.966h-0.033 v1.348h0.033c0.165,6.906,1.637,13.529,4.192,19.575c4.094,9.667,10.891,17.846,19.458,23.634 c8.56,5.796,18.971,9.196,30.052,9.187h137.272c-0.042-1.281-0.194-2.53-0.194-3.82c0-7.567,0.781-14.952,2.174-22.121H168.726z M113.998,116.314h330.778h0.009l-29.887,146.935c-1.076,5.293-5.31,9.362-10.635,10.222L170.81,311.478L113.998,116.314z"></path> <path class="st0" d="M421.604,324.569c-49.924,0-90.396,40.472-90.396,90.396s40.472,90.396,90.396,90.396 c49.932,0,90.396-40.472,90.396-90.396S471.536,324.569,421.604,324.569z M473.264,430.032h-36.593v36.585h-30.127v-36.585h-36.594 v-30.134h36.594v-36.594h30.127v36.594h36.593V430.032z"></path> </g> </g></svg>
                              <span class="tooltip">Add to cart</span>
                          </button>
                      </div>
                  </div>
              </div>
          `;
    })
    .join("");
}

function renderFacets(facetsData) {
  if (!facetsData) {
    facetsContainer.innerHTML = "";
    return;
  }
  facetsContainer.innerHTML = facetsData
    .map((facet) => {
      const content = facet.values
        .map((val) => {
          if (
            val.hits_count === 0 &&
            !activeFilters[facet.name]?.includes(val.value)
          ) {
            return "";
          }
          const isChecked = activeFilters[facet.name]?.includes(val.value)
            ? "checked"
            : "";
          let label = val.value;
          if (facet.name === "price_amount") {
            const [min, max] = val.value.split("|");
            label = `${parseInt(min, 10)} - ${parseInt(max, 10)} EUR`;
          }
          return `
                  <li class="facet-item">
                      <label>
                          <input type="checkbox" name="${facet.name}" value="${val.value}" ${isChecked}>
                          <span>${label}</span>
                          <span class="count">${val.hits_count}</span>
                      </label>
                  </li>
              `;
        })
        .join("");

      const displayTitle =
        facet.name === "price_amount" ? "Price" : facet.name;

      return `
              <div class="facet-block">
                  <h3 class="facet-title">${displayTitle}</h3>
                  <ul class="facet-list">${content}</ul>
              </div>
          `;
    })
    .join("");
}

function renderPagination(totalHits) {
  const totalPages = Math.ceil(totalHits / RESULTS_PER_PAGE);
  paginationContainer.innerHTML = "";
  if (totalPages <= 1) return;

  let paginationHTML = `<button class="pagination-button" data-page="1" ${
    currentPage === 1 ? "disabled" : ""
  }>&lt;&lt;</button>`;
  paginationHTML += `<button class="pagination-button" data-page="${
    currentPage - 1
  }" ${currentPage === 1 ? "disabled" : ""}>&lt;</button>`;

  let startPage, endPage;
  if (totalPages <= 5) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= 3) {
      startPage = 1;
      endPage = 5;
    } else if (currentPage + 2 >= totalPages) {
      startPage = totalPages - 4;
      endPage = totalPages;
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }
  }

  if (startPage > 1) {
    paginationHTML += `<button class="pagination-page" data-page="1">1</button>`;
    if (startPage > 2)
      paginationHTML += `<span class="pagination-ellipsis">...</span>`;
  }

  for (let i = startPage; i <= endPage; i++) {
    paginationHTML += `<button class="pagination-page ${
      i === currentPage ? "active" : ""
    }" data-page="${i}">${i}</button>`;
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1)
      paginationHTML += `<span class="pagination-ellipsis">...</span>`;
    paginationHTML += `<button class="pagination-page" data-page="${totalPages}">${totalPages}</button>`;
  }

  paginationHTML += `<button class="pagination-button" data-page="${
    currentPage + 1
  }" ${currentPage === totalPages ? "disabled" : ""}>&gt;</button>`;
  paginationHTML += `<button class="pagination-button" data-page="${totalPages}" ${
    currentPage === totalPages ? "disabled" : ""
  }>&gt;&gt;</button>`;

  paginationContainer.innerHTML = paginationHTML;
}

// --- URL MANAGEMENT ---
function updateURL(query, filters, page) {
  const urlParams = new URLSearchParams();
  if (query) urlParams.set("q", query);
  if (page > 1) urlParams.set("page", page);

  for (const key in filters) {
    filters[key].forEach((value) => {
      urlParams.append("f[]", `${key}:${value}`);
    });
  }

  const newRelativePath = `?${urlParams.toString()}`;
  if (window.location.search !== newRelativePath) {
    history.pushState({ query, filters, page }, "", newRelativePath);
  }
}
```

### Step 6: Handle user interactions

Wire up event listeners for the search form and facet checkboxes. These will trigger new API calls whenever the user refines their search.

#### Example: Search and filter events

```javascript
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("q") || "";
  const page = parseInt(urlParams.get("page"), 10) || 1;
  const filtersFromUrl = {};
  urlParams.getAll("f[]").forEach((filterString) => {
    const [key, value] = filterString.split(":", 2);
    if (key && value) {
      if (!filtersFromUrl[key]) filtersFromUrl[key] = [];
      filtersFromUrl[key].push(value);
    }
  });

  searchInput.value = query;
  activeFilters = filtersFromUrl;
  currentPage = page;

  getSearchResults(query, activeFilters, currentPage);
});

window.addEventListener("popstate", (e) => {
  if (e.state) {
    searchInput.value = e.state.query || "";
    activeFilters = e.state.filters || {};
    currentPage = e.state.page || 1;
    getSearchResults(e.state.query, e.state.filters, e.state.page);
  }
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getSearchResults(searchInput.value, activeFilters, 1);
});

facetsContainer.addEventListener("change", (e) => {
  if (e.target.type === "checkbox") {
    const facetName = e.target.name;
    const facetValue = e.target.value;

    if (!activeFilters[facetName]) activeFilters[facetName] = [];

    if (e.target.checked) {
      activeFilters[facetName].push(facetValue);
    } else {
      activeFilters[facetName] = activeFilters[facetName].filter(
        (v) => v !== facetValue
      );
      if (activeFilters[facetName].length === 0)
        delete activeFilters[facetName];
    }

    getSearchResults(searchInput.value, activeFilters, 1);
  }
});

paginationContainer.addEventListener("click", (e) => {
  if (e.target.matches(".pagination-button, .pagination-page")) {
    const page = parseInt(e.target.dataset.page, 10);
    if (page && page !== currentPage && !e.target.disabled) {
      getSearchResults(searchInput.value, activeFilters, page);
    }
  }
});
```

### Step 7: Track Analytics events manually

To help Luigi's Box learning models improve result relevance, you must manually track search and interaction events. The following functions prepare and send this data.

- `sendAnalyticsEvent`: A helper function to post any event payload to the Analytics API.
- `trackSearchView`: Constructs and sends the event when a list of search results is displayed.
- `trackClickEvent`: Sends a "click" event when a user clicks on a product link.
- `trackConversionEvent`: Sends a conversion event, such as "add-to-cart".

#### Example: Tracking search views, clicks and conversions

This is the most critical step for a manual integration. You must send analytics events to Luigi's Box so our models can learn from user behavior.

First, add the analytics configuration and helper functions to your script.

```javascript
// --- ANALYTICS CONFIGURATION ---
const ANALYTICS_API_URL = "https://api.luigisbox.com/";
// In a real application, this should be a persistent ID stored in a cookie or localStorage
const CLIENT_ID = Math.floor(Math.random() * 1e18); 

async function sendAnalyticsEvent(payload) {
    try {
        await axios.post(ANALYTICS_API_URL, payload);
        console.log('Analytics event sent:', payload.type, payload);
    } catch (error) {
        console.error('Failed to send analytics event:', error);
    }
}

function trackSearchView(query, hits) {
    if (!hits || hits.length === 0) return;

    const analyticsPayload = {
        id: crypto.randomUUID(),
        type: "event",
        tracker_id: TRACKER_ID,
        client_id: CLIENT_ID,
        lists: {
            "Search Results": {
                query: { string: query },
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

function trackConversionEvent(type, productId) {
    const conversionPayload = {
        id: crypto.randomUUID(),
        type: "click", // Conversion events are a type of click
        tracker_id: TRACKER_ID,
        client_id: CLIENT_ID,
        action: {
            type: type, // e.g., "add-to-cart"
            resource_identifier: productId
        }
    };
    sendAnalyticsEvent(conversionPayload);
}
```

Finally, add a listener to the `resultsContainer` to track clicks on product cards and "Add to cart" buttons.

```javascript
resultsContainer.addEventListener('click', function(e) {
    const productLink = e.target.closest('.product-link');
    const cartButton = e.target.closest('.add-to-cart-btn');

    if (productLink && !cartButton) {
        const productId = productLink.dataset.productId;
        trackClickEvent(productId);
    }
    
    if (cartButton) {
        e.preventDefault();
        const productId = cartButton.dataset.productId;
        trackConversionEvent('add-to-cart', productId);
    }
});
```
### Step 8: Add variant swatches (optional)

To enhance the user experience, you can display product variants as swatches. This allows users to see different colors or styles without leaving the search results page.

#### Example: Adding variant swatches to product cards
Modify the `renderResults` function to include variant swatches. This example assumes that each product has a `nested` array containing variant information.

```javascript
function renderResults(resultsData) {
  const queryText = resultsData.query
    ? ` for "${resultsData.query}"`
    : "";
  resultsHeading.textContent = `Showing ${resultsData.hits.length} of ${resultsData.total_hits} results${queryText}`;

  if (resultsData.hits.length === 0) {
    resultsContainer.innerHTML = "<p>No products found.</p>";
    return;
  }

  resultsContainer.innerHTML = resultsData.hits
    .map((result) => {
      const { url, attributes, nested } = result;
      const imageUrl =
        attributes.image_link ||
        "https://placehold.co/400x400/eee/ccc?text=No+Image";
      const title = attributes.title || "No Title Available";
      const brand = attributes.brand ? attributes.brand[0] : "";
      const price = attributes.price_amount
        ? `${attributes.price_amount} EUR`
        : "";
      const productId = attributes.id ? attributes.id[0] : "";

      let variantSwatches = "";
      const variants = nested?.filter((v) => v.type === "variant") || [];
      if (variants.length > 0) {
        const uniqueColors = new Map();
        variants.forEach((variant) => {
          const colorName = variant.attributes.color?.[0];
          if (colorName) {
            const normalizedColorName = colorName.toLowerCase();
            if (!uniqueColors.has(normalizedColorName)) {
              uniqueColors.set(normalizedColorName, {
                colorCode: variant.attributes.color_code?.[0] || "#ccc",
                image: variant.attributes.image_link || imageUrl,
              });
            }
          }
        });

        if (uniqueColors.size > 0) {
          variantSwatches = '<div class="variant-swatches">';
          uniqueColors.forEach((data) => {
            variantSwatches += `<div class="variant-swatch" style="background-color: ${data.colorCode};" data-image="${data.image}"></div>`;
          });
          variantSwatches += "</div>";
        }
      }

      return `
              <div class="product-card" data-main-image="${imageUrl}">
                  <a href="${url}" target="_blank" class="product-link" data-product-id="${productId}">
                      <img src="${imageUrl}" alt="" class="product-image" onerror="this.onerror=null;this.src='https://placehold.co/400x400/eee/ccc?text=No+Image';">
                  </a>
                  <div class="product-info">
                      <h3 class="product-title">${title}</h3>
                      <p class="product-brand">${brand}</p>
                      ${variantSwatches}
                      <div class="product-price-section">
                          <div class="product-price">${price}</div>
                          <button class="add-to-cart-btn" data-product-id="${productId}">
                              <svg height="200px" width="200px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#fff;} </style> <g> <path class="st0" d="M198.745,439.889c-5.698-3.854-12.636-6.128-20.013-6.119c-4.921,0-9.659,1-13.943,2.82 c-6.434,2.721-11.875,7.244-15.737,12.958c-3.862,5.698-6.128,12.636-6.112,20.012c-0.008,4.912,0.993,9.651,2.812,13.934 c2.728,6.443,7.244,11.884,12.95,15.737c5.706,3.871,12.652,6.128,20.029,6.128c4.912,0,9.643-1.001,13.926-2.82 c6.442-2.721,11.883-7.253,15.746-12.958c3.854-5.698,6.12-12.645,6.12-20.022c0-4.911-1.009-9.642-2.82-13.934 C208.975,449.184,204.451,443.743,198.745,439.889z M192.03,475.176c-1.092,2.58-2.936,4.805-5.243,6.359 c-2.316,1.555-5.028,2.456-8.055,2.464c-2.026-0.008-3.903-0.405-5.615-1.142c-2.572-1.074-4.805-2.927-6.36-5.226 c-1.555-2.324-2.456-5.044-2.464-8.072c0.009-2.018,0.413-3.887,1.133-5.615c1.083-2.572,2.936-4.796,5.242-6.358 c2.316-1.555,5.037-2.448,8.064-2.457c2.018,0,3.887,0.406,5.607,1.133c2.58,1.083,4.796,2.927,6.351,5.243 c1.563,2.315,2.464,5.028,2.464,8.054C193.154,471.587,192.75,473.456,192.03,475.176z"></path> <path class="st0" d="M216.525,283.808c7.278-2.117,11.462-9.75,9.328-17.036l-35.576-121.796 c-2.117-7.286-9.742-11.462-17.028-9.337c-7.285,2.126-11.453,9.75-9.336,17.028l35.576,121.812 C201.622,281.757,209.247,285.941,216.525,283.808z"></path> <path class="st0" d="M256.98,265.416c2.134,7.286,9.759,11.462,17.035,9.336c7.278-2.125,11.463-9.749,9.329-17.035 l-32.996-112.972c-2.117-7.285-9.742-11.462-17.027-9.344c-7.286,2.133-11.462,9.758-9.337,17.035L256.98,265.416z"></path> <path class="st0" d="M314.554,256.625c2.125,7.286,9.758,11.462,17.035,9.337c7.278-2.126,11.462-9.759,9.328-17.036 l-30.49-104.412c-2.126-7.286-9.75-11.462-17.028-9.328c-7.285,2.117-11.462,9.75-9.336,17.027L314.554,256.625z"></path> <path class="st0" d="M371.945,247.248c2.134,7.286,9.758,11.462,17.035,9.336c7.278-2.133,11.462-9.749,9.337-17.035 l-27.828-95.275c-2.117-7.285-9.75-11.453-17.036-9.336c-7.277,2.134-11.453,9.758-9.328,17.035L371.945,247.248z"></path> <path class="st0" d="M168.726,392.844c-3.871,0-7.492-0.778-10.817-2.176c-4.97-2.1-9.246-5.64-12.239-10.089 c-2.878-4.276-4.582-9.312-4.714-14.836c0.148-6.592,2.249-12.313,5.937-16.887c1.91-2.357,4.267-4.424,7.128-6.136 c2.828-1.687,6.161-3.027,10.073-3.87l244.335-39.769c15.961-2.605,28.663-14.81,31.888-30.664l29.887-146.928v-0.016 c0.347-1.704,0.513-3.44,0.513-5.16c0-5.938-2.035-11.743-5.855-16.424c-4.93-6.02-12.306-9.518-20.088-9.518h-338.32 L94.928,50.769v0.008c-5.293-17.705-19.814-31.118-37.875-34.988L15.688,6.931C8.691,5.426,1.795,9.892,0.289,16.896 c-1.496,7.004,2.96,13.901,9.974,15.398l41.348,8.865c8.798,1.885,15.878,8.418,18.458,17.052l75.584,259.634 c-1.703,0.794-3.349,1.654-4.937,2.605c-8.146,4.855-14.679,11.669-19.061,19.624c-4.194,7.558-6.418,16.126-6.632,24.966h-0.033 v1.348h0.033c0.165,6.906,1.637,13.529,4.192,19.575c4.094,9.667,10.891,17.846,19.458,23.634 c8.56,5.796,18.971,9.196,30.052,9.187h137.272c-0.042-1.281-0.194-2.53-0.194-3.82c0-7.567,0.781-14.952,2.174-22.121H168.726z M113.998,116.314h330.778h0.009l-29.887,146.935c-1.076,5.293-5.31,9.362-10.635,10.222L170.81,311.478L113.998,116.314z"></path> <path class="st0" d="M421.604,324.569c-49.924,0-90.396,40.472-90.396,90.396s40.472,90.396,90.396,90.396 c49.932,0,90.396-40.472,90.396-90.396S471.536,324.569,421.604,324.569z M473.264,430.032h-36.593v36.585h-30.127v-36.585h-36.594 v-30.134h36.594v-36.594h30.127v36.594h36.593V430.032z"></path> </g> </g></svg>
                              <span class="tooltip">Add to cart</span>
                          </button>
                      </div>
                  </div>
              </div>
          `;
    })
    .join("");
}
```

Add  event listeners to handle swatch hovers and update the main product image accordingly.

```javascript
document.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("variant-swatch")) {
    const card = e.target.closest(".product-card");
    const imageElement = card.querySelector(".product-image");
    const newImage = e.target.dataset.image;
    if (imageElement && newImage) imageElement.src = newImage;
  }
});

document.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("variant-swatch")) {
    const card = e.target.closest(".product-card");
    const imageElement = card.querySelector(".product-image");
    const mainImage = card.dataset.mainImage;
    if (imageElement && mainImage) imageElement.src = mainImage;
  }
});

```


## Best practices

- **Analytics is not optional:** When building a custom UI, you are responsible for sending all analytics events. This is not an optional step; it is essential for the learning models that power search relevance and personalization.
- **Use a persistent `CLIENT_ID`:** In this example, we generate a random `CLIENT_ID` on each page load. In a production environment, you should generate this ID once and store it in a long-term cookie or localStorage to track users across sessions.
- **Provide user feedback:** Always provide clear feedback to the user. This includes showing a loading state while fetching data and displaying a "No results found" message when the API returns an empty set.
- **Handle data fallbacks:** Your rendering code should be robust. Always check for the existence of data before trying to access it (e.g., `attributes.brand ? attributes.brand[0] : ''`) and provide sensible fallbacks, like a placeholder image if `image_link` is missing.

## Next steps

<% content_for :next_steps do %>
  <ul>
  <li>
    <strong>Consider a backend proxy:</strong>
    For a production application, consider moving the API call to a backend proxy.
    This avoids potential browser CORS issues and allows you to securely add custom business logic before sending the data to the frontend.
  </li>
  <li>
    <strong>Explore dynamic facets:</strong>
    To make your filters even more relevant, add the <code>dynamic_facets_size</code> parameter to your API calls.
    This will tell the Luigi's Box AI to return the most appropriate filters for each specific query.
  </li>
  <li>
    <strong>Influence ranking:</strong>
    Learn how to promote certain products or adjust the default sorting by reading our 
    <a href="#">"Understanding and influencing result ranking"</a> guide.
  </li>
</ul>
<% end %>