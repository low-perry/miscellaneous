# Magento2 data sync

improvement duration: (line 55:68)

## Section

**Duration:**

Sync time depends on catalog size, product complexity, and server performance. Typical ranges:

- Small catalog (< 1,000 products): <time_range> minutes
- Medium catalog (1,000-10,000 products): <time_range> minutes
- Large catalog (10,000-50,000 products): <time_range> hours
- Very large catalog (50,000+ products): <time_range> hours

**Note:** Your store remains fully operational during sync. Customers won't notice any impact.

**Technical Note:**  
The extension provides GraphQL API endpoints that Luigi's Box queries to retrieve product data. Actual sync performance may vary based on catalog size, network conditions, server resources, and Luigi's Box service load.


improvement onGoing updates (line 71:72)

## Section

**Frequency:** Configurable in Luigi's Box Web Application under **Catalog → Settings → Feeds Planning** (default: 8 times per day)

improvement technical note (line 91:92)

**Technical Note:**  
The extension does not implement webhooks in version 1.3.1. Luigi's Box uses a polling mechanism (periodic API calls) to detect changes. The polling schedule is configured in Luigi's Box Web Application under **Catalog → Settings → Feeds Planning** and can be adjusted based on your specific use case.

improvement (line 93: 111)

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


improvement ,onitoring data sync (line 189: 217)

## Section

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

## Verifying & Troubleshooting Synchronization

This is the logical flow to follow if you suspect your catalog is not syncing correctly.

### Issue 1: Products Are Missing or Not Syncing

This is the most common issue, often caused by configuration settings or not waiting long enough for the automatic sync.

**Solution:**

1. **Wait for the 3-Hour Sync Cycle**: The most common "fix" is patience. The sync runs automatically **every 3 hours**. If you just added a new product, wait for this cycle to complete before troubleshooting.
2. **Check Magento Product Configuration**: In the Magento Admin, check for a missing product:
  - Is **Status** set to "Enabled"?
  - Is **Visibility** set to "Catalog, Search"?
  - Is **Integration** active? Go to **System → Integrations** and check that `LuigisboxIntegration` status is "Active."
3. Check Luigi's Box Dashboard:
  - Go to the **Catalog Browser**. Does the product count roughly match your Magento catalog?
4. Verify with Advanced SQL: If you still see a large discrepancy, use this query to get the exact count of products that should be syncing.

{{ callout('warning', 'Database Access: Only run SQL queries if you're comfortable with database administration. Always use read-only credentials when possible and test queries on a staging environment first.') }}

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
      AND entity_type_id = 4  -- 4 = 'catalog_product'
)
AND cpei_status.value = 1  -- 1 = Enabled
AND cpei_visibility.attribute_id = (
    SELECT attribute_id
    FROM eav_attribute
    WHERE attribute_code = 'visibility'
      AND entity_type_id = 4  -- 4 = 'catalog_product'
)
AND cpei_visibility.value IN (2, 3, 4);
-- 2 = Catalog, 3 = Search, 4 = Catalog & Search
```


### Issue 2: Data is Outdated (e.g., old prices)

This happens when a change is made in Magento but hasn't been picked up by the sync yet.

**Solution**:

1. **Wait for the 3-Hour Sync Cycle**: Just like with new products, updates to existing products are only synced every 3 hours.
2. **Check Magento Indexes**: Magento's internal data might be stale. Ask your developer to reindex from the command line:

```shell
# Reindex Magento
php bin/magento indexer:reindex

# Clear cache
php bin/magento cache:flush
```

3. **Verify "Updated At" Timestamp**: You can check if Magento has registered your recent change with this query:

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


If your product is on this list, it is ready to be picked up on the next sync.

### Issue 3: Initial Sync is Taking Too Long

**Solution:**

This is normal for very large catalogs.

- **Be patient**: A catalog with > 50,000 products can take several hours for its first sync.
- **Check Server Resources**: Ensure your server has adequate CPU and memory.
- **Check Network**: A slow network connection to Luigi's Box can also be a factor.

If your sync has not completed after 24 hours, contact support.