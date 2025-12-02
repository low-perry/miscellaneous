---
layout: platform_integration_layout
title: Luigi's Box IdoSell Data Synchronization Guide
---

## Overview

Luigi's Box automatically synchronizes your IdoSell product catalog to power search, recommendations, and analytics. This guide explains what data is synced, how the synchronization works, and how to verify your data status.

## What Data is Synchronized

### Product Information

Luigi's Box syncs comprehensive product data from your IdoSell store. We fetch all parameters from `productParameters` for the selected language, excluding those marked for export (e.g., `googleExport`).

| Data Type | What's Included | Purpose |
|-----------|-----------------|---------|
| Basic info | Name, description, short description | Product identification and display |
| Pricing | All active currencies for every product | Price-based filtering and sorting |
| Images | All image URLs (thumbnail is automatically selected) | Visual search results and recommendations |
| Categories | Category structure and hierarchy | Category-based filtering and navigation |
| Inventory | Stock availability | Display in-stock products only |
| Attributes | Sizes, colors, and all custom parameters | Faceted search and filtering |
| Variants | Variant options (grouped under master product) | Detailed product selection |

### Synchronization Logic

- **Variants**: By default, variants are grouped under one "master" product ID.
- **Visibility**: Only products with `productIsVisible: "y"` are indexed. Hidden products are excluded to ensure search results are accurate.
- **Images**: We store all image URLs. The `image_link` attribute uses the first value from `productImageSmallUrl`.

## How Synchronization Works

### 1. Initial Full Sync

- **When**: Immediately after our support team configures your integration.
- **What Happens**:
  - Luigi's Box connects to the IdoSell API using your API Key.
  - We download your entire product catalog in batches (100 products per request).
  - We build the searchable index in the Luigi's Box system.
- **Duration**: The initial sync time depends on your catalog size. Because we must fetch 100 products at a time, very large catalogs (50,000+ items) may take several hours to complete.

### 2. Ongoing Updates (Automatic Sync)

- **Frequency**: Automatic, every 3 hours (default).
- **What Happens**:
  - Luigi's Box periodically polls your IdoSell store for the full product list.
  - **Full Reload**: Unlike some platforms, IdoSell does not support "partial" updates for this integration type. We reload the full catalog during every cycle to ensure 100% accuracy.
  - **Latency**: Changes made in IdoSell (e.g., price change, new product) will appear in search after the next 3-hour cycle completes.
- **Technical Note**: We do not use webhooks. This is a strict polling mechanism.

## Verifying Your Data

Since IdoSell is a SaaS platform, you cannot run SQL queries to check your database directly. However, you can verify exactly what data IdoSell is sending to Luigi's Box by using the IdoSell API directly.

### Method 1: Check in the Luigi's Box Dashboard

The easiest verification is within our tool:

1. Log in to Luigi's Box.
2. Go to **Catalog → Browser**.
3. **Check Product Count**: Does the number of products match your IdoSell dashboard?
4. **Check Recent Changes**: If you added a product >3 hours ago, search for it here. If it's missing, the sync might be failing.

### Method 2: Verify Raw Data via IdoSell API (Advanced)

If you suspect data is missing (e.g., a specific attribute), you can inspect the raw data IdoSell is providing.

#### Prerequisites:
- Your IdoSell Shop URL
- Your API Key (from the integration setup)

#### Steps:
1. Go to the [IdoSell API Documentation](https://api.idosell.com/docs) for `products/products/get`.
2. Use the "Try It" button (or use curl in your terminal).
3. **Headers**:
   - `X-API-KEY`: Paste your API Key here.
4. Execute Request: This will return the raw JSON data for your products.

#### What to look for:
- Search the JSON response for the missing product's ID.
- Check the `productIsVisible` field. If it is `"n"`, Luigi's Box will not index it.
- Check the `productParameters` section to see if your custom attributes are present.

## Troubleshooting

### Issue 1: Integration Stopped Working (Silent Failure)

- **Symptoms**: Search results are outdated (old prices, old stock). New products aren't appearing after 24 hours.
- **Common Cause**: API Key Rotation. If you regenerated your API Key in the IdoSell admin panel, the old key Luigi's Box uses is now invalid. There is no automatic notification for this failure.
- **Solution**: Immediately email [support@luigisbox.com](mailto:support@luigisbox.com) with your new API Key to restore synchronization.

### Issue 2: "Permission Denied" Errors

- **Symptoms**: Initial sync fails immediately. Support tells you they cannot connect.
- **Common Cause**: Your API Key lacks the specific Read/Write permissions required.
- **Solution**:
  1. Log in to IdoSell.
  2. Go to **API → Access Keys to Admin API**.
  3. Edit your key and ensure:
     - CMS: Read and write (odczyt i zapis)
     - PIM: Read and write (odczyt i zapis)
     - System: Read only (tylko odczyt)

### Issue 3: Wrong Products in Multi-Language Store

- **Symptoms**: English search results show Polish product names (or vice-versa).
- **Common Cause**: Misconfiguration of multi-site setup.
- **Solution**: Each language requires a separate Luigi's Box site configuration. Ensure you have provided support with the specific URLs/languages for every view you want to support. Do not try to use one script for all languages.

## Support Resources

- **Luigi's Box Support**:
  - Email: [support@luigisbox.com](mailto:support@luigisbox.com)
  - Support Portal: [https://help.luigisbox.com/](https://help.luigisbox.com/)