---
layout: platform_integration_layout
title: Luigi's Box IdoSell API Usage Reference
---

# Overview

This document details the specific API endpoints Luigi's Box consumes from the IdoSell Admin API v3.

Although the integration requires **Read and Write** permissions for the PIM and CMS modules to ensure uninterrupted access, Luigi's Box operates in a **Read-Only** capacity. We do not perform PUT, POST, or DELETE operations on your store data.

## Module: PIM (Product Information Management)

The PIM module is the core of the synchronization. We use these endpoints to build the search index and recommendation logic.

| Endpoint | Method | Permission | Rationale & Usage |
|----------|--------|------------|-------------------|
| `/api/admin/v3/products/products/get` | GET | PIM | Core Catalog Sync. Fetches the full product list, including names, descriptions, images, and attributes. Uses pagination (100 products/request) until the full catalog is synced. |
| `/api/admin/v3/products/categories` | GET | PIM | Category Tree. Understands the hierarchy of your store (e.g., "Men > Shoes > Running") for Category Filters and faceted search. |
| `/api/admin/v3/products/categoriesIdosell` | GET | PIM | Internal Categories. Fetches system-level category definitions for correct mapping of products to logical groups. |
| `/api/admin/v3/products/marketing/promotion` | GET | PIM | Pricing & Discounts. Indexes "Special Prices" and active promotions to show correct, discounted prices in search results. |
| `/api/admin/v3/products/opinions/opinions` | GET | PIM | Reviews & Ratings. Ingests product ratings (stars) and review counts for ranking and display in search results. |

## Module: CMS (Content Management System)

The CMS module is used primarily to understand the site's navigational structure.

| Endpoint | Method | Permission | Rationale & Usage |
|----------|--------|------------|-------------------|
| `/api/admin/v3/menu/menu` | GET | CMS | Navigation & Menus. Fetches the store's main menu structure to understand which categories are "visible" and "clickable" for users, allowing us to replicate the site's navigation logic in our filters. |

## Module: System

These endpoints provide metadata about the store itself.

| Endpoint | Method | Permission | Rationale & Usage |
|----------|--------|------------|-------------------|
| `/api/admin/v3/system/shopsData` | GET | System | Store Metadata. Validates the shop URL and retrieves basic configuration details needed to identify the environment. |
| `/api/admin/v3/system/currencies` | GET | System | Currency Formatting. Fetches the list of active currencies and their formatting rules (symbols, decimals) to ensure prices are displayed correctly in search autocomplete and results. |

## Data Security Summary

- **Direction:** One-way sync (IdoSell → Luigi's Box)
- **Mechanism:** Polling (Scheduled API Requests)
- **Storage:** Data is stored in secure, isolated indices unique to each client.
- **Sensitive Data:** We do **not** sync customer data (PII), orders, or payment details. Only public catalog information is synchronized.