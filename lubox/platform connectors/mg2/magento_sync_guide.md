# Luigi's Box Magento2 Data Synchronization Guide

## Overview

Luigi's Box automatically synchronizes your Magento product catalog to power search, recommendations, and analytics. This guide explains what data is synced, how synchronization works, and what to expect.

## What Data is Synchronized

### Product Information

Luigi's Box syncs comprehensive product data from your Magento store:

| Data Type | What's Included | Purpose |
|-----------|----------------|---------|
| **Basic info** | SKU, name, description, short description | Product identification and display |
| **Pricing** | Regular price, special price, final price, currency | Price-based filtering and sorting |
| **Images** | Product images, thumbnails, gallery | Visual search results and recommendations |
| **Categories** | Category names, hierarchy, URLs | Category-based filtering and navigation |
| **Inventory** | Stock quantity, stock status, availability | Display in-stock products only |
| **Attributes** | Color, size, brand, Custom attributes | Faceted search and filtering |
| **URLs** | Product page links | Direct navigation to products |
| **Visibility** | Catalog visibility, status (enabled/disabled) | Control what's searchable |

### Product Types Supported

- **Simple products** - Standard standalone products  
- **Configurable products** - Products with variants (size, color, etc.)  
- **Grouped products** - Multiple products sold together  
- **Bundle products** - Customizable product bundles  
- **Virtual products** - Non-physical products (services, subscriptions)  
- **Downloadable products** - Digital downloads  

### Multi-Store & Multi-Warehouse

- **Multiple store views** - Sync different catalogs per store/language
- **Multi-source inventory** - Track stock across multiple warehouses
- **Regional availability** - Show products available in specific locations

## How Synchronization Works

### 1. Initial Full Sync

**When:** Immediately after activating the integration

**What Happens:**

1. Luigi's Box connects to your store via secure API
2. Retrieves all enabled and visible products
3. Downloads product details via GraphQL queries
4. Builds searchable index in Luigi's Box system

**Duration:**

Sync time depends on catalog size, product complexity, and server performance. Typical ranges:

- Small catalog (< 1,000 products): <time_range> minutes
- Medium catalog (1,000-10,000 products): <time_range> minutes
- Large catalog (10,000-50,000 products): <time_range> hours
- Very large catalog (50,000+ products): <time_range> hours

**Note:** Your store remains fully operational during sync. Customers won't notice any impact.

**Technical Note:**  
The extension provides GraphQL API endpoints that Luigi's Box queries to retrieve product data. Actual sync performance may vary based on catalog size, network conditions, server resources, and Luigi's Box service load.

### 2. Ongoing Updates (Incremental Sync)

**Frequency:** Configurable in Luigi's Box Web Application under **Catalog → Settings → Feeds Planning** (default: 8 times per day)

**What Happens:**

- Luigi's Box periodically checks for changes
- Detects new, updated, or deleted products
- Updates only changed items (not full re-sync)
- Changes typically appear in search within a few hours of being made

**Changes Detected:**

Luigi's Box compares your current catalog with the previous sync to identify:

- New products added since last sync
- Product information updates (name, description, attributes)
- Price or inventory changes
- Visibility changes (enabled/disabled, search visibility)
- Deleted products

**Technical Note:**  
The extension does not implement webhooks in version 1.3.1. Luigi's Box uses a polling mechanism (periodic API calls) to detect changes. The polling schedule is configured in Luigi's Box Web Application under **Catalog → Settings → Feeds Planning** and can be adjusted based on your specific use case.

### 3. Manual Sync

> **Manual Sync Limitation**  
> The "Run Feed Now" button can only be used **once every 24 hours**. For more frequent updates, adjust the automatic sync schedule in **Catalog → Settings → Feeds Planning** instead.

**How to Trigger:**

1. Log into Luigi's Box Web Application
2. Navigate to **Catalog → Settings → Feeds Planning**
3. Click **Run Feed Now** button
4. Monitor progress in dashboard

**Use Cases:**

- After bulk product imports
- To immediately reflect critical changes
- Troubleshooting sync issues
- After store configuration changes
- Before major sales events

## Synchronization Methods

### GraphQL API (Primary Method)

