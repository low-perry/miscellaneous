---
layout: platform_integration_layout
title: Luigi's Box IdoSell Integration Guide
---

{{ callout('info', '**Guide Goal (TL;DR):** This guide\'s sole purpose is to help you connect and **synchronize your IdoSell product catalog** with Luigi\'s Box. To integrate the individual services, please go to: [Search](/search.html), [Autocomplete](/autocomplete.html), [Product Listing](/plp.html), [Recommendations](/recommendations.html), and [Analytics](/analytics.html).') }}

## Overview

This guide walks you through integrating Luigi's Box with your IdoSell store. The integration enables:

- **Search** - AI-powered product search with typo tolerance and synonyms
- **Product Recommendations** - Personalized product suggestions
- **Analytics** - Insights into customer search behavior
- **Automatic Data Sync** - Your catalog stays up-to-date with Luigi's Box

**Time to Complete:** 15-20 minutes  
**Prerequisites:** Admin access to IdoSell, Luigi's Box account

<details>
<summary><strong>⚡️ Expert Quickstart (TL;DR)</strong> — <em>Click to expand</em></summary>
<div style="padding: 10px 0;">

<p><strong>1. Generate API Key (IdoSell):</strong></p>
<ul>
<li>Go to <strong>Settings → API → Access</strong></li>
<li>Create new key with <strong>System: Read only</strong>, <strong>CMS & PIM: Read and write</strong></li>
<li>Copy the API Key and save it for Phase 4</li>
</ul>

