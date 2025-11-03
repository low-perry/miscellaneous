#!/bin/bash

# Quick Setup Script for New Magento 2 Project
# This script helps you set up a new Magento 2 installation for testing Luigisbox extension

set -e

echo "=============================================="
echo "Magento 2 New Project Quick Setup"
echo "=============================================="
echo ""

# Configuration Variables
PROJECT_NAME="magento2-luigis-test"
DB_NAME="mg_luigis_test_db"
DB_USER="mg_luigis_user"
DB_PASS='Magento!Test2025'
ADMIN_USER="luigis_admin"
ADMIN_PASS="TestPassword123"
ADMIN_EMAIL="dariohaxhiraj@gmail.com"
PUBLIC_DOMAIN="dariohaxhiraj.online"
BASE_URL="https://${PUBLIC_DOMAIN}"
PROJECT_PATH="/home/lowperry/${PROJECT_NAME}"

echo "Project Configuration:"
echo "  Project Name: $PROJECT_NAME"
echo "  Database: $DB_NAME"
echo "  DB User: $DB_USER"
echo "  Domain: $PUBLIC_DOMAIN"
echo "  Path: $PROJECT_PATH"
echo ""

read -p "Do you want to proceed with this configuration? (y/n) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Setup cancelled."
    exit 1
fi

# Step 1: Create Database and User
echo ""
echo "Step 1: Creating database and user..."
echo "----------------------------------------"
mysql -u root -p'Magento!1894.' <<EOF
CREATE DATABASE IF NOT EXISTS ${DB_NAME} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER IF NOT EXISTS '${DB_USER}'@'localhost' IDENTIFIED BY '${DB_PASS}';
GRANT ALL PRIVILEGES ON ${DB_NAME}.* TO '${DB_USER}'@'localhost';
FLUSH PRIVILEGES;
EOF

echo "✓ Database and user created successfully"

# Verify
mysql -u root -p'Magento!1894.' -e "SELECT user, host FROM mysql.user WHERE user = '${DB_USER}';" 2>/dev/null

# Step 2: Create Project Directory (if using Composer)
echo ""
echo "Step 2: Ready to create project directory"
echo "----------------------------------------"
echo "Run this command manually to create the project:"
echo ""
echo "cd /home/lowperry"
echo "composer create-project --repository-url=https://repo.magento.com/ magento/project-community-edition ${PROJECT_NAME}"
echo ""
echo "Or if you already have the files, just create the directory:"
echo "mkdir -p ${PROJECT_PATH}"
echo ""
read -p "Press Enter when ready to continue..."

# Step 3: Create Nginx Configuration
echo ""
echo "Step 3: Disabling old site and creating new Nginx configuration..."
echo "----------------------------------------"

# Disable old site
if [ -L /etc/nginx/sites-enabled/magento2-luigis-nginx.conf ]; then
    sudo rm /etc/nginx/sites-enabled/magento2-luigis-nginx.conf
    echo "✓ Old site disabled"
fi

# Create new site config
sudo tee /etc/nginx/sites-available/${PROJECT_NAME}.conf > /dev/null <<EOF
server {
    listen 80;
    server_name ${PUBLIC_DOMAIN} www.${PUBLIC_DOMAIN};
    
    set \$MAGE_ROOT ${PROJECT_PATH};
    root \$MAGE_ROOT/pub;
    
    include ${PROJECT_PATH}/nginx.conf.sample;
}
EOF

# Enable site
sudo ln -sf /etc/nginx/sites-available/${PROJECT_NAME}.conf /etc/nginx/sites-enabled/

# Test and reload
sudo nginx -t && sudo systemctl reload nginx

echo "✓ Nginx configuration created and enabled"
echo "✓ Old site disabled, new site active on ${PUBLIC_DOMAIN}"

# Step 4: Show Magento Install Command
echo ""
echo "Step 4: Magento Installation Command"
echo "----------------------------------------"
echo "Navigate to your project directory and run:"
echo ""
echo "cd ${PROJECT_PATH}"
echo ""
cat <<'EOF'
php bin/magento setup:install \
  --base-url="${BASE_URL}/" \
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
EOF
echo ""

# Step 5: Cloudflared Configuration
echo ""
echo "Step 5: Cloudflared Configuration"
echo "----------------------------------------"
echo "✓ No changes needed!"
echo "Your existing Cloudflared tunnel will automatically work with the new project."
echo ""
echo "Current configuration (no changes needed):"
echo "  - Domain: www.${PUBLIC_DOMAIN}"
echo "  - Service: http://localhost:80"
echo "  - The tunnel routes to whatever Nginx serves"
echo ""

# Step 6: Database Monitoring
echo ""
echo "Step 6: Database Monitoring Setup"
echo "----------------------------------------"
echo "After Magento installation, use these scripts to monitor database changes:"
echo ""
echo "1. Before installing Luigisbox extension:"
echo "   cd ${PROJECT_PATH}"
echo "   bash findings/capture-db-state-before.sh"
echo ""
echo "2. After installing Luigisbox extension:"
echo "   bash findings/capture-db-state-after.sh"
echo ""
echo "3. Compare changes:"
echo "   bash findings/compare-db-changes.sh"
echo ""

echo ""
echo "=============================================="
echo "Setup Complete!"
echo "=============================================="
echo ""
echo "Next Steps:"
echo "1. Complete Magento installation using the command above"
echo "2. Update Cloudflared configuration"
echo "3. Create findings directory: mkdir -p ${PROJECT_PATH}/findings"
echo "4. Copy monitoring scripts to new project"
echo "5. Run pre-installation database snapshot"
echo "6. Install Luigisbox extension"
echo "7. Run post-installation database snapshot"
echo "8. Generate comparison report"
echo ""