Luigi's Box uses Magento's GraphQL API for efficient data retrieval.

**Advantages:**

- Retrieves only requested data (no overhead)
- Single request for complex product structures
- Handles configurable products elegantly
- Built-in pagination for large catalogs
- Fast and efficient

**Example Query:**
Luigi's Box queries for product SKU, name, price, images, categories, stock, and custom attributes in a single optimized request.

### Custom REST Endpoints

Luigi's Box extension provides specialized endpoints for specific data needs:

#### 1. Script Injection Endpoint

**Purpose:** Automatically adds tracking script to your store  
**Endpoint:** `/rest/V1/insert-script`  
**Used During:** Initial activation  

#### 2. Parent-Child Relationships

**Purpose:** Links product variants to parent products  
**Endpoint:** `/rest/V1/parent-products-skus`  
**Used For:** Configurable, grouped, and bundle products  

## Authentication & Security

### OAuth 1.0a Authentication

All data synchronization uses industry-standard OAuth authentication:

- **Secure** - No passwords stored or transmitted
- **Encrypted** - All communication over HTTPS
- **Token-based** - Unique access token per Magento installation
- **Store-aware** - Single token accesses all store views <assumption>(Luigi's Box may specify store via API headers)</assumption>
- **Revocable** - Can disable access anytime from System → Integrations

### What Luigi's Box Can Access

**Allowed:**

- Product catalog (SKU, name, description, price, images)
- Categories and category structure
- Inventory levels and stock status
- Product attributes (color, size, brand, etc.)
- Store configuration (currency, timezone, URL)

**NOT Allowed:**

- Customer personal information (names, emails, addresses)
- Order history and purchase data
- Payment information
- Admin user accounts
- System passwords or keys

**How Multi-Store Access Works:**

The integration creates a single OAuth consumer and access token (stored in `oauth_consumer` and `oauth_token` tables). This token is tied to the Magento installation, not individual store views. <assumption>Luigi's Box may query different store views by specifying the `Store` header in GraphQL requests (e.g., `Store: default`, `Store: en_us`, `Store: fr_ca`), which is a standard Magento API feature. However, this behavior is not verified in the extension code.</assumption>

### Minimum Permissions Model

Luigi's Box requests **only** what's needed:

- No access to customer data
- No access to financial information
- No access to sensitive settings
- Read-only product catalog access

## Monitoring Data Sync

### Check Sync Status

**In Luigi's Box Dashboard:**

1. Log into Luigi's Box Web Application
2. Navigate to **Catalog → Analysis → Data Quality Checks**
3. Click **Run data quality check**

### What to Look For

<assumption>

**Healthy Sync:**

- Product count matches your catalog
- Last sync timestamp is recent
- No error messages
- Recent product changes are reflected

**Potential Issues:**

- Product count significantly lower than expected
- Last sync timestamp is outdated
- Error messages in dashboard
- Recently added products not appearing

</assumption>

### Verify Product Count in Magento (Advanced)

> ⚠️ **Database Access Warning**  
> Only run SQL queries if you're comfortable with database administration. Always use read-only credentials when possible and test queries on a staging environment first.

**Where to Run:**

- phpMyAdmin (web interface)
- MySQL Workbench (desktop client)
- Command line MySQL client
- Your preferred database management tool

**Method 1: Count All Enabled Products**

This query counts all products with status = "Enabled" (value = 1):

```sql
-- Count all enabled products
SELECT COUNT(*) as enabled_products
FROM catalog_product_entity cpe
JOIN catalog_product_entity_int cpei_status 
  ON cpe.entity_id = cpei_status.entity_id
WHERE cpei_status.attribute_id = (
    SELECT attribute_id 
    FROM eav_attribute 
    WHERE attribute_code = 'status' 
      AND entity_type_id = 4
) 
AND cpei_status.value = 1;  -- 1 = Enabled, 2 = Disabled
```

**Expected Result:** Should roughly match the product count in Luigi's Box dashboard.

**Method 2: Count Enabled AND Visible Products**

This query counts products that are both enabled AND visible in catalog/search:

```sql
-- Count enabled products that are visible in catalog and search
SELECT COUNT(*) as visible_products
FROM catalog_product_entity cpe
-- Join for product status
JOIN catalog_product_entity_int cpei_status 
  ON cpe.entity_id = cpei_status.entity_id
-- Join for product visibility
JOIN catalog_product_entity_int cpei_visibility 
  ON cpe.entity_id = cpei_visibility.entity_id
WHERE cpei_status.attribute_id = (
    SELECT attribute_id 
    FROM eav_attribute 
    WHERE attribute_code = 'status' 
      AND entity_type_id = 4
)
AND cpei_status.value = 1  -- Enabled
AND cpei_visibility.attribute_id = (
    SELECT attribute_id 
    FROM eav_attribute 
    WHERE attribute_code = 'visibility' 
      AND entity_type_id = 4
)
AND cpei_visibility.value IN (2, 3, 4);  
-- 2 = Catalog, 3 = Search, 4 = Catalog & Search
```

**Expected Result:** This count should match Luigi's Box more closely, as it filters for searchable products.

**Method 3: Breakdown by Product Type**

This query shows how many products of each type you have:

```sql
-- Count products by type
SELECT 
  cpe.type_id,
  COUNT(*) as product_count
FROM catalog_product_entity cpe
JOIN catalog_product_entity_int cpei_status 
  ON cpe.entity_id = cpei_status.entity_id
WHERE cpei_status.attribute_id = (
    SELECT attribute_id 
    FROM eav_attribute 
    WHERE attribute_code = 'status' 
      AND entity_type_id = 4
)
AND cpei_status.value = 1
GROUP BY cpe.type_id
ORDER BY product_count DESC;
```

**Example Output:**

```shell
type_id         | product_count
----------------|-------------
simple          | 4,523
configurable    | 1,234
bundle          | 89
grouped         | 45
virtual         | 12
```

**Method 4: Check Recently Modified Products**

This query shows products modified in the last 24 hours:

```sql
-- Products updated in last 24 hours
SELECT 
  cpe.sku,
  cpe.updated_at,
  cpe.type_id
FROM catalog_product_entity cpe
WHERE cpe.updated_at >= DATE_SUB(NOW(), INTERVAL 24 HOUR)
ORDER BY cpe.updated_at DESC
LIMIT 50;
```

**Use Case:** Verify that recent product changes are candidates for the next sync.

**Interpreting Discrepancies:**

If Luigi's Box shows fewer products than your database:

- Check product visibility settings (must be visible in catalog/search)
- Verify products are enabled (status = 1)
- Check if out-of-stock products are excluded (Luigi's Box configuration)
- Review multi-store configuration (are all stores syncing?)
- Check Luigi's Box dashboard for sync errors

If counts match but products don't appear in search:

- Wait for next scheduled sync
- Trigger manual sync (if available within 24-hour window)

## Common Sync Scenarios

### Scenario 1: Adding New Products

**Your Action:**

1. Add 10 new products in Magento admin
2. Set status to "Enabled"
3. Set visibility to "Catalog, Search"
4. Save products

**What Happens:**

- Luigi's Box detects new products on next scheduled sync
- Sync process automatically downloads new product data
- New products appear in search results
- Analytics begin tracking views and interactions

**Typical Timing:** Changes appear based on your configured sync schedule. Check **Catalog → Settings → Feeds Planning** for your sync frequency.

**To Speed Up:** Trigger manual sync using **Run Feed Now** button (limited to once per 24 hours).

### Scenario 2: Price Updates

**Your Action:**

1. Update prices for 50 products
2. Apply special prices (discounts)
3. Save changes

**What Happens:**

- Price changes detected on next sync cycle
- Only modified products re-synced (fast)
- Search results show updated prices
- Price filters update automatically

### Scenario 3: Out of Stock Products

**Your Action:**

1. Product inventory drops to 0
2. Stock status changes to "Out of Stock"

**What Happens:**

- Inventory change detected on next sync cycle
- Luigi's Box updates product availability
- Product hidden from search (configurable)
- You can enable "notify when back in stock"

**Configuration:** Control whether out-of-stock products appear in search via Luigi's Box dashboard

### Scenario 4: Bulk Import

**Your Action:**

1. Import 1,000 products via CSV
2. All products enabled and visible

**What Happens:**

- Next scheduled sync detects 1,000 new products
- May take 10-30 minutes to sync all
- Large imports may slow down sync temporarily

**Best Practice:** Trigger manual sync after bulk imports (if within 24-hour window), or schedule during low-traffic hours

### Scenario 5: Deleting Products

**Your Action:**

1. Delete 5 discontinued products
2. Confirm deletion

**What Happens:**

- Deletion detected on next sync cycle
- Products removed from Luigi's Box index
- Search results no longer show deleted items

## Sync Performance

### Factors Affecting Sync Speed

**Catalog Size:**

- Small (< 1,000): Very fast sync
- Medium (1,000-10,000): Moderate sync time
- Large (10,000+): Longer sync

**Product Complexity:**

- Simple products: Fast
- Configurable with many variants: Slower
- Products with many images: Slower
- Products with many custom attributes: Slower

**Network & Server:**

- Fast server response: Fast sync
- Slow database queries: Slower sync
- Network latency: Affects sync speed

## Sync Frequency & Control

### Default Behavior

The sync schedule is configured in Luigi's Box Web Application under **Catalog → Settings → Feeds Planning**. The default configuration runs 8 syncs per day, but this can be adjusted based on your needs:

**Automatic Sync Benefits:**

- Detects changes automatically
- No manual intervention needed
- Runs in background
- No performance impact on your store

**Configuration Options:**

<assumption>
- More frequent (e.g., hourly): Changes appear faster, more API load
- Less frequent (e.g., daily): Lower API load, slower updates
</assumption>

### Manual Control

**When to Trigger Manual Sync:**

- After major catalog changes
- After bulk product imports
- After price updates for promotions
- When troubleshooting issues
- Before major sales events

**When NOT to Trigger:**

- After single product updates (wait for auto-sync)
- Multiple times in succession (24-hour limitation prevents this)
- During high traffic periods (may slow store)

## Troubleshooting Sync Issues

### Issue 1: Products Not Syncing

**Check:**

1. Are products enabled? (Status = Enabled)
2. Are products visible? (Visibility = Catalog, Search)
3. Is integration active? (System → Integrations)
4. Check Luigi's Box dashboard for errors

**Solution:**

- Enable products in Magento
- Verify integration status
- Trigger manual sync if available
- Contact Luigi's Box support if issue persists

### Issue 2: Outdated Data in Search

**Check:**

1. When was last sync? (Luigi's Box dashboard)
2. Are Magento indexes up to date?
3. Any errors in Magento logs?

**Solution:**

```bash
# Reindex Magento
php bin/magento indexer:reindex

# Clear cache
php bin/magento cache:flush

# Trigger manual sync from Luigi's Box dashboard (if available)
```

### Issue 3: Missing Products

**Check:**

1. Product count in Luigi's Box vs. Magento (use SQL queries above)
2. Product visibility settings
3. Stock status (if hiding out-of-stock)
4. Store view configuration (multi-store)

**Solution:**

- Verify products are enabled and visible
- Check Luigi's Box configuration for out-of-stock handling
- Ensure correct store view is selected
- Trigger manual sync if available

### Issue 4: Sync Taking Too Long

**Check:**

1. Catalog size (> 50,000 products?)
2. Server performance
3. Network connectivity
4. Magento index status

**Solution:**

- Be patient for large catalogs (first sync takes longest)
- Ensure Magento indexes are up to date
- Check server resources (CPU, memory)
- Verify network connection to Luigi's Box
- Contact Luigi's Box if consistently slow

## Support & Resources

### Self-Service Resources

**Luigi's Box Dashboard:**

- Real-time sync status
- Data quality metrics
- Error logs and diagnostics
- Manual sync trigger

**Magento Admin:**

- Integration status: **System → Extensions → Integrations**
- Product visibility: **Catalog → Products**
- System logs: `var/log/system.log`, `var/log/exception.log`

### Getting Help

**Luigi's Box Support:**

- Email: support@luigisbox.com
- Support Portal: [https://help.luigisbox.com/](https://help.luigisbox.com/)