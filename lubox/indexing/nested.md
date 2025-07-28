## Nested categories / ancestors

Most often, products belong to a category which is part of a hierarchy (e.g., a "White T-Shirt" product belongs to the "T-Shirts" category, which is under "Men", which is under "Apparel").

To correctly represent a product's full category path (e.g., "Apparel > Men > T-shirts"), you must provide the complete hierarchy. This is essential for powering user-facing features like breadcrumb navigation and hierarchical faceting.
This is achieved by sending the most specific category that a product belongs to (the "leaf" category) as a `nested` object, and then listing all of its parent categories in a special `ancestors` array.

### Conceptual model

Imagine a product, a "White T-shirt", has a category path of "Apparel > Men > T-shirts".

1. **The leaf category:** The most specific category the product belongs to is "T-shirts". This will be your primary `nested` object.
2. **The ancestors:** The parent categories that form the path to this leaf are "Apparel" and "Men". These will go into the `ancestors` array.
3. **The order:** The order is crucial. The `ancestors` array **must** be ordered from top-level down to immediate parent:

Apparel (top-level) → Men (middle) → T-shirts (leaf - goes in nested)

  - First ancestor: "Apparel"
  - Second ancestor: "Men"

### Implementation

Based on the model above, here is how you would structure the JSON payload.

**Rule 1: The `nested` object is the leaf category**

The `nested` array should contain an object for the most specific category, in this case, "T-shirts".

**Rule 2: The `ancestors` array defines the path**

Inside the `fields` of the "T-shirts" category, you add the `ancestors` array.

**Rule 3: The `ancestors` array must be in order**

The array must list "Apparel" first, followed by "Men".

**Example: Product in a single hierarchy**

```json
{
  "objects": [
    {
      "identity": "74f5cdd860b5d9585b18edfab7c21670",
      "type": "item",
      "fields": {
        "title": "White T-shirt",
        "web_url": "/products/1"
      },
      "nested": [
        {
          "type": "category", // This is the LEAF category (most specific)
          "identity": "category-t-shirts",
          "fields": {
            "title": "T-shirts",
            "web_url": "/categories/apparel/men/t-shirts",
            "ancestors": [
              {
                "type": "category", // FIRST ancestor (top-level parent)
                "identity": "category-apparel",
                "fields": {
                  "title": "Apparel",
                  "web_url": "/categories/apparel"
                }
              },
              {
                "type": "category", // SECOND ancestor (immediate parent of T-shirts)
                "identity": "category-men",
                "fields": {
                  "title": "Men",
                  "web_url": "/categories/apparel/men"
                }
              }
            ]
          }
        }
      ]
    }
  ]
}
```

### Multiple category hierarchies

If a product belongs to more than one category path (e.g., "Cheddar cheese" is in both "Dairy > Cow milk" and "Wine > Snacks"), provide a `nested` object for each leaf category, with each one containing its own respective `ancestors` path.

**Example: Product in multiple hierarchies**

```json
{
  "objects": [
    {
      "identity": "5e119a13ec6511e323bfdc41cd181fdb",
      "type": "item",
      "fields": {
        "title": "Cheddar cheese",
        "web_url": "/products/1"
      },
      "nested": [
        {
          // FIRST CATEGORY PATH: Dairy > Cow milk
          "type": "category", // LEAF category for first path (Cow Milk)
          "identity": "1692378648",
          "fields": {
            "title": "Cow milk",
            "image_link": "/images/cow-milk.png",
            "ancestors": [{ // Path: Dairy → Cow milk
              "type": "category", // Top-level parent for first path (Dairy)
              "identity": "category-dairy",
              "fields": {
                 "title": "Dairy", 
                 "web_url": "/categories/dairy",
                 "image_link": "/images/dairy.png"
              }
            }]
          }
        },
        {
          // SECOND CATEGORY PATH: Wine > Snacks 
          "type": "category", // LEAF category for second path (Snacks)
          "identity": "category-snacks",
          "fields": {
            "title": "Snacks",
            "web_url": "/categories/wine/snacks",
            "image_link": "/images/snacks.png",
            "ancestors": [{
              "type": "category",  // Top-level parent for second path (Wine)
              "identity": "category-wine",
              "fields": {
                "title": "Wine",
                "web_url": "/categories/wine",
                "image_link": "/images/wine.png"
              }
            }]
          }
        }
      ]
    }
  ]
}
```

### Frequent problems

