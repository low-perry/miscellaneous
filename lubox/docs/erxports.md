# Content export

<span class="badge text-bg-success">GET</span> `https://live.luigisbox.com/v1/content_export`

The content export endpoint returns all objects (except of type `query`) stored in our catalog in no particular order. It returns a list of records identified by their canonical URLs (relative ones) along with their attributes and nested fields.

If you are only interested in certain types of records, you can use `requested_types` parameter to control what types are present in the output.

The results returned by this API endpoint are paginated. To get to the next page, use the `href` attribute in the `links` section, where `"rel": "next"`.
When you receive a response which contains no link with `"rel": "next"`, it means that there are no more pages to scroll and you have downloaded the full export.

- Output of the API is not sorted.
- This API is not designed for real-time consumption. If you wish to search within the catalog, use our autocomplete and search endpoints.
- You have 10 minutes to use the next page's link before it expires.

<%= partial "includes/hmac_notice" %>

## Query Parameters

Parameter | Description
--------- | -----------
`size` | Number of results in one response / page. Optional, with a default value of 300. Is limited to 500 if a greater value is requested.
`hit_fields` | Optional. A comma separated list of fields. Only these fields (in addition to record identifier) will be retrieved and present in results. If not provided, all fields will be present in results.
`requested_types` | Optional. A comma separated list of types. Only records of these types will be retrieved and present in results. If not provided, all types except `query` type will be present in results.

## Request Headers

<%= partial "includes/accept_encoding_request_header", locals: {endpoint: 'Content export endpoint'} %>


## Sample request

<%= partial "includes/code/examples", locals: {method: 'GET', auth: true, path: '/v1/content_export', payload: nil} %>

The above command returns JSON structured like this.

```json
{
  "total": 14256,
  "objects": [
    {
      "url": "/item/1",
      "attributes":{
        "title": "Super product 1",
        ...
      },
      "nested": [],
      "type": "item",
      "exact": true
    },
    ...
  ],
  "links": [
    {
      "rel": "next",
      "href": "https://live.luigisbox.com/v1/content_export?cursor=23937182663"
    }
  ]
}
```

## Tips

- Make sure that you are requesting only the fields that you want to export using `hit_fields` parameter. It is a much simpler and more efficient way than requesting all the fields and filtering only the relevant fields afterwards.
