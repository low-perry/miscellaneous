# Luigi's Box Data Synchronization Guide

**Version:** 1.3.1  
**Last Updated:** November 5, 2025

---

## Overview

Luigi's Box automatically synchronizes your Magento product catalog to power search, recommendations, and analytics. This guide explains what data is synced, how synchronization works, and what to expect.

---

## What Data is Synchronized

### Product Information

Luigi's Box syncs comprehensive product data from your Magento store:

| Data Type | What's Included | Purpose |
|-----------|----------------|---------|
| **Basic Info** | SKU, Name, Description, Short Description | Product identification and display |
| **Pricing** | Regular price, Special price, Final price, Currency | Price-based filtering and sorting |
| **Images** | Product images, Thumbnails, Gallery | Visual search results and recommendations |
| **Categories** | Category names, Hierarchy, URLs | Category-based filtering and navigation |
| **Inventory** | Stock quantity, Stock status, Availability | Display in-stock products only |
| **Attributes** | Color, Size, Brand, Custom attributes | Faceted search and filtering |
| **URLs** | Product page links | Direct navigation to products |
| **Visibility** | Catalog visibility, Status (enabled/disabled) | Control what's searchable |

### Product Types Supported

✅ **Simple Products** - Standard standalone products  
✅ **Configurable Products** - Products with variants (size, color, etc.)  
✅ **Grouped Products** - Multiple products sold together  
✅ **Bundle Products** - Customizable product bundles  
✅ **Virtual Products** - Non-physical products (services, subscriptions)  
✅ **Downloadable Products** - Digital downloads  

**Technical Reference:**  
The extension explicitly handles configurable, grouped, and bundle products through the parent-child relationship endpoint.  
- **API Endpoint:** `/rest/V1/parent-products-skus` (defined in `vendor/luigisbox/magento2-integration/etc/webapi.xml`)  
- **Implementation:** `vendor/luigisbox/magento2-integration/Model/ParentProducts.php`  
  - Line 17-19: Imports Magento's `Configurable`, `Grouped`, and `Selection` (Bundle) classes  
  - Line 61-77: Retrieves parent IDs for each product type using Magento's native methods:
    - `$this->configurable->getParentIdsByChild($childId)` - Configurable products
    - `$this->bundle->getParentIdsByChild($childId)` - Bundle products  
    - `$this->grouped->getParentIdsByChild($childId)` - Grouped products

Simple, virtual, and downloadable products work without special handling (standard catalog sync).

### Multi-Store & Multi-Warehouse

- **Multiple Store Views** - Sync different catalogs per store/language
- **Multi-Source Inventory** - Track stock across multiple warehouses
- **Regional Availability** - Show products available in specific locations

**Technical Reference:**  
The extension provides GraphQL resolvers for multi-warehouse inventory support.  
- **GraphQL Schema:** `vendor/luigisbox/magento2-integration/etc/schema.graphqls`
  - Line 7-9: `warehouses_luigi` field returns warehouse information per product
  - Line 11-15: `WarehouseInfoOutputLuigi` type with `source_code`, `quantity`, and `status`
- **Implementation:** `vendor/luigisbox/magento2-integration/Model/Resolver/Product/ProductWarehousesResolver.php`
  - Line 15: Checks if Magento MSI (Multi-Source Inventory) is available via `GetSourceItemsBySkuInterface`
  - Line 34-43: Retrieves source items (warehouses) for each product SKU
  - Returns stock quantity and status per warehouse location

Multi-store support is enabled through OAuth integration resources (defined in `vendor/luigisbox/magento2-integration/etc/integration/api.xml` lines 4-5).

---

## How Synchronization Works

### 1. Initial Full Sync

**When:** Immediately after activating the integration

**What Happens:**
1. Luigi's Box connects to your store via secure API
2. Retrieves all enabled and visible products
3. Downloads product details in batches (200-250 products at a time)
4. Builds searchable index in Luigi's Box system

**Duration:**
- Small catalog (< 1,000 products): 5-10 minutes
- Medium catalog (1,000-10,000 products): 30-60 minutes
- Large catalog (10,000-50,000 products): 2-4 hours
- Very large catalog (50,000+ products): 4-8 hours

**Note:** Your store remains fully operational during sync. Customers won't notice any impact.

### 2. Ongoing Updates (Incremental Sync)

**When:** Continuously, every 15-60 minutes

**What Happens:**
- Luigi's Box periodically checks for changes
- Detects new, updated, or deleted products
- Updates only changed items (not full re-sync)
- Changes appear in search within 15-60 minutes

**Triggered By:**
- Adding new products
- Updating product information
- Changing prices or inventory
- Modifying product visibility
- Deleting products

