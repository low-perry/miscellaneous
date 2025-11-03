# New Magento 2 Project Setup Documentation

**Date Created:** November 3, 2025  
**Purpose:** Document complete setup for new Magento 2 project to test Luigisbox extension

---

## Project Configuration Variables

```bash
# New Project Variables
PROJECT_NAME="magento2-luigis-test"
DB_NAME="mg_luigis_test_db"
DB_USER="mg_luigis_user"
DB_PASS='Magento!Test2025'
ADMIN_USER="luigis_admin"
ADMIN_PASS="TestPassword123"
ADMIN_EMAIL="dariohaxhiraj@gmail.com"
PUBLIC_DOMAIN="dariohaxhiraj.online"  # Using existing domain (no subdomain needed)
BASE_URL="https://${PUBLIC_DOMAIN}"
PROJECT_PATH="/home/lowperry/${PROJECT_NAME}"
```

---

## Current Configuration Reference

### Nginx Configuration
- **Main Config:** `/etc/nginx/nginx.conf`
- **Site Config:** `/etc/nginx/sites-available/magento2-luigis-nginx.conf`
- **Enabled Site:** `/etc/nginx/sites-enabled/magento2-luigis-nginx.conf`
- **PHP-FPM Socket:** `unix:/var/run/php/php8.2-fpm.sock`

### Current Site Configuration
```nginx
server {
    listen 80;
    server_name dariohaxhiraj.online www.dariohaxhiraj.online;
    set $MAGE_ROOT /home/lowperry/magento2-luigis-nginx;
    root $MAGE_ROOT/pub;
    include /home/lowperry/magento2-luigis-nginx/nginx.conf.sample;
}
```

### Cloudflared Configuration
- **Config File:** `/home/lowperry/.cloudflared/config.yml`
- **Tunnel ID:** `5bedc139-a7dd-437c-8307-2d88df09728e`
- **Current Hostname:** `www.dariohaxhiraj.online`
- **Service:** `http://localhost:80`

---

## Setup Steps for New Project

### Step 1: Create New Database and User

```bash
# Connect to MySQL
mysql -u root -p'Magento!1894.'

# Create new database
CREATE DATABASE mg_luigis_test_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# Create dedicated database user
CREATE USER 'mg_luigis_user'@'localhost' IDENTIFIED BY 'Magento!Test2025';

# Grant permissions
GRANT ALL PRIVILEGES ON mg_luigis_test_db.* TO 'mg_luigis_user'@'localhost';
FLUSH PRIVILEGES;

# Verify user creation
SELECT user, host, plugin FROM mysql.user WHERE user = 'mg_luigis_user';

# Exit MySQL
EXIT;
```

### Step 2: Create New Project Directory

```bash
cd /home/lowperry
composer create-project --repository-url=https://repo.magento.com/ magento/project-community-edition magento2-luigis-test

cd magento2-luigis-test
```

### Step 3: Set Proper Permissions

```bash
cd /home/lowperry/magento2-luigis-test
find var generated vendor pub/static pub/media app/etc -type f -exec chmod g+w {} +
find var generated vendor pub/static pub/media app/etc -type d -exec chmod g+ws {} +
chown -R :www-data .
chmod u+x bin/magento
```

### Step 4: Install Magento

```bash
cd /home/lowperry/magento2-luigis-test

php bin/magento setup:install \
  --base-url="${BASE_URL}/" \
  --db-host="localhost" \
  --db-name="mg_luigis_test_db" \
  --db-user="mg_luigis_user" \
  --db-password='Magento!Test2025' \
  --admin-user="${ADMIN_USER}" \
  --admin-password="${ADMIN_PASS}" \
  --admin-email="${ADMIN_EMAIL}" \
  --admin-firstname="Luigis" \
  --admin-lastname="Test" \
  --backend-frontname="admin" \
  --search-engine="opensearch" \
  --opensearch-host="localhost" \
  --opensearch-port="9200"
```

### Step 5: Switch Nginx Configuration to New Project

