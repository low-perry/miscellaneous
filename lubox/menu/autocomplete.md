---
layout: "overview_layout"
hub_id: "autocomplete"
title: "Autocomplete"
intro: |
  Luigi's Box Autocomplete is a feature designed to show customers relevant, real-time results from their very first keystroke. The system is highly optimized for speed (latency), providing an instant and seamless user experience. It learns from user behavior through analytics integration to continuously improve the relevance of its suggestions.

  To accommodate different development needs, Autocomplete can be integrated in two primary ways. You can use <a href="/autocomplete/autocomplete_js.html">Autocomplete.js</a>, a comprehensive JavaScript widget that handles all functionality out of the box, or the core <a href="/autocomplete/api.html">Autocomplete API</a> for a fully custom implementation.

choices:
  - title: "Autocomplete.js"
    description: "A JavaScript widget that integrates all APIs into a single component to quickly build a powerful autocomplete experience."
    url: "/autocomplete/autocomplete_js.html"
    recommended: true
    advantages:
      - "<strong>Rapid implementation</strong>: No advanced programming is needed; simply include the script and a simple configuration to get started."
      - "<strong>All-in-one solution</strong>: Automatically integrates the Trending Queries, Top Items, and Autocomplete APIs and handles analytics events."
      - "<strong>Customizable layouts</strong>: Comes with three built-in, ready-to-use layouts (Heromobile, Line, and Grid) that can be easily configured."
  - title: "Autocomplete API"
    description: "Use the core JSON API directly to build a fully custom search-as-you-type functionality from the ground up."
    url: "/autocomplete/api.html"
    label: "Custom build"
    advantages:
      - "<strong>Maximum flexibility</strong>: Gives developers full control to create a unique interface and integrate autocomplete into any environment."
      - "<strong>Powerful filtering</strong>: Supports advanced filtering on item attributes, including numerical and date ranges, to refine results."
      - "<strong>Personalization</strong>: The API can deliver personalized results for users when their <code>user_id</code> is provided in the request."
---

## Core concepts

Beyond the primary integration paths, Autocomplete is enhanced by several key APIs and concepts that create a complete experience.

* **Trending Queries API:** This API fetches the most popular and relevant search queries based on your site's analytics. These phrases can be used as placeholders in the search bar or to provide typing suggestions to guide users.
* **Top Items API:** Use this API to populate a recommender popup with your most popular items. It's designed to engage users the moment they click into the search box, even before they start typing anything.
* **Performance:** The Autocomplete feature is engineered for speed. To achieve low latency, it fetches only the top results (`top-k hits`) rather than scanning the entire index, which means it does not provide a total hits count.