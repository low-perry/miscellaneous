---
layout: "overview_layout"
hub_id: "search"
title: "Search"
intro: |
  Luigi's Box Search is a complete solution designed to provide users with fast, AI-powered, and relevant results. It offers fulltext search functionality with advanced filtering options and intelligent ranking. To function, it requires product data to be indexed and analytics to be integrated, which enables the system to learn from user behavior.

  The ranking process goes far beyond simple text matching. It uses a multitude of signals, like product availability, sales data, and freshness, powered by a combination of AI models to determine the most relevant sort order for any query.

  Integration is offered via two primary paths: a frontend JavaScript library <a href="/search/search_js.html">Search.js</a> for rapidly building a complete user interface, or a powerful backend <a href="/search/api.html">Search API</a> for maximum flexibility and custom implementations.
choices:
  - title: "Search.js"
    description: "A frontend library to quickly build a feature-rich search results page."
    url: "/search/search_js.html"
    label: "FE integration"
    advantages:
      - "<strong>Fast implementation</strong>: Get a full UI with out-of-the-box components for faceting, sorting, and pagination."
      - "<strong>Advanced features included</strong>: The library automatically handles banner campaigns and 'you might also like' suggestions for approximate matches."
      - "<strong>Easy customization</strong>: Use pre-built themes or provide custom HTML templates to match a site's branding."
  - title: "Search API"
    description: "Integrate the powerful search engine into a backend for maximum flexibility."
    url: "/search/api.html"
    recommended: true
    advantages:
      - "<strong>Maximum flexibility</strong>: As a standard API, it gives developers full control and can be integrated with any backend technology."
      - "<strong>Powerful filtering</strong>: The API supports complex, nested filtering logic using <code>AND</code>, <code>OR</code>, and <code>NOT</code> operators."
      - "<strong>Performance optimization</strong>: Control the response payload with <code>hit_fields</code> and <code>remove_fields</code> to reduce latency."
---

## Core concepts

Beyond choosing an integration path, it's important to understand the features that make Luigi's Box Search powerful.

* **Ranking:** Results are not just sorted by text match. Luigi's Box models use a multitude of signals to present the most relevant items first, including product **availability**, **sales data** from analytics, **margin**, and product **freshness**.
* **Product variants:** If products come in different colors or materials, their appearance in search can be configured. It's possible to show each variant as a separate result or have the system intelligently select and display the best-matching variant for a query.