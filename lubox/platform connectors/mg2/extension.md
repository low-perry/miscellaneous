# Luigi's Box Magento 2 Comprehensive Integration Guide

This document provides the definitive operational plan for integrating the Luigi's Box AI Search & Discovery extension with a Magento 2 environment. It covers the critical external security (WAF/CDN) requirements and includes a technical analysis of the module's functionality and security limits.

## Prerequisites and environment setup

Before beginning the integration, ensure your environment meets the following requirements:

**Magento version**: Minimum 2.3.1 supported, but 2.4.7+ recommended for full feature support (e.g., custom attributes and PHP 8.2+ compatibility). This requires admin-level access to verify and manage.

**Server access**: SSH/CLI access to the Magento root directory is essential for executing installation commands. This typically requires DevOps-level permissions.

**Public URL**: Your store must be accessible via a public domain or tunneling service. For development or staging environments, you can use services like Cloudflare Tunnel or ngrok to expose your local installation.

**Security keys**: You'll need public and private keys generated from the Magento Marketplace to authenticate the Composer installation.

## Phase I: Installation

This phase installs the module files via Composer and registers them with Magento. All commands must be run from the Magento 2 root directory where the `bin/magento` executable is located.

Execute the following commands in sequence:

**Install the module**: Download the package and update composer.json by running

```shell
composer require luigisbox/magento2-integration
```

**Register the module**: Run the database setup and module registration with

```shell
php bin/magento setup:upgrade
```

**Compile code**: Generate necessary files and compile the code using

```shell
php bin/magento setup:di:compile
```

**Deploy static content**: Deploy front-end assets with

```shell
php bin/magento setup:static-content:deploy -f
```

**Flush cache**: Clear all system caches by running

```shell
php bin/magento cache:flush
```

## Phase II: Network and security configuration (CRITICAL STEP)

This phase eliminates the generic "Store Not Found" error by ensuring the external Luigi's Box server can access the Magento API endpoints without being blocked by Cloudflare's Bot Fight Mode (BFM).

### Required network parameters

The policy must account for both User-Agent identification (used for activation) and static IP addresses (used for data synchronization).

**User-Agent header**: The system must recognize and allow requests with `User-Agent: LuigisBox` for both activation and sync bypass.

**Static IP addresses**: These non-spoofable source addresses are used for synchronization: `3.126.67.184`, `3.78.191.91`, `35.157.250.137`, `63.177.144.47`, and `82.119.103.110`.

### WAF / CDN bypass configuration

The system must be explicitly configured to skip security checks for Luigi's Box to prevent Bot Fight Mode from blocking the activation handshake.

**For Cloudflare users**, follow these steps in the dashboard:

