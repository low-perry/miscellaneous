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