**Option A: Disable old site, create new site config**
```bash
# Disable the old site
sudo rm /etc/nginx/sites-enabled/magento2-luigis-nginx.conf

# Create new site configuration
sudo nano /etc/nginx/sites-available/magento2-luigis-test.conf
```

Add the following configuration:
```nginx
server {
    listen 80;
    server_name dariohaxhiraj.online www.dariohaxhiraj.online;
    
    set $MAGE_ROOT /home/lowperry/magento2-luigis-test;
    root $MAGE_ROOT/pub;
    
    include /home/lowperry/magento2-luigis-test/nginx.conf.sample;
}
```

Enable the new site:
```bash
sudo ln -s /etc/nginx/sites-available/magento2-luigis-test.conf /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

**Option B: Modify existing site config (Simpler)**
```bash
# Just edit the existing config
sudo nano /etc/nginx/sites-available/magento2-luigis-nginx.conf

# Change this line:
# set $MAGE_ROOT /home/lowperry/magento2-luigis-nginx;
# To:
# set $MAGE_ROOT /home/lowperry/magento2-luigis-test;

# Then reload
sudo nginx -t
sudo systemctl reload nginx
```

### Step 6: Cloudflared Configuration

**No changes needed!** Your existing cloudflared configuration will continue to work:
- Domain: `www.dariohaxhiraj.online` 
- Service: `http://localhost:80`
- The tunnel automatically routes to whatever Nginx serves on port 80

### Step 7: Create Findings Directory

```bash
cd /home/lowperry/magento2-luigis-test
mkdir -p findings/db-snapshots

# Copy the monitoring scripts
cp /home/lowperry/magento2-luigis-nginx/findings/capture-db-state-before.sh ./findings/
cp /home/lowperry/magento2-luigis-nginx/findings/capture-db-state-after.sh ./findings/
cp /home/lowperry/magento2-luigis-nginx/findings/compare-db-changes.sh ./findings/
chmod +x ./findings/*.sh
```

---

## Database Monitoring Scripts

### Pre-Installation Database Snapshot

Save this as `findings/capture-db-state-before.sh`:

