API Documentation Restructuring Strategy
This document outlines the strategy to restructure all API endpoints (V1 and V2) to follow the "Indexing Hub" pattern. The goal is to strictly separate Technical Reference from How-to Guides/Concepts.

The Pattern (Based on Indexing Hub)
The "Indexing Hub" pattern consists of three distinct components:

Hub Page (source/<hub>/index.html.md.erb):

Purpose: Entry point, high-level overview.
Content: Introduction, list of available APIs (Choices), links to core concepts.
Concept & How-to Pages (source/<hub>/<topic>.html.md):

Purpose: Educational content, best practices, scenarios, detailed explanations.
Content: "How to filter", "Understanding Facets", "Data Modeling", "Best Practices".
Format: Narrative text, diagrams, code snippets for specific use cases.
API Reference Pages (source/<hub>/api/vX/<endpoint>.html.md.erb):

Purpose: Strict technical definition of the interface.
Content: Endpoint URL, HTTP Method, Parameters (Tables), Request Body Schema, Response Schema, Error Codes, Standard Examples.
Format: Structured, concise, minimal narrative.
Proposed File Structure
1. Search Hub (source/search/)
Current State: Monolithic api/v2/search.html.md.erb containing guides and reference.

Proposed Structure:

source/search/index.html.md.erb (Hub)
Guides:
source/search/filtering.html.md (Simple, Complex, Geo, Missing values)
source/search/facets.html.md (Static, Dynamic, Best practices)
source/search/sorting_and_pagination.html.md
source/search/query_understanding.html.md (Correction, Rewrite, Fixits)
source/search/best_practices.html.md (Performance, Field selection)
Reference:
source/search/api/v2/search.html.md.erb (Pure reference)
2. Autocomplete Hub (source/autocomplete/)
Proposed Structure:

source/autocomplete/index.html.md.erb (Hub)
Guides:
source/autocomplete/integration.html.md (JS integration, events)
source/autocomplete/features.html.md (Trending queries, Top items concepts)
Reference:
source/autocomplete/api/v2/autocomplete.html.md.erb
source/autocomplete/api/v2/top_items.html.md.erb
source/autocomplete/api/v2/trending_queries.html.md.erb
3. Recommender Hub (source/recommendations/)
Proposed Structure:

source/recommendations/index.html.md.erb (Hub)
Guides:
source/recommendations/models.html.md (Explanation of different models)
source/recommendations/integration.html.md
Reference:
source/recommendations/api/v2/recommendations.html.md.erb
4. Analytics Hub (source/analytics/)
Proposed Structure:

source/analytics/index.html.md.erb (Hub)
Guides:
source/analytics/concepts.html.md (Session, Identity, Attribution)
source/analytics/event_types.html.md (Detailed explanation of each event)
Reference:
source/analytics/api/v2/event_api.html.md.erb
5. Product Listing (PLP) Hub (source/plp/)
Proposed Structure:

source/plp/index.html.md.erb (Hub)
Guides:
source/plp/category_hierarchy.html.md
Reference:
source/plp/api/v2/product_listing.html.md.erb
Error Handling Strategy
To ensure consistency, all API Reference pages will follow a strict "Error Handling" section format:

Section Title: ## Error Handling
Intro: "The API uses standard HTTP status codes to indicate the success or failure of a request. All error responses are returned as structured JSON objects."
Status Code Table:
Columns: HTTP Status, Description.
Standard Codes: 400, 401/403 (if auth), 404, 429, 500, 503, 504.
JSON Error Example:
A standard JSON block showing the type, reason, and optional caused_by structure.
Example:

## Error Handling
| HTTP Status | Description |
|:---|:---|
| **400 Bad Request** | Malformed input or missing required parameters. |
| **504 Gateway Timeout** | The request took too long to process. |
```json
{
  "type": "malformed_input",
  "reason": "incorrect parameters provided"
}
Migration Plan
The migration will be executed iteratively, one hub at a time. We will preserve the original files until explicitly instructed to remove them.

Phase 1: Autocomplete Hub
Create Hub Page: source/autocomplete/index.html.md.erb.
Create Guides: Extract "Trending Queries" and "Top Items" concepts into guide pages.
Create Reference: Ensure source/autocomplete/api/v2/ contains pure reference pages.
Update API Switcher: Ensure data/api.yml (or equivalent) reflects the new structure for Autocomplete.
Commit: Verify and commit changes for this hub.
Phase 2: Search Hub
Create Hub Page: source/search/index.html.md.erb.
Create Guides: Extract filtering, facets, sorting, and query understanding into guide pages.
Create Reference: Ensure source/search/api/v2/search.html.md.erb is pure reference.
Update API Switcher: Update data source.
Commit: Verify and commit.
Phase 3: PLP Hub
Create Hub Page: source/plp/index.html.md.erb.
Create Guides: Extract category hierarchy guide.
Create Reference: Ensure source/plp/api/v2/ is pure reference.
Commit: Verify and commit.
Phase 4: Recommender & Analytics Hubs
Follow the same pattern: Hub -> Guides -> Reference -> Commit.
API Switcher Logic
The _api_switcher.html.erb partial relies on data.api.services to determine available versions.

Action: We need to verify data/api.yml (or similar data file) to ensure it correctly maps the new V2 endpoints and links.
Note: The switcher logic currently seems to be commented out in some places or conditional. We must ensure it is active and pointing to the correct new V2 URLs.