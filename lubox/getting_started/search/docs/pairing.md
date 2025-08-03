# Pairing

The key to understanding Product Listing Pages is that they are fundamentally a filter on a product attribute, combined with merchandising rules (like pinned or blocked products) that you set up in the Luigi's Box app.

For this system to work, your data feeds must provide three distinct components:

1. A **filterable attribute** on each product to define which PLPs it belongs to.
2. A **standalone document** for each category/brand to enable merchandising in the app.
3. A **pointer attribute** on each product that links it to the standalone documents.

## The three core components of a plp

For any PLP (e.g., the "Guitars" category page) to function with merchandising, your feeds must contain these three pieces of data.

### Component 1: The product's filterable attribute

Every product that should appear on a PLP must have a top-level attribute that the API can filter. This is what the `f[]` parameter in your API call targets.

- **For Brands or Simple Categories:** This is the simplest method. The product has a top-level attribute for the brand or a single category assignment.

```json
// In your product object's "fields":
"brand": ["Fender"],
"category": ["Guitars"]
```

- **For Hierarchical Categories:** To filter by a specific path in a category tree, the product must have an attribute containing that full path. The `category_path` field is used for this, and it performs an exact match on the provided path.

```json
// In your product object's "fields":
"category_path": ["Musicians||Guitars||Electric Guitars"]
```

### Component 2: The standalone catalog document

For you to be able to apply merchandising rules (e.g., pin a specific guitar to the top of the "Guitars" page), that category must exist as a standalone object in your catalog feed. This is the object you see and manage in the Luigi's Box app.

#### Example: Standalone category document

```json
{
  "type": "category",
  "identity": "unique-id-for-guitars",
  "fields": {
    "id": "101", // The unique ID for this category
    "title": "Guitars",
    // This defines the hierarchy for the "Guitars" category
    "ancestors": [
      { "type": "category", "fields": { "title": "Musicians" } }
    ]
  }
}
```

### Component 3: The product's pointer attribute & the "pairing" rule

Your product needs a way to "point" to the standalone documents it belongs to. This is done with a top-level array of IDs.

- **The pointer:** The product object must have a top-level array containing the IDs of its leaf category and all its ancestors.

```json
// In your product object's "fields":
"category_id": ["100", "101", "102"] // IDs for Musicians, Guitars, and Electric Guitars
```

- **The "pairing" rule:** The "pairing" setting in Luigi's Box tells the system the name of this pointer field. The default setting is `id -> category_id`, which means the system will lokk for a field named `category_id` on the product and match it to the `id` field in the standalone category documents.