### 3. Manual Sync

**When:** On-demand from Luigi's Box dashboard

**How to Trigger:**
1. Log into Luigi's Box Web Application
2. Navigate to **Settings → Data Sources → Magento**
3. Click **Refresh Catalog**
4. Monitor progress in dashboard

**Use Cases:**
- After bulk product imports
- To immediately reflect critical changes
- Troubleshooting sync issues
- After store configuration changes

---

## Synchronization Methods

### GraphQL API (Primary Method)

Luigi's Box uses Magento's GraphQL API for efficient data retrieval.

**Advantages:**
- ✅ Retrieves only requested data (no overhead)
- ✅ Single request for complex product structures
- ✅ Handles configurable products elegantly
- ✅ Built-in pagination for large catalogs
- ✅ Fast and efficient

**Example Query:**
Luigi's Box queries for product SKU, name, price, images, categories, stock, and custom attributes in a single optimized request.

**Technical Reference:**  
The extension extends Magento's GraphQL schema with custom fields for Luigi's Box.  
- **Schema Definition:** `vendor/luigisbox/magento2-integration/etc/schema.graphqls`
  - Line 1-3: `custom_attributes_luigi` - Returns all custom attributes as JSON (handles NULL values)
  - Line 4-6: `quantity_luigi` - Product inventory quantity
  - Line 7-9: `warehouses_luigi` - Multi-source inventory information
- **Resolvers:**
  - `vendor/luigisbox/magento2-integration/Model/Resolver/Product/ProductCustomAttributesLuigi.php` - Custom attributes
  - `vendor/luigisbox/magento2-integration/Model/Resolver/Product/ProductQuantityResolver.php` - Inventory
  - `vendor/luigisbox/magento2-integration/Model/Resolver/Product/ProductWarehousesResolver.php` - Multi-warehouse stock

### Custom REST Endpoints

Luigi's Box extension provides specialized endpoints for specific data needs:

#### 1. Script Injection Endpoint
**Purpose:** Automatically adds tracking script to your store  
**Endpoint:** `/rest/V1/insert-script`  
**Used During:** Initial activation  

**Technical Reference:**  
- **API Definition:** `vendor/luigisbox/magento2-integration/etc/webapi.xml` (line 10-15)
- **Implementation:** `vendor/luigisbox/magento2-integration/Model/LuigisboxScriptManagement.php`
- **Method:** `postLuigisboxScript()` - Accepts script URL and injects into `design/head/includes` config
- **Permission:** Requires `Magento_Backend::content` resource

#### 2. Parent-Child Relationships
**Purpose:** Links product variants to parent products  
**Endpoint:** `/rest/V1/parent-products-skus`  
**Used For:** Configurable, grouped, and bundle products  

**Technical Reference:**  
- **API Definition:** `vendor/luigisbox/magento2-integration/etc/webapi.xml` (line 16-21)
- **Implementation:** `vendor/luigisbox/magento2-integration/Model/ParentProducts.php`
- **Method:** `getParentSkusByChildIds()` - Accepts child product IDs and product types, returns parent SKUs
- **Permission:** Requires `Magento_Catalog::products` resource

**Example:**
- Parent: "Nike T-Shirt" (configurable)
- Children: "Nike T-Shirt - Small - Red", "Nike T-Shirt - Large - Blue"
- Luigi's Box needs to know which variants belong to which parent

---

## Authentication & Security

### OAuth 1.0a Authentication

All data synchronization uses industry-standard OAuth authentication:

- ✅ **Secure** - No passwords stored or transmitted
- ✅ **Encrypted** - All communication over HTTPS
- ✅ **Token-based** - Unique access token per store
- ✅ **Revocable** - Can disable access anytime

### What Luigi's Box Can Access

**✅ Allowed:**
- Product catalog (SKU, name, description, price, images)
- Categories and category structure
- Inventory levels and stock status
- Product attributes (color, size, brand, etc.)
- Store configuration (currency, timezone, URL)

**🚫 NOT Allowed:**
- Customer personal information (names, emails, addresses)
- Order history and purchase data
- Payment information
- Admin user accounts
- System passwords or keys

**Technical Reference:**  
OAuth permissions are defined in the integration configuration.  
- **Integration Definition:** `vendor/luigisbox/magento2-integration/etc/integration/api.xml`
- **Granted Resources:**
  - Line 4: `Magento_Backend::content` - Allows script injection into design
  - Line 5-7: `Magento_Backend::stores*` - Read store configuration
  - Line 8: `Magento_Catalog::catalog` - Full catalog access
  - Line 9: `Magento_Catalog::catalog_inventory` - Inventory/stock data
  - Line 10-12: Products, categories, attribute sets, and attributes