<p><strong>2. Create Sites (Luigi's Box):</strong></p>
<ul>
<li>Create a new site for each language/shop in your IdoSell</li>
<li>Each site gets its own Script ID (LBX-xxxxxx)</li>
</ul>

<p><strong>3. Install Tracking Scripts (IdoSell):</strong></p>
<ul>
<li>Create HTML/JS campaign named <strong>LuigisBox</strong></li>
<li>Paste the correct Script ID in each language tab</li>
</ul>

<p><strong>4. Activate Sync (Email Support):</strong></p>
<ul>
<li>Email your API Key to support@luigisbox.com</li>
<li>Catalog syncs automatically after confirmation</li>
</ul>

<p><strong>Common Gotchas:</strong></p>
<ul>
<li><strong>Multi-Language:</strong> Each language needs its own Site with unique Script ID</li>
<li><strong>Wrong Script Tab:</strong> Paste English script in [English] tab, German in [German] tab</li>
<li><strong>Permissions:</strong> System must be "Read only", CMS & PIM must be "Read and write"</li>
</ul>

</div>
</details>

## Integration Flow

<div class="mermaid-sticky-container" style="position: sticky; top: 70px; z-index: 9999; backdrop-filter: blur(10px); background: rgba(255, 255, 255, 0.95); padding: 20px 0; margin: 0 0 30px 0; border-bottom: 1px solid #e0e0e0; height: 120px;">
<pre class="mermaid" style="opacity: 0;">
graph LR
    A[Phase 1: Generate API Key] --> B(Phase 2: Create Sites);
    B --> C(Phase 3: Install Tracking Scripts);
    C --> D(Phase 4: Activate Catalog Sync);
    D --> E(Verification & Next Steps);
    
    %% Add click events to link to page sections
    click A "#phase-1-generate-idosell-api-credentials" "Go to Phase 1"
    click B "#phase-2-create-luigis-box-sites" "Go to Phase 2"
    click C "#phase-3-install-tracking-script-in-idosell" "Go to Phase 3"
    click D "#phase-4-connect-api" "Go to Phase 4"
    click E "#verification-troubleshooting" "Go to Verification"
    
    %% Class assignments for scroll-based highlighting
    class A mermaid-phase-1
    class B mermaid-phase-2
    class C mermaid-phase-3
    class D mermaid-phase-4
    class E mermaid-verification
</pre>
</div>

<style>
/* Adjust sticky position for mobile and tablet */
@media (max-width: 991px) {
  .mermaid-sticky-container {
    top: 133px !important;
  }
}

/* Hide raw markup, show when rendered */
.mermaid {
  opacity: 0;
  transition: opacity 0.2s ease-in;
}

.mermaid[data-processed="true"] {
  opacity: 1 !important;
}

/* Allow SVG overflow to prevent clipping */
.mermaid svg {
  overflow: visible !important;
}

/* Add padding to all node rectangles to prevent text clipping */
.mermaid .nodeLabel {
  padding: 0 12px !important;
}

/* Subtle highlight for active node - border and shadow instead of fill */
.mermaid-node-active rect,
.mermaid-node-active polygon {
  stroke: #682175 !important;
  stroke-width: 3px !important;
  animation: pulseNode 1.5s ease-in-out infinite;
}

.mermaid-node-active .nodeLabel {
  font-weight: 600 !important;
  fill: #682175 !important;
}

@keyframes pulseNode {
  0%, 100% {
    filter: drop-shadow(0 0 6px rgba(104, 33, 117, 0.3));
    transform: scale(1);
  }
  50% {
    filter: drop-shadow(0 0 16px rgba(104, 33, 117, 0.8));
    transform: scale(1.03);
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', () => {
  // Wait for Mermaid to finish rendering before setting up scroll tracking
  const initScrollTracking = () => {
    // Map section IDs to Mermaid node classes
    const sectionMap = {
      'phase-1-generate-idosell-api-credentials': '.mermaid-phase-1',
      'phase-2-create-luigis-box-sites': '.mermaid-phase-2',
      'phase-3-install-tracking-script-in-idosell': '.mermaid-phase-3',
      'phase-4-connect-api': '.mermaid-phase-4',
      'verification-troubleshooting': '.mermaid-verification'
    };

    const activeClass = 'mermaid-node-active';
    const allNodeSelectors = Object.values(sectionMap).join(',');
    let currentActive = null;

    // Function to update active node
    function updateActiveNode() {
      // Look for anchor tags instead of heading IDs
      const sections = Array.from(document.querySelectorAll(
        Object.keys(sectionMap).map(id => `a[name="${id}"]`).join(',')
      ));
      
      // If we're at the very top of the page (before first section), clear highlight
      if (window.scrollY < 100) {
        if (currentActive !== null) {
          document.querySelectorAll(allNodeSelectors).forEach(el => {
            el.classList.remove(activeClass);
          });
          currentActive = null;
        }
        return;
      }
      
      let activeSection = null;
      const scrollPosition = window.scrollY + 200; // Account for sticky header
      
      // Find which section we're currently in by checking scroll position
      // We iterate in reverse to find the last section that has started
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        
        // If we've scrolled past the start of this section, it's active
        if (scrollPosition >= sectionTop) {
          activeSection = section;
          break;
        }
      }
      
      // Update highlight only if active section changed
      // Use the anchor name attribute to map back to the section
      const newActive = activeSection ? sectionMap[activeSection.getAttribute('name')] : null;
      
      if (newActive !== currentActive) {
        // Remove active class from all nodes
        document.querySelectorAll(allNodeSelectors).forEach(el => {
          el.classList.remove(activeClass);
        });
        
        // Add active class to new active node
        if (newActive) {
          const nodeElement = document.querySelector(newActive);
          if (nodeElement) {
            nodeElement.classList.add(activeClass);
          }
        }
        
        currentActive = newActive;
      }
    }
    
    // Use throttled scroll listener for better stability
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
      scrollTimeout = window.requestAnimationFrame(updateActiveNode);
    }, { passive: true });
    
    // Initial check
    updateActiveNode();
  };
  
  // Wait a bit for Mermaid to render, then initialize scroll tracking
  setTimeout(initScrollTracking, 500);
});
</script>

<a name="phase-1-generate-idosell-api-credentials"></a>

## Phase 1: Generate IdoSell API Credentials

Before connecting Luigi's Box, you need to generate a secure API Key in your IdoSell administration
panel.

### Step 1: Navigate to API Settings

1. Log in to your IdoSell administration panel
2. Navigate to **Settings → API → Access** _(Ustawienia → API → Dostęp)_
3. Click **Add New Key** _(Dodaj klucz)_

### Step 2: Configure Key Settings

You will see a form titled "Adding an API key" _(Dodawanie klucza API)_. Configure the fields as
follows:

![IdoSell API Key Settings](platforms/idosell_api_key.png)

**Login Settings** _(Logowanie)_:

- **Authorization Method** _(Sposób autoryzacji)_: Select **API Key** _(Klucz API)_

**Key Details**:

- **API Key** _(Klucz API)_: Will be generated automatically after you save
- **Application Name** _(Nazwa aplikacji)_: Enter `LuigisBox`
- **Email in case of contact necessity** _(E-mail w razie potrzeby kontaktu)_: Optional

**Status**:

- **Active** _(Aktywny)_: Set to **Yes** _(tak)_
- **Restrict hosts from which login is possible** _(Ogranicz hosty z których możę się logować)_:
  Set to **No** _(nie)_

**Localization** _(Lokalizacja)_:

- Leave default settings (usually CET timezone and Polish language)