Navigate to Security → WAF → Custom Rules and create a new SKIP rule that runs first with the highest priority. Set the action to Skip and use the following expression with AND logic (since Luigi's Box always sends the "LuigisBox" User-Agent header):

```text
(http.user_agent eq "LuigisBox") and (ip.src in {3.126.67.184 3.78.191.91 35.157.250.137 63.177.144.47 82.119.103.110})
```

This combined expression allows access only if both the User-Agent matches and the request originates from one of the static IP addresses.

When configuring the Skip action, you must select the following components to guarantee traffic is not blocked: All Super Bot Fight Mode Rules (to prevent CAPTCHA/Challenge), Browser Integrity Check, All Rate Limiting Rules, and All Managed Rules.

## Phase III: App activation

Once the module is installed and security rules are configured, activate the integration through the Magento Admin Panel.

Access your Magento Admin Panel and navigate to `System → Extensions → Integrations`. Locate the LuigisboxIntegration entry and click the `Activate` link. Complete the setup by filling out the required contact information form in the pop-up window. This finalizes the integration and begins the initial catalog synchronization.

## Phase IV: Integration Functionality and Data Synchronization

This section provides a technical overview of what the Luigi's Box Magento 2 extension does and its security limits.

### Data Synchronization

The extension acts as a data exporter, performing synchronization through API calls (`REST`/`GraphQL`). It focuses exclusively on catalog attributes necessary for search, recommendations, and analytics.

**Products and Catalog**: The system performs both full initial synchronization and incremental updates. It retrieves product names, prices, stock levels, descriptions, and categorization data to build the external search index.

**Site and Store Context**: Store views, currencies, and languages are synced in read-only mode to ensure localized search results across different store configurations.

#### Detailed Sync Mechanisms

-   **APIs Used**: Sync occurs via **GraphQL queries** for product data and **REST API calls** for scripts and relationships. Luigi's Box pulls data on-demand—no automatic pushes from Magento.
-   **GraphQL Fields**: Custom extensions to Magento's `ProductInterface` include:
    -   `custom_attributes_luigi`: Returns product custom attributes (e.g., color, size) via EAV system. Useful for filtering/search facets. (Requires Magento 2.4.7+; see [ProductInterface](https://devdocs.magento.com/guides/v2.4/graphql/interfaces/product-interface.html).)
    -   `quantity_luigi`: Fetches stock quantity for the product. Helps with availability checks. (Uses deprecated [StockRegistryInterface](https://devdocs.magento.com/guides/v2.4/inventory/catalog-inventory.html) for legacy compatibility; MSI preferred for newer setups.)
    -   `warehouses_luigi`: Retrieves Multi-Source Inventory (MSI) data, including source codes, quantities, and status. Enables location-based stock info. (See [MSI Overview](https://devdocs.magento.com/guides/v2.4/inventory/index.html); gracefully degrades if MSI is disabled.)
-   **REST Endpoints**:
    -   `/V1/insert-script`: Custom endpoint provided by the Luigi's Box module. Accepts a script tag and store scope ID; injects Luigi's Box tracking/analytics JS into the site's HTML head. Modifies `design/head/includes` config. (See [Configuration Management](https://devdocs.magento.com/guides/v2.4/config-guide/prod/config-reference-configphp.html).)
    -   `/V1/parent-products-skus`: Custom endpoint provided by the Luigi's Box module. Takes child product IDs and types; returns parent SKUs for configurable/grouped/bundle products. Filters by visibility (>1). Useful for variant grouping. (See [Product Types](https://devdocs.magento.com/guides/v2.4/rest/modules/catalog.html).)

#### Sync Triggers and Frequency

-   **Initial Sync**: Full catalog export after activation.
-   **Ongoing Updates**: Incremental via scheduled Luigi's Box queries (e.g., on product changes). No webhooks or cron jobs—it's reactive.
-   **Manual Triggers**: Luigi's Box can re-sync via API calls; Magento admins cannot force it directly.

#### Data Scope and Handling

-   **Additional Data**: Parent-child relationships (filtered by visibility), script injection (stored in `design/head/includes` config).
-   **Version-Specific Behavior**: Graceful degradation (e.g., custom attributes in 2.4.7+, MSI fallback if unavailable).
-   **Data Volume**: Large catalogs may require time; index products before sync to reduce load.

#### Performance and Monitoring

-   **Impact**: Additional GraphQL resolvers add DB queries (EAV/inventory). Cache flushes after script changes.
-   **Monitoring**: Check Magento logs for API errors; Luigi's Box dashboard for sync status.
-   **Optimization**: Ensure product indexing; monitor query performance.

#### Frontend Integration

-   Luigi's Box scripts access currency code via `window.getCurrencyCode` in JS for localization.

#### Security and CSP

-   CSP whitelists domains like `scripts.luigisbox.com` for scripts/styles/connections.

#### Troubleshooting and Common Issues

-   **WAF Blocks**: Verify Cloudflare rule (test with `curl -H "User-Agent: LuigisBox"`).
-   **API Errors**: Check OAuth tokens, permissions, or connectivity.
-   **Version Conflicts**: Ensure Magento/PHP compatibility; older versions may return "null".

#### Post-Sync Steps

-   **Verification**: Confirm data in Luigi's Box dashboard; test search/recommendations.
-   **Maintenance**: Monitor for updates; re-sync after major changes.

### Security Limits: What the Extension Cannot Do

The extension's required API permissions enforce a strong security perimeter that prevents unauthorized modifications:

**Cannot Modify or Delete Products**: The integration is only granted read access to the Magento Catalog API resources including Products, Categories, and Inventory. It cannot modify or delete core product data.

**Cannot Modify Inventory or Orders**: The module does not have API permission to interact with Sales or Inventory transaction resources. This means it cannot create or delete orders, or change stock levels.

**No Core Database Access**: The module uses Magento's secure API layer rather than direct SQL queries, maintaining data consistency and security protocol adherence throughout all operations.