This minimal permissions model ensures Luigi's Box can only access product-related data.

### Minimum Permissions Model

Luigi's Box requests **only** what's needed:
- No access to customer data
- No access to financial information
- No access to sensitive settings
- Read-only product catalog access

---

## Monitoring Data Sync

### Check Sync Status

**In Luigi's Box Dashboard:**
1. Log into Luigi's Box Web Application
2. Navigate to **Analytics → Data Quality**
3. View:
   - Last sync timestamp
   - Number of products synced
   - Sync success/error rate
   - Data quality score

### What to Look For

**Healthy Sync:**
- ✅ Product count matches your catalog
- ✅ Last sync within past hour
- ✅ No error messages
- ✅ Recent product changes are reflected

**Potential Issues:**
- ⚠️ Product count significantly lower than expected
- ⚠️ Last sync more than 2 hours ago
- ⚠️ Error messages in dashboard
- ⚠️ Recently added products not appearing

### Verify in Magento

Check that products are visible and enabled:

```sql
-- Count enabled and visible products
SELECT COUNT(*) 
FROM catalog_product_entity cpe
JOIN catalog_product_entity_int cpei_status 
  ON cpe.entity_id = cpei_status.entity_id
WHERE cpei_status.attribute_id = (
    SELECT attribute_id FROM eav_attribute 
    WHERE attribute_code = 'status' AND entity_type_id = 4
) AND cpei_status.value = 1;  -- 1 = Enabled
```

This count should match (approximately) what Luigi's Box shows.

---

## Common Sync Scenarios

### Scenario 1: Adding New Products

**Your Action:**
1. Add 10 new products in Magento admin
2. Set status to "Enabled"
3. Set visibility to "Catalog, Search"
4. Save products

**What Happens:**
- ⏱️ Within 15-60 minutes: Luigi's Box detects new products
- 🔄 Sync process automatically downloads new product data
- ✅ New products appear in search results
- 📊 Analytics begin tracking views and interactions

**To Speed Up:** Trigger manual sync from Luigi's Box dashboard

### Scenario 2: Price Updates

**Your Action:**
1. Update prices for 50 products
2. Apply special prices (discounts)
3. Save changes

**What Happens:**
- ⏱️ Within 15-60 minutes: Price changes detected
- 🔄 Only modified products re-synced (fast)
- ✅ Search results show updated prices
- 💰 Price filters update automatically

### Scenario 3: Out of Stock Products

**Your Action:**
1. Product inventory drops to 0
2. Stock status changes to "Out of Stock"

**What Happens:**
- ⏱️ Within 15-60 minutes: Inventory change detected
- 🔄 Luigi's Box updates product availability
- 🚫 Product hidden from search (configurable)
- 📧 You can enable "notify when back in stock"

**Configuration:** Control whether out-of-stock products appear in search via Luigi's Box dashboard

### Scenario 4: Bulk Import

**Your Action:**
1. Import 1,000 products via CSV
2. All products enabled and visible

**What Happens:**
- ⏱️ Next scheduled sync detects 1,000 new products
- 🔄 May take 10-30 minutes to sync all
- ⚠️ Large imports may slow down sync temporarily

**Best Practice:** Trigger manual sync after bulk imports, or schedule during low-traffic hours

### Scenario 5: Deleting Products

**Your Action:**
1. Delete 5 discontinued products
2. Confirm deletion

**What Happens:**
- ⏱️ Within 15-60 minutes: Deletion detected
- 🔄 Products removed from Luigi's Box index
- 🗑️ Search results no longer show deleted items
- 📊 Historical analytics data preserved

---

## Sync Performance & Optimization

### Factors Affecting Sync Speed

**Catalog Size:**
- Small (< 1,000): Very fast sync
- Medium (1,000-10,000): Moderate sync time
- Large (10,000+): Longer sync, optimized batching

**Product Complexity:**
- Simple products: Fast
- Configurable with many variants: Slower
- Products with many images: Slower
- Products with many custom attributes: Slower

**Network & Server:**
- Fast server response: Fast sync
- Slow database queries: Slower sync
- Network latency: Affects sync speed

### Optimization Tips

**1. Keep Indexes Updated**
```bash
php bin/magento indexer:reindex
```
Run regularly to ensure fast API responses

**2. Enable Caching**
Enable Magento's full-page cache for better performance

**3. Schedule Heavy Operations**
Perform bulk imports during off-peak hours (2-6 AM)

**4. Monitor API Performance**
Check Magento logs for slow queries:
```bash
tail -f var/log/system.log | grep -i "graphql"
```

**5. Disable Unused Modules**
Fewer modules = faster Magento = faster sync

