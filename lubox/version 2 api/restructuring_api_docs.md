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
Jira Integration & Rollout Plan
Epic: Create the v2 api pages and restructure the docs

We will organize the work into Stories (per Hub) and Tasks (per granular action). Each Task will correspond to a single commit to ensure traceability and easy rollback.

Story 1: Restructure Autocomplete Hub
Goal: Separate guides from reference and implement V2 structure for Autocomplete.

Task 1.1: Create Autocomplete Hub Page (source/autocomplete/index.html.md.erb).
Commit: feat(docs): create autocomplete hub page
Task 1.2: Extract "Trending Queries" Guide.
Commit: refactor(docs): extract trending queries guide
Task 1.3: Extract "Top Items" Guide.
Commit: refactor(docs): extract top items guide
Task 1.4: Refine Autocomplete V2 Reference (remove guides).
Commit: refactor(docs): refine autocomplete v2 reference
Task 1.5: Update API Switcher (data/api.yml) for Autocomplete.
Commit: config(docs): update api switcher for autocomplete
Story 2: Restructure Search Hub
Goal: Separate guides from reference and implement V2 structure for Search.

Task 2.1: Create Search Hub Page (source/search/index.html.md.erb).
Commit: feat(docs): create search hub page
Task 2.2: Extract "Filtering" Guide.
Commit: refactor(docs): extract filtering guide
Task 2.3: Extract "Facets" Guide.
Commit: refactor(docs): extract facets guide
Task 2.4: Extract "Sorting & Pagination" Guide.
Commit: refactor(docs): extract sorting and pagination guide
Task 2.5: Extract "Query Understanding" Guide.
Commit: refactor(docs): extract query understanding guide
Task 2.6: Refine Search V2 Reference.
Commit: refactor(docs): refine search v2 reference
Task 2.7: Update API Switcher for Search.
Commit: config(docs): update api switcher for search
Story 3: Restructure PLP Hub
Goal: Separate guides from reference and implement V2 structure for PLP.

Task 3.1: Create PLP Hub Page.
Commit: feat(docs): create plp hub page
Task 3.2: Extract "Category Hierarchy" Guide.
Commit: refactor(docs): extract category hierarchy guide
Task 3.3: Refine PLP V2 Reference.
Commit: refactor(docs): refine plp v2 reference
Task 3.4: Update API Switcher for PLP.
Commit: config(docs): update api switcher for plp
Story 4: Restructure Recommender & Analytics Hubs
Goal: Separate guides from reference and implement V2 structure for remaining services.

Task 4.1: Create Recommender Hub Page.
Commit: feat(docs): create recommender hub page
Task 4.2: Extract Recommender Guides.
Commit: refactor(docs): extract recommender guides
Task 4.3: Refine Recommender V2 Reference.
Commit: refactor(docs): refine recommender v2 reference
Task 4.4: Create Analytics Hub Page.
Commit: feat(docs): create analytics hub page
Task 4.5: Extract Analytics Guides.
Commit: refactor(docs): extract analytics guides
Task 4.6: Refine Analytics V2 Reference.
Commit: refactor(docs): refine analytics v2 reference
Task 4.7: Update API Switcher for remaining services.
Commit: config(docs): update api switcher for recommender and analytics
API Switcher Logic
The _api_switcher.html.erb partial relies on data/api.yml to determine available versions.

Action: We will verify and update data/api.yml in the final task of each Story to ensure the new structure is correctly reflected in the navigation.