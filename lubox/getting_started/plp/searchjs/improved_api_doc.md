# Shopping Assistant API

Use the assistant endpoint to navigate interactive, guided product discovery experiences.

To use this feature, you must have configured Shopping Assistant in our App. This endpoint is only for navigating already created flows.

Luigi's Box Assistant can learn from user interactions to provide better recommendations. To enable learning, integrate Luigi's Box Search Analytics service with your website by following [the instructions](/analytics.html).

<div class="alert alert-info">
The assistant endpoint is publicly available and requires no authentication.
</div>

## Endpoint

<span class="badge text-bg-success">POST</span> `https://live.luigisbox.com/v1/assistant`

### Query Parameters

Parameter | Required | Description
--------- | -------- | -----------
`tracker_id` | **Required** | Identifier of your site within Luigi's Box. Must be in format `XXXX-XXXX` (digits and hyphens only). You can find this identifier in every URL in [the Luigi's Box app](https://app.luigisbox.com) once you are logged in.
`assistant_handle` | **Required** | Unique identifier of the assistant you want to use. Must be a non-empty string, maximum 100 characters.
`user_id`<span class="optional">optional</span> | Optional | Unique identifier of the user. If supplied and matches the user ID collected in analytics, it can drive personalization of assistant results. Maximum 255 characters.

### Request Body Parameters
Parameter | Required | Description
--------- | -------- | -----------
`assistant_version` | **Required** | Version number of the assistant configuration. Must be a positive integer.
`next_question_handle`<span class="optional">optional</span> | Optional | Handle of the next question to be presented to the user. If not provided, the system will determine the next question based on the current state.
`price_field`<span class="optional">optional</span> | Optional | Field used for calculating price ranges in the results. Defaults to `price_amount`. If you want to use a different field, specify it here. If the field does not exist or is not numeric, an error will be returned.
`steps`<span class="optional">optional</span> | Optional | Array of previous interactions (questions and answers) in the conversation. Each step contains the question handle and the selected option handle. Each step must have `question_handle` (string, max 100 characters) and `option_handles` (array of strings, each max 100 characters).
`sort`<span class="optional">optional</span> | Optional | Sorting criteria for the product results. This can be a string like `price:asc`, `price:desc,title:asc`, etc. If not provided, the default sorting will be applied.
`context`<span class="optional">optional</span> | Optional | Used for overriding fields used by search. The fields available for overriding are `availability_field`, `availability_rank_field`, `freshness_field`, `boost_field`, `geo_location_field`, `margin_field`, `absolute_margin_field`, and `discount_field`.
`f`<span class="optional">optional</span> | Optional | Array of filters to apply to the product results. Each filter can be a string like `category:electronics`, `price:1&#124;5`, etc. If multiple filters are provided, they are handled with `OR` between them.
`f_must`<span class="optional">optional</span> | Optional | Array of filters that must match the product results. Each filter can be a string like `category:electronics`, `price:1&#124;5`, etc. If multiple filters are provided, they are handled with `AND` between them.
`neg_f`<span class="optional">optional</span> | Optional | Array of filters that must not match the product results. Each filter can be a string like `category:electronics`, `price:1&#124;5`, etc. If multiple filters are provided, they are handled with `OR` between them.
`neg_f_must`<span class="optional">optional</span> | Optional | Array of filters that must not match the product results. Each filter can be a string like `category:electronics`, `price:1&#124;5`, etc. If multiple filters are provided, they are handled with `AND` between them.
`search_in_variants`<span class="optional">optional</span> | Optional | Boolean value indicating whether to search in product variants. If set to `true`, the search will include variants of products. Defaults to the search setting set in the app.
`non_collapsed_variants`<span class="optional">optional</span> | Optional | Boolean value indicating whether to return non-collapsed variants in the results. If set to `true`, variants will be returned as separate items in the results. <b>Works only when search_in_variants is allowed</b>.

### Request Headers

<%= partial "includes/accept_encoding_request_header" %>

**Content-Type**: `application/json` - Required for all requests with a body.

**Request Size Limit**: Maximum request body size is 1MB.

### Example request

<%= partial "includes/code/examples", locals: {
  method: "POST",
  auth: false,
  path: '/v1/assistant?tracker_id=1234-5678&assistant_handle=piano_finder&user_id=123456',
  headers: { "Content-Type" => "application/json" },
  payload: {"assistant_version": 1,"steps": [{"question_handle": "color","option_handles": ["color-blue"]}]}
  }
%>

### HTTP Response

The response to an assistant request is a structured JSON.

#### Success Response (200 OK)

##### Response fields
Parameter | Description
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

##### Success Response Example

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

#### Error Responses

All error responses follow this standardized format:

```json
{
  "error": {
    "type": "error_category",
    "code": "SPECIFIC_ERROR_CODE",
    "message": "Human-readable error description",
    "details": {
      "field_name": ["specific validation errors"]
    },
    "request_id": "unique_request_identifier",
    "timestamp": "2024-01-15T10:30:00Z"
  }
}
```

##### HTTP Status Codes and Error Types

| Status | Type | Code | Description | Example |
|--------|------|------|-------------|---------|
| **400** | `malformed_input` | `MISSING_REQUIRED_PARAM` | Required parameter is missing | Missing `tracker_id` in query parameters |
| **400** | `malformed_input` | `INVALID_PARAM_FORMAT` | Parameter format is incorrect | `tracker_id` not in format `123-123` |  
| **400** | `malformed_input` | `INVALID_REQUEST_BODY` | Request body is empty or malformed | Empty request body when `assistant_version` is required |
| **400** | `validation_error` | `INVALID_STEPS_FORMAT` | Steps array contains invalid data | `question_handle` is not a string |
| **400** | `validation_error` | `INVALID_FIELD_TYPE` | Field has wrong data type | `assistant_version` is not an integer |
| **400** | `validation_error` | `FIELD_TOO_LONG` | Field exceeds maximum length | `assistant_handle` longer than 100 characters |
| **404** | `resource_not_found` | `CATALOG_NOT_FOUND` | Specified catalog doesn't exist | Invalid `tracker_id` |
| **404** | `resource_not_found` | `ASSISTANT_NOT_FOUND` | Assistant handle not found | Invalid `assistant_handle` |
| **408** | `timeout` | `REQUEST_TIMEOUT` | Request processing timed out | Server took too long to process |
| **413** | `request_too_large` | `REQUEST_SIZE_EXCEEDED` | Request body exceeds size limit | Request body larger than 1MB |
| **503** | `service_unavailable` | `METADATA_SERVICE_UNAVAILABLE` | Backend service unavailable | Temporary service outage |

##### Error Response Examples

**Missing Required Parameter (400)**
```json
{
  "error": {
    "type": "malformed_input",
    "code": "MISSING_REQUIRED_PARAM",
    "message": "Required parameter is missing",
    "details": {
      "tracker_id": ["Request parameter is missing or malformed. It needs to be in format '123-123'."]
    },
    "request_id": "req_abc123",
    "timestamp": "2024-01-15T10:30:00Z"
  }
}
```

**Invalid Parameter Format (400)**
```json
{
  "error": {
    "type": "malformed_input", 
    "code": "INVALID_PARAM_FORMAT",
    "message": "Parameter format is incorrect",
    "details": {
      "tracker_id": ["Request parameter is missing or malformed. It needs to be in format '123-123'."]
    },
    "request_id": "req_def456",
    "timestamp": "2024-01-15T10:30:00Z"
  }
}
```

**Invalid Steps Format (400)**
```json
{
  "error": {
    "type": "validation_error",
    "code": "INVALID_STEPS_FORMAT", 
    "message": "Steps array contains invalid data",
    "details": {
      "steps": {
        "0": {
          "question_handle": ["must be a string"],
          "option_handles": {
            "1": ["must be a string"]
          }
        }
      }
    },
    "request_id": "req_ghi789",
    "timestamp": "2024-01-15T10:30:00Z"
  }
}
```

**Catalog Not Found (404)**
```json
{
  "error": {
    "type": "resource_not_found",
    "code": "CATALOG_NOT_FOUND",
    "message": "The specified catalog could not be found",
    "details": {},
    "request_id": "req_jkl012",
    "timestamp": "2024-01-15T10:30:00Z"
  }
}
```

**Request Timeout (408)**
```json
{
  "error": {
    "type": "timeout",
    "code": "REQUEST_TIMEOUT", 
    "message": "The request timed out. Please try again.",
    "details": {},
    "request_id": "req_mno345",
    "timestamp": "2024-01-15T10:30:00Z"
  }
}
```

**Service Unavailable (503)**
```json
{
  "error": {
    "type": "service_unavailable",
    "code": "METADATA_SERVICE_UNAVAILABLE",
    "message": "Metadata service is temporarily unavailable",
    "details": {},
    "request_id": "req_pqr678", 
    "timestamp": "2024-01-15T10:30:00Z"
  }
}
```

### Rate Limiting

The API implements rate limiting to ensure fair usage:

- **Rate Limit**: 100 requests per hour per `tracker_id`
- **Rate Limit Headers**: Response includes rate limiting information:
  - `X-RateLimit-Limit`: Maximum requests per hour
  - `X-RateLimit-Remaining`: Remaining requests in current window  
  - `X-RateLimit-Reset`: Unix timestamp when rate limit resets

When rate limit is exceeded, the API returns:

```json
{
  "error": {
    "type": "rate_limit_exceeded",
    "code": "TOO_MANY_REQUESTS", 
    "message": "Rate limit exceeded. Try again later.",
    "details": {
      "retry_after": 3600
    },
    "request_id": "req_stu901",
    "timestamp": "2024-01-15T10:30:00Z"
  }
}
```

## Integration Guide

### Building a Conversation Flow

The Assistant API is designed to create a conversational product discovery experience. Here's how to implement a basic flow:

1. **Start the conversation**: Make an initial request with only the `tracker_id`, `assistant_handle`, and `assistant_version` parameters.
2. **Present options**: Display the question and options returned in the response to the user.
3. **Track selections**: When a user selects an option, add this interaction to the `steps` array in your next request.
4. **Show results**: Display the products returned in the `hits` array at each stage of the conversation.
5. **Continue the conversation**: The API will automatically determine the next most relevant question based on previous answers, or you can specify the next question using `next_question_handle`.

### Error Handling in Your Application

When integrating the Assistant API, implement proper error handling:

```javascript
async function callAssistant(params) {
  try {
    const response = await fetch('/v1/assistant', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      // Handle specific error types
      switch (data.error.code) {
        case 'MISSING_REQUIRED_PARAM':
          console.error('Missing required parameter:', data.error.details);
          break;
        case 'CATALOG_NOT_FOUND':
          console.error('Catalog not found. Check your tracker_id.');
          break;
        case 'REQUEST_TIMEOUT':
          console.error('Request timed out. Retrying...');
          // Implement retry logic
          break;
        default:
          console.error('API Error:', data.error.message);
      }
      throw new Error(data.error.message);
    }
    
    return data;
  } catch (error) {
    console.error('Network or parsing error:', error);
    throw error;
  }
}
```

### Price Range Display

The Assistant API automatically calculates price ranges for each option, helping users understand the price distribution of products that match each option. This is calculated using the field specified in the `price_field` parameter (defaults to `price_amount`).

## Best Practices

### Design Effective Questions

Create questions that help users narrow down their choices effectively. Each question should:
- Address a specific aspect of the product selection process.
- Have options that meaningfully divide the product catalog.
- Present clear, concise option text.

### Handle Errors Gracefully

- Always check the HTTP status code before processing the response
- Use the structured error codes to implement specific error handling logic
- Log the `request_id` from error responses for debugging purposes
- Implement retry logic for timeout and service unavailable errors
- Show user-friendly error messages based on error types

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

### Monitor API Usage

- Track your rate limit usage using the response headers
- Monitor error rates and types to identify integration issues
- Use the `request_id` from responses for debugging and support requests
- Set up alerts for high error rates or service unavailability