```bash
#!/bin/bash

TIMESTAMP=$(date +%Y%m%d_%H%M%S)
OUTPUT_DIR="./findings/db-snapshots"
DB_NAME="mg_luigis_test_db"
DB_USER="mg_luigis_user"
DB_PASS='Magento!Test2025'

mkdir -p "${OUTPUT_DIR}"

echo "=== Capturing Database State BEFORE Extension Installation ===" | tee "${OUTPUT_DIR}/before_${TIMESTAMP}.log"
echo "Timestamp: $(date)" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"
echo "" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"

# 1. List all tables
echo "--- All Tables ---" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"
mysql -u "${DB_USER}" -p"${DB_PASS}" "${DB_NAME}" -e "SHOW TABLES;" 2>/dev/null | tee "${OUTPUT_DIR}/tables_before_${TIMESTAMP}.txt" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"
echo "" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"

# 2. Table count
TABLE_COUNT=$(mysql -u "${DB_USER}" -p"${DB_PASS}" "${DB_NAME}" -e "SELECT COUNT(*) as count FROM information_schema.tables WHERE table_schema='${DB_NAME}';" 2>/dev/null | tail -n 1)
echo "Total Tables: ${TABLE_COUNT}" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"
echo "" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"

# 3. OAuth tokens and consumers
echo "--- OAuth Consumers ---" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"
mysql -u "${DB_USER}" -p"${DB_PASS}" "${DB_NAME}" -e "SELECT * FROM oauth_consumer;" 2>/dev/null | tee "${OUTPUT_DIR}/oauth_consumers_before_${TIMESTAMP}.txt" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"
echo "" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"

echo "--- OAuth Tokens ---" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"
mysql -u "${DB_USER}" -p"${DB_PASS}" "${DB_NAME}" -e "SELECT token_id, consumer_id, admin_id, customer_id, type, created_at FROM oauth_token;" 2>/dev/null | tee "${OUTPUT_DIR}/oauth_tokens_before_${TIMESTAMP}.txt" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"
echo "" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"

# 4. Integration tokens
echo "--- Integration Tokens ---" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"
mysql -u "${DB_USER}" -p"${DB_PASS}" "${DB_NAME}" -e "SELECT * FROM integration;" 2>/dev/null | tee "${OUTPUT_DIR}/integrations_before_${TIMESTAMP}.txt" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"
echo "" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"

# 5. Admin users
echo "--- Admin Users ---" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"
mysql -u "${DB_USER}" -p"${DB_PASS}" "${DB_NAME}" -e "SELECT user_id, username, email, created, is_active FROM admin_user;" 2>/dev/null | tee "${OUTPUT_DIR}/admin_users_before_${TIMESTAMP}.txt" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"
echo "" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"

# 6. Core config data (API/extension settings)
echo "--- Core Config Data (API Related) ---" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"
mysql -u "${DB_USER}" -p"${DB_PASS}" "${DB_NAME}" -e "SELECT * FROM core_config_data WHERE path LIKE '%api%' OR path LIKE '%oauth%' OR path LIKE '%luigis%';" 2>/dev/null | tee "${OUTPUT_DIR}/config_before_${TIMESTAMP}.txt" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"
echo "" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"

# 7. Database user permissions
echo "--- Database User Grants ---" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"
mysql -u root -p'Magento!1894.' -e "SHOW GRANTS FOR '${DB_USER}'@'localhost';" 2>/dev/null | tee "${OUTPUT_DIR}/grants_before_${TIMESTAMP}.txt" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"
echo "" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"

# 8. Full database schema
echo "--- Exporting Full Database Schema ---" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"
mysqldump -u "${DB_USER}" -p"${DB_PASS}" --no-data --routines --triggers "${DB_NAME}" > "${OUTPUT_DIR}/schema_before_${TIMESTAMP}.sql" 2>/dev/null
echo "Schema exported to: ${OUTPUT_DIR}/schema_before_${TIMESTAMP}.sql" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"

echo "" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"
echo "=== Database state captured successfully ===" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"
echo "Files saved in: ${OUTPUT_DIR}/" | tee -a "${OUTPUT_DIR}/before_${TIMESTAMP}.log"
```

### Post-Installation Database Snapshot

Save this as `findings/capture-db-state-after.sh`:

