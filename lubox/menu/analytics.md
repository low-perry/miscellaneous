---
layout: "overview_layout"
hub_id: "analytics"
title: "Analytics"
intro: |
  Analytics is a fundamental part of Luigi's Box services. It is designed not only to show the performance of individual services like Search or Recommender but also to collect user interactions from your website. This behavioral data is then fed to the AI models that drive ranking and product selection.

  Integrating analytics is a separate step from making API calls for search or recommendations. Events must be sent independently to be recorded. Note that if you use Luigi's Box frontend libraries, they handle sending these analytics events automatically. You can track events through a JavaScript-based collector that monitors a <code>dataLayer</code> object or by sending events directly to the API, which is ideal for backend or mobile app integrations.
choices:
  - title: "DataLayer Collector"
    description: "A JavaScript-based collector that leverages Google Analytics' ecommerce events for efficient frontend data collection."
    url: "/analytics/collector.html"
    recommended: true
    advantages:
      - "<strong>Simple implementation</strong>: The collector script is added via the main LBX script and automatically monitors the <code>dataLayer</code> for events."
      - "<strong>Leverages existing standards</strong>: Utilizes Google Analytics' ecommerce event structure, which may already be implemented on your site."
      - "<strong>Flexible</strong>: Seamlessly interprets events pushed via the <code>gtag</code> manager or the native <code>dataLayer.push</code> method."
  - title: "Events API"
    description: "A low-level REST API for sending structured JSON events directly from your application's backend or a mobile app."
    url: "/analytics/api.html"
    label: "Advanced"
    advantages:
      - "<strong>Maximum flexibility</strong>: Ideal for mobile apps, backend tracking, or any environment where JavaScript is not an option."
      - "<strong>Full control</strong>: Provides complete control over the event data being sent, without relying on a frontend script."
      - "<strong>Environment agnostic</strong>: As a standard HTTP POST endpoint, it can be integrated with any backend technology."
---

## Core Concepts

Beyond choosing an integration path, it's important to understand the concepts that make Luigi's Box Analytics powerful.

* **The Feedback Loop:** One of the primary goals of analytics is to provide feedback to the various AI models inside Luigi's Box. For this to work effectively, it is vital that products are identified using the same identifier in analytics events as used when indexing the data. Changing the identity of an object will cause the models to forget everything they have learned about it historically.
* **Interaction Data:** A complete picture of user interaction is formed by several key pieces of information. This includes the `List` of products a user saw, the `Query` they typed, any `Filters` they applied to narrow the results, and any `Conversions` (like adding an item to the cart).
* **Bootstrapping with Historical Data:** To shorten the initial ramp-up period, Luigi's Box allows for the import of past or offline transactions. By uploading historical purchase data, services like Behavioral Recommendations and Personalization can achieve full effectiveness much faster, as the AI models are trained on this data.