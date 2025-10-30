# Luigi's Box Magento 2 Comprehensive Integration Guide

This document provides the definitive operational plan for integrating the Luigi's Box AI Search & Discovery extension with a Magento 2 environment. It covers the critical external security (WAF/CDN) requirements and includes a technical analysis of the module's functionality and security limits.

## Prerequisites and Environment Setup

Before beginning the integration, ensure your environment meets the following requirements:

**Magento Version**: You'll need Magento 2.4.6 or later to ensure PHP 8.2+ compatibility. This requires admin-level access to verify and manage.

**Server Access**: SSH/CLI access to the Magento root directory is essential for executing installation commands. This typically requires DevOps-level permissions.

**Public URL**: Your store must be accessible via a public domain or tunneling service. For development or staging environments, you can use services like Cloudflare Tunnel or ngrok to expose your local installation.

**Security Keys**: You'll need public and private keys generated from the Magento Marketplace to authenticate the Composer installation.

## Phase I: Codebase Installation

This phase installs the module files via Composer and registers them with Magento. All commands must be run from the Magento 2 root directory where the `bin/magento` executable is located.

Execute the following commands in sequence:

**Install the Module**: Download the package and update composer.json by running `composer require luigisbox/magento2-integration`

**Register the Module**: Run the database setup and module registration with `php bin/magento setup:upgrade`

**Compile Code**: Generate necessary files and compile the code using `php bin/magento setup:di:compile`

**Deploy Static Content**: Deploy front-end assets with `php bin/magento setup:static-content:deploy -f`

**Flush Cache**: Clear all system caches by running `php bin/magento cache:flush`

## Phase II: Network and Security Configuration (CRITICAL STEP)

This phase eliminates the generic "Store Not Found" error by ensuring the external Luigi's Box server can access the Magento API endpoints without being blocked by Cloudflare's Bot Fight Mode (BFM).

### Required Network Parameters

The policy must account for both User-Agent identification (used for activation) and static IP addresses (used for data synchronization).

**User-Agent Header**: The system must recognize and allow requests with `User-Agent: LuigisBox` for both activation and sync bypass.

**Static IP Addresses**: These non-spoofable source addresses are used for synchronization: 3.126.67.184, 3.78.191.91, 35.157.250.137, 63.177.144.47, and 82.119.103.110.

### WAF / CDN Bypass Configuration

The system must be explicitly configured to skip security checks for Luigi's Box to prevent Bot Fight Mode from blocking the activation handshake.

**For Cloudflare users**, follow these steps in the dashboard:

Navigate to Security → WAF → Custom Rules and create a new SKIP rule that runs first with the highest priority. Set the action to Skip and use the following expression with OR logic for maximum reliability:

```
(http.user_agent eq "LuigisBox") or (ip.src in {3.126.67.184 3.78.191.91 35.157.250.137 63.177.144.47 82.119.103.110})
```

This combined expression allows access if either the User-Agent is present or the request originates from one of the static IP addresses.

When configuring the Skip action, you must select the following components to guarantee traffic is not blocked: All Super Bot Fight Mode Rules (to prevent CAPTCHA/Challenge), Browser Integrity Check, All Rate Limiting Rules, and All Managed Rules.

## Phase III: App Activation

Once the module is installed and security rules are configured, activate the integration through the Magento Admin Panel.

Access your Magento Admin Panel and navigate to System → Extensions → Integrations. Locate the LuigisboxIntegration entry and click the Activate link. Complete the setup by filling out the required contact information form in the pop-up window. This finalizes the integration and begins the initial catalog synchronization.

## Phase IV: Integration Functionality and Data Synchronization

This section provides a technical overview of what the Luigi's Box Magento 2 extension does and its security limits.

### Data Synchronization

The extension acts as a data exporter, performing synchronization through API calls (REST/GraphQL). It focuses exclusively on catalog attributes necessary for search, recommendations, and analytics.

**Products and Catalog**: The system performs both full initial synchronization and incremental updates. It retrieves product names, prices, stock levels, descriptions, and categorization data to build the external search index.

**Site and Store Context**: Store views, currencies, and languages are synced in read-only mode to ensure localized search results across different store configurations.

### Security Limits: What the Extension Cannot Do

The extension's required API permissions enforce a strong security perimeter that prevents unauthorized modifications:

**Cannot Modify or Delete Products**: The integration is only granted read access to the Magento Catalog API resources including Products, Categories, and Inventory. It cannot modify or delete core product data.

**Cannot Modify Inventory or Orders**: The module does not have API permission to interact with Sales or Inventory transaction resources. This means it cannot create or delete orders, or change stock levels.

**No Core Database Access**: The module uses Magento's secure API layer rather than direct SQL queries, maintaining data consistency and security protocol adherence throughout all operations.