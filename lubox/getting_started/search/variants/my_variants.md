---
title: "Quickstart: Implementing variant search" 
layout: quickstart_layout
description: "Learn how to variant search works"
---

## Introduction

Many e-commerce stores sell products that come in different variations, such as a t-shirt that is available in multiple colors and sizes. How these product variants are handled in search can have a significant impact on the user experience. Luigi's Box provides several powerful modes for searching and displaying variants.
This guide explains the various search modes available, the data requirements for each, and best practices for determining which approach is best suited for your business.

### What you'll learn

- The three different modes for handling product variants in search.
- Code examples for implementing each variant search mode.
- Best practices for when and when not to use variant-aware search.
- The performance and analytics implications of using variants.

### Who is this guide for

- Developers and e-commerce managers whose products are structured into variants (e.g., by color, size, material).
- Users who want to control how different versions of the same product appear in search results.

### Prerequisites

- An understanding of how your product data is structured and indexed with Luigi's Box.
- Familiarity with the basics of Luigi's Box Analytics.

## Variant Search Modes

There are three primary modes for handling product variants. The mode you choose will depend on your data structure and your desired user experience.

### Mode 1: Searching variants separately

This is the simplest approach. Each variant is treated as a completely separate, standalone product in the search index.

- **How it works:** If a product has five color variants and a user's search matches that product, all five variants will appear as individual tiles in the search results.
- **User experience:** This increases the visibility of each variant, as they occupy more space on the results page. However, there is no guarantee that the variants will be displayed next to each other, as each is ranked independently based on its own relevance, availability, and sales data.
- **How to activate:** Simply index each variant as if it were a standalone product. If using the API, do not index nested variants. If using feeds, do not include a grouping parameter.

#### Example

No special parameters are needed. This is the default behavior when variants are indexed as separate items.

**Search API:**

<span class="badge text-bg-success">GET</span> `https://live.luigisbox.com/search?tracker_id=YOUR_TRACKER_ID&q=t-shirt&f[]=type:product`

**Search.js:**

```javascript
Luigis.Search({
    TrackerId: 'YOUR_TRACKER_ID',
    DefaultFilters: { type: 'product' }
    // ... other options
});
```

### Mode 2: Retrieving the best variant (variant-aware search)

In this mode, the search is aware that variants belong to a parent product. It will only return one result tile per product, but it intelligently selects the best variant to display based on the user's query.

- **How it works:** For a search like "blue t-shirt," the system will score the "Blue T-shirt" variant higher than the "Black T-shirt" variant and display the blue one. All other variants (black, red, etc.) are included as nested objects within the main product result, allowing you to build a variant selector on your product tile.
- **User experience:** This provides a cleaner, less cluttered search results page. It prevents a single product from dominating the results and allows users to see a wider variety of different products.
- **How to activate:** Index your variants as nested objects via the API, or provide a grouping identifier in your feed. Then, contact Luigi's Box support to activate variant-aware search for your account.

#### Example

This is the default behavior when variant-aware search is enabled for your account.

**Search API:**

<span class="badge text-bg-success">GET</span> `https://live.luigisbox.com/search?tracker_id=YOUR_TRACKER_ID&q=blue+t-shirt&f[]=type:product`

**Search.js:**

```javascript
Luigis.Search({
    TrackerId: 'YOUR_TRACKER_ID',
    DefaultFilters: { type: 'product' }
    // ... other options
});
```

### Mode 3: Retriving all variants

In some cases, you may want to use variant-aware search but still retrieve all variants for a matching product. This can be useful for building a product detail page or a quick-view modal.

- **How it works:** This mode is similar to "Retrieving the Best Variant," but instead of collapsing the variants, it returns all of them.
- **User experience:** This is not typically used for a search results page, but it is useful for other applications.
- **How to activate:** Index your variants as nested objects via the API, or provide a grouping identifier in your feed. Then, contact Luigi's Box support to activate variant-aware search for your account.

#### Example

**Search API:**

<span class="badge text-bg-success">GET</span> `https://live.luigisbox.com/search?tracker_id=YOUR_TRACKER_ID&q=t-shirt&f[]=type:product&non_collapsed_variants=true`

**Search.js:**

```javascript
Luigis.Search({
    TrackerId: 'YOUR_TRACKER_ID',
    DefaultFilters: { type: 'product' },
    // This option is not directly available in Search.js,
    // but you can use ModifyRequestParams to add it.
    ModifyRequestParams: function(params) {
        params.non_collapsed_variants = true;
        return params;
    }
    // ... other options
});
```

## Best practices: Shoul you use variants?

The decision to use variant-aware search should be driven by your business needs and the user experience on the rest of your site.

- **Use variants for clear visual differences:** Variant-aware search works best when the difference between variants is obvious to the user, such as color or material. This allows the user to immediately understand why a specific variant was shown to them.
- **Avoid variants for non-visual differences:** Do not use variant-aware search for attributes like size in fashion. A "Small" t-shirt and a "Large" t-shirt often have the same product image, title, and price. Displaying them as separate variants in search can be confusing, as the user cannot tell them apart.
- **Be consistent:** The most important rule is to be consistent with the rest of your website. If your category pages display each color of a product as a separate tile, your search results should do the same. Introducing a different paradigm in search can confuse users.

## Performance impact

Note that enabling variant-aware search (Mode 2) can have a minor performance impact. To avoid increasing search latency, Luigi's Box recommends keeping the average number of variants per product below 10. If you have products with a very high number of variants, it may be a sign that the use case is not a good fit for variant-aware search.

## Analytics considerations for variants

Properly tracking user interactions with variants is crucial for the feedback loop. The way you track analytics depends on the variant mode you are using.

- **For Mode 1 (Searching variants separately):** Analytics are straightforward. Since each variant is treated as a unique product in the index, you simply track the `view_item_lis`t and `select_item` / `click` events using the specific ID of the variant that was displayed and clicked.
- **For Mode 2 (Retrieving the best variant)**: This mode requires careful analytics implementation. When a product tile is displayed, it represents the best variant for that query.
  - **View event (`view_item_list`):** The item list you report to analytics should contain the specific ID of the variant that was displayed, not the main product ID. This tells Luigi's Box's system which variant was chosen as the most relevant.
  - **Click event (`select_item` / `click`):** Similarly, when a user clicks the product tile, the event must report the ID of the specific variant that was clicked. This allows the system to learn which variants are most engaging for different queries, improving the "best variant" selection over time.
- For Mode 3 (Retrieving all variants): Since all variants are returned, you should track the `view_item_list` event with all the variant IDs. The `select_item` / `click` event should report the ID of the specific variant that was clicked.

## Next steps

- Influence ranking: The ranking of individual variants is determined by the same signals as standard products. Learn more in our "Understanding and Influencing Result Ranking" guide.
- Check Your Data: Refer to the API or feed documentation to ensure your data is structured correctly for the variant mode you wish to use.
- Implement Analytics: For more detailed instructions on tracking events, refer to our "Integrating Analytics for Better Results" guide.