```bash
#!/bin/bash

TIMESTAMP=$(date +%Y%m%d_%H%M%S)
OUTPUT_DIR="./findings/db-snapshots"
DB_NAME="mg_luigis_test_db"
DB_USER="mg_luigis_user"
DB_PASS='Magento!Test2025'

mkdir -p "${OUTPUT_DIR}"

echo "=== Capturing Database State AFTER Extension Installation ===" | tee "${OUTPUT_DIR}/after_${TIMESTAMP}.log"
echo "Timestamp: $(date)" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"
echo "" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"

# 1. List all tables
echo "--- All Tables ---" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"
mysql -u "${DB_USER}" -p"${DB_PASS}" "${DB_NAME}" -e "SHOW TABLES;" 2>/dev/null | tee "${OUTPUT_DIR}/tables_after_${TIMESTAMP}.txt" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"
echo "" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"

# 2. Table count
TABLE_COUNT=$(mysql -u "${DB_USER}" -p"${DB_PASS}" "${DB_NAME}" -e "SELECT COUNT(*) as count FROM information_schema.tables WHERE table_schema='${DB_NAME}';" 2>/dev/null | tail -n 1)
echo "Total Tables: ${TABLE_COUNT}" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"
echo "" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"

# 3. OAuth tokens and consumers
echo "--- OAuth Consumers ---" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"
mysql -u "${DB_USER}" -p"${DB_PASS}" "${DB_NAME}" -e "SELECT * FROM oauth_consumer;" 2>/dev/null | tee "${OUTPUT_DIR}/oauth_consumers_after_${TIMESTAMP}.txt" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"
echo "" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"

echo "--- OAuth Tokens ---" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"
mysql -u "${DB_USER}" -p"${DB_PASS}" "${DB_NAME}" -e "SELECT token_id, consumer_id, admin_id, customer_id, type, created_at FROM oauth_token;" 2>/dev/null | tee "${OUTPUT_DIR}/oauth_tokens_after_${TIMESTAMP}.txt" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"
echo "" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"

# 4. Integration tokens
echo "--- Integration Tokens ---" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"
mysql -u "${DB_USER}" -p"${DB_PASS}" "${DB_NAME}" -e "SELECT * FROM integration;" 2>/dev/null | tee "${OUTPUT_DIR}/integrations_after_${TIMESTAMP}.txt" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"
echo "" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"

# 5. Admin users
echo "--- Admin Users ---" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"
mysql -u "${DB_USER}" -p"${DB_PASS}" "${DB_NAME}" -e "SELECT user_id, username, email, created, is_active FROM admin_user;" 2>/dev/null | tee "${OUTPUT_DIR}/admin_users_after_${TIMESTAMP}.txt" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"
echo "" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"

# 6. Core config data (API/extension settings)
echo "--- Core Config Data (API Related) ---" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"
mysql -u "${DB_USER}" -p"${DB_PASS}" "${DB_NAME}" -e "SELECT * FROM core_config_data WHERE path LIKE '%api%' OR path LIKE '%oauth%' OR path LIKE '%luigis%';" 2>/dev/null | tee "${OUTPUT_DIR}/config_after_${TIMESTAMP}.txt" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"
echo "" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"

# 7. Look for new Luigisbox-specific tables
echo "--- Luigisbox Extension Tables ---" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"
mysql -u "${DB_USER}" -p"${DB_PASS}" "${DB_NAME}" -e "SHOW TABLES LIKE '%luigis%';" 2>/dev/null | tee "${OUTPUT_DIR}/luigis_tables_after_${TIMESTAMP}.txt" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"
echo "" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"

# 8. Database user permissions
echo "--- Database User Grants ---" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"
mysql -u root -p'Magento!1894.' -e "SHOW GRANTS FOR '${DB_USER}'@'localhost';" 2>/dev/null | tee "${OUTPUT_DIR}/grants_after_${TIMESTAMP}.txt" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"
echo "" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"

# 9. Full database schema
echo "--- Exporting Full Database Schema ---" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"
mysqldump -u "${DB_USER}" -p"${DB_PASS}" --no-data --routines --triggers "${DB_NAME}" > "${OUTPUT_DIR}/schema_after_${TIMESTAMP}.sql" 2>/dev/null
echo "Schema exported to: ${OUTPUT_DIR}/schema_after_${TIMESTAMP}.sql" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"

echo "" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"
echo "=== Database state captured successfully ===" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"
echo "Files saved in: ${OUTPUT_DIR}/" | tee -a "${OUTPUT_DIR}/after_${TIMESTAMP}.log"
```

### Database Comparison Script

Save this as `findings/compare-db-changes.sh`:

