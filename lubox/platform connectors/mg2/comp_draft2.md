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
2. Go to **Security → Security Rules**
3. Click **Create rule**
4. Configure the rule:
   - **Rule name:** Allow Luigi's Box
   - **Expression:** 
     ```
     (ip.src in {3.126.67.184 3.78.191.91 35.157.250.137 63.177.144.47 52.57.232.136 82.119.103.110} and http.user_agent eq "LuigisBox")
     ```
   - **Choose action:** Skip
   - **WAF components to skip:**
     - All remaining custom rules
     - All rate limiting rules
     - All managed rules
     - All Super Bot Fight Mode rules
   - **More components to skip:**
     - User agent blocking
     - Rate limiting rules
     - Managed rules
   - **Rule placement:** First
5. Click **Save**

This allows Luigi's Box to access your store's API endpoints while keeping bot protection active for other traffic.

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

![Integration List](#)

#### Step 2: Confirm Activation

A menu appears displaying the API permissions needed.

1. Click **Allow** to proceed
2. Magento generates OAuth credentials automatically
3. Integration status changes to **Active**

**Behind the Scenes:**

- Magento creates OAuth consumer and access token
- Stores credentials in `oauth_consumer` and `oauth_token` database tables
- Integration is now ready to accept API requests

#### Step 3: Authorize with Luigi's Box

After clicking **Allow** in Magento, a **popup window** opens from Luigi's Box.

**In the Luigi's Box popup:**

1. You'll be prompted to either create a new account or log in with existing credentials
2. Follow the on-screen instructions to complete authentication
3. After successful login or account creation, you'll be redirected to the Luigi's Box Web Application

#### Step 4: Get Your Tracking Script

Once in the Luigi's Box dashboard:

1. You'll be presented with your **tracking script**
2. The script will look like: `<script src="https://scripts.luigisbox.com/LBX-XXXXX.js"></script>`
3. Note your tracker ID (the `LBX-XXXXX` part) for reference

The extension will attempt to inject this script automatically (see "Tracking Script Installation" section below).

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

Luigi's Box communicates with the Magento to automatically inject the tracking script into your store's `<head>` element on all pages.

**Success Verification:**

1. Open your store homepage in a browser
2. View page source (right-click → View Page Source)
3. Search for "luigisbox" or "LBX-"
4. You should find: `<script src="https://scripts.luigisbox.com/LBX-XXXXX.js"></script>`

**If Script Appears:** Automatic injection succeeded! Skip to "Next Steps"

#### Manual Script Injection (Fallback)

**When Is This Needed?**

Automatic injection may fail if:

- Store uses custom theme that doesn't include configuration-based scripts
- Cache isn't cleared after activation
- Store configuration has been customized or overridden

**Symptoms:**

- Script doesn't appear in page source after 10-15 minutes

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

## Verification & Testing

### Verify Integration is Active

Check that the integration is working correctly:

**In Magento Admin:**

1. Go to **System → Extensions → Integrations**
2. **LuigisboxIntegration** should show Status: **Active**

**In Luigi's Box Dashboard:**

1. Go to **Catalog Browser** section
2. Check product count (should be > 0 after initial sync completes)

### Verify Tracking Script

1. Open your store homepage in a browser
2. View page source (right-click → View Page Source)
3. Search for "luigisbox" or "LBX-"
4. You should find: `<script src="https://scripts.luigisbox.com/LBX-XXXXX.js"></script>`

If script doesn't appear, see "Manual Script Injection" section in Phase 3.

### Initial Sync

Initial sync begins automatically after activation.

**For detailed sync monitoring, see:** [Magento 2 Data Synchronization Guide](./magento_sync_guide.md)

---

## Next Steps

### Immediate (Post-Integration)

1. **Verify tracking script** is installed (see "Tracking Script Installation")
2. **Wait for initial sync** to complete (5-60 minutes typically)
3. **Test search** on your store frontend
4. **Review Luigi's Box dashboard** for product data

### Ongoing Maintenance

1. **Monitor data sync** (see [Data Synchronization Guide](magento_sync_guide.md))
2. **Review search analytics** weekly
3. **Optimize search configuration** based on customer behavior
4. **Update extension** when new versions are released

## Additional Resources

- [Data Synchronization Guide](magento_sync_guide.md)

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

