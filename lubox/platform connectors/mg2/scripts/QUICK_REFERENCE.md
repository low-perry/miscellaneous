# Quick Reference - New Magento 2 Project

## Status: 🔄 Composer Installing...

---

## What's Been Done

✅ Database `mg_luigis_test_db` created  
✅ User `mg_luigis_user` created with password `Magento!Test2025`  
✅ Old site disabled  
✅ New Nginx config created (will work after Magento files are ready)  
✅ Database monitoring scripts ready  
🔄 Composer installing Magento 2.4.8-p3...  

---

## After Composer Finishes - Run These Commands:

```bash
# 1. Set permissions
cd /home/lowperry/magento2-luigis-test
find var generated vendor pub/static pub/media app/etc -type f -exec chmod g+w {} +
find var generated vendor pub/static pub/media app/etc -type d -exec chmod g+ws {} +
chown -R :www-data .
chmod u+x bin/magento

# 2. Enable Nginx
sudo nginx -t && sudo systemctl reload nginx

# 3. Install Magento
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

# 4. Setup findings directory
mkdir -p findings/db-snapshots
cp /home/lowperry/magento2-luigis-nginx/findings/capture-db-state-before.sh findings/
cp /home/lowperry/magento2-luigis-nginx/findings/capture-db-state-after.sh findings/
cp /home/lowperry/magento2-luigis-nginx/findings/compare-db-changes.sh findings/
chmod +x findings/*.sh

# 5. Compile and deploy
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy -f
php bin/magento cache:flush

# 6. Capture BEFORE snapshot
bash findings/capture-db-state-before.sh

# 7. Install Luigisbox extension
composer require luigisbox/module-magento2
php bin/magento setup:upgrade
php bin/magento cache:flush

# 8. Capture AFTER snapshot
bash findings/capture-db-state-after.sh

# 9. Compare changes
bash findings/compare-db-changes.sh
```

---

## Access Information

**Website:** https://dariohaxhiraj.online/  
**Admin Panel:** https://dariohaxhiraj.online/admin  
**Username:** luigis_admin  
**Password:** TestPassword123  

---

## Database Info

**Host:** localhost  
**Database:** mg_luigis_test_db  
**User:** mg_luigis_user  
**Password:** Magento!Test2025  
