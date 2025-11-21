1. Technical details (API & Auth)
Endpoints: Which specific IdoSell Admin API endpoints does our integration consume to fetch product and category data?

system/shopsData
system/currencies
products/categories
products/categoriesIdosell
products/marketing/promotion
products/opinions/opinions
products/products/get
menu/menu

Authentication: How is the API Key passed in the request headers? (I need this to document troubleshooting steps for clients).

As documented here: https://idosell.readme.io/v3.0/docs/access-to-the-api
API Access Key is put in the X-API-KEY header of the request

Mechanism: Does the integration use a polling mechanism (pull) or webhooks (push) to detect changes?

We are not using webhooks at the moment.

Frequency: What is the exact synchronization schedule/frequency (Is it every 3 hours like Magento)?

This is adjustable. The default is 3.


Incremental updates: Do we fetch only modified products (delta sync) during standard updates, or do we reload the full catalog every time?

There’s no partial sync for Idosell, so we are reloading the full catalog every time.

Pagination: How does the integration handle pagination for large catalogs to avoid timeouts or rate limits?
We are using the built-in mechanism of idosell for pagination. We are fetching 100 products in a single request.



2. Data mapping & scope
Attributes: Does the integration automatically ingest all available product parameters from IdoSell, or is there a defined allow-list of attributes we sync?
We are fetching all parameters from “productParameters” for a selected language. We are skipping all parameters with “export” (case insensitive) in its name (googleExport).


Variants: How does the system handle parent/child relationships (e.g., sizes/colors)? Are they grouped under one ID or treated as individual simple products?

By default, the synchronization creates variants grouped under one master. An optional behavior is to have the master product itself in LBX is an artificial one and store the idosell master product as one of its variants (because LBX variant search never returns the master product).

Images: Does the sync pull the original image URL or a specific resized version?

We are storing all image URLs. The image_link attribute holds the first value from productImages -> productImageSmallUrl.

Hidden/Inactive Products: Do we strictly respect IdoSell's visibility settings? If a product is hidden but accessible via direct link, is it indexed?

We are only fetching products with productIsVisible: "y". By default, we are also fetching only those menu categories, which are not hidden (but this is adjustable).

3. Client configuration & workflow
UI availability: Is the "IdoSell setup" form in the dashboard visible to the client for self-service, or is it restricted to internal support staff (can the clients insert the API keys themselves or do they need support)?
They need support
Multi-language/multi-store: If a client has a single IdoSell domain with multiple languages, does one integration instance handle all of them, or do we need to configure a separate Luigi's Box site for each language?
We need to configure a separate site for each language

Multi-currency: If a store sells in multiple currencies (e.g., EUR and USD), does Luigi's Box ingest both? Which price is used for search filtering?
We are storing all active currencies for every product. It’s up to integration to decide which one to use.
API Key rotation: What happens if a client regenerates their API Key in IdoSell? Does the integration break silently, or is there an alert?
It will start failing. I don’t think it’s covered by notifications.
Permission validation: What happens if a client provides an API Key with the wrong permissions (e.g., setting CMS to "Read only" instead of "Read/Write")? Does the system throw a specific error message immediately, or does it fail later during the sync?
We only need read permissions. It will start failing during the sync, there’s no immediate check.

