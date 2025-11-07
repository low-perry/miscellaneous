# Luigi's Box Magento 2 Integration Guide

## Overview

This guide walks you through integrating Luigi's Box with your Magento 2 store. The integration enables:

- **Search** - AI-powered product search with typo tolerance and synonyms
- **Product Recommendations** - Personalized product suggestions
- **Analytics** - Insights into customer search behavior
- **Automatic Data Sync** - Your catalog stays up-to-date with Luigi's Box

**Time to Complete:** 15-30 minutes  
**Prerequisites:** Magento 2.3.1+, PHP 7.4+, Admin access, Store accessible on the internet

## Phase 1: Installation

**Step 1: Install via Composer**

```bash
composer require luigisbox/magento2-integration
```

**Step 2: Enable the Module**

Run the following commands in sequence:

```bash
# Run database and schema upgrades
php bin/magento setup:upgrade

# Compile dependency injection configuration
php bin/magento setup:di:compile

# Deploy static content (CSS, JS, images)
php bin/magento setup:static-content:deploy -f

# Clear all caches
php bin/magento cache:flush
```

**Step 3: Verify Installation**

```bash
php bin/magento module:status Luigisbox_Integration
```

Expected output: `Module is enabled`

**In Magento Admin:**

1. Go to **System → Extensions → Integrations**
2. Look for "LuigisboxIntegration" in the list
3. Status should show `"Inactive"` (will activate in Phase 3)

## Phase 2: Network and Security

### Prerequisites Check

Before activating the integration, ensure your Magento store meets these requirements:

#### 1. Store Must Be Publicly Accessible

**Critical:** Luigi's Box needs to access your store's API from the internet.

**Will NOT work:**

- Localhost or local development environments
- Staging servers behind VPN or firewall
- Stores with IP restrictions blocking external access

**Will work:**

- Production stores with public URLs
- Staging servers accessible from the internet

**Test External Access:**

From a different network (mobile phone, external server):

```bash
curl -I https://your-store.com/
```

**Expected:** HTTP 200 or 405 response (not timeout or connection refused)

#### 2. Cloudflare Configuration

If your store uses **Cloudflare**, you need to configure bot protection settings:

> **⚠️ Important:** Having **Bot Fight Mode** enabled will make communication with Luigi's Box servers impossible. The integration will not work with Bot Fight Mode active.

**If Using Super Bot Fight Mode:**

You can create a skip rule to allow Luigi's Box traffic:

1. Log into Cloudflare dashboard
2. Go to **Security → Bots**
3. Click **Configure Super Bot Fight Mode**
4. Under **Skip Rules**, add a new rule with these conditions:
   - **IP Address** is in: `3.126.67.184`, `3.78.191.91`, `35.157.250.137`, `63.177.144.47`, `52.57.232.136`, `82.119.103.110`
   - **User Agent** contains: `LuigisBox`
   - Action: **Skip**

This allows Luigi's Box to access your store's API endpoints while keeping bot protection active for other traffic.

**Alternative Solution:**

Disable Bot Fight Mode entirely:

1. Go to **Security → Bots**
2. Turn off **Bot Fight Mode** or **Super Bot Fight Mode**

### Security Information

#### OAuth 1.0a Authentication

The integration uses OAuth 1.0a for secure API access:

- **No passwords stored** - Token-based authentication only
- **Encrypted communication** - All API calls over HTTPS
- **Read-only access** - Extension cannot modify products or orders
- **Revocable tokens** - Can disable integration anytime

#### What Luigi's Box Can Access

**Allowed Resources:**

- Product catalog (SKU, name, description, price, images)  
- Categories and category structure  
- Inventory levels and stock status  
- Product attributes (color, size, brand, custom attributes, etc.)  
- Store configuration (currency, timezone, URL, locale)  
- Parent-child product relationships (configurable, grouped, bundle products)  
- Multi-source inventory data (warehouse locations and quantities)

