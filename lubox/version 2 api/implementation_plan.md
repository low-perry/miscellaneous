Documentation Update Plan
Goal Description
Update the documentation to reflect new endpoint versions (V2) and other changes as requested by the user. The structure will follow the pattern established in the "indexing hub".

User Review Required
 Confirm the location of "Trending queries" (rename to search_suggestions?)
 Confirm the location of "Shopping assistant" documentation.
 Confirm if PLP should be V1 or V2 (User says "New endpoint", but directory exists).
Proposed Changes
Indexing Hub Pattern
The pattern seems to be:

source/<hub>/index.html.md.erb (Hub page)
source/<hub>/api/v1/<page>.html.md.erb
source/<hub>/api/v2/<page>.html.md.erb
Content Updates
Global: Disallow nested in nested. Update error messages.
Autocomplete
Location: source/autocomplete/
Changes:
Create source/autocomplete/api/v2/
Update parameters: user_id, client_id, personalize (bool), error on personalize without user_id.
Identity in response.
Limit size.
Enforce types parameter.
Document recommender as underlying mechanism (for Top Items?).
Top Items
Location: Likely under source/autocomplete/ or source/recommendations/? Need to verify.
Changes: Same as Autocomplete V2.
Trending Queries
Location: source/autocomplete/trending_queries.html.md.erb
Changes:
Keep name trending_queries (User request).
Move to source/autocomplete/api/v2/trending_queries.html.md.erb.
Search
Location: source/search/
Changes:
Create source/search/api/v2/
Update parameters: user_id, client_id, personalize, error on personalize without user_id.
Require type filter.
Identity in response.
PLP
Location: source/plp/
Changes:
Check source/plp/api/ content.
Create source/plp/api/v1/ (if not exists) or v2/.
f_plp?
category_path -> primary_category_path.
Recommender
Location: source/recommendations/
Changes:
Create source/recommendations/api/v2/
item_ids -> identities
blacklisted_item_ids -> blacklisted_identities
user_id -> auth_user_id & device_user_id
recommender_client_identifier -> placement_id
recommendation_type -> model
Identity in response.
Analytics
Location: source/analytics/
Changes:
Create source/analytics/api/v2/
user_id, client_id
url -> identity
Slim down attribute list.
recommendation_id -> list_guid
pv/impression
AB test attributes.
resource_identifier
id, user_id not required.
Shopping Assistant
Location: source/search/shopping_assistant.html.md.erb
Changes: Unify error handling.
Summary of Changes Page
Create source/summary_of_changes.html.md.erb.
Other
f_must -> f_and, f_or
Unify URL pattern /v1/service vs service/v1 (User says "Unify URL pattern /v1/service vs. service/v1", need to check which one is preferred. Indexing uses indexing/api/v1, so likely service/v1).
List of services with no version.
Errors in JSON.
408 -> 504.
API guidelines.
Verification Plan
Automated Tests
Run bundle exec middleman build to ensure no build errors.
Check for broken links.
Manual Verification
Inspect generated HTML files for correct content and structure.
Verify links between hubs and versioned pages.