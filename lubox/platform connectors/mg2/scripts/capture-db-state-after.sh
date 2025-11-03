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
