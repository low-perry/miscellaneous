---
layout: platform_integration_layout
title: Luigi's Box IdoSell Data Synchronization Guide
---

# Overview

Luigi's Box automatically synchronizes your IdoSell product catalog to power search, recommendations, and analytics. Unlike some other platforms that use "delta" updates, the IdoSell integration performs a comprehensive sync to ensure your data is always 100% consistent.

This guide explains what data is synced, how the synchronization process works, and how to troubleshoot common issues.

## What Data is Synchronized

### Product Information

Luigi's Box syncs comprehensive product data from your IdoSell store via the Admin API.

| Data Type      | What's Included                                 | Purpose                                                        |
|----------------|-------------------------------------------------|----------------------------------------------------------------|
| Basic info     | Name, description, parameters                   | Product identification and display                             |
| Pricing        | Prices in all active currencies                 | Price-based filtering and sorting for multi-currency stores     |
| Images         | All image URLs (primary mapped from productImageSmallUrl) | Visual search results and recommendations                      |
| Categories     | Category structure and Menus                    | Category-based filtering and navigation                         |
| Attributes     | All productParameters (except export-specific ones) | Faceted search and filtering                                   |
| Variants       | Sizes, colors, and variations                   | Grouped under master products for clean search results          |
| Visibility     | Active status (productIsVisible: "y")          | Ensures hidden products do not appear in search                 |

### Filtering & Scope

To keep your search results clean, the integration applies specific logic during the sync:

- **Visibility:** Only products marked as visible (`productIsVisible: "y"`) are indexed.
- **Hidden Categories:** By default, hidden menu categories are excluded from the sync.
- **Export Parameters:** Technical parameters containing the word "export" (case-insensitive, e.g., `googleExport`) are automatically skipped to avoid cluttering your filters.

### Multi-Language & Multi-Currency

- **Languages:** Each language version of your store is treated as a separate "Site" in Luigi's Box and is synced independently.
- **Currencies:** The integration fetches all active currencies for every product. This allows Luigi's Box to support multi-currency search if your frontend requires it.

## How Synchronization Works

### The Sync Cycle (Polling)

The integration uses a polling mechanism to fetch data. It does not use webhooks or "push" notifications.

- **Frequency:** Automatic, running approximately every 3 hours.
- **Mechanism:** Full Catalog Reload.

#### Full Catalog Reload vs. Delta Sync

Unlike some integrations that only fetch "what changed" (delta sync), the IdoSell integration performs a full catalog reload during every cycle.

**Why is this important?**
- **Consistency:** It ensures that Luigi's Box always has an exact mirror of your current IdoSell data, preventing "drift" where old data might get stuck.
- **Deletions:** If you delete a product in IdoSell, it simply disappears from the next full sync, removing it from search automatically.

{{ callout('note', 'Because the integration reloads the full catalog, the sync duration depends on the size of your inventory. We handle pagination automatically (fetching 100 products per request) to ensure stability.') }}

### Technical Details (API Usage)

This section is for developers or technical teams debugging the connection.

#### API Endpoints Used

Luigi's Box connects to your IdoSell Admin API and consumes specific endpoints to build the search index:

- **Store Data:** `system/shopsData`, `system/currencies`
- **Structure:** `products/categories`, `products/categoriesIdosell`, `menu/menu`
- **Catalog:** `products/products/get` (Main product data)
- **Enrichment:** `products/marketing/promotion`, `products/opinions/opinions`

#### Authentication & Headers

The integration authenticates using the API Key generated in your IdoSell settings.
- **Header:** `X-API-KEY`

**Permissions Required:**
- System: Read only
- CMS & PIM: Read and write (required for full data access permissions)

## Common Sync Scenarios

### Scenario 1: Adding New Products

**Your Action:**
You add 10 new products in IdoSell and set `productIsVisible` to "yes".

**What Happens:**
- The products will not appear immediately.
- They will be detected during the next scheduled 3-hour sync cycle.
- Once the cycle completes, they appear in search results.

### Scenario 2: Changing API Keys

**Your Action:**
You regenerate your API Key in the IdoSell panel for security reasons.

**What Happens:**
- The sync will fail silently.
- Luigi's Box will continue to attempt using the old key, which is now invalid.

**Fix:** You must immediately contact Luigi's Box support with the new API Key to restore synchronization.

### Scenario 3: Hiding Products

**Your Action:**
You change a product's visibility to "hidden" or delete it.

**What Happens:**
- The product remains in search until the next 3-hour sync cycle begins.
- During the sync, Luigi's Box sees the product is missing or hidden in the full export.
- The product is removed from the search index.

## Verifying & Troubleshooting

If you suspect your catalog is not syncing correctly, follow these steps:

### Step 1: Check the Last Sync Time
- Log in to your Luigi's Box Dashboard.
- Check the catalog status. If the last sync was more than 4 hours ago, there may be an issue.

### Step 2: Verify API Permissions
- In IdoSell, go to Settings → API → Access.
- Ensure the key used for Luigi's Box has:
  - System: Read only
  - CMS: Read and write
  - PIM: Read and write

{{ callout('warning', 'Permission Errors: If permissions are incorrect (e.g., set to "No access"), the sync will fail. IdoSell does not always provide an immediate error alert, so the sync may simply stop working.') }}

### Step 3: Check "Visible" Status
- Luigi's Box strictly respects the `productIsVisible` flag.
- If a product exists in IdoSell but is missing in Luigi's Box, verify that it is actually visible on your storefront. If IdoSell considers it hidden, we will not index it.

### Step 4: Contact Support
- If you have verified the permissions and the product visibility, but data is still not appearing after 4+ hours, please contact support@luigisbox.com.