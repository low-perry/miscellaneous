Guide: Understanding and Influencing Result Ranking
Introduction
When a user performs a search, the order of the results is determined by a sophisticated ranking system. It's not a simple text match; Luigi's Box uses an ensemble of AI models and a multitude of signals to present the most relevant, useful, and profitable products first.

Understanding how this ranking works is key to optimizing your search. This guide breaks down the standard ranking model and explains the various ways you can influence it, from providing richer product data to making manual adjustments in the Luigi's Box App.

What you'll learn
The core signals that make up the standard ranking model.

How to influence ranking by adding specific attributes to your product data.

How to manually override ranking for specific products or queries.

Who is this guide for
Developers and e-commerce managers who want to understand and optimize the order of their search results.

Users who want to learn how to promote new, high-margin, or specific products within search.

Prerequisites
An understanding of how product data is indexed with Luigi's Box.

1. The Standard Ranking Model
By default, Luigi's Box ranks results based on a combination of several core factors. These signals are constantly balanced to ensure the highest relevance.

Full-text Match Quality: This is the foundation. Instead of a simple "score," products are grouped into distinct quality levels, ensuring that exact matches always appear above partial ones. The hierarchy is:

Exact matches

Matches with typo tolerance allowed

Partial matches (where some words in the query didn't match)

Availability: The ranking model prefers products that are available to purchase. It can even differentiate between levels of availability, ranking a product that is "in stock, available now" higher than one that is "in stock, available in 48 hours."

Analytics Feedback Loop: The system learns from user behavior. Products that are frequently viewed, added to carts, and purchased will naturally be promoted in the rankings over time. This ensures that your best-selling and most popular items get the visibility they deserve.

Personalization: Ranking is not the same for everyone. The model can tailor the order of results based on an individual user's profile and past interactions with your store.

2. Influencing Ranking with Product Data
You can directly influence the default ranking behavior by including specific attributes in your product data feed. The ranking model will automatically detect and use these attributes as powerful signals.

Ranking by Freshness
New products often lack the sales history to perform well in the analytics feedback loop. The freshness ranker solves this by temporarily boosting new items.

How it works: Include an introduced_at attribute with the date the product was added to your store.

Effect: The system applies a boost that gradually decreases over 60 days. This gives new products a fair chance to gain visibility and accumulate their own interaction data.

Ranking by Margin
You can guide the ranking algorithm to favor products that are more profitable for your business.

How it works: Include a margin attribute in your product data.

Effect: This acts as a strong "vote" for products with a higher margin. Note that this is an influence, not a hard sort; a high-margin product will still not outrank a much more relevant, lower-margin one.

Boosting with an Attribute
For direct and powerful control, you can use a dedicated boost attribute.

How it works: Set the boost attribute in your product data to a value between 0 and 3.

Effect: This is a very strong ranking signal. A boosted product will take precedence over almost any other ranking factor except for the fundamental match quality. It's an effective way to manually promote specific items across all relevant searches.

3. Manual Ranking Adjustments
For real-time, query-specific adjustments, you can use the tools available directly in the Luigi's Box App without changing your data feed.

Global Boosting: In Catalog management > Boosting, you can manually boost any product. This has the same effect as setting the boost attribute in your data.

Per-Query Customizations: In Search > Search results customizations, you can set up powerful rules for specific search terms. For example, for the query "running shoes," you can manually pin a specific shoe to the top position or demote another.

Next Steps
Now that you understand how to influence ranking, you can combine this knowledge with other features:

Handle Product Variants: Ranking signals like availability are especially important for products with variants. Learn more in our "Implementing Variant Search" guide.

Configure Filtering: The interplay between filtering and ranking is key to a great user experience. Revisit our "Configuring Advanced Search Facets and Filtering" guide.