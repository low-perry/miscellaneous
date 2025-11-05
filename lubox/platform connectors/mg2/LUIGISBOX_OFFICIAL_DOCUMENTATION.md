# Luigi's Box Magento 2 Extension - Official Documentation

![Luigi's Box](https://www.luigisbox.com/app/uploads/2022/06/logo.svg)

**Version:** 1.3.1  
**Magento Compatibility:** 2.3.1 or higher  
**Last Updated:** November 4, 2025

---

## Table of Contents

1. [Introduction](#introduction)
2. [Phase 1: Installation](#phase-1-installation)
3. [Phase 2: Network & Security](#phase-2-network--security)
4. [Phase 3: Activation](#phase-3-activation)
5. [Phase 4: Data Synchronization](#phase-4-data-synchronization)
6. [Script Tag Integration](#script-tag-integration)
7. [API Reference](#api-reference)
8. [Permissions & Security Model](#permissions--security-model)
9. [Troubleshooting](#troubleshooting)
10. [Advanced Configuration](#advanced-configuration)

---

## Introduction

Luigi's Box is an Award Winning Product Discovery Solution for eCommerce, providing Search, Product Listing, Product Recommendations and related Analytics.

This extension provides seamless integration between your Magento 2 store and Luigi's Box services through:

- **Automated OAuth-based authentication** for secure API communication
- **Real-time product and category synchronization** via REST and GraphQL APIs
- **Frontend tracking script injection** for user behavior analytics
- **Minimal performance impact** with no additional database tables

### Key Features

✅ Automatic account creation at Luigi's Box  
✅ Bi-directional data synchronization  
✅ Support for configurable, grouped, and bundle products  
✅ Multi-store and multi-warehouse support  
✅ GraphQL API for efficient data queries  
✅ Content Security Policy (CSP) compliant  
✅ OAuth 1.0a security standard  

---

## Phase 1: Installation

### Prerequisites

Before installing the extension, ensure your environment meets these requirements:

#### Required

- **Magento Version:** 2.3.1 or higher (tested with 2.4.8-p3)
- **PHP Version:** 7.4+ (PHP 8.2 recommended)
- **Public Server Access:** Your Magento installation must be publicly accessible via HTTPS
- **Elasticsearch/OpenSearch:** Search engine properly configured
- **Composer:** Installed and configured

#### Important Notes

⚠️ **Installation on localhost will NOT succeed** - Luigi's Box servers need to communicate with your Magento installation during activation.

⚠️ **HTTPS is required** - OAuth communication requires secure connections.

### Installation Methods

#### Method 1: Composer (Recommended)

```bash
# Navigate to your Magento root directory
cd /path/to/magento2

# Require the Luigi's Box extension
composer require luigisbox/magento2-integration

# Run Magento setup commands
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy -f
php bin/magento cache:flush
```

#### Method 2: Manual Installation

```bash
# Navigate to your Magento installation
cd /path/to/magento2

# Create the extension directory
mkdir -p app/code/Luigisbox/Integration

# Clone or copy the extension files
# Copy repository contents to app/code/Luigisbox/Integration

# Run Magento setup commands
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy -f
php bin/magento cache:flush
```

### Post-Installation Verification

#### 1. Check Module Status

```bash
php bin/magento module:status Luigisbox_Integration
```

Expected output:
```
List of enabled modules:
Luigisbox_Integration
```

#### 2. Verify Integration Created

```bash
# Via CLI
php bin/magento config:show | grep -i luigis

# Via MySQL
mysql -u your_db_user -p your_db_name -e "SELECT * FROM integration WHERE name='LuigisboxIntegration'\G"
```

Expected result:
```
integration_id: 1
name: LuigisboxIntegration
email: support@luigisbox.com
endpoint: https://app.luigisbox.com/magento/install
status: 0 (pending activation)
```

#### 3. Check Admin Panel

Navigate to: **System → Extensions → Integrations**

You should see an entry named **LuigisboxIntegration** with status "Inactive".

### Common Installation Issues

#### Issue: Composer Timeout

**Solution:**
```bash
composer config --global process-timeout 2000
composer require luigisbox/magento2-integration
```

#### Issue: Permission Denied During Compilation

**Solution:**
```bash
sudo rm -rf generated/* var/cache/* var/page_cache/*
sudo chown -R www-data:www-data var/ generated/ pub/static/
sudo chmod -R 775 var/ generated/ pub/static/
php bin/magento setup:di:compile
```

#### Issue: MySQL Trigger Creation Error

**Error:** "You do not have the SUPER privilege and binary logging is enabled"

**Solution:**
```sql
SET GLOBAL log_bin_trust_function_creators = 1;
```

---

## Phase 2: Network & Security

### Network Requirements

#### Outbound Connections Required

Your Magento server must be able to connect to:

| Endpoint | Purpose | Protocol |
|----------|---------|----------|
| `https://app.luigisbox.com/magento/install` | Integration activation | HTTPS (443) |
| `https://app.luigisbox.com/magento/form` | Setup form UI | HTTPS (443) |
| `https://scripts.luigisbox.com/` | Tracking script CDN | HTTPS (443) |

#### Inbound Connections Required

Luigi's Box servers need to access:

| Endpoint | Purpose | Protocol |
|----------|---------|----------|
| `https://your-store.com/rest/V1/*` | REST API data sync | HTTPS (443) |
| `https://your-store.com/graphql` | GraphQL data queries | HTTPS (443) |

### Firewall Configuration

#### Allow Outbound HTTPS to Luigi's Box

```bash
# Example: UFW (Ubuntu)
sudo ufw allow out 443/tcp comment 'Luigi\'s Box API'

# Example: iptables
sudo iptables -A OUTPUT -p tcp --dport 443 -d app.luigisbox.com -j ACCEPT
sudo iptables -A OUTPUT -p tcp --dport 443 -d scripts.luigisbox.com -j ACCEPT
```

#### Allow Inbound API Access

Ensure your web server (Nginx/Apache) accepts HTTPS connections and Magento REST API is accessible.

Test connectivity:
```bash
curl -I https://your-store.com/rest/V1/
```

Expected: HTTP 200 or 405 (method not allowed, but endpoint exists)

### Content Security Policy (CSP)

The extension automatically configures CSP rules for Luigi's Box scripts.

#### CSP Whitelist Configuration

File: `vendor/luigisbox/magento2-integration/etc/csp_whitelist.xml`

```xml
<csp_whitelist xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <policies>
        <policy id="script-src">
            <values>
                <value id="luigisbox_scripts" type="host">https://scripts.luigisbox.com</value>
            </values>
        </policy>
    </policies>
</csp_whitelist>
```

#### Verify CSP Configuration

```bash
# Check response headers
curl -I https://your-store.com/ | grep -i "content-security-policy"
```

Should include: `script-src ... https://scripts.luigisbox.com`

### SSL/TLS Requirements

- **Minimum TLS Version:** TLS 1.2
- **Recommended:** TLS 1.3
- **Certificate:** Valid SSL certificate (not self-signed)
- **Cipher Suites:** Modern, secure ciphers

#### Test SSL Configuration

```bash
# Using openssl
openssl s_client -connect your-store.com:443 -tls1_2

# Using curl
curl -v https://your-store.com/ 2>&1 | grep -i "tls\|ssl"
```

### Reverse Proxy / CDN Considerations

#### Cloudflare

Add to `app/etc/env.php`:

```php
'system' => [
    'default' => [
        'remote_addr' => [
            'headers' => [
                'CF-Connecting-IP',
                'X-Forwarded-For'
            ]
        ]
    ]
]
```

#### AWS CloudFront / Other CDNs

Ensure the CDN passes these headers to your origin:

- `X-Forwarded-For`
- `X-Real-IP`
- `Authorization` (for API requests)

Configure cache rules to **bypass cache** for:
- `/rest/V1/*`
- `/graphql`

---

## Phase 3: Activation

### Activation Process Overview

The activation process establishes OAuth authentication between your Magento store and Luigi's Box services.

### Step-by-Step Activation

#### Step 1: Navigate to Integrations

1. Log into your Magento Admin panel
2. Navigate to: **System → Extensions → Integrations**
3. Locate **LuigisboxIntegration** in the list

#### Step 2: Activate Integration

1. Click **Activate** button next to LuigisboxIntegration
2. Review the permissions dialog
3. Click **Allow** to grant permissions

#### Step 3: OAuth Token Exchange

The system will:
1. ✅ Generate an OAuth access token
2. ✅ Create OAuth consumer credentials
3. ✅ Exchange tokens with Luigi's Box servers
4. ✅ Update integration status to "Active"

#### Step 4: Complete Setup Form

After successful token exchange:
1. A setup form will appear
2. Fill in your store information:
   - Store name
   - Industry/category
   - Expected monthly visitors
3. Click **Submit**
4. You'll be redirected to Luigi's Box Web Application

#### Step 5: Configure Luigi's Box Services

In the Luigi's Box dashboard:
1. Configure search settings
2. Set up product recommendations
3. Customize analytics tracking
4. Review data synchronization status

### Verification Checklist

After activation, verify the following:

```bash
# 1. Check integration status in database
mysql -u user -p database -e "
SELECT integration_id, name, status, updated_at 
FROM integration 
WHERE name='LuigisboxIntegration'\G"
```

Expected: `status: 1` (active)

```bash
# 2. Check OAuth token created
mysql -u user -p database -e "
SELECT entity_id, consumer_id, type, authorized 
FROM oauth_token 
WHERE consumer_id=1\G"
```

Expected: One access token with `type: access`

```bash
# 3. Verify tracking script added
curl -s https://your-store.com/ | grep -o "scripts.luigisbox.com"
```

Expected: Script tag present in HTML

```bash
# 4. Check Magento logs for errors
tail -n 50 var/log/system.log | grep -i "luigis\|integration"
tail -n 50 var/log/exception.log | grep -i "luigis"
```

Expected: No critical errors

### What Happens During Activation

#### Database Changes

1. **OAuth Token Creation**
```sql
INSERT INTO oauth_token (
    consumer_id, admin_id, type, token, secret, 
    verifier, callback_url, revoked, authorized, 
    user_type, created_at
) VALUES (
    1, NULL, 'access', '[TOKEN]', '[SECRET]', 
    '[VERIFIER]', 'oob', 0, 0, 1, NOW()
);
```

2. **Integration Status Update**
```sql
UPDATE integration 
SET status = 1, updated_at = NOW() 
WHERE integration_id = 1;
```

3. **Authorization Role Assignment**
```sql
-- Creates role for integration
INSERT INTO authorization_role (
    user_id, user_type, role_name
) VALUES (1, 2, 'LuigisboxIntegration');

-- Assigns permissions (11 resources allowed)
INSERT INTO authorization_rule (
    role_id, resource_id, permission
) VALUES 
    (3, 'Magento_Backend::content', 'allow'),
    (3, 'Magento_Catalog::products', 'allow'),
    -- ... additional permissions
```

#### Network Communication Flow

```
[Your Magento Store]                    [Luigi's Box Servers]
       |                                        |
       | 1. Generate OAuth Access Token         |
       |---------------------------------------->|
       |                                        |
       | 2. POST /magento/install               |
       |    Body: {                             |
       |      access_token: "abc123...",        |
       |      store_url: "https://...",         |
       |      magento_version: "2.4.8"          |
       |    }                                   |
       |---------------------------------------->|
       |                                        |
       |    3. Register Store & Return Config   |
       |<----------------------------------------|
       |    Response: {                         |
       |      tracker_id: "LBX-930155",         |
       |      script_tag: "<script src=...>"    |
       |    }                                   |
       |                                        |
       | 4. Store Configuration                 |
       | 5. Inject Script Tag                   |
       | 6. Trigger Initial Data Sync           |
       |                                        |
```

### Known Activation Issues

#### Issue 1: Token Exchange Timeout

**Symptoms:**
- Error: "Unable to read response, or response is empty"
- Integration status stuck on "Inactive"

**Possible Causes:**
- Luigi's Box endpoint unavailable
- Firewall blocking outbound HTTPS
- Server timeout too short

**Solutions:**
```bash
# 1. Test connectivity to Luigi's Box
curl -v https://app.luigisbox.com/magento/install

# 2. Check firewall rules
sudo iptables -L OUTPUT -v | grep 443

# 3. Increase PHP timeout (in php.ini)
max_execution_time = 300
default_socket_timeout = 300

# Restart PHP-FPM
sudo systemctl restart php-fpm
```

#### Issue 2: Missing Configuration After Activation

**Symptoms:**
- Integration shows "Active"
- No tracking script in frontend
- No data syncing

**Solution:**
```bash
# Manually configure via admin
# Go to: Stores → Configuration → Luigi's Box → Settings
# Or re-activate the integration
```

#### Issue 3: OAuth Token Not Created

**Symptoms:**
- Integration status changes to "Active"
- No entry in oauth_token table

**Solution:**
```sql
-- Check consumer exists
SELECT * FROM oauth_consumer WHERE entity_id = 1;

-- If missing, recreate integration:
DELETE FROM integration WHERE name = 'LuigisboxIntegration';
```

Then run:
```bash
php bin/magento setup:upgrade
php bin/magento cache:flush
```

---

## Phase 4: Data Synchronization

### Overview

Luigi's Box extension synchronizes the following data from your Magento store:

- **Products** (all types: simple, configurable, grouped, bundle, virtual, downloadable)
- **Categories**
- **Product Attributes** (custom attributes, price, stock, images)
- **Inventory/Stock Data** (quantity, multi-warehouse support)
- **Product Relationships** (parent-child associations)

### Data Sync Architecture

```
┌─────────────────────┐
│   Luigi's Box       │
│   Sync Service      │
└──────────┬──────────┘
           │ Initiates sync requests
           │
           ▼
┌─────────────────────────────┐
│  Your Magento Store         │
│  ┌────────────────────────┐ │
│  │  REST API Endpoints    │ │
│  │  - /V1/insert-script   │ │
│  │  - /V1/parent-products │ │
│  └────────────────────────┘ │
│  ┌────────────────────────┐ │
│  │  GraphQL API           │ │
│  │  - Products Query      │ │
│  │  - Custom Attributes   │ │
│  │  - Quantity Info       │ │
│  │  - Warehouse Data      │ │
│  └────────────────────────┘ │
└─────────────────────────────┘
```

### Synchronization Methods

#### 1. Initial Full Sync

**Triggered:** Immediately after activation

**Process:**
1. Luigi's Box queries all products via GraphQL
2. Fetches product catalog in batches (typically 100-250 items)
3. Retrieves custom attributes, prices, stock levels
4. Maps parent-child relationships (configurable products)
5. Indexes data for search and recommendations

**Duration:** Depends on catalog size
- 100 products: ~30 seconds
- 1,000 products: ~5 minutes
- 10,000 products: ~30-45 minutes
- 50,000+ products: 2-4 hours

#### 2. Incremental Updates

**Triggered:** Automatically when products change

**Magento Events Monitored:**
- `catalog_product_save_after` - Product updated
- `catalog_product_delete_after` - Product deleted
- `cataloginventory_stock_item_save_after` - Stock changed

**Note:** In version 1.3.1, webhook-based real-time updates are **not implemented**. Luigi's Box performs **periodic polling** (typically every 15-60 minutes) to detect changes.

#### 3. Manual Sync Trigger

You can trigger a manual sync from Luigi's Box dashboard:

1. Log into Luigi's Box Web Application
2. Navigate to: **Settings → Data Sources → Magento**
3. Click **Refresh Catalog**
4. Monitor sync progress in dashboard

### Data Synchronized

#### Product Data Fields

| Field | Source | API | Notes |
|-------|--------|-----|-------|
| **SKU** | `product.sku` | GraphQL | Primary identifier |
| **Name** | `product.name` | GraphQL | Localized per store view |
| **Description** | `product.description` | GraphQL | Full HTML description |
| **Short Description** | `product.short_description` | GraphQL | Summary text |
| **Price** | `product.price` | GraphQL | Regular price |
| **Special Price** | `product.special_price` | GraphQL | Discounted price (if active) |
| **Final Price** | `product.final_price` | GraphQL | Calculated with tax/discounts |
| **Currency** | Store config | GraphQL | ISO code (USD, EUR, etc.) |
| **Stock Quantity** | `quantity_luigi` | GraphQL | Total available quantity |
| **Stock Status** | `product.stock_status` | GraphQL | In Stock / Out of Stock |
| **Categories** | `product.categories` | GraphQL | Category IDs and names |
| **Images** | `product.media_gallery` | GraphQL | URLs to product images |
| **URL** | `product.url_key` | GraphQL | Product page URL |
| **Attributes** | `custom_attributes_luigi` | GraphQL | All custom attributes as JSON |
| **Visibility** | `product.visibility` | GraphQL | Catalog/Search visibility |
| **Status** | `product.status` | GraphQL | Enabled/Disabled |
| **Type** | `product.type_id` | GraphQL | simple, configurable, etc. |
| **Parent SKUs** | `/V1/parent-products-skus` | REST | For variant products |
| **Warehouse Data** | `warehouses_luigi` | GraphQL | Multi-source inventory |

#### Category Data Fields

| Field | Source | API | Notes |
|-------|--------|-----|-------|
| **Category ID** | `category.id` | GraphQL | Magento category ID |
| **Name** | `category.name` | GraphQL | Category name |
| **URL Path** | `category.url_path` | GraphQL | Category page URL |
| **Parent ID** | `category.parent_id` | GraphQL | Hierarchy structure |
| **Level** | `category.level` | GraphQL | Depth in category tree |
| **Position** | `category.position` | GraphQL | Sort order |
| **Product Count** | `category.product_count` | GraphQL | Number of products |

### API Endpoints Used

#### REST API Endpoints

##### 1. Insert Script Tag
```
POST /rest/V1/insert-script
```

**Purpose:** Allows Luigi's Box to inject tracking script into your store's HTML header

**Authentication:** OAuth 1.0a (access token from activation)

**Request Body:**
```json
{
  "scope_id": 1,
  "script_tag": "<script src=\"https://scripts.luigisbox.com/LBX-930155.js\"></script>"
}
```

**Response:**
```json
"OK"
```

**Implementation:** `Luigisbox\Integration\Model\LuigisboxScriptManagement::postLuigisboxScript()`

**Permissions Required:** `Magento_Backend::content`

---

##### 2. Get Parent Product SKUs
```
POST /rest/V1/parent-products-skus
```

**Purpose:** Retrieves parent product SKUs for child/variant products (configurable, grouped, bundle)

**Authentication:** OAuth 1.0a

**Request Body:**
```json
{
  "child_ids": [123, 456, 789],
  "types": ["configurable", "grouped", "bundle"]
}
```

**Response:**
```json
{
  "123": ["PARENT-SKU-1", "PARENT-SKU-2"],
  "456": ["PARENT-SKU-3"],
  "789": []
}
```

**Implementation:** `Luigisbox\Integration\Model\ParentProducts::getParentSkusByChildIds()`

**Permissions Required:** `Magento_Catalog::products`

**Notes:**
- Only returns parents with visibility > 1 (visible in catalog or search)
- Supports configurable, grouped, and bundle product types
- Handles multiple parent associations (e.g., product in multiple bundles)

---

#### GraphQL API Extensions

##### 1. Custom Attributes (Luigi)
```graphql
query {
  products(filter: {sku: {eq: "PRODUCT-SKU"}}) {
    items {
      sku
      custom_attributes_luigi
    }
  }
}
```

**Field:** `custom_attributes_luigi`

**Type:** `String` (JSON-encoded)

**Purpose:** Returns all custom attributes as JSON, handling null values properly

**Resolver:** `Luigisbox\Integration\Model\Resolver\Product\ProductCustomAttributesLuigi`

**Example Response:**
```json
{
  "custom_attributes_luigi": "{\"color\":\"Red\",\"size\":\"Large\",\"brand\":\"Nike\",\"material\":null}"
}
```

**Advantages over standard `custom_attributes`:**
- ✅ Handles null values correctly
- ✅ Returns as JSON string for easy parsing
- ✅ Compatible with Magento 2.3.x - 2.4.x

---

##### 2. Product Quantity (Luigi)
```graphql
query {
  products(filter: {sku: {eq: "PRODUCT-SKU"}}) {
    items {
      sku
      quantity_luigi
    }
  }
}
```

**Field:** `quantity_luigi`

**Type:** `Float`

**Purpose:** Returns total available quantity across all sources

**Resolver:** `Luigisbox\Integration\Model\Resolver\Product\ProductQuantityResolver`

**Example Response:**
```json
{
  "quantity_luigi": 150.0
}
```

---

##### 3. Warehouse Information (Luigi)
```graphql
query {
  products(filter: {sku: {eq: "PRODUCT-SKU"}}) {
    items {
      sku
      warehouses_luigi {
        source_code
        quantity
        status
      }
    }
  }
}
```

**Field:** `warehouses_luigi`

**Type:** `[WarehouseInfoOutputLuigi]`

**Purpose:** Returns per-warehouse inventory data (Multi-Source Inventory support)

**Resolver:** `Luigisbox\Integration\Model\Resolver\Product\ProductWarehousesResolver`

**Example Response:**
```json
{
  "warehouses_luigi": [
    {
      "source_code": "warehouse_nyc",
      "quantity": 75.0,
      "status": "in_stock"
    },
    {
      "source_code": "warehouse_la",
      "quantity": 50.0,
      "status": "in_stock"
    },
    {
      "source_code": "warehouse_chicago",
      "quantity": 0.0,
      "status": "out_of_stock"
    }
  ]
}
```

**Use Cases:**
- Regional availability display
- Fulfillment optimization
- Location-based search results

---

### Full GraphQL Query Example

Here's a complete query Luigi's Box uses to sync product data:

```graphql
query GetProducts($pageSize: Int!, $currentPage: Int!) {
  products(
    pageSize: $pageSize
    currentPage: $currentPage
    filter: {
      status: {eq: "1"}  # Only enabled products
    }
  ) {
    total_count
    items {
      __typename
      sku
      name
      url_key
      url_suffix
      type_id
      visibility
      
      # Pricing
      price_range {
        minimum_price {
          regular_price {
            value
            currency
          }
          final_price {
            value
            currency
          }
          discount {
            amount_off
            percent_off
          }
        }
      }
      
      # Descriptions
      short_description {
        html
      }
      description {
        html
      }
      
      # Media
      small_image {
        url
        label
      }
      image {
        url
        label
      }
      thumbnail {
        url
        label
      }
      media_gallery {
        url
        label
        position
      }
      
      # Categories
      categories {
        id
        name
        url_path
        level
      }
      
      # Stock & Inventory
      stock_status
      quantity_luigi
      warehouses_luigi {
        source_code
        quantity
        status
      }
      
      # Custom Attributes (Luigi's Box extension)
      custom_attributes_luigi
      
      # Configurable Product Options
      ... on ConfigurableProduct {
        configurable_options {
          attribute_code
          label
          values {
            label
            value_index
          }
        }
        variants {
          product {
            sku
            name
            price_range {
              minimum_price {
                final_price {
                  value
                  currency
                }
              }
            }
          }
          attributes {
            code
            value_index
            label
          }
        }
      }
      
      # Grouped Product Items
      ... on GroupedProduct {
        items {
          qty
          position
          product {
            sku
            name
          }
        }
      }
      
      # Bundle Product Options
      ... on BundleProduct {
        items {
          title
          required
          type
          options {
            id
            quantity
            product {
              sku
              name
            }
          }
        }
      }
    }
    page_info {
      current_page
      page_size
      total_pages
    }
  }
}
```

**Variables:**
```json
{
  "pageSize": 200,
  "currentPage": 1
}
```

**Request Headers:**
```
POST /graphql HTTP/1.1
Host: your-store.com
Content-Type: application/json
Authorization: Bearer [OAUTH_ACCESS_TOKEN]
Store: default
```

---

### Data Sync Monitoring

#### Check Last Sync Time

Luigi's Box dashboard shows:
- Last successful sync timestamp
- Number of products synced
- Sync duration
- Errors/warnings

#### Monitor Sync Progress (Magento Side)

```bash
# Check API request logs
tail -f var/log/system.log | grep -i "graphql\|webapi"

# Monitor GraphQL queries
tail -f var/log/debug.log | grep -i "graphql"

# Check for API errors
grep -i "luigis\|graphql" var/log/exception.log | tail -20
```

#### Database Queries for Verification

```sql
-- Check which products are visible/enabled
SELECT COUNT(*) FROM catalog_product_entity cpe
JOIN catalog_product_entity_int cpei ON cpe.entity_id = cpei.entity_id
WHERE cpei.attribute_id = (
    SELECT attribute_id FROM eav_attribute 
    WHERE entity_type_id = 4 AND attribute_code = 'status'
) AND cpei.value = 1;

-- Check product inventory
SELECT cpe.sku, csi.qty, csi.is_in_stock
FROM catalog_product_entity cpe
JOIN cataloginventory_stock_item csi ON cpe.entity_id = csi.product_id
LIMIT 10;

-- Check configurable product associations
SELECT parent.sku AS parent_sku, child.sku AS child_sku
FROM catalog_product_super_link cpsl
JOIN catalog_product_entity parent ON cpsl.parent_id = parent.entity_id
JOIN catalog_product_entity child ON cpsl.product_id = child.entity_id
LIMIT 10;
```

---

## Script Tag Integration

### How the Tracking Script is Added

The extension adds the Luigi's Box tracking script to your store's HTML `<head>` section via two possible methods:

#### Method 1: Automatic (During Activation)

When you activate the integration, Luigi's Box servers send a POST request to:

```
POST /rest/V1/insert-script
```

This automatically injects the script tag into Magento configuration.

**Storage Location:** `core_config_data` table
- **Config Path:** `design/head/includes`
- **Scope:** `stores` (per store view)
- **Value:** `<script src="https://scripts.luigisbox.com/LBX-XXXXXX.js"></script>`

#### Method 2: Manual (Via Admin Dashboard)

If automatic injection fails, you can manually add the script:

1. Navigate to: **Content → Design → Configuration**
2. Click **Edit** on your store view
3. Expand **HTML Head** section
4. In **Scripts and Style Sheets** field, add:
   ```html
   <script src="https://scripts.luigisbox.com/LBX-XXXXXX.js"></script>
   ```
   (Replace `LBX-XXXXXX` with your actual tracker ID)
5. Click **Save Configuration**
6. Run:
   ```bash
   php bin/magento setup:di:compile
   php bin/magento cache:flush
   ```

### Verification

Check if the script is loading:

```bash
# Method 1: curl
curl -s https://your-store.com/ | grep -o "scripts.luigisbox.com"

# Method 2: View source
curl -s https://your-store.com/ | head -50

# Method 3: Database check
mysql -u user -p database -e "
SELECT value FROM core_config_data 
WHERE path = 'design/head/includes' 
AND scope = 'stores'\G"
```

Expected output: Script tag present in HTML `<head>` section

### Tracking Script Features

The Luigi's Box tracking script (`LBX-XXXXXX.js`) provides:

1. **Search Tracking** - Records search queries and results clicked
2. **Product View Tracking** - Tracks which products users view
3. **Add-to-Cart Tracking** - Records when products are added to cart
4. **Purchase Tracking** - Tracks completed orders
5. **User Session Management** - Creates anonymous user IDs
6. **Recommendation Widgets** - Dynamically loads product recommendations
7. **Analytics Collection** - Sends behavioral data to Luigi's Box

### Script Attributes

```html
<script src="https://scripts.luigisbox.com/LBX-930155.js"></script>
```

**Default Behavior:**
- ✅ Loaded synchronously (blocking)
- ✅ Runs immediately when encountered
- ✅ No caching (served fresh)

**Optional Enhancements:**

For better performance, you can add attributes manually:

```html
<!-- Async loading (non-blocking) -->
<script async src="https://scripts.luigisbox.com/LBX-930155.js"></script>

<!-- Defer loading (execute after page parse) -->
<script defer src="https://scripts.luigisbox.com/LBX-930155.js"></script>
```

⚠️ **Note:** Adding `async` or `defer` may affect when recommendations appear. Test thoroughly before using in production.

### Content Security Policy (CSP)

The extension automatically whitelists Luigi's Box in CSP headers:

```
Content-Security-Policy: script-src 'self' https://scripts.luigisbox.com; ...
```

If you use a custom CSP configuration, ensure you include:
- `script-src https://scripts.luigisbox.com`
- `connect-src https://api.luigisbox.com` (for API calls from script)
- `img-src https://cdn.luigisbox.com` (for recommendation images)

---

## API Reference

### Complete API Summary

| Method | Endpoint | Purpose | Auth | Permissions |
|--------|----------|---------|------|-------------|
| POST | `/rest/V1/insert-script` | Inject tracking script | OAuth | `Magento_Backend::content` |
| POST | `/rest/V1/parent-products-skus` | Get parent SKUs | OAuth | `Magento_Catalog::products` |
| POST | `/graphql` | Query product data | OAuth | `Magento_Catalog::products` |

### Authentication

All API requests use **OAuth 1.0a** authentication with the access token generated during activation.

#### Authorization Header Format

```
Authorization: Bearer [ACCESS_TOKEN]
```

Example:
```
Authorization: Bearer ky156esuewzyysoidgsi8gf8pp9qnfl9
```

#### Testing API Access

```bash
# Get your access token
mysql -u user -p database -e "
SELECT token FROM oauth_token 
WHERE consumer_id = 1 AND type = 'access'\G"

# Test GraphQL API
curl -X POST https://your-store.com/graphql \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Store: default" \
  -d '{
    "query": "{ products(pageSize: 1) { total_count } }"
  }'

# Expected response:
# {"data":{"products":{"total_count":1234}}}
```

### Rate Limiting

**Default Magento Limits:**
- REST API: 20 requests per minute per API user
- GraphQL: 10 requests per second per API user

**Luigi's Box Sync Behavior:**
- Respects rate limits automatically
- Uses batch queries (200-250 products per request)
- Backs off on 429 (Too Many Requests) responses

**Custom Rate Limit Configuration:**

In `app/etc/env.php`:
```php
'webapi' => [
    'rate_limit' => [
        'max_requests' => 100,
        'period' => 60  // seconds
    ]
]
```

### Error Responses

#### 401 Unauthorized
```json
{
  "message": "Consumer is not authorized to access %resources",
  "parameters": {
    "resources": "Magento_Catalog::products"
  }
}
```

**Cause:** OAuth token invalid or insufficient permissions  
**Solution:** Re-activate the integration

#### 404 Not Found
```json
{
  "message": "Requested product doesn't exist"
}
```

**Cause:** Product SKU doesn't exist  
**Solution:** Verify SKU in request

#### 500 Internal Server Error
```json
{
  "message": "Internal Error. Details are available in Magento log file."
}
```

**Cause:** PHP error, database issue, or module bug  
**Solution:** Check `var/log/exception.log`

---

## Permissions & Security Model

### OAuth Integration Permissions

The Luigi's Box integration requests **minimal permissions** following the principle of least privilege.

#### Resources Granted (11 total)

```xml
<resources>
    <!-- Admin Access (required for integration) -->
    <resource name="Magento_Backend::admin" />
    
    <!-- Content Management (for script injection) -->
    <resource name="Magento_Backend::content" />
    
    <!-- Store Configuration (read store settings) -->
    <resource name="Magento_Backend::stores" />
    <resource name="Magento_Backend::stores_settings" />
    <resource name="Magento_Backend::store" />
    
    <!-- Catalog Access (read products & categories) -->
    <resource name="Magento_Catalog::catalog" />
    <resource name="Magento_Catalog::catalog_inventory" />
    <resource name="Magento_Catalog::products" />
    <resource name="Magento_Catalog::categories" />
    <resource name="Magento_Catalog::sets" />
    <resource name="Magento_Catalog::attributes_attributes" />
</resources>
```

#### What the Extension CAN Access

✅ **Product Data** - SKU, name, description, prices, images  
✅ **Category Data** - Names, hierarchy, URLs  
✅ **Inventory Data** - Stock quantities, warehouse locations  
✅ **Product Attributes** - Custom attributes, attribute sets  
✅ **Store Configuration** - Base URLs, currency, timezone  
✅ **Content Injection** - Add script tag to HTML head  

#### What the Extension CANNOT Access

🚫 **Customer Data** - Personal information, addresses, emails  
🚫 **Order Data** - Order history, payment details, shipping  
🚫 **Admin Users** - Admin accounts, passwords, roles  
🚫 **Payment Methods** - Credit card info, gateway config  
🚫 **Tax Rules** - Tax configuration  
🚫 **Promotions** - Cart rules, catalog rules, coupons  
🚫 **CMS Content** - Pages, blocks, widgets  
🚫 **System Configuration** - Most system settings  

### Security Best Practices

#### 1. Token Security

**DO:**
- ✅ Store OAuth tokens securely (Magento handles this)
- ✅ Use HTTPS for all API communication
- ✅ Regenerate tokens if compromised

**DON'T:**
- ❌ Share OAuth tokens publicly
- ❌ Log tokens in plain text
- ❌ Expose tokens in frontend JavaScript

#### 2. Revoke Access

If you need to revoke Luigi's Box access:

```sql
-- Disable integration
UPDATE integration 
SET status = 0 
WHERE name = 'LuigisboxIntegration';

-- Revoke OAuth token
UPDATE oauth_token 
SET revoked = 1 
WHERE consumer_id = 1;
```

Then flush cache:
```bash
php bin/magento cache:flush
```

#### 3. Monitor API Usage

```bash
# Check API access logs
tail -f var/log/api.log | grep "Luigi"

# Monitor for suspicious patterns
grep -i "401\|403\|429" var/log/api.log | grep -i "luigis"
```

#### 4. IP Whitelisting (Optional)

Restrict API access to Luigi's Box server IPs only.

In your web server configuration:

**Nginx:**
```nginx
location /rest/V1/ {
    satisfy all;
    
    # Luigi's Box IP ranges (example - contact Luigi's Box for actual IPs)
    allow 185.XXX.XXX.0/24;
    allow 104.XXX.XXX.0/24;
    deny all;
    
    # ... rest of your config
}
```

**Apache:**
```apache
<LocationMatch "^/rest/V1/">
    Require ip 185.XXX.XXX.0/24
    Require ip 104.XXX.XXX.0/24
</LocationMatch>
```

⚠️ **Contact Luigi's Box support for official IP ranges**

### Data Privacy & GDPR Compliance

#### Personal Data Collection

The tracking script collects:
- **Anonymous User ID** - Random UUID stored in cookie
- **Session Data** - Browsing behavior, searches, clicks
- **Aggregated Analytics** - Page views, bounce rates, conversions

**No personally identifiable information (PII) is collected** unless explicitly configured.

#### Cookie Policy

**Cookies Set:**
- `_luigisbox_visitor_id` - Anonymous visitor identifier (365 days)
- `_luigisbox_session_id` - Session identifier (30 minutes)

**Cookie Attributes:**
```
Secure; HttpOnly; SameSite=Lax
```

#### GDPR Considerations

- ✅ Anonymous tracking by default
- ✅ No customer email or name collection
- ✅ Cookie consent integration supported
- ✅ Right to deletion supported (contact Luigi's Box)

**Recommended:** Add Luigi's Box to your privacy policy and cookie consent banner.

---

## Troubleshooting

### Common Issues & Solutions

#### Issue 1: Extension Not Appearing in Integrations

**Symptoms:**
- No "LuigisboxIntegration" in System → Integrations

**Diagnosis:**
```bash
# Check module is enabled
php bin/magento module:status | grep Luigi

# Check integration in database
mysql -u user -p database -e "
SELECT * FROM integration 
WHERE name = 'LuigisboxIntegration'\G"
```

**Solutions:**

**A. Module Not Enabled**
```bash
php bin/magento module:enable Luigisbox_Integration
php bin/magento setup:upgrade
php bin/magento cache:flush
```

**B. Integration Not Created**
```bash
# Force re-creation
php bin/magento setup:upgrade --keep-generated
php bin/magento cache:flush
```

**C. Database Corruption**
```sql
-- Delete and recreate
DELETE FROM integration WHERE name = 'LuigisboxIntegration';
DELETE FROM oauth_consumer WHERE entity_id IN (
    SELECT consumer_id FROM integration WHERE name = 'LuigisboxIntegration'
);
```
Then: `php bin/magento setup:upgrade`

---

#### Issue 2: Activation Fails with "Unable to read response"

**Symptoms:**
- Error during activation: "Unable to read response, or response is empty"
- Integration status stays "Inactive"

**Diagnosis:**
```bash
# Test connectivity
curl -v https://app.luigisbox.com/magento/install

# Check Magento logs
tail -50 var/log/system.log | grep -i "integration\|oauth"
tail -50 var/log/exception.log
```

**Solutions:**

**A. Network/Firewall Issue**
```bash
# Test outbound HTTPS
curl -I https://app.luigisbox.com

# Check firewall
sudo iptables -L OUTPUT -n | grep 443
```

**B. PHP Timeout Too Short**

Edit `php.ini`:
```ini
max_execution_time = 300
default_socket_timeout = 300
```

Restart PHP-FPM:
```bash
sudo systemctl restart php-fpm
```

**C. Luigi's Box Server Down**

Check Luigi's Box status page or contact support.

**D. SSL/TLS Issue**
```bash
# Check SSL configuration
openssl s_client -connect app.luigisbox.com:443 -tls1_2
```

---

#### Issue 3: Tracking Script Not Loading

**Symptoms:**
- Script tag not present in HTML source
- Luigi's Box features not working on frontend

**Diagnosis:**
```bash
# Check if script is in database
mysql -u user -p database -e "
SELECT scope, scope_id, value FROM core_config_data 
WHERE path = 'design/head/includes'\G"

# Check frontend HTML
curl -s https://your-store.com/ | grep -o "scripts.luigisbox.com"
```

**Solutions:**

**A. Script Not Configured**

Manually add via admin:
1. Content → Design → Configuration
2. Edit store view → HTML Head → Scripts and Style Sheets
3. Add: `<script src="https://scripts.luigisbox.com/LBX-XXXXXX.js"></script>`
4. Save, then:
```bash
php bin/magento setup:di:compile
php bin/magento cache:flush
```

**B. Cache Issue**
```bash
# Clear all caches
sudo rm -rf var/cache/* var/page_cache/* generated/code/*
php bin/magento cache:flush
php bin/magento setup:di:compile
```

**C. CSP Blocking Script**

Check browser console for CSP errors.

Solution: Add to `csp_whitelist.xml`:
```xml
<policy id="script-src">
    <values>
        <value id="luigisbox" type="host">https://scripts.luigisbox.com</value>
    </values>
</policy>
```

**D. Theme Override**

Check if your theme overrides `default.xml`. If so, ensure it includes parent theme's head section.

---

#### Issue 4: TypeError in LuigisboxScriptManagement

**Symptoms:**
- PHP error: `str_contains(): Argument #1 ($haystack) must be of type string, null given`
- Location: `vendor/luigisbox/magento2-integration/Model/LuigisboxScriptManagement.php:54`

**Diagnosis:**
```bash
tail -100 var/log/exception.log | grep -A 10 "LuigisboxScriptManagement"
```

**Root Cause:**
Extension code doesn't handle NULL values in configuration.

**Solutions:**

**A. Patch the Extension (Temporary)**

File: `vendor/luigisbox/magento2-integration/Model/LuigisboxScriptManagement.php`

Change line 54 from:
```php
if (!str_contains($html_header, $scriptTag)) {
```

To:
```php
if (is_string($html_header) && !str_contains($html_header, $scriptTag)) {
```

**B. Re-activate Integration**

Sometimes re-activation sets the missing config:
```sql
UPDATE integration SET status = 0 WHERE name = 'LuigisboxIntegration';
```
Then re-activate via admin panel.

**C. Contact Luigi's Box Support**

Report the bug with full stack trace:
```bash
grep -A 20 "LuigisboxScriptManagement" var/log/exception.log > luigisbox_error.log
```

---

#### Issue 5: Products Not Syncing

**Symptoms:**
- Luigi's Box dashboard shows 0 products or outdated data
- Recent product changes not reflected

**Diagnosis:**
```bash
# Check API logs
tail -100 var/log/system.log | grep -i "graphql\|webapi"

# Test GraphQL query manually
curl -X POST https://your-store.com/graphql \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"query":"{products(pageSize:1){total_count}}"}'
```

**Solutions:**

**A. OAuth Token Invalid**

Re-activate the integration:
1. System → Integrations
2. Click "Reauthorize" on LuigisboxIntegration

**B. Products Not Visible**

Check product status and visibility:
```sql
SELECT cpe.sku, cpei_status.value AS status, cpei_vis.value AS visibility
FROM catalog_product_entity cpe
LEFT JOIN catalog_product_entity_int cpei_status 
  ON cpe.entity_id = cpei_status.entity_id 
  AND cpei_status.attribute_id = (SELECT attribute_id FROM eav_attribute WHERE attribute_code = 'status' AND entity_type_id = 4)
LEFT JOIN catalog_product_entity_int cpei_vis 
  ON cpe.entity_id = cpei_vis.entity_id 
  AND cpei_vis.attribute_id = (SELECT attribute_id FROM eav_attribute WHERE attribute_code = 'visibility' AND entity_type_id = 4)
WHERE cpei_status.value = 1  -- Enabled
  AND cpei_vis.value > 1     -- Visible
LIMIT 10;
```

**C. GraphQL Cache Issue**
```bash
php bin/magento cache:clean graphql_cache
```

**D. Trigger Manual Sync**

From Luigi's Box dashboard: Settings → Data Sources → Refresh Catalog

---

#### Issue 6: Permission Denied Errors

**Symptoms:**
- 403 Forbidden errors in API requests
- "Consumer is not authorized to access %resources"

**Diagnosis:**
```bash
# Check integration permissions
mysql -u user -p database -e "
SELECT ar.resource_id, ar.permission
FROM authorization_rule ar
JOIN authorization_role role ON ar.role_id = role.role_id
WHERE role.user_id = (SELECT integration_id FROM integration WHERE name = 'LuigisboxIntegration')
  AND role.user_type = '2'
  AND ar.permission = 'allow'\G"
```

**Expected:** Should show 11 allowed resources (see Permissions section)

**Solutions:**

**A. Re-create Integration**
```sql
DELETE FROM integration WHERE name = 'LuigisboxIntegration';
DELETE FROM oauth_consumer WHERE entity_id = 1;
DELETE FROM oauth_token WHERE consumer_id = 1;
DELETE FROM authorization_role WHERE user_type = '2' AND user_id = 1;
DELETE FROM authorization_rule WHERE role_id IN (
    SELECT role_id FROM authorization_role WHERE user_type = '2' AND user_id = 1
);
```

Then:
```bash
php bin/magento setup:upgrade
php bin/magento cache:flush
```

**B. Manually Grant Permissions**
```sql
-- Get role_id
SET @role_id = (SELECT role_id FROM authorization_role WHERE user_id = 1 AND user_type = '2');

-- Grant catalog permissions
INSERT INTO authorization_rule (role_id, resource_id, permission) VALUES
(@role_id, 'Magento_Catalog::products', 'allow'),
(@role_id, 'Magento_Catalog::categories', 'allow'),
(@role_id, 'Magento_Backend::content', 'allow');
```

---

### Debug Mode

Enable detailed logging for troubleshooting:

```bash
# Enable developer mode
php bin/magento deploy:mode:set developer

# Enable debug logging
php bin/magento config:set dev/debug/debug_logging 1

# Check logs
tail -f var/log/debug.log | grep -i "luigis\|graphql"
```

**Remember to disable developer mode in production:**
```bash
php bin/magento deploy:mode:set production
```

---

## Advanced Configuration

### Multi-Store Setup

If you have multiple store views, you need to configure Luigi's Box for each store:

#### 1. Activate Integration Once

The integration is shared across all stores, so activate it only once.

#### 2. Configure Per Store

Each store view can have a different tracker ID:

1. **Switch store view** in admin (top-left dropdown)
2. **Content → Design → Configuration**
3. **Edit** the specific store view
4. **Add store-specific script** in HTML Head

Example for multiple stores:
```
Store View 1 (US):
<script src="https://scripts.luigisbox.com/LBX-111111.js"></script>

Store View 2 (UK):
<script src="https://scripts.luigisbox.com/LBX-222222.js"></script>

Store View 3 (EU):
<script src="https://scripts.luigisbox.com/LBX-333333.js"></script>
```

#### 3. Data Sync Per Store

Luigi's Box will query GraphQL with `Store` header:

```bash
curl -X POST https://your-store.com/graphql \
  -H "Store: uk_store" \
  -H "Authorization: Bearer TOKEN" \
  -d '{"query":"..."}'
```

This ensures each store's catalog is synced separately.

---

### Custom Product Attributes

To sync custom product attributes to Luigi's Box:

#### 1. Ensure Attributes Are in GraphQL Schema

Magento automatically includes all product attributes in GraphQL. Verify:

```graphql
query {
  products(filter: {sku: {eq: "TEST-SKU"}}) {
    items {
      sku
      custom_attributes_luigi  # This includes ALL custom attributes
    }
  }
}
```

#### 2. Specific Attribute Queries

For specific custom attributes:

```graphql
query {
  products(filter: {sku: {eq: "TEST-SKU"}}) {
    items {
      sku
      my_custom_attribute  # Direct access if attribute code is my_custom_attribute
    }
  }
}
```

#### 3. Use in Luigi's Box

Once synced, use custom attributes in:
- Search filters
- Faceted navigation
- Recommendation logic
- Analytics segmentation

---

### Performance Optimization

#### 1. GraphQL Query Optimization

Default batch size: 200 products per query

To adjust (contact Luigi's Box support):
- Smaller batches (100): Faster response, more requests
- Larger batches (500): Fewer requests, slower response

#### 2. Caching Strategy

**Enable full-page cache (FPC):**
```bash
php bin/magento config:set system/full_page_cache/caching_application 2  # Varnish
# or
php bin/magento config:set system/full_page_cache/caching_application 1  # Built-in
```

**Cache the tracking script:**

In your CDN/proxy, cache Luigi's Box script with long TTL:
```
Cache-Control: public, max-age=86400
```

#### 3. Async Script Loading

For better page load performance:

```html
<script async src="https://scripts.luigisbox.com/LBX-XXXXXX.js"></script>
```

⚠️ Test recommendations display before deploying.

#### 4. Database Indexing

Ensure catalog indexes are up-to-date:

```bash
php bin/magento indexer:reindex catalog_product_attribute
php bin/magento indexer:reindex catalog_product_price
php bin/magento indexer:reindex cataloginventory_stock
```

#### 5. Flat Catalog (Optional)

Enable flat catalog for faster queries:

```bash
php bin/magento config:set catalog/frontend/flat_catalog_category 1
php bin/magento config:set catalog/frontend/flat_catalog_product 1
php bin/magento indexer:reindex catalog_category_flat
php bin/magento indexer:reindex catalog_product_flat
```

---

### Custom Tracking Events

The Luigi's Box script automatically tracks standard events. For custom events:

#### Add to Cart Event (Custom)

```javascript
// In your theme's JavaScript
if (typeof luigisbox !== 'undefined') {
    luigisbox.track('AddToCart', {
        item_id: 'PRODUCT-SKU',
        quantity: 1,
        price: 99.99,
        currency: 'USD'
    });
}
```

#### Purchase Event (Custom)

```javascript
// On order success page
if (typeof luigisbox !== 'undefined') {
    luigisbox.track('Purchase', {
        order_id: '000000123',
        total_price: 299.99,
        currency: 'USD',
        items: [
            {item_id: 'SKU-1', quantity: 2, price: 99.99},
            {item_id: 'SKU-2', quantity: 1, price: 100.00}
        ]
    });
}
```

---

### Webhook Integration (Future Feature)

**Current Status:** Version 1.3.1 does **NOT** support webhooks.

**Sync Method:** Polling (Luigi's Box periodically queries your store)

**Future Feature:** Real-time webhooks for instant product updates.

**Estimated Availability:** Contact Luigi's Box for roadmap.

---

## Support & Resources

### Luigi's Box Support

- **Email:** support@luigisbox.com
- **Documentation:** https://www.luigisbox.com/docs
- **Status Page:** https://status.luigisbox.com
- **Support Portal:** https://app.luigisbox.com/support

### Magento Extension Info

- **Package:** `luigisbox/magento2-integration`
- **Version:** 1.3.1
- **Repository:** (Contact Luigi's Box for GitHub link)
- **License:** Proprietary

### Useful Commands Reference

```bash
# Installation
composer require luigisbox/magento2-integration
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento cache:flush

# Module Management
php bin/magento module:status Luigisbox_Integration
php bin/magento module:enable Luigisbox_Integration
php bin/magento module:disable Luigisbox_Integration

# Debugging
tail -f var/log/system.log | grep -i luigis
tail -f var/log/exception.log | grep -i luigis
tail -f var/log/debug.log | grep -i "graphql\|webapi"

# Cache Management
php bin/magento cache:clean
php bin/magento cache:flush
rm -rf var/cache/* var/page_cache/* generated/*

# Recompilation
sudo rm -rf generated/*
php bin/magento setup:di:compile

# Verify Installation
mysql -u user -p database -e "SELECT * FROM integration WHERE name='LuigisboxIntegration'\G"
curl -s https://your-store.com/ | grep luigisbox
```

---

## Appendix

### Known Limitations

1. **No Real-time Webhooks** - Sync is polling-based (15-60 min intervals)
2. **Localhost Incompatible** - Requires publicly accessible server
3. **Single Integration** - Cannot activate multiple Luigi's Box projects per Magento instance
4. **No Built-in Rollback** - Manual revert required if issues occur
5. **NULL Handling Bug** - TypeError in LuigisboxScriptManagement.php (reported, pending fix)

### Changelog

**Version 1.3.1** (Current)
- ✅ GraphQL API support
- ✅ Multi-source inventory support
- ✅ Configurable/grouped/bundle product sync
- ⚠️ Known issue: TypeError on NULL config values

**Version 1.3.0**
- ✅ Initial GraphQL resolver implementation
- ✅ Custom attributes support

**Version 1.2.x**
- ✅ REST API endpoints
- ✅ OAuth 1.0a integration

### Glossary

- **OAuth** - Open Authorization standard for API authentication
- **GraphQL** - Query language for APIs (alternative to REST)
- **SKU** - Stock Keeping Unit (unique product identifier)
- **CSP** - Content Security Policy (browser security mechanism)
- **FPC** - Full Page Cache (Magento caching system)
- **DI** - Dependency Injection (Magento design pattern)
- **MSI** - Multi-Source Inventory (Magento inventory feature)

---

**Document Version:** 1.0  
**Last Updated:** November 4, 2025  
**Prepared By:** Luigi's Box Technical Documentation Team  
**Contact:** support@luigisbox.com

---

© 2025 Luigi's Box. All rights reserved.
