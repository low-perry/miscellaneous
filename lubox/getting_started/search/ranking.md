# Ranking

When ordering search results, Luigi's Box ranks (sorts) the products using a multitude of signals and an ensamble of global and local models. There are several rules and main pricinples that guide the final ranking.

# Standard ranking model

At the basic level, the ranking is based on:

- Fulltext match. Luigi's Box will show products with the best match against the user phrase. If you are familiar with the was standard fulltext works, you may know about the concept of "score" - a number that represents the strength of the match. This concept has several problems and we are using a concept of "match quality" instead to rank the results. You will see the results assigned into distinct match quality levels and sorted in this order:
  - Exact matches
  - Matches with typo tolerance allowed
  - Partial matches where some parts of the user phrase did not match
- Availability. The ranking prefers available products over unavailable products. We allow for different "levels" of availability, which allow us to rank products "in stock, available now" over products "in stock, available in 48 hours". See [Availability rank](/indexing/data_layout.html#special-fields-availability-rank) for more details.
- Signals from the [analytics feedback loop](/analytics.html). This makes sure that better selling products take precendce over products with no sales.
- Personalization features, i.e., Luigi's Box ranks results with respect to user profile. The ranking of the product will be dependent on the user who is submitting the query.

# Influencing ranking

Luigi's Box considers other signals in ranking, depending on their presence in the product data. If you want to activate additional rankers, simply start indexing the respective attribute in the data.

## Ranking by margin

When you include the margin in the product data, the rankers will take it into consideration and prefer products where your margin is higher. See [Margin](/indexing/data_layout.html#special-fields-margin) for more details about the product data attribute.

Note that margin is considered as a ranking signal but it does not drive ranking completely. In other words, when you include margin in the data, the results won't be sorted by margin, only influenced by margin, as the other signals will get a vote too.

## Ranking by freshness

Freshness ranker depend on the information about when the product started to sell. You can index this data in an `introduced_at` attribute. See [Introduced at](/indexing/data_layout.html#special-fields-introduced-at) for more details about the indexing part.

Freshness ranker promotes products which are new (considering the different against current timestamp, i.e., `now() - introduced_at`). The newer the product the more boosting it earns. The freshness ranker considers the freshness up to 60 days after the `introduced_at` date/timestamp and uses a log-decay to gradually decrease the boosting, as the product ages.

The main purpose of the freshness ranker is to compensate for the lack of business metrics from the [analytics feedback loop](/analytics.html) that the new products inevitable experience. When a new product enters the store it has no user interactions and no conversions and the freshness ranker balances this out.

## Boosting

You can boost an object by setting its `boost` attribute in the data. See [Boost](/indexing/data_layout.html#special-fields-boost) for more details about the indexing part.

Boosting is a very strong ranking signal. Once you boost the object, the boosting will take precedence over any other ranking signal except the match quality.

# Manual interference

If you need to affect ranking of a product in general, or on a per-query basis, you can use [Luigi's Box app](https://app.luigisbox.com) to adjust the ranking in real-time, using these features:

- Catalog management > Boosting, which allows for manual boosting.
- Search > Search results customizations, where you can set manual per-query rules.
