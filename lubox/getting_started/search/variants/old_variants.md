# Variant search

If your products are structured into variants, Luigi's Box search can consider the variants and treat them separately. See the video below for a demonstration and visual explanation.

<iframe class="mt-4" width="560" height="315" src="https://www.youtube.com/embed/UB8G6BFQn0s?si=UTz4BGITx16Pgd4O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Variant search modes

There are three modes that can be used in case your data contains product variants.

### Searching variants separately

In this mode, your variants will be searched and displayed separately, as individual tiles on the search results page. If your product contains five different color variants and this product matches the search phrase, each variant (color variation) will be displayed separately and the user will see five copies of the product tile, each with a different color.

Note that there is no guarantee that the variants will be displayed next to each other, as each variant is treated as a separate product. If a variant is not available it will be automatically demoted, plus each variant has its own feedback loop from the analytics.

To activate this mode, simply index each variant as if it was a standalone product. If you are using API do not index nested variants and if you are using feeds, there's no need to include the grouping parameter.

### Retrieving best variant

In this mode, the search is variants-aware and it will always retrieve the variant that is matching the user's phrase best. All of the other variants of the product will be included as the `nested` objects of the product.

In this mode, the master product serves as a virtual parent for the variants and it is not searched or retrieved at all. Only the individual variants will be searched and retrieved. The variant selection applies the following logic:

- Score the variants by their similarity to the input phrase. E.g., for the phrase "blue t-shirt" the product "Blue T-shirt" is a better match than "Black T-shirt" and would thus score higher.
- If there is a tie and you are indexing a numeric `_variant_preference` attribute, the variant with the *highest* `_variant_preference` is selected. You can use this attribute to get control over the tie-breaking algorithm.
- Otherwise, if there is a tie and there are several variants with an equal score, the variant with the lowest price is selected.

To activate this mode, [index nested variants via API](/indexing/api.html#content-updates-indexing-types-nested-variants) or provide [grouping identifier in the feed](/indexing/feeds.html#feeds-product-feeds-variants-in-the-feed) and contact our support to active variant search for you.

### Merging variants data into the master product

In rare cases you may need to index variants data as separate nested variants but do not want to use variants-aware search. Contact our support and we will configure variants flattenning, where we merge all of the variants data into the master product and search and retrieve master products. Note that behavior-wise, this is the same mode as when [Searching variants separately](#) which you should use directly, unless you have some specific restrictions.

## Data requirements

Refer to the docs for instructions for getting variants data into Luigi's Box.

<div class="row mt-4">
  <div class="col-md-4">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Indexing variants via API</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
        <a href="/indexing/api.html#content-updates-indexing-types-nested-variants" class="card-link">Read the docs →</a>
      </div>
    </div>
  </div>

  <div class="col-md-4">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Providing variants via feeds</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
        <a href="/indexing/feeds.html#feeds-product-feeds-variants-in-the-feed" class="card-link">Read the docs →</a>
      </div>
    </div>
  </div>
</div>

## Should you use variants?

Using variants makes sense in the cases where there is a visual difference between the variants. Some good examples of when variants make sense are e.g. color or material, because it is clear to the end-user what the differences between variants are. Ultimately, the decision whether to use variants or not will be driven by your business needs. For some businesses, displaying all of the color variants of the same product on separate tiles is a better decision than using variants-aware search, simply because it fosters product visibility and discoverability.

An example where we recommend to not use variants would be sizes in fashion. There are no differences between the variants &mdash; the product image, title and even the price is usually the same and your users would not be able to tell a difference between different product variants.

Most importantly, stay consistent with the rest of your website. If you are not using variants in your product listings, it is usually very confusing to the users when you introduce them to search.

# Performance impact

Note that variants search comes with a minor performance impact. To avoid increasing latencies, we recommend to keep the number of variants per product below 10 on average. If you have need to index more variants you are probably trying to use variants-aware search for a scenario where it may not make sense and search performance may suffer.