**NOT Allowed:**

- Customer personal information  
- Order history and purchase data  
- Payment information  
- Admin user accounts  
- System passwords or keys  

## Phase 3: Activation

### Before You Begin

**Important Prerequisites:**

- Extension is installed (Phase 1 complete)
- Store is accessible from the internet (Phase 2 complete)
- You have Magento admin credentials
- Store has at least a few test products (recommended)

**Estimated Time:** 5-10 minutes

### Step-by-Step Activation

#### Step 1: Access Integration Settings

1. Log into **Magento Admin Panel**
2. Navigate to **System → Extensions → Integrations**
3. Find **LuigisboxIntegration** in the list
4. Click **Activate** button

![Integration List](integration_activation_button.png)

#### Step 2: Confirm Activation

A popup appears asking "Are you sure you want to activate this integration?"

1. Click **Allow** to proceed
2. Magento generates OAuth credentials automatically
3. Integration status changes to **Active**

**Behind the Scenes:**

- Magento creates OAuth consumer and access token
- Stores credentials in `oauth_consumer` and `oauth_token` database tables
- Integration is now ready to accept API requests

#### Step 3: Authorize with Luigi's Box

After activation in Magento:

1. A **Luigi's Box authorization page** opens automatically
2. If it doesn't open, click the **Activate** button again
3. You'll be redirected to Luigi's Box Web Application

**First-Time Users:**

- You'll be prompted to create a Luigi's Box account
- Fill in: Store name, email, industry, monthly visitors
- Click **Create Account** or **Sign Up**

**Existing Users:**

- Log in with your Luigi's Box credentials

#### Step 4: Complete Authorization

On the Luigi's Box authorization page:

1. Review the permissions requested (product data access)
2. Click **Authorize** or **Allow Integration**
3. Luigi's Box confirms the connection
4. You're redirected to Luigi's Box Dashboard

#### Step 5: Verify Integration Status

**In Magento Admin:**

1. Go to **System → Extensions → Integrations**
2. **LuigisboxIntegration** should show:
   - Status: **Active**
   - Consumer Key: Generated (long alphanumeric string)

### Tracking Script Installation

After successful activation, Luigi's Box attempts to automatically inject its tracking script into your store.

#### What is the Tracking Script?

The tracking script enables:

- **Search behavior tracking** - What customers search for
- **Product view tracking** - Which products are viewed
- **Click-through tracking** - What search results are clicked
- **Conversion tracking** - Which searches lead to purchases

**Example script:**
```html
<script src="https://scripts.luigisbox.com/LBX-XXXXX.js"></script>
```

#### Automatic Injection (Default)

**How It Works:**

1. Luigi's Box sends a request to `/rest/V1/insert-script` API endpoint
2. Extension injects script into `design/head/includes` configuration
3. Script appears in `<head>` element on all pages

**Success Verification:**

1. Open your store homepage in a browser
2. View page source (right-click → View Page Source)
3. Search for "luigisbox" or "LBX-"
4. You should find: `<script src="https://scripts.luigisbox.com/LBX-XXXXX.js"></script>`

**If Script Appears:** Automatic injection succeeded! Skip to "Phase 4" or "Next Steps"

#### Manual Script Injection (Fallback)

**When Is This Needed?**

Automatic injection may fail if:

- Store uses custom theme that doesn't include configuration-based scripts
- Cache isn't cleared after activation
- Store configuration has been customized or overridden
- Headless/PWA implementations that don't use standard Magento templates

**Symptoms:**

- Script doesn't appear in page source after 10-15 minutes
- Luigi's Box dashboard shows "Script not detected"
- No tracking events in Luigi's Box analytics

**Manual Installation Steps:**

**Via Magento Admin**