---

## Sync Frequency & Control

### Default Behavior

**Automatic Sync:** Every 15-60 minutes
- Detects changes automatically
- No manual intervention needed
- Runs in background
- No performance impact on your store

### Manual Control

**When to Trigger Manual Sync:**
- ✅ After major catalog changes
- ✅ After bulk product imports
- ✅ After price updates for promotions
- ✅ When troubleshooting issues
- ✅ Before major sales events

**When NOT to Trigger:**
- ❌ After single product updates (wait for auto-sync)
- ❌ Multiple times in succession (inefficient)
- ❌ During high traffic periods (may slow store)

### Future: Real-Time Webhooks

**Current Status:** Not available in version 1.3.1

**Planned Feature:** Instant updates when products change
- Product saved → Immediate sync (< 1 minute)
- No polling delay
- Real-time search updates

**Availability:** Contact Luigi's Box for roadmap updates

---

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
- Trigger manual sync
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

# Trigger manual sync from Luigi's Box dashboard
```

### Issue 3: Missing Products

**Check:**
1. Product count in Luigi's Box vs. Magento
2. Product visibility settings
3. Stock status (if hiding out-of-stock)
4. Store view configuration (multi-store)

**Solution:**
- Verify products are enabled and visible
- Check Luigi's Box configuration for out-of-stock handling
- Ensure correct store view is selected
- Trigger manual sync

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

---

## Data Privacy & Compliance

### What Data is Collected

**Product Data:**
- Public catalog information only
- Same data customers see on your website
- No backend-only information

**Customer Behavior (via tracking script):**
- Anonymous browsing behavior
- Search queries and clicks
- Products viewed and purchased
- **No personal information** (names, emails, addresses)

### GDPR Compliance

✅ **Anonymous by default** - No PII collected  
✅ **Cookie consent integration** - Works with your consent banner  
✅ **Right to deletion** - Contact Luigi's Box to remove data  
✅ **Data processing agreement** - Available from Luigi's Box  
✅ **EU data residency** - Data stored in EU (if applicable)  

### Your Responsibilities

- Include Luigi's Box in your privacy policy
- Add Luigi's Box cookies to consent banner
- Inform customers about search analytics
- Handle data deletion requests (forward to Luigi's Box)

---

## Support & Resources

### Getting Help

**Luigi's Box Support:**
- Email: support@luigisbox.com
- Support Portal: https://app.luigisbox.com/support
- Documentation: https://www.luigisbox.com/docs

**Response Times:**
- Critical issues: Within 2 hours
- Normal support: Within 24 hours
- General questions: Within 48 hours

### Self-Service Resources

**Luigi's Box Dashboard:**
- Real-time sync status
- Data quality metrics
- Error logs and diagnostics
- Manual sync trigger

**Magento Admin:**
- Integration status: System → Extensions → Integrations
- Product visibility: Catalog → Products
- System logs: var/log/system.log, var/log/exception.log

### Useful Commands

```bash
# Check integration status
mysql -u user -p database -e "SELECT name, status FROM integration WHERE name='LuigisboxIntegration'"

# Count enabled products
mysql -u user -p database -e "SELECT COUNT(*) FROM catalog_product_entity cpe JOIN catalog_product_entity_int cpei ON cpe.entity_id = cpei.entity_id WHERE cpei.value = 1"

# Reindex catalog
php bin/magento indexer:reindex catalog_product_attribute

# Clear cache
php bin/magento cache:flush
```

---

## Summary

### Key Takeaways

1. **Automatic Sync** - Luigi's Box syncs your catalog every 15-60 minutes automatically
2. **Initial Sync** - First sync after activation takes 5 minutes to several hours depending on catalog size
3. **Incremental Updates** - Only changed products are re-synced (efficient)
4. **Manual Control** - Trigger sync anytime from Luigi's Box dashboard
5. **Secure** - OAuth authentication, encrypted communication, minimal permissions
6. **Product-Only** - No customer data, orders, or sensitive information synced
7. **Monitoring** - Track sync status in Luigi's Box dashboard
8. **Support Available** - Luigi's Box support team ready to help

### Next Steps

1. ✅ Activate Luigi's Box integration
2. ⏳ Wait for initial sync to complete
3. 🔍 Test search functionality on your website
4. 📊 Monitor sync status in Luigi's Box dashboard
5. 🎯 Configure search relevance and recommendations
6. 📈 Track performance in Luigi's Box analytics

---

**Document Version:** 1.0  
**Last Updated:** November 5, 2025  
**For:** Luigi's Box Clients  
**Contact:** support@luigisbox.com

---

© 2025 Luigi's Box. All rights reserved.
