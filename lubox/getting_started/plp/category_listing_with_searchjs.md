# Category listing with search.js

[Search.js](/search/search_js.html) can be used to render rich, interactive category listings. A category listing is a search, where the initial view is pre-filtered for a specific category an no user-typed query is present. This is similar to calling the [Search API](/search/api.html) directly with a filter, like `/search?f[]=category:T-shirts`. In both cases, the request returns a list of all products from that category, sorted by the Luigi's Box system and respecting all of your configured merchandising rules.

## The two-step process

A key aspect of using [Search.js](/search/search_js.html) for product listings is understanding its two-step process:

1. **Initialization (`Luigis.Search({...})`)**: The first call you make is to `Luigis.Search()`. Its job is to **initialize** the entire search interface. It sets up all the components like facets and sorting and links the library to your HTML placeholders. At this stage, the UI is ready, but no search has been performed.
2. **Execution (`Luigis.Search.Search(...)`)**: The second call you make is to the `Search()` method on the already-initialized `Luigis.Search` object. Its job is to **execute the initial search**. For a listing page, you'll execute this with a `null` query but with a special `IntentFilters` object that tells the system what category to display.

## Implementation details

There is almost nothing special about the main initialization call. Follow the same setup as when initializing a standard search page, including the [loading placeholder](/search/search_js.html#recipes-loading-states) for the best user experience.

The key to creating the category listing is the second call, which uses the `IntentFilters` configuration.

```javascript
Luigis.Search.Search(
  null, // The query is null
  {
    ProductListingFilter: "category",
    IntentFilters: { category: "Kalimbas" }
  }
);
```

**Parameters:**

1. **query** (`null`): The search term users would type. Use `null` when displaying a category listing since you want to show all products in that category, not search results for specific keywords.

2. **configuration object** with two key properties:
   - **`ProductListingFilter`**: Set to `"category"` to tell Search.js this is a category page, not a search results page. This affects how the interface behaves and how user interactions are tracked.
   - **`IntentFilters`**: Defines which category to display initially. Use the format `{ category: "CategoryName" }` or preferably `{ category_id: 123 }` for better precision.

The `IntentFilters` are temporary and automatically clear when users start typing in the search box, seamlessly transitioning from browsing a category to searching across all products.

## Complete example

Here is the full snippet showing the two-step process in action:

```html
<script type="text/x-template" id="..">
</script>
<script type="text/x-template" id="..">
</script>

<script src="https://cdn.luigisbox.com/search.js"></script>
<script>
  // 1. First, INITIALIZE the search UI with all desired features and facets
Luigis.Search({
  TrackerId: 'YOUR_TRACKER_ID',
  Theme: 'boo',
  Facets: ['brand', 'price_amount'],
  DefaultFilters: {
     type: 'product' 
  }
}, '#search-input', '#search-ui');

// 2. Immediately after, EXECUTE a search for the "Kalimbas" category
Luigis.Search.Search(
  null, // The query is null
  {
    ProductListingFilter: "category",
    IntentFilters: { category: "Kalimbas" }
  }
);
</script>
```