1. In Magento Admin, go to **Content → Configuration**
2. Click **Edit** for your store view
3. Expand **HTML Head** section
4. In **Scripts and Style Sheets** field, add:
   ```html
   <script src="https://scripts.luigisbox.com/LBX-XXXXX.js"></script>
   ```
   (Replace `LBX-XXXXX` with your actual Luigi's Box tracker ID from the dashboard)
5. Click **Save Configuration**
6. Clear cache: `php bin/magento cache:flush`

**Verify Manual Installation:**

1. Open store homepage in **incognito/private window** (bypass cache)
2. View page source
3. Search for "luigisbox"
4. Script should appear in `<head>` section

**Check Luigi's Box Dashboard:**

1. Go to Luigi's Box Web Application
2. Navigate to **Settings → Installation** or **Analytics**
3. After 5-10 minutes, it should show "Script detected" ✅

**Still Not Working?**

- Check browser console for JavaScript errors
- Verify CSP headers allow scripts from `scripts.luigisbox.com`
- Test in different browsers
- Contact Luigi's Box support with your tracker ID

---

## Verification & Testing

### Verify Integration is Active

Check that the integration is working correctly:

**In Magento Admin:**

1. Go to **System → Extensions → Integrations**
2. **LuigisboxIntegration** should show Status: **Active**

**In Luigi's Box Dashboard:**

1. Go to **Catalog** section
2. Check product count (should be > 0 after initial sync completes)

### Verify Tracking Script

1. Open your store homepage in a browser
2. View page source (right-click → View Page Source)
3. Search for "luigisbox" or "LBX-"
4. You should find: `<script src="https://scripts.luigisbox.com/LBX-XXXXX.js"></script>`

If script doesn't appear, see "Manual Script Injection" section in Phase 3.

### Initial Sync

Initial sync begins automatically after activation.

**Typical Initial Sync Time:**

- Small catalog (< 1,000 products): 5-15 minutes
- Medium catalog (1,000-10,000 products): 15-60 minutes
- Large catalog (10,000+ products): 1-3 hours

**For detailed sync monitoring, see:** [Magento 2 Data Synchronization Guide](./magento_sync_guide.md)

---

## Next Steps

### Immediate (Post-Integration)

1. **Verify tracking script** is installed (see "Tracking Script Installation")
2. **Wait for initial sync** to complete (5-60 minutes typically)
3. **Test search** on your store frontend
4. **Review Luigi's Box dashboard** for product data

### First Week

1. **Configure search settings** in Luigi's Box dashboard:
   - Synonyms (e.g., "t-shirt" = "tshirt")
   - Stop words
   - Search filters and facets
   - Result ranking rules

2. **Set up product recommendations:**
   - Homepage recommendations
   - Product page cross-sells
   - Cart page upsells

3. **Monitor analytics:**
   - Top search queries
   - Zero-result searches
   - Click-through rates
   - Conversion rates

### Ongoing Maintenance

1. **Monitor data sync** (see [Data Synchronization Guide](./magento_sync_guide.md))
2. **Review search analytics** weekly
3. **Optimize search configuration** based on customer behavior
4. **Update extension** when new versions are released

---

## Additional Resources

### Documentation

- **Data Synchronization Guide:** [magento_sync_guide.md](./magento_sync_guide.md)
  - Detailed sync monitoring
  - SQL queries for verification
  - Troubleshooting sync issues

### Support Channels

**Luigi's Box Support:**

- **Email:** support@luigisbox.com
- **Support Portal:** [https://help.luigisbox.com/](https://help.luigisbox.com/)

## Glossary

### Key Terms

**Integration**
Connection between Magento and Luigi's Box that enables data synchronization and search functionality.

**OAuth 1.0a**
Industry-standard authentication protocol for secure API access without sharing passwords.

**Access Token**
Secret key that allows Luigi's Box to access your store's API.

**Tracking Script**
JavaScript code that tracks customer search behavior and enables Luigi's Box features.

**Sync / Synchronization**
Process of copying product data from Magento to Luigi's Box servers.

**Feed**
Collection of product data sent from Magento to Luigi's Box during sync.

