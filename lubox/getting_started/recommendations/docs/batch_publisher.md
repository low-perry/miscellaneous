# Recommendation batch publisher

Luigi's Box typically provides real-time recommendations through the Recommender API. However, for situations requiring
recommendations to be generated for a large, defined user set at a scheduled time – for example, sending personalized
recommendations via newsletter – Luigi's Box offers a Recommendation batch publisher service. This service can automatically
create personalized recommendations in batches per the configured schedule.

An important feature prerequisite is the usage of Customer IDs in the analytics collection process. Customer IDs are identifiers of logged-in users. Please check our Events API documentation to [learn more about how to track Customer IDs](https://docs.luigisbox.com/analytics/api.html#event-api-impression-event).
Based on collected user data, batch publisher is later able to recommend personalized content for requested users.

The process for defining, generating and retrieving a batch of published recommendations consists of the following steps:

- Step 1 - The client defines set of users to be recommended for
- Step 2 - Luigi's Box sets up recommendation logics based on the client's preferences
- Step 3 - Luigi's Box sets up a recommendation batch publisher schedule based on the client's preferences
- Step 4 - Luigi's Box prepares and publishes recommendations at the scheduled time
- Step 5 - The integrated platform retrieves the generated recommendations
- Step 6 - The integrated platform distributes recommendations to customers
- Step 7 - Luigi's Box / client collects analytics data

# Step 1 - The client defines set of users to be recommended for

Before a batch of recommendations can be prepared, the client needs to define the set of users to be recommended for. Typically the client defines a set of customer_ids depending on the used integration.
Another option is that Luigi's Box will recommend for all known users with customer_id active in the past 6 months.

## SmartEmailing integration

For SmartEmailing integration, Luigi's Box retrieves the user list from
[SmartEmailing API](https://app.smartemailing.cz/docs/api/v3/index.html#api-Customfields-Get_Customfield_values) automatically.
A client needs to specify to Luigi's Box the field in which the user identifier is stored.

## Klaviyo Integration

Klaviyo has defined a [profiles API](https://developers.klaviyo.com/en/reference/get_profiles) that allows retrieving
user data stored in the Klaviyo database. In order to match Klaviyo's users with user profiles saved in
the Luigi's Box database, the Luigi's Box `customer_id` needs to be saved in the Klaviyo user profile. The `customer_id`
can be saved in any attribute under the `attributes.properties` structure. For more information about `customer_id`, see the documentation [here](https://docs.luigisbox.com/analytics/api.html#event-api-impression-event)

## Other integrations

For integrating with other platforms, use
[Batching users API](#step-1-the-client-defines-set-of-users-to-be-recommended-for-other-integrations-batching-users-api)
to upload the set of users.

### Batching users API

<span class="badge text-bg-success">POST</span> `https://live.luigisbox.com/v1/recommender/batching/<TRACKER_ID>/users`

<%= partial "includes/hmac_notice" %>

#### Request Headers
Header | Content
------ | -------
Content-Type | multipart/form-data; boundary=sk13jk8sd823j9

**Keep in mind that when the HMAC token is generated, the provided `Content-Type` should
be `multipart/form-data`, without the boundary.**

#### Request body
The request body is a file containing user ids. File format details are described in the section
[Import file format](#step-1-the-client-defines-set-of-users-to-be-recommended-for-other-integrations-batching-users-api-import-file-format).

Form | Content
---- | -------
file | @"/path/to/file.json"

For more information see [openapi.yaml](/assets/openapi/batching-users-api.yaml).

#### Restrictions

1. Uploading a new file will remove existing users for the specified tracker id.
2. The size of any uploaded file cannot be larger than 300 MB. Files exceeding this limit will be rejected. Reach out to
   support@luigisbox.com if you need to upload larger files.
3. An uploaded file must fully transmit within 10 minutes. If the upload takes longer than the 10-minute timeout limit,
   an error will be returned and the upload canceled. If you encounter issues while uploading, reach out to
   support@luigisbox.com.

#### Import file format

The import file must be in the JSON Lines or CSV format. It has one mandatory attribute `auth_user_id`.

Attribute | Description
--------- | -----------
`auth_user_id` <span class="required">required</span> | Id of the user (previously user_id, name still supported).

Example of an import file in the JSON Lines format:

```jsonlines
{"auth_user_id": "u123"}
{"auth_user_id": "u234"}
{"auth_user_id": "u345"}
```

Example of an import file in the CSV format. File should not contain the header, rows contain field `auth_user_id`:

```plaintext
"u123"
"u234"
"u345"
```

# Step 2 - Luigi's Box sets up recommendation logics based on the client's preferences

Client defines business requirements, based on which Luigi's Box prepares recommendation logics.

# Step 3 - Luigi's Box sets up a recommendation batch publisher schedule based on the client's preferences

Client defines how often recommendations for each logic should be generated.

# Step 4 - Luigi's Box prepares and publishes recommendations at the scheduled time

Using the recommendation batch publisher service, Luigi's Box prepares and publishes the recommendations according
to the configured recommendation logics and schedule. However, certain integrations may require providing additional data
for the batch generation process.

## SmartEmailing integration

Client provides Luigi's Box username and API key for access to SmartEmailing API.

## Klaviyo integration

To access and modify user profiles via the Klaviyo API, we require a private key with the following permissions:

1. lists:read
2. lists:write
3. profiles:read
4. profiles:write

For more information about private keys, see the documentation [here](https://developers.klaviyo.com/en/docs/authenticate_#private-key-authentication)

# Step 5 - The integrated platform retrieves the generated recommendations

For each user, recommendations contain a personalized list of results (typically products) for each recommender logic.
Recommendations are generated for users with interaction data from the past 6 months. In addition to batch of
personalized recommendation sets for defined users, Luigi's Box generates also 1 generic set of non-personalized
recommendations. It can be found under the key `default`. It can be used for recommendation to new users without browsing
history, users without cookie consent granted, etc.

Batches of recommendations are generated at the highest set frequency. For example, if `recommender_logic_1` is set
to be generated biweekly and `recommender_logic_2` is set for weekly generation, Luigi's Box will generate
recommendations for both logics on a weekly basis.

Format of recommendations and way of retrieving data differs depending on the integration. Please note that the `url` attribute tracking part contains `recommendation_id` generated by the recommender. This identifier is utilized by the analytics collector (refer to [Step 7](#step-7-luigi-39-s-box-client-collects-analytics-data)).

## SmartEmailing integration

For SmartEmailing integration, the batch recommendation results in JSON format are uploaded directly to
[SmartEmailing API](https://app.smartemailing.cz/docs/api/v3/index.html#api-Generic_collections).
Luigi's Box creates a collection to which recommendations are uploaded.

### Published recommendations JSON format

```json
{
  "id": "u123",
  "data": {
    "mail-recommender-1": [
      {
        "id": "product1-id",
        "url": "https://www.client-xyz.com/product1-url/?recommendation_id=1234abcd-7425-4fee-bed2-214dwxyz7890",
        "title": "Product 1",
        "image_link": "https://www.client-xyz.com/product1-img.jpg/"
      },
      ...
    ]
  },
  ...
}
```

## Klaviyo integration

Generated recommendations are uploaded directly to user profiles via the [Klaviyo API](https://developers.klaviyo.com/en/reference/spawn_bulk_profile_import_job).
They are stored in a JSON format under the `attributes.properties` structure of individual profiles.

As said before, Luigi's Box generates one set of non-personalized recommendations and saves it under
the `default` profile. A Klaviyo profile is considered to be a default one if its `attributes.external_id` attribute
is equal to `default`. If there is no such profile present, Luigi's Box automatically creates one.

### Published recommendations JSON format

The following snippet specifies a user profile with generated recommendations under the key `mail-recommender-1`.

```json
{
    "data": {
        "type": "profile",
        "id": "01GDDKASAP8TKDDA2GRZDSVP4H",
        "attributes": {
        "email": "sarah.mason@klaviyo-demo.com",
        ...
        "properties": {
            "mail-recommender-1": [
                {
                "id": "product1-id",
                "url": "https://www.client-xyz.com/product1-url/?recommendation_id=1234abcd-7425-4fee-bed2-214dwxyz7890",
                "title": "Product 1",
                "image_link": "https://www.client-xyz.com/product1-img.jpg/"
                },
                ...
            ]
        }
        },
        ...
    }
}
```

## Other integrations

For integrating with a platform other than SmartEmailing, contact Luigi's Box to obtain a link for accessing
the generated recommendations in an XML format.

### Published recommendations XML format

Published recommendations have the following structure where one line contains recommendations for one user:

```xml
<?xml version='1.0' encoding='UTF-8'?>
<users>
    <user> ... </user>
    <user> ... </user>
    <user> ... </user>
</users>
```

Detailed structure of recommendations for one user:

```xml
<?xml version='1.0' encoding='UTF-8'?>
<users>
    <user>
       <auth_user_id>u123</auth_user_id>
       <data>
           <_metadata>
               <updated_at>2024-08-28T10:00:00</updated_at>
           </_metadata>
           <recommendations>
               <recommendation>
                   <recommendation_type>mail-recommender-1</recommendation_type>
                   <results>
                       <result>
                           <id>product1-id</id>
                           <url>https://www.client-xyz.com/product1-url/?recommendation_id=1234abcd-7425-4fee-bed2-214dwxyz7890</url>
                           <title>Product 1</title>
                           <image_link>https://www.client-xyz.com/product1-img.jpg/</image_link>
                       </result>
                       <result>
                           <id>product2-id</id>
                           <url>https://www.client-xyz.com/product2-url/?recommendation_id=1234abcd-7425-4fee-bed2-214dwxyz7890</url>
                           <title>Product 2</title>
                           <image_link>https://www.client-xyz.com/product2-img.jpg/</image_link>
                       </result>
                   </results>
               </recommendation>
               <recommendation>
                   <recommendation_type>mail-recommender-2</recommendation_type>
                   <results>
                       <result>
                           <id>product3-id</id>
                           <url>https://www.client-xyz.com/product3-url/?recommendation_id=wxyz7890-7425-4fee-bed2-214d1234abcd</url>
                           <title>Product 3</title>
                           <image_link>https://www.client-xyz.com/product3-img.jpg/</image_link>
                       </result>
                       <result>
                           <id>product4-id</id>
                           <url>https://www.client-xyz.com/product4-url/?recommendation_id=wxyz7890-7425-4fee-bed2-214d1234abcd</url>
                           <title>Product 4</title>
                           <image_link>https://www.client-xyz.com/product4-img.jpg/</image_link>
                       </result>
                   </results>
               </recommendation>
           </recommendations>
       </data>
    </user>
</users>
```

# Step 6 - The integrated platform distributes recommendations to customers

It is important to stress that Luigi's Box only generates batch recommendations and does not handle actual delivery of
the recommendations to end customers. In fact, email addresses or any other contact data are not even collected in
the Luigi's Box database. This responsibility is delegated to the integrated platform.

# Step 7 - Luigi's Box / client collects analytics data

By default, Luigi’s Box analytics collector supports tracking of recommendations from batch publishers. This is possible because the URLs of generated recommendations contain the `recommendation_id` parameter (e.g., `https://www.client-xyz.com/product1-url/?recommendation_id=1234abcd-7425-4fee-bed2-214dwxyz7890`). Based on these URLs, Luigi’s Box analytics collector on the client’s web is able to collect user interactions with recommendations. The analytics dashboard (`https://app.luigisbox.com/sites/<TRACKER_ID>/recommenders/analytics`) then shows statistics of particular newsletter recommendations in the same manner as for other models.

In case of a custom analytics integration, please follow [Events API documentation](https://docs.luigisbox.com/analytics/api.html#event-api-impression-event) to pass the value of `recommendation_id` into the Impression analytics event.
