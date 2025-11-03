# New Magento 2 Project Setup Progress

**Date:** November 3, 2025  
**Purpose:** Create fresh Magento 2 installation to test Luigisbox extension with database monitoring

---

## ✅ Completed Steps

### 1. Database Setup
- [x] Database created: `mg_luigis_test_db`
- [x] User created: `mg_luigis_user`
- [x] Permissions granted
- [x] Authentication: `mysql_native_password`

### 2. Old Site Disabled
- [x] Disabled: `/etc/nginx/sites-enabled/magento2-luigis-nginx.conf`
- [x] Old project still exists at: `/home/lowperry/magento2-luigis-nginx` (untouched)

### 3. New Nginx Configuration Created
- [x] File: `/etc/nginx/sites-available/magento2-luigis-test.conf`
- [x] Domain: `dariohaxhiraj.online` (using existing domain)
- [x] Root: `/home/lowperry/magento2-luigis-test/pub`

### 4. Monitoring Scripts Ready
- [x] `capture-db-state-before.sh` - created and executable
- [x] `capture-db-state-after.sh` - created and executable  
- [x] `compare-db-changes.sh` - created and executable
- [x] Location: `/home/lowperry/magento2-luigis-nginx/findings/`

---

## 🔄 In Progress

### 5. Magento 2 Installation
- [⏳] Running: `composer create-project magento/project-community-edition magento2-luigis-test`
- [⏳] Version: Magento 2.4.8-p3
- [⏳] Location: `/home/lowperry/magento2-luigis-test`
- [ ] Waiting for Composer to finish...

---

## 📋 Next Steps (After Composer Finishes)

### 6. Set Permissions
```bash
cd /home/lowperry/magento2-luigis-test
find var generated vendor pub/static pub/media app/etc -type f -exec chmod g+w {} +
find var generated vendor pub/static pub/media app/etc -type d -exec chmod g+ws {} +
chown -R :www-data .
chmod u+x bin/magento
```

### 7. Enable Nginx Site
```bash
sudo nginx -t
sudo systemctl reload nginx
```

### 8. Install Magento
```bash
cd /home/lowperry/magento2-luigis-test

php bin/magento setup:install \
  --base-url="https://dariohaxhiraj.online/" \
  --db-host="localhost" \
  --db-name="mg_luigis_test_db" \
  --db-user="mg_luigis_user" \
  --db-password='Magento!Test2025' \
  --admin-user="luigis_admin" \
  --admin-password="TestPassword123" \
  --admin-email="dariohaxhiraj@gmail.com" \
  --admin-firstname="Luigis" \
  --admin-lastname="Test" \
  --backend-frontname="admin" \
  --search-engine="opensearch" \
  --opensearch-host="localhost" \
  --opensearch-port="9200"
```

### 9. Post-Installation Setup
```bash
# Create findings directory
mkdir -p /home/lowperry/magento2-luigis-test/findings/db-snapshots

# Copy monitoring scripts
cd /home/lowperry/magento2-luigis-test
cp /home/lowperry/magento2-luigis-nginx/findings/capture-db-state-before.sh ./findings/
cp /home/lowperry/magento2-luigis-nginx/findings/capture-db-state-after.sh ./findings/
cp /home/lowperry/magento2-luigis-nginx/findings/compare-db-changes.sh ./findings/
chmod +x ./findings/*.sh

# Deploy static content and compile
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy -f
php bin/magento indexer:reindex
php bin/magento cache:flush
```

### 10. Capture BEFORE Database State
```bash
cd /home/lowperry/magento2-luigis-test
bash findings/capture-db-state-before.sh
```

This will create timestamped files in `findings/db-snapshots/`:
- `before_[timestamp].log` - Complete log
- `tables_before_[timestamp].txt` - All table names
- `oauth_consumers_before_[timestamp].txt` - OAuth consumers
- `oauth_tokens_before_[timestamp].txt` - OAuth tokens
- `integrations_before_[timestamp].txt` - Integrations
- `admin_users_before_[timestamp].txt` - Admin users
- `config_before_[timestamp].txt` - API-related config
- `grants_before_[timestamp].txt` - Database permissions
- `schema_before_[timestamp].sql` - Full database schema

### 11. Install Luigisbox Extension
```bash
# Follow Luigisbox installation instructions
# Typically:
composer require luigisbox/module-magento2
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento cache:flush
```

### 12. Capture AFTER Database State
```bash
cd /home/lowperry/magento2-luigis-test
bash findings/capture-db-state-after.sh
```

### 13. Generate Comparison Report
```bash
cd /home/lowperry/magento2-luigis-test
bash findings/compare-db-changes.sh
```

This will create:
- `comparison_report_[timestamp].txt` - Shows all changes made by the extension

---

## Configuration Summary

### Database
- **Name:** `mg_luigis_test_db`
- **User:** `mg_luigis_user`
- **Password:** `Magento!Test2025`
- **Host:** `localhost`
- **Character Set:** `utf8mb4`
- **Collation:** `utf8mb4_unicode_ci`

### Domain & URLs
- **Domain:** `dariohaxhiraj.online` (no subdomain)
- **Base URL:** `https://dariohaxhiraj.online/`
- **Admin URL:** `https://dariohaxhiraj.online/admin`
- **Cloudflared:** No changes needed (existing tunnel works)

### Admin Account
- **Username:** `luigis_admin`
- **Password:** `TestPassword123`
- **Email:** `dariohaxhiraj@gmail.com`
- **First Name:** `Luigis`
- **Last Name:** `Test`

### Server Configuration
- **Nginx Config:** `/etc/nginx/sites-available/magento2-luigis-test.conf`
- **PHP-FPM:** `php8.2-fpm` (unix socket)
- **Search Engine:** OpenSearch (localhost:9200)
- **Project Path:** `/home/lowperry/magento2-luigis-test`

---

## Important Notes

1. **Old Project Preserved:** Your original project at `/home/lowperry/magento2-luigis-nginx` is untouched
2. **Same Domain:** Using `dariohaxhiraj.online` - no subdomain or DNS changes needed
3. **Cloudflare:** Existing tunnel configuration works automatically
4. **Database Monitoring:** Scripts ready to capture all changes before/after extension install
5. **Rollback:** Can easily switch back by re-enabling old nginx config

---

## Troubleshooting

### If Nginx fails to start
```bash
# Check the error
sudo nginx -t

# Make sure project files exist
ls -la /home/lowperry/magento2-luigis-test/nginx.conf.sample

# Temporarily re-enable old site if needed
sudo ln -s /etc/nginx/sites-available/magento2-luigis-nginx.conf /etc/nginx/sites-enabled/
sudo systemctl reload nginx
```

### To switch back to old project
```bash
# Disable new site
sudo rm /etc/nginx/sites-enabled/magento2-luigis-test.conf

# Enable old site
sudo ln -s /etc/nginx/sites-available/magento2-luigis-nginx.conf /etc/nginx/sites-enabled/

# Reload
sudo nginx -t
sudo systemctl reload nginx
```

---

## Estimated Timeline

- ✅ Database setup: 1 minute (DONE)
- 🔄 Composer install: 5-10 minutes (IN PROGRESS)
- ⏳ Magento installation: 2-3 minutes
- ⏳ Extension installation: 2-5 minutes
- ⏳ Testing & monitoring: Variable

**Total estimated time:** 15-25 minutes
