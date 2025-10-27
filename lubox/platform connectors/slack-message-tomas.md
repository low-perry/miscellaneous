# Slack Message Draft for Tomas

---

Hey @Tomas 👋

I've been experimenting with the Luigi's Box Magento 2 integration on my local setup and hit some technical roadblocks I need to dig deeper into before documenting Phase 2.

## What's Phase 2?

**TL;DR:** It's the network/security configuration that allows Luigi's Box to access our customers' Magento REST APIs when Basic Auth is enabled.

**The Problem:**
- Many customers run Basic Auth on staging sites or production for security
- Luigi's Box needs to hit `/rest/V1/*` endpoints for:
  - OAuth handshake during activation
  - Catalog sync (product data fetching)
  - Ongoing inventory/price updates
- Basic Auth blocks these requests → "Store Not Found" error

**The Solution (in theory):**
Conditionally bypass Basic Auth for Luigi's Box by whitelisting:
- **User-Agent:** `LuigisBox`
- **5 Static IPs:** `3.126.67.184`, `3.78.191.91`, `35.157.250.137`, `63.177.144.47`, `82.119.103.110`

---

## Current Roadblocks & What I Need to Experiment With

### 1️⃣ **Nginx Configuration - Multiple Approaches Possible**

I've got a working proof-of-concept using map variables, but there are edge cases I need to validate:

**Working PoC (nginx.conf + site config):**
```nginx
# In /etc/nginx/nginx.conf (http block):
map $http_user_agent $ua_whitelisted {
    default "Restricted";
    "~*LuigisBox" off;
}

# In site config:
location ~ \.php$ {
    auth_basic $ua_whitelisted;
    auth_basic_user_file /path/.htpasswd;
    # ... fastcgi stuff
}
```

**Questions I need to answer:**
- ✅ Does this work with `$remote_addr` for IP whitelisting, or do I need `$http_x_forwarded_for` for load balancer scenarios?
- ✅ Should we use OR logic (IP **or** User-Agent) vs AND logic (IP **and** User-Agent) for better security?
- ✅ Does `auth_basic_user_file` need to stay in the config, or does setting `auth_basic off` conflict with it? (I'm getting inconsistent behavior)
- ✅ How do we handle nginx.conf files that are split across multiple includes? (Some customers have modular configs)

**Need to test:**
- Behind HAProxy/AWS ALB (does `$remote_addr` show the LB IP instead of client?)
- With Cloudflare proxy enabled (IP vs CF-Connecting-IP header)
- Magento Cloud environments (different nginx structure)

---

### 2️⃣ **Apache Configuration - Less Familiar Territory**

I've drafted an Apache example using `SetEnvIf` + `Satisfy Any`, but I haven't tested it in a real environment:

**Draft config (.htaccess):**
```apache
SetEnvIf User-Agent "LuigisBox" AllowLuigisBox

<LocationMatch "^/(rest|soap)/">
    AuthType Basic
    AuthName "Restricted"
    AuthUserFile /path/.htpasswd
    Satisfy Any
    Require valid-user
    Require env AllowLuigisBox
    Require ip 3.126.67.184 3.78.191.91 ...
</LocationMatch>
```

**Questions I need to answer:**
- ✅ Does `<LocationMatch>` work in `.htaccess` or only in virtual host configs?
- ✅ Is `Satisfy Any` the right approach, or should we use `<RequireAny>` (Apache 2.4+ syntax)?
- ✅ How does this interact with Magento's default `.htaccess` rules?
- ✅ What if customers have Apache behind nginx (reverse proxy setup)?

**Need to test:**
- Fresh Magento install on Apache 2.4
- With/without mod_rewrite enabled
- Nested `.htaccess` behavior (root vs pub/ directory)

---

### 3️⃣ **CDN/WAF Layer - Undocumented Blockers**

I know conceptually we need to whitelist at the CDN/WAF level, but I don't have hands-on experience with all the platforms customers use:

**Platforms to document:**
- ✅ **Cloudflare:** Custom WAF rules (straightforward, tested in my account)
- ❓ **AWS WAF:** IP sets + rules (need to spin up test environment)
- ❓ **Fastly:** VCL configuration (no access to test account)
- ❓ **Imperva/Incapsula:** (enterprise, might need customer example)
- ❓ **Sucuri:** (common on WP, seen on Magento too)

**Questions:**
- Do all CDNs preserve the `User-Agent` header, or do some modify it?
- How do we instruct customers to check if their CDN is blocking before diving into server config?
- Should we provide curl test commands that mimic Luigi's Box requests?

---

### 4️⃣ **Verification & Testing - No Clear Way to Validate**

Right now, customers only find out it's broken when activation fails. We need proactive tests:

**What I want to document:**
```bash
# Test 1: Verify Luigi's Box can access API
curl -A "LuigisBox" https://customer-site.com/rest/V1/products
# Expected: 200 OK (or 404 if endpoint doesn't exist, but NOT 401)

# Test 2: Verify Basic Auth still active for others
curl https://customer-site.com/rest/V1/products
# Expected: 401 Unauthorized
```

**But I need to test:**
- What's the exact endpoint Luigi's Box hits during activation? (`/rest/V1/integration/...`?)
- Can we provide a test script customers can run before going live?
- How do we simulate Luigi's Box requests from their actual IPs? (Can't easily test from those IPs)

---

### 5️⃣ **Edge Cases I've Identified But Haven't Solved**

- **Local dev (ngrok/localtunnel):** OAuth callback needs public URL, how do we handle localhost setups?
- **Multi-store setups:** Does Luigi's Box need access to all store codes/domains?
- **Magento Commerce Cloud:** Their nginx config is managed, can customers even edit it?
- **Basic Auth + 2FA:** Does Magento admin 2FA interfere with API calls?
- **Rate limiting:** Should we warn customers to whitelist Luigi's Box from rate limiters (fail2ban, nginx limit_req)?

---

## What I Need

**Time to experiment more thoroughly:**
- Spin up test environments for Apache + Nginx scenarios
- Test behind different proxy/LB configurations
- Document exact error messages at each failure point
- Create verification scripts customers can run

**Access/Resources (nice to have):**
- Luigi's Box staging API access to test real OAuth flow
- Sample error logs from customers who hit this issue
- AWS account to test WAF configuration
- Confirmation from Luigi's Box on:
  - Are those 5 IPs static forever?
  - Exact User-Agent string format (case-sensitive? versioned?)
  - Which specific API endpoints they hit

**Estimated time:** ~2-3 more days of experimentation + 1 day to write comprehensive docs with all scenarios

---

## Current Status

✅ **Phase 1 (Module Installation):** Documented and tested  
🟡 **Phase 2 (Network Config):** Working PoC, needs edge case validation  
⏸️ **Phase 3 (Activation):** Can't test without Phase 2 being solid  

I want to make sure the guide covers 90% of customer environments, not just the happy path. Better to take extra time now than deal with support tickets later.

Thoughts? Should I prioritize certain scenarios over others?

---

**Attachments:**
- [Draft Nginx config snippet]
- [Draft Apache config snippet]
- [Test curl commands document]