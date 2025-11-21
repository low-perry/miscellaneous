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
<li>Go to <strong>API → Access Keys to Admin API</strong></li>
<li>Create new key with <strong>System (Read only)</strong>, <strong>CMS (Read/Write)</strong>, <strong>PIM (Read/Write)</strong> permissions</li>
<li>Copy the API Key</li>
</ul>

<p><strong>2. Connect (Luigi's Box):</strong></p>
<ul>
<li>Go to <strong>Settings → General</strong></li>
<li>Enter Shop URL and API Key</li>
<li>Copy the tracking script provided</li>
</ul>

<p><strong>3. Install Script (IdoSell):</strong></p>
<ul>
<li>Go to <strong>Marketing → HTML/JS Add-ons</strong></li>
<li>Create campaign named <strong>LuigisBox</strong></li>
<li>Add HTML add-on with your tracking script</li>
</ul>

<p><strong>4. Common Gotchas:</strong></p>
<ul>
<li><strong>Wrong Permissions:</strong> Must have CMS and PIM set to "Read and write" (odczyt i zapis)</li>
<li><strong>Script Not Working:</strong> Ensure campaign is Active and set to "All pages"</li>
</ul>

</div>
</details>

## Integration Flow

<div class="mermaid-sticky-container" style="position: sticky; top: 70px; z-index: 9999; backdrop-filter: blur(10px); background: rgba(255, 255, 255, 0.95); padding: 20px 0; margin: 0 0 30px 0; border-bottom: 1px solid #e0e0e0; height: 120px;">
<pre class="mermaid" style="opacity: 0;">
graph LR
    A[Phase 1: Generate API Key] --> B(Phase 2: Connect Luigi's Box);
    B --> C(Phase 3: Install Tracking Script);
    C --> D(Phase 4: Configuration);
    D --> E(Verification & Next Steps);
    
    %% Add click events to link to page sections
    click A "#phase-1-generate-idosell-api-credentials" "Go to Phase 1"
    click B "#phase-2-connect-luigi-s-box" "Go to Phase 2"
    click C "#phase-3-install-tracking-script-in-idosell" "Go to Phase 3"
    click D "#phase-4-configuration" "Go to Phase 4"
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
      'phase-2-connect-luigi-s-box': '.mermaid-phase-2',
      'phase-3-install-tracking-script-in-idosell': '.mermaid-phase-3',
      'phase-4-configuration': '.mermaid-phase-4',
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
2. Navigate to **Settings → API → Access** *(Ustawienia → API → Dostęp)*
3. Click **Add New Key** *(Dodaj klucz)*

### Step 2: Configure Key Settings

You will see a form titled "Adding an API key" *(Dodawanie klucza API)*. Configure the fields as
follows:

![IdoSell API Key Settings](platforms/idosell_api_key.png)

**Login Settings** *(Logowanie)*:

- **Authorization Method** *(Sposób autoryzacji)*: Select **API Key** *(Klucz API)*

**Key Details**:

- **API Key** *(Klucz API)*: Will be generated automatically after you save
- **Application Name** *(Nazwa aplikacji)*: Enter `LuigisBox`
- **Email in case of contact necessity** *(E-mail w razie potrzeby kontaktu)*: Optional

**Status**:

- **Active** *(Aktywny)*: Set to **Yes** *(tak)*
- **Restrict hosts from which login is possible** *(Ogranicz hosty z których możę się logować)*:
  Set to **No** *(nie)*

**Localization** *(Lokalizacja)*:

- Leave default settings (usually CET timezone and Polish language)

### Step 3: Configure API Gateway Permissions *(Dostęp do bramek API)*

{{ callout('warning', '**This is the most critical step.** Incorrect permissions will prevent Luigi\'s Box from syncing your catalog.') }}

Scroll down to the permissions matrix and set the following:

| Gateway | Permission Level | Polish Label |
|---------|------------------|--------------|
| System  | Read only        | tylko odczyt |
| CMS     | Read and write   | odczyt i zapis |
| PIM     | Read and write   | odczyt i zapis |
| CRM     | No access        | brak dostępu |
| OMS     | No access        | brak dostępu |
| WMS     | No access        | brak dostępu |

{{ callout('note', 'The System permission is required for the initial connection check. CMS and PIM are required to sync your products and categories.') }}

### Step 4: Save and Copy

1. Click **Add** *(Dodaj)* at the bottom of the form
2. The page will reload, and your **API Key** *(Klucz API)* will now be visible in the top section
3. **Copy this key to your clipboard.** You will need it immediately.



<a name="phase-2-connect-luigi-s-box"></a>

## Phase 2: Connect Luigi's Box

Now that you have your credentials, you will connect your store within the Luigi's Box interface.

### Step 1: Access Integration Settings

1. Log in to your Luigi's Box account
2. Navigate to **Settings → General** *(Site Administration)*
3. Locate the IdoSell setup form

### Step 2: Enter Credentials & Configure

1. **Shop URL:** Enter your IdoSell store domain (e.g., `your-shop.com`)
2. **API Key:** Paste the key you generated in Phase 1
3. Select **IdoSell** from the platform dropdown menu (if prompted)
4. Click **Save** or **Next**

Once the connection is established, you will be presented with your unique **Tracking Script**.

**Copy this script code.** You will need it for the next phase.

It will look like this:

```html
<script src="https://scripts.luigisbox.com/LBX-xxxxxx.js"></script>
```



<a name="phase-3-install-tracking-script-in-idosell"></a>

## Phase 3: Install Tracking Script in IdoSell

To enable tracking and search functionality on your storefront, you must add the script via the
IdoSell HTML/JS Add-ons module.

### Step 1: Create a New Campaign

1. Log back in to your IdoSell panel
2. Navigate to **Store → Optimization & Functionality → HTML/JS Add-ons**
   *(Sklep → Optymalizacja i funkcjonalność → Dodatki HTML/JS)*
3. Click the **Add a campaign** *(Dodaj kampanię)* button

![IdoSell HTML Add-on Campaign](platforms/IdoSell_html_addon_polish.png)

### Step 2: Configure Campaign Settings

Fill in the campaign details:

- **Name in the panel:** `LuigisBox`
- **Active:** Yes *(tak)*
- **Pages:** Select **All pages** *(Wszystkie strony)*
- Click **Save**

### Step 3: Add the Script

1. In the campaigns list, find your new **LuigisBox** campaign and click **Edit add-ons**
   *(Edytuj dodatki)*
2. Click **New addition** *(Dodaj nowy dodatek)*
3. Configure the add-on form:
   - **Add-on title:** `Tracking script`
   - **Active:** Yes *(tak)*
   - **Add-on type:** HTML
   - **Load the add-on on the page:** Along with the page content *(Wraz z treścią strony)*
   - **Show:** Select both **Normal version of the page** and **Mobile version of the site**
   - **Automatic control and shutdown:** No *(nie)*

![IdoSell Tracking Script Configuration](platforms/idosell_tracking_script_config.png)

### Step 4: Paste the Script

1. Scroll down to the **Advanced edition** *(Zaawansowana edycja)* or code editor section
2. Paste the script you copied from Luigi's Box:

   ```html
   <script src="https://scripts.luigisbox.com/LBX-xxxxxx.js"></script>
   ```

3. Click **Duplicate on all languages** if you have a multi-language store
4. Click **Add** *(Dodaj)* at the bottom of the page



<a name="phase-4-configuration"></a>

## Phase 4: Configuration

Once connected, you can further refine how Luigi's Box interacts with your IdoSell data.

### Step 1: Select Shop and Language

In the Luigi's Box integration settings (where you entered your API key), you will see dropdown
menus for **Select shop** and **Language**.

- **Select shop:** Choose the specific store domain you wish to sync
  - **Note:** The Shop ID will automatically update based on your selection
- **Language:** Select the language view for this synchronization
  - The system will notify you of the shop's default language

### Step 2: Save Integration

Click **Setup IdoSell synchronization** (or **Save**). You should see a success message indicating
the integration is active.



<a name="verification-troubleshooting"></a>
## Verification & Troubleshooting

### Verify Script Installation

To confirm the installation is successful:

1. Open your IdoSell store homepage in a new browser tab
2. Right-click and select **View Page Source**
3. Search (Ctrl+F / Cmd+F) for `luigisbox`

You should see the script injected within the code:

```html
<!-- Begin additional html or js -->
<!--7|1|6-->
<script src="https://scripts.luigisbox.com/LBX-941804.js"></script>
<!-- End additional html or js -->
```

### Verify Connection Status

Go back to your Luigi's Box dashboard. Check the **IdoSell client overview** section (top of
settings). It should indicate that the catalog synchronization has started.




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