```bash
#!/bin/bash

OUTPUT_DIR="./findings/db-snapshots"
COMPARISON_FILE="${OUTPUT_DIR}/comparison_report_$(date +%Y%m%d_%H%M%S).txt"

echo "=== Database Changes Comparison Report ===" | tee "${COMPARISON_FILE}"
echo "Generated: $(date)" | tee -a "${COMPARISON_FILE}"
echo "" | tee -a "${COMPARISON_FILE}"

# Find the most recent before and after files
BEFORE_TABLES=$(ls -t "${OUTPUT_DIR}"/tables_before_*.txt 2>/dev/null | head -1)
AFTER_TABLES=$(ls -t "${OUTPUT_DIR}"/tables_after_*.txt 2>/dev/null | head -1)

if [ -z "$BEFORE_TABLES" ] || [ -z "$AFTER_TABLES" ]; then
    echo "ERROR: Missing before/after snapshot files" | tee -a "${COMPARISON_FILE}"
    exit 1
fi

echo "Comparing:" | tee -a "${COMPARISON_FILE}"
echo "  Before: $BEFORE_TABLES" | tee -a "${COMPARISON_FILE}"
echo "  After:  $AFTER_TABLES" | tee -a "${COMPARISON_FILE}"
echo "" | tee -a "${COMPARISON_FILE}"

# Compare tables
echo "--- New Tables Added ---" | tee -a "${COMPARISON_FILE}"
comm -13 <(sort "$BEFORE_TABLES") <(sort "$AFTER_TABLES") | tee -a "${COMPARISON_FILE}"
echo "" | tee -a "${COMPARISON_FILE}"

echo "--- Tables Removed ---" | tee -a "${COMPARISON_FILE}"
comm -23 <(sort "$BEFORE_TABLES") <(sort "$AFTER_TABLES") | tee -a "${COMPARISON_FILE}"
echo "" | tee -a "${COMPARISON_FILE}"

# Compare OAuth consumers
BEFORE_OAUTH=$(ls -t "${OUTPUT_DIR}"/oauth_consumers_before_*.txt 2>/dev/null | head -1)
AFTER_OAUTH=$(ls -t "${OUTPUT_DIR}"/oauth_consumers_after_*.txt 2>/dev/null | head -1)

if [ -n "$BEFORE_OAUTH" ] && [ -n "$AFTER_OAUTH" ]; then
    echo "--- OAuth Consumer Changes ---" | tee -a "${COMPARISON_FILE}"
    diff -u "$BEFORE_OAUTH" "$AFTER_OAUTH" | tee -a "${COMPARISON_FILE}"
    echo "" | tee -a "${COMPARISON_FILE}"
fi

# Compare integrations
BEFORE_INT=$(ls -t "${OUTPUT_DIR}"/integrations_before_*.txt 2>/dev/null | head -1)
AFTER_INT=$(ls -t "${OUTPUT_DIR}"/integrations_after_*.txt 2>/dev/null | head -1)

if [ -n "$BEFORE_INT" ] && [ -n "$AFTER_INT" ]; then
    echo "--- Integration Changes ---" | tee -a "${COMPARISON_FILE}"
    diff -u "$BEFORE_INT" "$AFTER_INT" | tee -a "${COMPARISON_FILE}"
    echo "" | tee -a "${COMPARISON_FILE}"
fi

# Compare config
BEFORE_CONFIG=$(ls -t "${OUTPUT_DIR}"/config_before_*.txt 2>/dev/null | head -1)
AFTER_CONFIG=$(ls -t "${OUTPUT_DIR}"/config_after_*.txt 2>/dev/null | head -1)

if [ -n "$BEFORE_CONFIG" ] && [ -n "$AFTER_CONFIG" ]; then
    echo "--- Configuration Changes ---" | tee -a "${COMPARISON_FILE}"
    diff -u "$BEFORE_CONFIG" "$AFTER_CONFIG" | tee -a "${COMPARISON_FILE}"
    echo "" | tee -a "${COMPARISON_FILE}"
fi

echo "=== Comparison Complete ===" | tee -a "${COMPARISON_FILE}"
echo "Report saved to: ${COMPARISON_FILE}" | tee -a "${COMPARISON_FILE}"
```

---

## Post-Setup Magento Commands

```bash
# Compile and deploy
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy -f
php bin/magento indexer:reindex
php bin/magento cache:flush

# Set proper file permissions
chmod -R 777 var/ generated/ pub/
```

---

## Testing Checklist

- [ ] Database created successfully
- [ ] Magento installed successfully
- [ ] Admin panel accessible at `https://luigistest.dariohaxhiraj.online/admin`
- [ ] Nginx configuration working
- [ ] Cloudflared tunnel routing correctly
- [ ] Pre-installation database snapshot captured
- [ ] Luigisbox extension installed
- [ ] Post-installation database snapshot captured
- [ ] Database comparison report generated
- [ ] Extension functionality tested

---

## Notes

- Keep both old and new projects separate
- Document any errors during installation
- Save all console outputs
- Backup database before major changes
