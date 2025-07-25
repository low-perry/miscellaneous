# Shopping Assistant API

Use the Shopping Assistant API endpoint to design interactive, guided product discovery experiences tailored for your users.

This API endpoint navigates conversation flows you have already created. To get started first create an assistant in the [Luigi's Box app](https://app.luigisbox.com).

Luigi's Box Assistant can learn from user interactions to provide better recommendations. To enable learning, integrate Luigi's Box Search Analytics service with your website by following [the instructions](/analytics.html).

<div class="alert alert-info">
The assistant endpoint is publicly available and requires no authentication.
</div>

## Endpoint

<span class="badge text-bg-success">POST</span> `https://live.luigisbox.com/v1/assistant`

## Request

### Query parameters

&nbsp; | &nbsp;
--------- | -----------
`tracker_id` | Your site identifier within Luigi's Box. You can find this identifier in every URL in [the Luigi's Box app](https://app.luigisbox.com) once you are logged in.
`assistant_handle` | The unique handler of the assistant to use.
`user_id` | The unique identifier of the end-user. If it matches the user ID collected in analytics, it can drive personalization of the assistant results.

### Request body parameters
&nbsp; | &nbsp;
--------- |---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
`assistant_version` <span class="required">REQUIRED</span> <span class="optional">integer</span> | The version of the assistant. Use `1` for the latest version.
`next_question_handle`<span class="optional">optional</span> <span class="optional">string</span> | The handle of the next question to be presented to the user. If omitted, the API determines the next question automatically.
`price_field`<span class="optional">optional</span> <span class="optional">string</span> | The product field used for calculating price ranges.. Defaults to `price_amount`. If you want to use a different field, specify it here. If the field does not exist or is not numeric, an error will be returned.
`steps`<span class="optional">optional</span> <span class="optional">array[object]</span> | An array of previous interactions (questions and answers) in the conversation. Each step contains the question handle and the selected option handle.
`sort`<span class="optional">optional</span> <span class="optional">string</span> | Sorting criteria for the product results (e.g., `price:asc`, `price:desc,title:asc`, etc.). If not provided, the default sorting will be applied.
`context`<span class="optional">optional</span> <span class="optional">object</span> | Override fields used by search. The fields available for overriding are `availability_field`, `availability_rank_field`, `freshness_field`, `boost_field`, `geo_location_field`, `margin_field`, `absolute_margin_field`, and `discount_field`.
`f`<span class="optional">optional</span> <span class="optional">array[string]</span> | An array of `OR` filters to apply to the product results (e.g., `category:electronics`, `price:1&#124;5`, etc.).
`f_must`<span class="optional">optional</span> <span class="optional">array[string]</span> | An array of `AND` filters that must match the product results (e.g., `category:electronics`, `price:1&#124;5`, etc.).
`neg_f`<span class="optional">optional</span> <span class="optional">array[string]</span> | An array of `OR` filters to exclude product results (e.g., `category:electronics`, `price:1&#124;5`, etc.).
`neg_f_must`<span class="optional">optional</span> <span class="optional">array[string]</span> | n array of `AND` filters to exclude the product results (e.g., `category:electronics`, `price:1&#124;5`, etc.).
`search_in_variants`<span class="optional">optional</span> <span class="optional">boolean</span> | A boolean value indicating whether to search in product variants. If set to `true`, the search will include variants of products. Defaults to the search setting set in the app.
`non_collapsed_variants`<span class="optional">optional</span> <span class="optional">boolean</span> | A boolean value indicating whether to return non-collapsed variants in the results. If set to `true`, variants will be returned as separate items in the results. <b>Works only when search_in_variants is allowed</b>.

### Request headers

<%= partial "includes/accept_encoding_request_header" %>

### Example request

<%= partial "includes/code/examples", locals: {
  method: "POST",
  auth: false,
  path: '/v1/assistant?tracker_id=1234-5678&assistant_handle=piano_finder&user_id=123456',
  headers: { "Content-Type" => "application/json" },
  payload: {"assistant_version": 1,"steps": [{"question_handle": "color","option_handles": ["color-blue"]}]}
  }
%>

## HTTP response

The response to an assistant request is a structured JSON.

### Success response (200 OK)

A successful response includes the current state of the conversation, such as the next question, and a filtered list of products.

**Response fields**

&nbsp; | &nbsp;
----- | -----------
`assistant_handle` | The handle of the assistant being used.
`tracker_id` | Your site identifier within Luigi's Box.
`hits` | An array of product results that match the current state of the conversation.
`important_attributes` | An array of important attributes that should be displayed for each product in the results.
`avatar_image_link` | The URL to an avatar image for the assistant, if available.
`question.title_html` | A HTML-formatted title of the current question.
`question.description_html` | A HTML-formatted description of the current question, if available.
`question.image_link` | The URL to an image related to the current question, if available.
`question.type` | The type of the question, which can be `single_choice` or `multi_choice`.
`question.handle` | The unique identifier for the current question.
`question.options[].title_html` | A HTML-formatted title of the option.
`question.options[].description_html` | A HTML-formatted description of the option, if available.
`question.options[].option_handle` | The unique identifier for the option.
`question.options[].next_question_handle` | The handle of the next question to be presented if this option is selected.
`question.options[].image_link` | The URL to an image related to the option, if available.
`question.options[].color_code` | The color code associated with the option, if applicable.
`question.options[].hits_count` | The number of products that match this option.
`question.options[].price_range` | The rice range of products matching this option, formatted as "min - max".

**Example success response**

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

### Error Responses

The API uses standard HTTP status codes. Note that the format of the error response body can vary depending on the type of error.

**Client-side errors**

These errors indicate a problem with the request that was sent.

- **`400 Bad Request`**: 
  Indicates malformed input, such as a missing parameter or incorrect data type. The response is a structured JSON object.

```json
{
  "type": "malformed_input",
  "reason": "incorrect parameters provided",
  "caused_by": {
    "assistant_version": ["must be an integer"]
  }
}
```
- **`404 Not Found`**: 
  Indicates that the requested assistant or question does not exist.

```json
[
  "Assistant with id 'Webnar Guitars' for tracker_id 'YOUR_TRACKER_ID' not found"
]
```

**Server-side errors**

These indicate a temporary problem with the service. You should retry the request after a short delay. If the problem persists, contact support.

Status code | Response body (`text/plain`) | Reason |
|-------------|-------------------------------|--------|
| `408 Request Timeout` | `Request timed out` | The request took too long to process. |
| `500 Internal Server Error` | `Internal server error Request-Id: ...` | Indicates a generic server error. |
| `503 Service Unavailable` | `Service Unavailable` | A backend service is temporarily down. Please retry after a short delay. |

## Integration guide

### Building a conversation flow

The Assistant API is designed to create a conversational product discovery experience. Here's how to implement a basic flow:

1. **Start the conversation**: Make an initial request with only the `tracker_id`, `assistant_handle`, and `assistant_version` parameters.
2. **Present options**: Display the question and options returned in the response to the user.
3. **Track selections**: When a user selects an option, add this interaction to the `steps` array in your next request.
4. **Show results**: Display the products returned in the `hits` array at each stage of the conversation.
5. **Continue the conversation**: The API will automatically determine the next most relevant question based on previous answers, or you can specify the next question using `next_question_handle`.

**Example conversation flow**

```javascript
const TRACKER_ID = 'YOUR_TRACKER_ID'; 
const ASSISTANT_HANDLE = 'Webinar Guitars';
const ASSISTANT_VERSION = -1;
const API_ENDPOINT = 'https://live.luigisbox.com/v1/assistant';
const USER_ID = 'some_user_id';

let steps = []; // This array will store the history of the conversation.

// Initial API call to start the conversation
async function startConversation() {
    const url = `${API_ENDPOINT}?tracker_id=${TRACKER_ID}&assistant_handle=${ASSISTANT_HANDLE}&user_id=${USER_ID}`;
    const payload = {
        assistant_version: ASSISTANT_VERSION,
        steps: [] // Sending an empty array
    };

    const response = await axios.post(url, payload);
    renderQuestion(response.data); 
}

function handleOptionClick(questionHandle, selectedOption) {
    // 1. Record the answer by adding it to our state array
    steps.push({
        question_handle: questionHandle,
        option_handles: [selectedOption.option_handle] // API expects an array
    });

    // 2. Get the handle for the next question from the selected option
    const nextQuestionHandle = selectedOption.next_question_handle;

    // 3. Call the API again with the updated steps and the next question handle
    callAssistantAPI(nextQuestionHandle);
}

async function callAssistantAPI(nextQuestionHandle = null) {
    const url = `${API_ENDPOINT}?tracker_id=${TRACKER_ID}&assistant_handle=${ASSISTANT_HANDLE}&user_id=${USER_ID}`;
    const payload = {
        assistant_version: ASSISTANT_VERSION,
        steps: steps // The steps array now contains the user's history
    };

    // Add the handle to the payload to continue the conversation flow
    if (nextQuestionHandle) {
        payload.next_question_handle = nextQuestionHandle;
    }
    
    const response = await axios.post(url, payload);
    renderQuestion(response.data);
}

function renderQuestion(data) {
    if (data.question && data.question.options.length > 0) {
        // Render the question and options...
    } else {
        // No more questions, the conversation is over.
        displayCompletionMessage();
    }
}
```

### Price range display

The Assistant API automatically calculates price ranges for each option, helping users understand the price distribution of products that match each option. This is calculated using the field specified in the `price_field` parameter (defaults to `price_amount`).

## Best practices

### Design effective questions

Create questions that help users narrow down their choices effectively. Each question should:
- Address a specific aspect of the product selection process.
- Have options that meaningfully divide the product catalog.
- Present clear, concise option text.

### Track user journeys

Analyze how users navigate through your assistant to optimize the question flow and product recommendations. Use the analytics integration to:
- Identify common paths through the assistant.
- Detect questions where users frequently abandon the process.
- Measure conversion rates from assistant interactions.

### Show relevant results early

While the assistant is designed to guide users to the perfect product through a series of questions, showing relevant results early in the process can improve user satisfaction. The API returns matching products at each step, so consider:
- Displaying a selection of top matches alongside questions.
- Highlighting the diversity of available options.
- Showing how each answer changes the result set.

### Ensure mobile compatibility

Design your assistant interface to work well on mobile devices, where users may prefer a guided experience over traditional filtering.