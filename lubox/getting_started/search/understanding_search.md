---
title: "Understanding Luigi's Box Search: Features & integration paths"
layout: quickstart_layout 
---

## Introduction

This guide provides a high-level overview of the Luigi's Box Search feature. Search is more than just a search box; it's a powerful system designed to deliver fast, relevant results to your users, complete with advanced features like filtering, dynamic faceting, and automated ranking based on user behavior.
Before diving into a technical implementation, it's important to understand the core features of the search system and the different integration paths available to you.

### Core features

Luigi's Box Search is designed to provide a modern, interactive experience for your users.

- **Faceted search:** You can automatically generate advanced filtering menus (facets) from your product data. This allows users to drill down into search results by specifying criteria like category, brand, color, or price range.
- **Dynamic facets:** For stores with a wide variety of products, zou can let Luigi's Box system automatically select and display the most relevant facets for any given search query, adapting the UI to the user's needs in real-time.
- **Customizable ranking:** Results are ranked using a multitude of signals, including text relevance, product availability, and data from the analytics feedback loop (e.g., product popularity). You can further influence this ranking by providing data like `margin` or `intoduced_at` (for new products), or by using manual boosts in the Luigi's Box application.
- **Variant support:** If your products have variants (like different colors or sizes), the search can be configured to either display each variant as a separate result or to intelligently select and display the "best" variant that matches the user's query.
- **Banner campaigns:** You can easily run banner campaigns that are automatically displayed within the search results for specific queries, without any extra development work required using the search.js library.

### Integration paths

There are two primary ways to integrate Luigi's Box Search into your website or application. Your choice will depend on your development resources and how much control you need over the user interface.

**search.js library (recommended for web)**

This is a powerful, self-hosted JavaScript library that can rapidly build an entire interactive, single-page-application style search interface for you.

- **Best for:** Developers looking for a fast, out-of-the-box solution to create a modern search results page on their website.
- **Pros:**
  - **Full-featured:** Includes support for facets, sorting, pagination, and banner campaigns automatically.
  - **Automatic analytics:** search.js handles all the necessary analytics tracking for you, which is a major advantage.
  - **Customizable:** You can provide your own HTML templates to control the look and feel while the library handles the logic.
- **Luigi's Box recommendation:** This is the recommended path for most web integrations as it provides the most features with the least development effort.

**Direct search API (for custom UI / non-web)**

This approach involves making direct GET requests to the Luigi's Box Search API endpoint (`https://live.luigisbox.com/search`) and using the JSON response to build your own user interface from scratch.

- **Best for:**
  - Developers who need absolute, pixel-perfect control over the UI.
  - Mobile applications (iOS, Android).
  - Any non-web environment where a JavaScript library cannot be used.
- **Pros:**
  - **Maximum flexibility:** You have complete control over how the results and filters are rendered.
- **Cons / developer responsibility:**
  - **Manual implementation:** You are responsible for building the entire UI, including facets, sorting controls, and pagination logic.
  - **Manual analytics:** You **must** manually implement the analytics tracking for search views, clicks, and facet interactions. Without this, the system cannot learn or improve.

## Next steps

Now that you understand the features and integration paths, you can proceed to the guide that best fits your needs:

- For the recommended web integration:
Continue to the "Quickstart: Integrating search.js for a Full Search Page" guide.
- For a custom UI or non-web integration:
Continue to the "Quickstart: Getting Results with the Search API" guide.