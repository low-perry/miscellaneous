---
title: Shopping Assistant API
layout: layout
---

# Shopping Assistant API

Use the assistant endpoint to navigate interactive, guided product discovery experiences.

To use this feature, you must have configured Shopping Assistant in our App. This endpoint is only for navigating already created flows.

Luigi's Box Assistant can learn from user interactions to provide better recommendations. To enable learning, integrate Luigi's Box Search Analytics service with your website by following [the instructions](/analytics.html).

<div class="alert alert-info">
The assistant endpoint is publicly available and requires no authentication.
</div>

## Endpoint

<span class="badge text-bg-success">POST</span> `https://live.luigisbox.com/v1/assistant`

### Query parameters

&nbsp; | &nbsp;
--------- | -----------
`tracker_id` | Identifier of your site within Luigi's Box. You can find this identifier in every URL in [the Luigi's Box app](https://app.luigisbox.com) once you are logged in.
`assistant_handle` | Unique identifier of the assistant you want to use.
`user_id`<span class="optional">optional</span> | Unique identifier of the user. If supplied and matches the user ID collected in analytics, it can drive personalization of assistant results.

### Request body parameters

&nbsp; | &nbsp;
--------- |---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
`assistant_version` | Version number of the assistant configuration.
`next_question_handle`<span class="optional">optional</span> | Handle of the next question to be presented to the user. If not provided, the system will determine the next question based on the current state.
`price_field`<span class="optional">optional</span> | Field used for calculating price ranges in the results. Defaults to `price_amount`. If you want to use a different field, specify it here. If the field does not exist or is not numeric, an error will be returned.
`steps`<span class="optional">optional</span> | Array of previous interactions (questions and answers) in the conversation. Each step contains the question handle and the selected option handle.
`sort`<span class="optional">optional</span> | Sorting criteria for the product results. This can be a string like `price:asc`, `price:desc,title:asc`, etc. If not provided, the default sorting will be applied.
`context`<span class="optional">optional</span> | Used for overriding fields used by search. The fields available for overriding are `availability_field`, `availability_rank_field`, `freshness_field`, `boost_field`, `geo_location_field`, `margin_field`, `absolute_margin_field`, and `discount_field`.
`f`<span class="optional">optional</span> | Array of filters to apply to the product results. Each filter can be a string like `category:electronics`, `price:1&#124;5`, etc. If multiple filters are provided, they are handled with `OR` between them.
`f_must`<span class="optional">optional</span> | Array of filters that must match the product results. Each filter can be a string like `category:electronics`, `price:1&#124;5`, etc. If multiple filters are provided, they are handled with `AND` between them.
`neg_f`<span class="optional">optional</span> | Array of filters that must not match the product results. Each filter can be a string like `category:electronics`, `price:1&#124;5`, etc. If multiple filters are provided, they are handled with `OR` between them.
`neg_f_must`<span class="optional">optional</span> | Array of filters that must not match the product results. Each filter can be a string like `category:electronics`, `price:1&#124;5`, etc. If multiple filters are provided, they are handled with `AND` between them.
`search_in_variants`<span class="optional">optional</span> | Boolean value indicating whether to search in product variants. If set to `true`, the search will include variants of products. Defaults to the search setting set in the app.
`non_collapsed_variants`<span class="optional">optional</span> | Boolean value indicating whether to return non-collapsed variants in the results. If set to `true`, variants will be returned as separate items in the results. <b>Works only when search_in_variants is allowed</b>.

### Request headers

<%= partial "includes/accept_encoding_request_header" %>

## Example request

<%= partial "includes/code/examples", locals: {
  method: "POST",
  auth: false,
  path: '/v1/assistant?tracker_id=1234-5678&assistant_handle=piano_finder&user_id=123456',
  headers: { "Content-Type" => "application/json" },
  payload: {"assistant_version": "1","steps": [{"question_handle": "color","option_handles": ["color-blue"]}]}
  }
%>

### HTTP Response

The response to an assistant request is a structured JSON.

#### Response fields

&nbsp; | &nbsp;
----- | -----------
`assistant_handle` | The handle of the assistant being used.
`tracker_id` | Identifier of your site within Luigi's Box.
`hits` | Array of product results that match the current state of the conversation.
`important_attributes` | Array of important attributes that should be displayed for each product in the results.
`avatar_image_link` | URL to an avatar image for the assistant, if available.
`question.title_html` | HTML-formatted title of the current question.
`question.description_html` | HTML-formatted description of the current question, if available.
`question.image_link` | URL to an image related to the current question, if available.
`question.type` | Type of the question, which can be `single_choice` or `multi_choice`.
`question.handle` | Unique identifier for the current question.
`question.options[].title_html` | HTML-formatted title of the option.
`question.options[].description_html` | HTML-formatted description of the option, if available.
`question.options[].option_handle` | Unique identifier for the option.
`question.options[].next_question_handle` | Handle of the next question to be presented if this option is selected.
`question.options[].image_link` | URL to an image related to the option, if available.
`question.options[].color_code` | Color code associated with the option, if applicable.
`question.options[].hits_count` | Number of products that match this option.
`question.options[].price_range` | Price range of products matching this option, formatted as "min - max".

```json
{
  "assistant_handle": "piano_finder",
  "tracker_id": "1234-5678",
  "hits": [
    {
      "id": "product_1",
      "title": "Grand Piano",
      "price_amount": 5000,
      "image_link": "https://example.com/images/grand_piano.jpg",
      "important_attributes": ["brand", "model"],
      "updated_at": "2024-10-01T12:00:00Z"
    }
  ],
  "important_attributes": ["brand", "model"],
  "avatar_image_link": "https://example.com/images/avatar.png",
  "question": {
    "title_html": "<strong>What type of piano are you looking for?</strong>",
    "description_html": "<p>Please select one of the options below.</p>",
    "image_link": "https://example.com/images/question_image.jpg",
    "type": "single_choice",
    "handle": "piano_type",
    "options": [
      {
        "title_html": "<strong>Grand Piano</strong>",
        "description_html": "<p>A large and elegant piano.</p>",
        "option_handle": "grand_piano",
        "next_question_handle": null,
        "image_link": null,
        "color_code": null,
        "hits_count": 10,
        "price_range": "$4000 - $6000"
      }
    ]
  }
}
```

## Integration Guide

### Building a Conversation Flow

The Assistant API is designed to create a conversational product discovery experience. Here’s how to implement a basic flow:

1. **Start the conversation**: Make an initial request with only the `tracker_id`, `assistant_handle`, and `assistant_version` parameters.
2. **Present options**: Display the question and options returned in the response to the user.
3. **Track selections**: When a user selects an option, add this interaction to the `steps` array in your next request.
4. **Show results**: Display the products returned in the `hits` array at each stage of the conversation.
5. **Continue the conversation**: The API will automatically determine the next most relevant question based on previous answers, or you can specify the next question using `next_question_handle`.

### Price Range Display

The Assistant API automatically calculates price ranges for each option, helping users understand the price distribution of products that match each option. This is calculated using the field specified in the `price_field` parameter (defaults to `price_amount`).

## Best Practices

### Design Effective Questions

Create questions that help users narrow down their choices effectively. Each question should:
- Address a specific aspect of the product selection process.
- Have options that meaningfully divide the product catalog.
- Present clear, concise option text.

### Track User Journeys

Analyze how users navigate through your assistant to optimize the question flow and product recommendations. Use the analytics integration to:
- Identify common paths through the assistant.
- Detect questions where users frequently abandon the process.
- Measure conversion rates from assistant interactions.

### Show Relevant Results Early

While the assistant is designed to guide users to the perfect product through a series of questions, showing relevant results early in the process can improve user satisfaction. The API returns matching products at each step, so consider:
- Displaying a selection of top matches alongside questions.
- Highlighting the diversity of available options.
- Showing how each answer changes the result set.

### Ensure Mobile Compatibility

Design your assistant interface to work well on mobile devices, where users may prefer a guided experience over traditional filtering.