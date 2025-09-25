---
layout: "overview_layout"
hub_id: "recommendations"
title: "Recommendations"
intro: |
  Luigi's Box Recommendations is a powerful system designed to increase user engagement and sales by displaying relevant products to users. It utilizes a wide range of AI-powered models trained on product catalog data and user behavior to deliver personalized and contextually appropriate suggestions. The models are trained on a per-customer basis to meet specific business goals, such as recommending complementary accessories or alternative items.

  Luigi's Box offers several integration paths. For a fast, frontend-focused implementation, the <a href="/recommendations/recco_js.html">Recco.js</a> library provides a complete UI component. For maximum flexibility, the <a href="/recommendations/api.html">Recommender API</a> allows for deep backend integration. For offline use cases like email campaigns, the <a href="/recommendations/recommendation_batch_publisher.html">Recommendation Batch Publisher</a> can generate recommendations for large user sets on a schedule.
choices:
  - title: "Recco.js"
    description: "A frontend JavaScript library to rapidly build an interactive recommendation UI."
    url: "/recommendations/recco_js.html"
    recommended: true
    advantages:
      - "<strong>Fast implementation</strong>: Quickly integrate a recommender by including the script and setting configuration parameters."
      - "<strong>Easy customization</strong>: Use pre-built themes or provide custom HTML templates using Vue.js syntax to match a site's branding."
      - "<strong>Built-in features</strong>: Includes an optional carousel mode and a batch mode that improves performance by making a single API call for all recommenders on a page."
  - title: "Recommender API"
    description: "A flexible backend endpoint to get recommendations based on popularity, similarity, and user history."
    url: "/recommendations/api.html"
    label: "Custom build"
    advantages:
      - "<strong>Maximum flexibility</strong>: A direct API provides full control for custom backend implementations and integration with any platform."
      - "<strong>Powerful contextual filtering</strong>: Use the <code>recommendation_context</code> to apply request-time restrictions on results, such as filtering by brand, category, or price."
      - "<strong>Performance optimization</strong>: Utilize request batching to improve latency and receive deduplicated recommendations across multiple placements on a single page."
---

## Core Concepts

Understanding these core concepts will help you get the most out of Luigi's Box Recommendations.

* **Recommendation Models:** Models are the AI component that drives the recommendations. They can be **content-based**, using product data to find similar items, or **behavioral**, which observe how users interact with products (e.g., what's frequently bought together). Luigi's Box offers a wide range of standard models that are trained and customized for each client's specific business case. See the <a href="/recommendations/models.html">reference models</a> for a full list.

* **Personalization:** The recommender models are designed to consider user preferences to deliver personalized suggestions. By providing a `user_id` in the request, the model uses the corresponding user profile, built from analytics data, as an additional input to tailor the results.

* **Batching:** When displaying several recommenders on a single page, it is highly recommended to batch all requests into a single API call. This improves performance and latency, as the user's profile is only loaded once. It also ensures that the same product is not recommended by different models on the same page through automatic deduplication.