### Step 3: Configure API Gateway Permissions _(Dostęp do bramek API)_

{{ callout('warning', '**This is the most critical step.** Incorrect permissions will prevent Luigi\'s Box from syncing your catalog.') }}

Scroll down to the permissions matrix and set the following:

| Gateway | Permission Level | Polish Label   |
| ------- | ---------------- | -------------- |
| System  | Read only        | tylko odczyt   |
| CMS     | Read and write   | odczyt i zapis |
| PIM     | Read and write   | odczyt i zapis |
| CRM     | No access        | brak dostępu   |
| OMS     | No access        | brak dostępu   |
| WMS     | No access        | brak dostępu   |

{{ callout('note', '**System** must be "Read only" for the initial connection check. **CMS and PIM** must be "Read and write" to sync your products and categories.') }}

### Step 4: Save and Copy

1. Click **Add** _(Dodaj)_ at the bottom of the form
2. The page will reload, and your **API Key** _(Klucz API)_ will now be visible in the top section
3. **Copy this key to your clipboard.** You will need it in Phase 4.

<a name="phase-2-create-luigis-box-sites"></a>

## Phase 2: Create Project & Sites

In this phase, you will create your Luigi's Box account structure.

{{ callout('info', '**Important Concept:** In Luigi\'s Box, every unique **language version** of your store requires its own **Site**. If you have a shop with English and German, you will create **2 Sites** inside **1 Project**.') }}

### Step 1: Create Your First Project & Site

When you log in to Luigi's Box for the first time, you will see the **Create a new site/project** form:

![Luigi's Box Create Project and Site Form](platforms/project+site_luigis_form.png)

1. **You have decided:** This dropdown is automatically set to **Create a new project and site**
2. Fill in the form:
   - **URL:** Enter your store's URL (e.g., `myshop.com`)
   - **Website language:** Select the language for this specific view (e.g., **English**)
   - **Platform:** Select **IdoSell**
   - **Project name:** Enter a name of your choosing (e.g., `My Store`)
   - **Segment:** Select your e-commerce segment (e.g., Fashion, Electronics, etc.)
3. Click **Add project/site**

Your first Project and Site are now created!

{{ callout('info', '**Important:** After creating your site, you will be presented with a **Tracking Script**. Copy and save this script, you will need it in Phase 3 for this specific language/site.') }}

### Step 2: Add Additional Languages/Shops

{{ callout('note', 'If your store only has one language, **skip this step** and proceed to Phase 3.') }}

If you have other languages (e.g., German) or other domains managed in the same IdoSell panel:

![Luigi's Box Site Management](platforms/luigis_app_site_management.png)

1. In Luigi's Box App navigate to **General Settings → Site Management** (as shown in the image above)
2. A menu appears on the right side of the screen
3. Click **Add new site/project** button

4. The same form as in Step 1 appears with the **You have decided** dropdown automatically set to **Add a new site to an existing project**
   - If you want to create a separate project instead, change this to **Create a new project and site**
5. Fill in the form:
   - **URL:** Enter the URL (same as Step 1 if it's just a language subfolder, or different if it's a new domain)
   - **Website language:** Select the new language (e.g., **German**)
   - **Platform:** Automatically selected as **IdoSell**
   - **Name:** Enter a descriptive name for this site (e.g., `My Store - German`)
   - **Assign to project group:** Select **Default Group** (if you haven't created custom groups yet)
   - **Segment:** Automatically selected and cannot be changed (inherited from the project)
6. Click **Add project/site**
7. Repeat this process for every active language you have

{{ callout('info', '**Remember:** Each time you create a new site, you will receive a **unique Tracking Script** for that language. Copy and save each script, you\'ll need them in Phase 3.') }}


<a name="phase-3-install-tracking-script-in-idosell"></a>

## Phase 3: Install Tracking Scripts

Now you will install the tracking scripts so Luigi's Box can start analyzing traffic.

### Step 1: Prepare Your Tracking Scripts

You should already have your tracking scripts from Phase 2. If you need to retrieve them again:

1. In your Luigi's Box Dashboard, go to **Settings → Site Management**
2. You will see a list of all sites you created (e.g., "Shop - English", "Shop - German")
3. Each site displays its **Tracking Script** with the unique **Script ID** (e.g., `LBX-xxxxxx`)

### Step 2: Create IdoSell Campaign

1. Log in to IdoSell
2. Navigate to **Store → Optimization & Functionality → HTML/JS Add-ons**
   _(Sklep → Optymalizacja i funkcjonalność → Dodatki HTML/JS)_
3. Click **Add a campaign** _(Dodaj kampanię)_

![IdoSell HTML Add-on Campaign](platforms/IdoSell_html_addon_polish.png)

{{ callout('warning', '**Multi-Store Clients:** If you manage multiple domains (e.g., Shop A and Shop B) in one panel, you must create a **separate Campaign** for each domain. Create "Campaign Shop A" and assign it **only** to Domain A using the shop checkboxes. Create "Campaign Shop B" and assign it **only** to Domain B.') }}

**Campaign Settings:**

- **Name:** `LuigisBox`
- **Active:** **Yes**
- **Pages:** Select the pages where you want the script to run
  - For **single-store** setups: Select **All pages** _(Wszystkie strony)_
  - For **multi-store** setups: Select only the pages relevant to the current store/domain using the checkboxes
- Click **Save**

### Step 3: Add Script & Handle Languages

1. Edit your new campaign and click **New addition** _(Dodaj nowy dodatek)_
2. Configure the settings:
   - **Type:** HTML
   - **Load:** Along with page content
   - **Show:** Normal version **AND** Mobile version

![IdoSell Tracking Script Configuration](platforms/idosell_tracking_script_config.png)

### Step 4: Insert Code (The Critical Part)

{{ callout('info', 'IdoSell uses **Tabs** above the code editor to handle languages. You must paste the correct tracking script into the matching language tab.') }}

**For Single-Language Stores:**

Simply paste your tracking script in the code editor:

```html
<script src="https://scripts.luigisbox.com/LBX-YOUR-ID.js"></script>
```

Click **Add** _(Dodaj)_

**For Multi-Language Stores:**

{{ callout('warning', '**Critical:** Each language must have its own unique Script ID. Do NOT use "Duplicate on all languages" as this would paste the same script across all languages.') }}

1. Click the **[English]** Tab → Paste your English tracking script: `<script src="https://scripts.luigisbox.com/LBX-YOUR-ENGLISH-ID.js"></script>`

2. Click the **[German]** Tab → Paste your German tracking script: `<script src="https://scripts.luigisbox.com/LBX-YOUR-GERMAN-ID.js"></script>`

3. Repeat for all language tabs, ensuring each has its correct unique script
4. Click **Add** _(Dodaj)_

<a name="phase-4-connect-api"></a>

## Phase 4: Activate Catalog Sync (Support)

To finalize the connection and begin syncing your products, please email your Luigi's Box representative (or support@luigisbox.com) with the following:

**Subject:** IdoSell API Configuration - [Your Company Name]

**Body:**

- The **API Key** you generated in Phase 1
- Confirmation that you have created the sites in the dashboard
- Your IdoSell store URL(s)

### What Happens Next?

Our team will securely configure your API Key in our backend. Once confirmed (usually within **24 hours**), your product catalog will begin syncing automatically **every 3 hours**.

You will receive a confirmation email when the sync is active.

<a name="verification-troubleshooting"></a>

## Verification & Troubleshooting

### Verify Script Installation

To confirm the tracking script is working:

1. Open your IdoSell store homepage in a new browser tab
2. Right-click and select **View Page Source**
3. Search (Ctrl+F / Cmd+F) for `luigisbox`

You should see the script injected within the code:

```html
<!-- Begin additional html or js -->
<!--7|1|6-->
<script src="https://scripts.luigisbox.com/LBX-xxxxxx.js"></script>
<!-- End additional html or js -->
```

**For Multi-Language:** Check each language version of your site to ensure the correct Script ID appears for each language.

### Verify Catalog Sync Status

After receiving confirmation from support (Phase 4):

1. Go to your Luigi's Box Dashboard
2. Navigate to **Catalog → Browser**
3. You should see your products appearing within **3-6 hours** of the initial sync

{{ callout('note', 'The first sync may take longer depending on your catalog size. Subsequent syncs happen automatically every 3 hours.') }}

## Next Steps

1. **Wait for Initial Sync:** Your catalog is now syncing. This typically takes 15-60 minutes
   depending on catalog size
2. **Check Catalog:** Go to **Catalog → Browser** in Luigi's Box to confirm products are appearing
3. **Configure Search:** Once synced, you can begin configuring search rules and recommendations

### Implement Your Features

Once your catalog is synced, you can implement Luigi's Box features on your storefront:

- Implement [Search](/search.html): Activate and configure your new search bar
- Implement [Recommendations](/recommendations.html): Add personalized "cross-sell" and "upsell"
  carousels to your product and cart pages
- Implement [Product Listings](/plp.html): Power your category pages with Luigi's Box for smart
  filtering and faceting
