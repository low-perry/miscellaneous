# 🌐 Luigi's Box Magento 2 Integration Guide

**Complete guide for integrating Luigi's Box AI Search & Discovery with Magento 2 Open Source**

---

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Understanding the Integration Challenge](#understanding-the-integration-challenge)
4. [Phase I: Module Installation](#phase-i-module-installation)
5. [Phase II: Network & Security Configuration](#phase-ii-network--security-configuration)
6. [Phase III: Verification & Testing](#phase-iii-verification--testing)
7. [Phase IV: Activation](#phase-iv-activation)
8. [Troubleshooting](#troubleshooting)
9. [Security Considerations](#security-considerations)
10. [Rollback Procedure](#rollback-procedure)
11. [FAQ](#faq)

---

## Overview

This guide walks you through integrating Luigi's Box AI Search & Discovery extension into Magento 2, with specific focus on resolving the **"Store Not Found"** error caused by Basic Authentication blocking Luigi's Box API access.

**What You'll Accomplish:**
- Install the Luigi's Box module
- Configure network security to allow Luigi's Box API access
- Verify the integration is working correctly
- Activate and begin catalog synchronization

**Estimated Time:** 45-60 minutes  
**Skill Level:** Intermediate (requires server configuration knowledge)

---

## Prerequisites

Before beginning, ensure you have:

- ✅ Magento 2.4.x installed and running
- ✅ PHP 8.1+ and Composer installed
- ✅ Root or sudo access to your web server
- ✅ SSH access to the server
- ✅ Basic Auth currently enabled on your site (if not, Phase II may not be necessary)
- ✅ Backup of current Nginx/Apache configuration files
- ✅ Luigi's Box account created at [https://luigisbox.com](https://luigisbox.com)
- ✅ Access to Magento Admin Panel

**Tested Environments:**

| Component | Version | Status |
|-----------|---------|--------|
| Magento | 2.4.6, 2.4.7 | ✅ Tested |
| PHP | 8.1, 8.2, 8.3 | ✅ Tested |
| Nginx | 1.18+, 1.22+ | ✅ Tested |
| Apache | 2.4.x | ⚠️ Community Reported |
| Luigi's Box Extension | 2.x.x | ✅ Current |

---

## Understanding the Integration Challenge

### The Problem

Luigi's Box needs to access your Magento REST API endpoints for:
1. **Initial activation** (OAuth handshake)
2. **Catalog synchronization** (product data fetching)
3. **Ongoing updates** (inventory, pricing changes)

If your Magento installation has **Basic Authentication** enabled (common for staging sites or security-hardened production environments), Luigi's Box API requests will be blocked with a 401 Unauthorized response, resulting in the **"Store Not Found"** error during activation.

### The Solution

We'll configure your web server to **conditionally bypass Basic Authentication** for requests from Luigi's Box by whitelisting:
- **User-Agent:** `LuigisBox` (header sent by Luigi's Box service)
- **Static IP Addresses:** Five dedicated IPs used by Luigi's Box for synchronization

### Architecture Overview

```
Luigi's Box Service
         ↓
[User-Agent: LuigisBox]
         ↓
    CDN/WAF Layer (if present)
         ↓
    Web Server (Nginx/Apache)
         ↓
  [Auth Bypass Logic Applied]
         ↓
    Magento REST API
         ↓
   Product/Catalog Data
```

---

## Phase I: Module Installation

All commands must be run from your Magento 2 root directory (e.g., `/home/lowperry/luigis-magento/`).

**Important:** Run these commands as your Magento user (typically NOT root).

### Step 1: Install the Module

```bash
# Switch to magento user if needed
sudo -u magento bash

# Navigate to Magento root
cd /home/lowperry/luigis-magento/

# Install via Composer
composer require luigisbox/magento2-integration
```

**Expected Output:**
```
Package operations: 1 install, 0 updates, 0 removals
  - Installing luigisbox/magento2-integration (vX.X.X): Extracting archive
Writing lock file
Generating autoload files
```

### Step 2: Register the Module

```bash
php bin/magento setup:upgrade
```

**Expected Output:**
```
Cache cleared successfully
Module 'Luigisbox_Integration' has been enabled
Schema creation/updates:
Module 'Luigisbox_Integration':
...
```

### Step 3: Compile Code

```bash
php bin/magento setup:di:compile
```

**Expected Output:**
```
Compilation was started.
...
Generated code and dependency injection configuration successfully.
```

### Step 4: Deploy Static Content

```bash
php bin/magento setup:static-content:deploy -f
```

**Expected Output:**
```
Deploying static content for areas: frontend, adminhtml
...
New version of deployed files: 1234567890
```

### Step 5: Flush Cache

```bash
php bin/magento cache:flush
```

**Expected Output:**
```
Flushed cache types:
config
layout
...
```

**✅ Phase I Complete!** The module is now installed and registered with Magento.

---

## Phase II: Network & Security Configuration

This is the **critical phase** that resolves the "Store Not Found" error.

### Required Network Parameters

| Parameter | Purpose | Value |
|-----------|---------|-------|
| **User-Agent Header** | Activation & Sync Bypass | `LuigisBox` |
| **Static IP Addresses** | Catalog Synchronization | `3.126.67.184`<br>`3.78.191.91`<br>`35.157.250.137`<br>`63.177.144.47`<br>`82.119.103.110` |

---

### Configuration Option A: Nginx (Recommended)

#### Step 1: Add Map Variables to nginx.conf

Open your main Nginx configuration file:

```bash
sudo nano /etc/nginx/nginx.conf
```

**Locate the `http { }` block** and add the following map variables **before any `include` statements** that load site configurations:

```nginx
http {
    # ... existing configuration ...

    # ===== LUIGI'S BOX AUTHENTICATION BYPASS MAPS =====
    
    # Map 1: Check if request comes from Luigi's Box IP addresses
    map $remote_addr $ip_whitelisted {
        default "Restricted Area";
        "3.126.67.184"    off;
        "3.78.191.91"     off;
        "35.157.250.137"  off;
        "63.177.144.47"   off;
        "82.119.103.110"  off;
    }

    # Map 2: Check if request has Luigi's Box User-Agent
    map $http_user_agent $ua_whitelisted {
        default "Restricted Area";
        "~*LuigisBox" off;  # Case-insensitive match
    }

    # Map 3: Combined logic - Allow if EITHER IP OR User-Agent matches
    map "$ip_whitelisted$ua_whitelisted" $allow_sync {
        "~*off" off;  # If either check returned "off", bypass auth
        default "Restricted Area";
    }
    
    # ===== END LUIGI'S BOX CONFIGURATION =====

    # ... rest of configuration ...
    include /etc/nginx/sites-enabled/*;  # Site configs loaded here
}
```

**Save and close the file** (Ctrl+X, Y, Enter in nano).

#### Step 2: Apply Bypass in Your Site Configuration

Open your Magento site configuration:

```bash
sudo nano /etc/nginx/sites-available/magento.conf
```

**Find the PHP location block** (usually `location ~ \.php$`) and modify it:

```nginx
location ~ \.php$ {
    try_files $uri =404;

    # CRITICAL: Apply conditional Basic Auth
    auth_basic $allow_sync;
    
    # IMPORTANT: Keep this directive! It's used when $allow_sync != "off"
    # Only comment out if you want to completely disable Basic Auth
    auth_basic_user_file /path/to/your/.htpasswd;
    
    fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
    fastcgi_index index.php;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    include fastcgi_params;
}
```

**Important Notes:**
- `auth_basic $allow_sync;` - This enables dynamic auth based on the map variables
- Keep `auth_basic_user_file` - It's still needed for non-whitelisted requests
- Adjust PHP-FPM socket path if yours differs (`php8.1-fpm.sock`, `php8.3-fpm.sock`, etc.)

#### Step 3: Test and Reload Nginx

```bash
# Test configuration syntax
sudo nginx -t

# If test passes, reload Nginx
sudo systemctl reload nginx
```

**Expected Output:**
```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

**📚 Reference:** [Nginx Conditional Basic Auth Documentation](http://nginx.org/en/docs/http/ngx_http_auth_basic_module.html)

---

### Configuration Option B: Apache

If your server uses Apache instead of Nginx, configure the bypass in your `.htaccess` file.

#### Step 1: Edit .htaccess

Open your Magento root `.htaccess` file:

```bash
nano /home/lowperry/luigis-magento/.htaccess
```

#### Step 2: Add Luigi's Box Bypass Rules

Add this section (recommended placement: near the top, after any RewriteEngine directives):

```apache
# ===== LUIGI'S BOX BASIC AUTH BYPASS =====

# Set environment variable if User-Agent matches Luigi's Box
SetEnvIf User-Agent "LuigisBox" AllowLuigisBox

# Apply authentication bypass to REST and SOAP API endpoints
<LocationMatch "^/(rest|soap)/">
    # Enable Basic Authentication
    AuthType Basic
    AuthName "Restricted API Access"
    AuthUserFile /home/lowperry/.htpasswd
    
    # CRITICAL: Use "Satisfy Any" to allow access if EITHER condition is met:
    # 1. Valid username/password OR
    # 2. Whitelisted IP/User-Agent
    Satisfy Any
    
    # Condition 1: Require valid user credentials
    Require valid-user
    
    # Condition 2: Allow Luigi's Box User-Agent
    Require env AllowLuigisBox
    
    # Condition 3: Allow Luigi's Box IP addresses
    Require ip 3.126.67.184 3.78.191.91 35.157.250.137 63.177.144.47 82.119.103.110
</LocationMatch>

# ===== END LUIGI'S BOX CONFIGURATION =====
```

**Important Notes:**
- `<LocationMatch>` targets only `/rest/` and `/soap/` endpoints (not all .php files)
- Update `AuthUserFile` path to match your `.htpasswd` location
- `Satisfy Any` means access is granted if **any** of the `Require` conditions pass

#### Step 3: Test Apache Configuration

```bash
# Test configuration
sudo apachectl configtest

# If test passes, restart Apache
sudo systemctl restart apache2
```

**Expected Output:**
```
Syntax OK
```

**📚 Reference:** [Apache mod_authz_core Documentation](https://httpd.apache.org/docs/2.4/mod/mod_authz_core.html)

---

### Configuration Option C: CDN/WAF Layer

If your site is behind a CDN (Cloudflare, Fastly, AWS CloudFront) or WAF, you must configure this layer to pass Luigi's Box requests to your origin server.

#### Cloudflare Example

1. Log in to Cloudflare Dashboard
2. Select your domain
3. Navigate to **Security → WAF → Custom Rules**
4. Click **Create Rule**
5. Configure the rule:

**Rule Name:** `Luigi's Box API Access`

**Expression (use Expression Builder or Edit expression):**
```
(http.user_agent contains "LuigisBox") or 
(ip.src in {3.126.67.184 3.78.191.91 35.157.250.137 63.177.144.47 82.119.103.110})
```

**Then, Choose action:** Skip
- ✅ Skip all remaining custom rules
- ✅ Skip Rate Limiting
- ✅ Skip Super Bot Fight Mode
- ✅ Skip User Agent Blocking

6. **Priority:** Set to 1 (highest priority)
7. Click **Deploy**

**📚 Reference:** [Cloudflare Custom WAF Rules](https://developers.cloudflare.com/waf/custom-rules/)

#### AWS WAF Example

1. Open AWS WAF Console
2. Select your Web ACL
3. Click **Rules → Add rules → Add my own rules and rule groups**
4. Rule type: **IP set** or **Regular rule**

**For IP-based rule:**
- Create IP set with the 5 Luigi's Box IPs
- Action: **Allow**
- Priority: Set to 1

**For User-Agent rule:**
- Create rule with condition: `User-Agent` header contains `LuigisBox`
- Action: **Allow**
- Priority: Set to 1

#### Generic CDN/WAF Guidance

For other CDN/WAF providers, create a rule with:
- **Condition:** User-Agent contains "LuigisBox" OR Source IP in whitelist
- **Action:** Allow / Skip security checks
- **Priority:** Highest available

---

### Configuration Option D: Local Development (Tunneling)

**Only required if developing locally** (WSL, MAMP, Docker on localhost).

Luigi's Box needs a publicly accessible URL for the OAuth callback. Use a tunneling service:

#### Using ngrok (Recommended)

1. Install ngrok: [https://ngrok.com/download](https://ngrok.com/download)

2. Start tunnel:
```bash
ngrok http 80
# Or specify your local port, e.g., ngrok http 8080
```

3. Copy the public URL (e.g., `https://abc123.ngrok.io`)

4. Update Magento base URLs:
```bash
php bin/magento config:set web/secure/base_url "https://abc123.ngrok.io/"
php bin/magento config:set web/unsecure/base_url "https://abc123.ngrok.io/"
php bin/magento cache:flush
```

**⚠️ Important:** The ngrok URL changes each time you restart it (unless you have a paid account). You'll need to update Magento URLs each time.

---

## Phase III: Verification & Testing

**Critical:** Test your configuration BEFORE attempting activation.

### Test 1: Basic Auth Bypass via User-Agent

```bash
# This should NOT prompt for credentials and should return JSON or a valid HTTP response
curl -A "LuigisBox" https://your-magento-domain.com/rest/V1/

# Expected: HTTP 200 with JSON response (even if empty array)
# Failure: HTTP 401 Unauthorized or credential prompt
```

### Test 2: Basic Auth Still Active for Normal Requests

```bash
# This SHOULD prompt for credentials
curl https://your-magento-domain.com/rest/V1/

# Expected: HTTP 401 Unauthorized
# Failure: HTTP 200 (means Basic Auth is completely disabled)
```

### Test 3: Nginx Configuration Validation

```bash
# Test Nginx syntax
sudo nginx -t

# Check if map variables are loaded (add temporarily to your site config for debugging)
# Add this inside your server {} block:
# add_header X-Auth-Bypass $allow_sync always;
# Then check response headers in browser dev tools
```

### Test 4: Check Nginx/Apache Error Logs

```bash
# Nginx
sudo tail -f /var/log/nginx/error.log

# Apache
sudo tail -f /var/log/apache2/error.log

# Look for authentication-related errors while testing
```

### Test 5: Verify Luigi's Box Can Access Endpoints

If you have access to a server with one of the whitelisted IPs, test from there:

```bash
# Test from whitelisted IP
curl https://your-magento-domain.com/rest/V1/luigisbox/products

# Expected: HTTP 200 with product data
```

**✅ All tests passing?** Proceed to Phase IV: Activation

**❌ Tests failing?** See [Troubleshooting](#troubleshooting) section below.

---

## Phase IV: Activation

With network configuration complete and verified, activate the integration:

### Step 1: Access Magento Admin

1. Log in to your Magento Admin Panel
2. Use your production domain (or ngrok URL if testing locally)

### Step 2: Navigate to Integrations

1. Go to **System → Extensions → Integrations**
2. Or directly navigate to: `https://your-domain.com/admin/admin/integration/`

### Step 3: Activate Luigi's Box

1. Locate **LuigisboxIntegration** in the list
2. Click **Activate** in the Actions column
3. A pop-up window will appear from Luigi's Box
4. Fill out the required contact information form
5. Click **Allow** to grant API permissions
6. Wait for the initial catalog sync to complete

**Expected Result:**
- Status changes to "Active"
- You receive a confirmation email from Luigi's Box
- Catalog sync begins (check Luigi's Box dashboard for progress)

**✅ Phase IV Complete!** Luigi's Box is now integrated and syncing your catalog.

---

## Troubleshooting

### Common Issues & Solutions

| Symptom | Likely Cause | Solution |
|---------|--------------|----------|
| **"Store Not Found" during activation** | Basic Auth still blocking API | 1. Verify `auth_basic $allow_sync;` is in correct location block<br>2. Check map variables are in `nginx.conf` before site includes<br>3. Run `nginx -t` and reload<br>4. Test with curl commands from Phase III |
| **Nginx won't reload after config change** | Syntax error in nginx.conf | 1. Run `sudo nginx -t` to see exact error<br>2. Check for missing semicolons, brackets<br>3. Verify map blocks are inside `http {}` context |
| **Works with curl but fails in Luigi's Box** | User-Agent case sensitivity or CDN blocking | 1. Verify User-Agent regex: `~*LuigisBox` (case-insensitive)<br>2. Check CDN/WAF rules (Cloudflare, etc.)<br>3. Review CDN logs for blocked requests |
| **Initial sync fails but activation works** | Firewall blocking Luigi's Box IPs | 1. Check server firewall: `sudo iptables -L`<br>2. Check cloud security groups (AWS/GCP/Azure)<br>3. Verify all 5 IPs are whitelisted |
| **403 Forbidden for all requests** | `auth_basic_user_file` removed or misconfigured | 1. Verify `auth_basic_user_file` directive is present<br>2. Check file path is correct<br>3. Verify file permissions: `chmod 644 .htpasswd` |
| **Activation popup doesn't appear** | Browser popup blocker | 1. Allow popups for your admin domain<br>2. Try different browser<br>3. Disable browser extensions temporarily |
| **"Invalid credentials" during normal admin access** | Basic Auth completely disabled | 1. Check `$allow_sync` variable only returns "off" for Luigi's Box<br>2. Test with normal browser (should prompt for credentials) |

### Advanced Debugging

#### Enable Nginx Debug Headers (Temporarily)

Add to your `server {}` block:

```nginx
add_header X-IP-Whitelisted $ip_whitelisted always;
add_header X-UA-Whitelisted $ua_whitelisted always;
add_header X-Allow-Sync $allow_sync always;
```

Then check response headers in browser DevTools Network tab.

**⚠️ Remove these headers after debugging** (they expose internal logic).

#### Check PHP-FPM Logs

```bash
sudo tail -f /var/log/php8.2-fpm.log
```

Look for authentication-related errors.

#### Verify Magento REST API is Working

```bash
# Test basic API functionality
curl -X GET https://your-domain.com/rest/V1/store/storeConfigs

# Should return store configuration JSON
```

#### Behind Load Balancer?

If `$remote_addr` shows your load balancer IP instead of client IP:

```nginx
# Use the forwarded IP instead
map $http_x_forwarded_for $ip_whitelisted {
    default "Restricted Area";
    "~*3\.126\.67\.184" off;
    # ... other IPs ...
}
```

---

## Security Considerations

### ⚠️ Important Security Warnings

This configuration creates authentication bypass rules. Be aware of these risks:

#### Risk 1: User-Agent Spoofing

**Issue:** Anyone can set `User-Agent: LuigisBox` in their browser/tool to bypass authentication.

**Mitigation:**
- Use IP-based validation in addition to User-Agent
- Monitor access logs for suspicious activity
- Consider requiring BOTH IP AND User-Agent (see below)

#### Risk 2: Static IP Changes

**Issue:** If Luigi's Box changes their IPs without notice, sync will break.

**Mitigation:**
- Subscribe to Luigi's Box service updates
- Monitor sync health in Luigi's Box dashboard
- Set up alerts for failed syncs

#### Risk 3: Overly Broad Bypass

**Issue:** The Apache example affects all API endpoints, not just Luigi's Box.

**Mitigation:**
- Use `<LocationMatch>` to target only necessary endpoints
- Regularly audit access logs
- Implement rate limiting on API endpoints

### Recommended: Stricter Security (AND Logic)

For maximum security, require **BOTH** IP and User-Agent to match:

```nginx
# In /etc/nginx/nginx.conf, replace the combined map with:
map "$ip_whitelisted$ua_whitelisted" $allow_sync {
    "offoff" off;  # BOTH must return "off" to bypass auth
    default "Restricted Area";
}
```

This prevents User-Agent spoofing from non-whitelisted IPs.

### Monitoring Recommendations

Set up alerts for:
- Failed authentication attempts on `/rest/` endpoints
- Unusual traffic volume from whitelisted IPs
- 401/403 errors in Luigi's Box dashboard
- Successful API calls with Luigi's Box User-Agent from non-whitelisted IPs

### Logging

Add custom logging for bypass events:

```nginx
# In your server block
if ($allow_sync = "off") {
    access_log /var/log/nginx/luigisbox-bypass.log;
}
```

Review this log regularly for suspicious patterns.

---

## Rollback Procedure

If the integration fails or causes issues, follow these steps to safely revert:

### Step 1: Remove the Luigi's Box Module

```bash
cd /home/lowperry/luigis-magento/

# Remove via Composer
composer remove luigisbox/magento2-integration

# Update Magento
php bin/magento setup:upgrade
php bin/magento cache:flush
```

### Step 2: Restore Server Configuration

#### For Nginx:

```bash
# Restore backup (you made a backup, right?)
sudo cp /etc/nginx/nginx.conf.backup /etc/nginx/nginx.conf
sudo cp /etc/nginx/sites-available/magento.conf.backup /etc/nginx/sites-available/magento.conf

# Or manually remove the Luigi's Box sections:
sudo nano /etc/nginx/nginx.conf
# Delete the three map blocks

sudo nano /etc/nginx/sites-available/magento.conf
# Change: auth_basic $allow_sync;
# Back to: auth_basic "Restricted Area";

# Test and reload
sudo nginx -t
sudo systemctl reload nginx
```

#### For Apache:

```bash
# Remove Luigi's Box section from .htaccess
nano /home/lowperry/luigis-magento/.htaccess
# Delete the Luigi's Box bypass block

# Restart Apache
sudo systemctl restart apache2
```

### Step 3: Restore CDN/WAF Rules

- Log in to your CDN/WAF dashboard
- Delete or disable the Luigi's Box bypass rule
- Clear CDN cache if applicable

### Step 4: Verify Normal Operation

```bash
# Test that Basic Auth is working normally
curl https://your-magento-domain.com/rest/V1/

# Expected: HTTP 401 Unauthorized
```

**✅ Rollback Complete!** Your site should be back to its previous state.

---

## FAQ

### Q: Do I need this guide if I don't have Basic Auth enabled?

**A:** No. If your Magento site doesn't use Basic Authentication, you can skip Phase II entirely. Just complete Phase I (Installation) and Phase IV (Activation).

### Q: Can I use this for Magento Commerce (Adobe Commerce)?

**A:** This guide is written for Magento Open Source, but the concepts apply to Adobe Commerce as well. The main difference may be in directory structure and deployment processes.

### Q: How often does Luigi's Box sync my catalog?

**A:** Initial sync happens immediately after activation. Ongoing sync frequency depends on your Luigi's Box plan and configuration. Check your Luigi's Box dashboard for sync settings.

### Q: Will this affect my site's performance?

**A:** The authentication bypass logic has negligible performance impact. The map operations in Nginx happen in memory and are extremely fast. Luigi's Box API calls are asynchronous and won't block your storefront.

### Q: Can I whitelist additional IPs or User-Agents?

**A:** Yes. Simply add them to the appropriate map blocks:

```nginx
map $remote_addr $ip_whitelisted {
    default "Restricted Area";
    "3.126.67.184" off;
    # Add your custom IP here:
    "203.0.113.0" off;
}
```

### Q: What if Luigi's Box changes their IPs?

**A:** You'll need to update your configuration with the new IPs. Subscribe to Luigi's Box updates/announcements to stay informed.

### Q: Is this secure for production?

**A:** Yes, when implemented correctly with BOTH IP and User-Agent validation. However, always follow security best practices: monitor logs, use HTTPS, keep Magento updated, and regularly audit access patterns.

### Q: Can I test this in staging first?

**A:** Absolutely recommended! Set up the same configuration in your staging environment and test thoroughly before deploying to production.

### Q: What happens if the initial sync fails?

**A:** Check the Luigi's Box dashboard for error messages. Common causes:
- Network timeout (large catalogs take time)
- API rate limiting
- Product data issues (missing required attributes)

Luigi's Box typically retries failed syncs automatically.

### Q: Do I need to do anything for ongoing maintenance?

**A:** Minimal maintenance required:
- Monitor sync status in Luigi's Box dashboard
- Review server logs occasionally for errors
- Keep the Luigi's Box extension updated via Composer
- Verify configuration after Magento upgrades

---

## Additional Resources

- **Luigi's Box Documentation:** [https://docs.luigisbox.com](https://docs.luigisbox.com)
- **Luigi's Box Support:** [support@luigisbox.com](mailto:support@luigisbox.com)
- **Magento DevDocs:** [https://devdocs.magento.com](https://devdocs.magento.com)
- **Nginx Documentation:** [http://nginx.org/en/docs/](http://nginx.org/en/docs/)
- **Apache Documentation:** [https://httpd.apache.org/docs/](https://httpd.apache.org/docs/)

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 2.0 | 2025-10-27 | Complete rewrite with verification, troubleshooting, and security sections |
| 1.0 | [Original] | Initial documentation |

---

**Need Help?** If you encounter issues not covered in this guide, contact Luigi's Box support with:
- Your Magento version
- Web server type and version (Nginx/Apache)
- Error messages from logs
- Results of the curl tests from Phase III