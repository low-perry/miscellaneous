---
layout: "overview_layout"
hub_id: "plp"
title: "Product Listing"
intro: |
  You can use Luigi's Box Product Listing to retrieve and render products for any product listing. The typical use-cases for the product listing are the category and brand pages which your end-users browse when navigating your website.

  The main benefits include a personalized display of products, ranking based on analytics feedback, and powerful merchandising features available in the Luigi's Box application.

  Integration is offered via two paths: our frontend JavaScript library <a href="/plp/search_js.html">Search.js</a>, or our backend <a href="/plp/api.html">Product Listing API</a> for custom implementations.
choices:
  - title: "Product listing API"
    description: "Use HTTP API to build a product listing experience for your end-users, which provides unparalleled possibilities."
    url: "/plp/api.html"
    recommended: true
    advantages:
      - "<strong>Maximum flexibility</strong>: Using the raw API gives developers unparalleled possibilities and control over the integration."
      - "<strong>Hierarchical filtering</strong>: Utilize special filters like <code>category_path</code> and <code>all_categories_path</code> for filtering within a full category hierarchy."
      - "<strong>Backend data enrichment</strong>: A backend integration allows for merging product data from Luigi's Box with internal data sources, such as real-time inventory or custom business rules, before sending it to the client."
  - title: "Search.js"
    description: "Use the frontend library which integrates all of the Luigi's Box Product Listing features in a customizable package."
    url: "/plp/search_js.html"
    label: "FE integration"
    advantages:
      - "<strong>Simple setup</strong>: Follow the same setup as when initializing a standard search, including the loading placeholder for the best user experience."
      - "<strong>Unified Product Listings</strong>: Use the same Search.js component for both standard search results and pre-filtered listings, such as category or brand pages."
      - "<strong>Customizable package</strong>: The library integrates all Product Listing Page features into a single, customizable package."
---

## Core concepts

Beyond choosing an integration path, it's important to understand the features that make Luigi's Box Product Listing powerful.

* **Personalized Ranking:** Products are ranked based on a feedback loop provided by analytics. This allows for a personalized display of products in listings and respects all merchandising rules you have set up.
* **Pairing:** To use product listing, you must provide a mapping between categories and products. The default mapping expects your category object to contain an `id` attribute and your product object to contain a `category_id` attribute. If you need to change this default, you must contact support.
* **Hierarchical Filtering:** When dealing with hierarchical categories, you can use special filters like `category_path` and `all_categories_path`. Individual categories in the hierarchy should be separated by a double pipe `||`. It is important that the filter value perfectly matches the product value, including letter case.