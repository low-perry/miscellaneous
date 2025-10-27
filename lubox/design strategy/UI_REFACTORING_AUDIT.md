# Luigi's Box Documentation - UI Refactoring Audit

**Date:** October 26, 2025  
**Purpose:** Complete audit of the documentation styling architecture for a ground-up UI rewrite

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Current Architecture Overview](#current-architecture-overview)
3. [Styling Sources & Locations](#styling-sources--locations)
4. [Theme & Color System](#theme--color-system)
5. [Ruby Sass to Dart Sass Migration](#ruby-sass-to-dart-sass-migration)
6. [Modularity Strategy](#modularity-strategy)
7. [Layout & Partial Refactoring](#layout--partial-refactoring)
8. [Light/Dark Mode Implementation](#lightdark-mode-implementation)
9. [Recommended Refactoring Plan](#recommended-refactoring-plan)
10. [Migration Checklist](#migration-checklist)

---

## Executive Summary

The Luigi's Box documentation currently uses a **hybrid styling architecture** combining:

- **Legacy Slate-based SCSS** (Ruby Sass)
- **Bootstrap 5.3.2** (CDN)
- **Inline styles** in ERB templates
- **Custom SCSS overrides**
- **Multiple CSS files** for specific pages

This audit identifies all styling sources and provides a comprehensive refactoring strategy to create a modern, modular, theme-aware CSS architecture using Dart Sass.

---

## Current Architecture Overview

### Technology Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| **Static Site Generator** | Middleman | 4.4 |
| **CSS Preprocessor** | Ruby Sass | via `sass` gem |
| **CSS Framework** | Bootstrap | 5.3.2 (CDN) |
| **Markdown Renderer** | Redcarpet | 3.5.0 |
| **Syntax Highlighting** | Rouge | 3.21 |
| **Build Tool** | Middleman Sprockets | 4.1 |

### File Structure

```
source/
├── assets/
│   └── stylesheets/
│       ├── screen.css.scss          # Main entry point (Ruby Sass)
│       ├── print.css.scss           # Print styles
│       ├── _variables.scss          # Color/size variables (Slate-based)
│       ├── _luigisbox.scss          # Custom overrides
│       ├── _normalize.scss          # CSS reset
│       ├── _icon-font.scss          # Icon definitions
│       ├── _rtl.scss                # Right-to-left support
│       └── autocomplete.css         # Luigi's Box autocomplete styles
├── styles/
│   ├── quickstart.css               # Quickstart page styles
│   └── landing.css                  # Landing page styles
├── includes/
│   └── _head.erb                    # ~800 lines of inline CSS
└── layouts/
    ├── layout.erb                   # Main layout
    ├── api_reference_layout.erb     # API docs layout
    ├── guides_layout.erb            # Guide pages layout
    ├── overview_layout.erb          # Overview pages layout
    └── quickstart_layout.erb        # Quickstart layout
```

---

## Styling Sources & Locations

### 1. SCSS Files (Ruby Sass)

**Primary Entry Point:**
```scss
// source/assets/stylesheets/screen.css.scss
@import 'normalize';
@import 'variables';
@import 'icon-font';
@import 'luigisbox';
```

**Variables File (_variables.scss):**
- Based on **Slate documentation theme**
- Defines color palette (Luigi's purple: `#47bcd6`, primary: `#682175`)
- Layout dimensions (nav width: `230px`, examples width: `60%`)
- Font families and sizes
- Theme colors (nav-bg, main-bg, code-bg, aside colors)

**Custom Overrides (_luigisbox.scss):**
- Typography adjustments (h1-h6 styling)
- Navigation customizations
- Badge/label styles (required, optional, deprecated)
- Card and layout styles
- Custom utility classes (proscons lists, taglines)

### 2. Bootstrap 5.3.2 (External CDN)

**Loaded in `_head.erb`:**
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
      rel="stylesheet" 
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" 
      crossorigin="anonymous">
```

**Bootstrap Icons:**
```html
<link rel="stylesheet" 
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
```

**Used For:**
- Grid system (`.container-fluid`, `.row`, `.col-*`)
- Navigation (`.navbar`, `.nav-link`, `.offcanvas`)
- Cards, alerts, modals
- Utility classes (spacing, display, flex, colors)

### 3. Inline Styles in ERB Templates

**Location:** `source/includes/_head.erb` (lines 54-600+)

**Contains:**
- CSS custom properties for Bootstrap theme customization
- Component-specific styles (search bar, navigation, TOC)
- Responsive breakpoints
- Animation keyframes
- Widget styles (feedback, tutorials menu)
- Luigi's Box autocomplete overrides

**Major Sections:**
```erb
<style>
  /* Rouge syntax highlighting theme */
  <%= Rouge::Themes::MonokaiSublime.render(:scope => '.highlight') %>
  
  /* Bootstrap theme customization */
  :root {
    --bs-info-bg-subtle: #682175a8;
    --bs-info-border-subtle: #bbadbd;
  }
  
  [data-bs-theme="lbx"] {
    --bs-tertiary-bg: #a57dac;
    --bs-secondary-bg: #bbadbd;
    --bs-light-bg-subtle: #eee7f0;
  }
  
  /* Typography */
  html { font-size: 15px; }
  h1, h2, h3 { /* custom styles */ }
  
  /* Navigation */
  header { border-bottom: 1px solid #682175; }
  
  /* Search bar (#lb-search) */
  /* TOC (#navbar-toc) */
  /* Tutorials menu */
  /* Feedback widget */
  /* etc... */
</style>
```

### 4. Page-Specific CSS Files

**Quickstart Pages:**
- `source/styles/quickstart.css`
- Loaded in `_head.erb`: `<link rel="stylesheet" href="/styles/quickstart.css">`

**Landing Pages:**
- `source/styles/landing.css`

**Autocomplete Overrides:**
- `source/assets/stylesheets/autocomplete.css`

### 5. Third-Party CSS (Luigi's Box Components)

**Autocomplete:**
```html
<link rel="stylesheet" href="https://cdn.luigisbox.com/autocomplete.css" />
```

**Search:**
```html
<script src="https://cdn.luigisbox.com/search.js"></script>
```

### 6. JavaScript-Generated Styles

**Location:** `source/includes/_new_menu.erb` (lines 130-300+)

**Contains:**
- Navigation menu interaction styles
- Collapse panel animations
- Active state management
- Mobile menu overrides

---

## Theme & Color System

### Current Color Palette

```scss
// Primary Brand Colors
$luigis-color: #47bcd6;          // Luigi's teal (legacy)
$primary-purple: #682175;         // Main purple (current brand)

// Background Colors
$nav-bg: #EFF4F6;                 // Sidebar navigation
$main-bg: #fff;                   // Main content area
$examples-bg: #2E3336;            // Code examples column
$code-bg: #1E2224;                // Code blocks
$code-annotation-bg: #191D1F;     // Code annotations

// Semantic Colors
$aside-notice-bg: #8fbcd4;        // Info callouts
$aside-warning-bg: #c97a7e;       // Warning callouts
$aside-success-bg: #6ac174;       // Success callouts

// Text Colors
$main-text: #333;                 // Body text
$nav-text: #726e6e;               // Navigation links
$nav-active-text: $luigis-color;  // Active nav items
```

### Bootstrap Custom Properties

```css
:root {
  --bs-info-bg-subtle: #682175a8;
  --bs-info-border-subtle: #bbadbd;
  --bs-info-text-emphasis: #fff;
}

[data-bs-theme="lbx"] {
  --bs-tertiary-bg: #a57dac;
  --bs-secondary-bg: #bbadbd;
  --bs-light-bg-subtle: #eee7f0;
  --bs-light-rgb: 243, 239, 244;
}
```

### Hardcoded Colors (Problems)

**Issues:**
1. Colors scattered across 5+ files
2. Hex values hardcoded in ERB inline styles
3. No centralized color tokens
4. Bootstrap overrides mixed with custom colors
5. No dark mode variables defined

---

## Ruby Sass to Dart Sass Migration

### Current Setup

**Gemfile:**
```ruby
gem 'sass'  # Ruby Sass (deprecated)
gem 'middleman-sprockets', '~> 4.1'
gem 'sprockets', '~> 3'
```

**Config (config.rb):**
```ruby
activate :sprockets
set :css_dir, 'assets/stylesheets'
```

### Migration Requirements

#### 1. Update Dependencies

**Remove:**
```ruby
gem 'sass'
gem 'middleman-sprockets', '~> 4.1'
gem 'sprockets', '~> 3'
```

**Add:**
```ruby
gem 'sassc', '~> 2.4'
gem 'middleman-autoprefixer', '~> 3.0'  # Already present
```

#### 2. Syntax Changes

**@import → @use/@forward:**

Ruby Sass:
```scss
@import 'variables';
@import 'normalize';
```

Dart Sass:
```scss
@use 'variables' as *;
@use 'normalize';
```

**Division Operator:**

Ruby Sass:
```scss
width: $nav-width / 2;
```

Dart Sass:
```scss
@use 'sass:math';
width: math.div($nav-width, 2);
// OR
width: calc($nav-width / 2);
```

**Color Functions:**

Ruby Sass:
```scss
background: lighten($main-bg, 4.2%);
```

Dart Sass:
```scss
@use 'sass:color';
background: color.adjust($main-bg, $lightness: 4.2%);
```

#### 3. Module System

**Create module structure:**
```
assets/stylesheets/
├── index.scss              # New main entry
├── _config.scss            # Configuration module
├── abstracts/
│   ├── _variables.scss     # Design tokens
│   ├── _functions.scss     # Sass functions
│   └── _mixins.scss        # Reusable mixins
├── base/
│   ├── _reset.scss         # CSS reset
│   └── _typography.scss    # Base typography
├── layout/
│   ├── _header.scss        # Header styles
│   ├── _navigation.scss    # Nav menu
│   ├── _sidebar.scss       # Sidebar TOC
│   └── _footer.scss        # Footer
├── components/
│   ├── _buttons.scss
│   ├── _cards.scss
│   ├── _code-blocks.scss
│   ├── _callouts.scss
│   └── _search.scss
├── pages/
│   ├── _home.scss
│   ├── _api-reference.scss
│   └── _quickstart.scss
└── themes/
    ├── _light.scss         # Light mode
    └── _dark.scss          # Dark mode
```

#### 4. Config.rb Changes

```ruby
# Remove sprockets
# activate :sprockets

# Add sassc configuration
activate :autoprefixer do |config|
  config.browsers = ['last 2 versions', 'Firefox ESR']
end

# Configure Dart Sass via sassc
set :sass_options, {
  syntax: :scss,
  style: :compressed # for production
}
```

---

## Modularity Strategy

### Design Token System

**Create `abstracts/_tokens.scss`:**

```scss
// abstracts/_tokens.scss

// ============================================
// DESIGN TOKENS - Single Source of Truth
// ============================================

// Color Tokens
// ------------
$color-brand-primary: #682175;
$color-brand-secondary: #47bcd6;
$color-brand-purple-light: #9a4ca5;
$color-brand-purple-lighter: #a57dac;
$color-brand-purple-lightest: #bbadbd;

// Neutral Colors
$color-neutral-white: #ffffff;
$color-neutral-gray-50: #f9fafb;
$color-neutral-gray-100: #f3f4f6;
$color-neutral-gray-200: #e5e7eb;
$color-neutral-gray-300: #d1d5db;
$color-neutral-gray-400: #9ca3af;
$color-neutral-gray-500: #6b7280;
$color-neutral-gray-600: #4b5563;
$color-neutral-gray-700: #374151;
$color-neutral-gray-800: #1f2937;
$color-neutral-gray-900: #111827;
$color-neutral-black: #000000;

// Semantic Colors
$color-semantic-success: #6ac174;
$color-semantic-warning: #c97a7e;
$color-semantic-info: #8fbcd4;
$color-semantic-error: #dc3545;

// Spacing Scale
$space-0: 0;
$space-1: 0.25rem;  // 4px
$space-2: 0.5rem;   // 8px
$space-3: 0.75rem;  // 12px
$space-4: 1rem;     // 16px
$space-5: 1.5rem;   // 24px
$space-6: 2rem;     // 32px
$space-8: 3rem;     // 48px
$space-10: 4rem;    // 64px
$space-12: 6rem;    // 96px

// Typography Scale
$font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
$font-family-mono: 'Fira Mono', Consolas, Monaco, 'Courier New', monospace;

$font-size-xs: 0.75rem;   // 12px
$font-size-sm: 0.875rem;  // 14px
$font-size-base: 1rem;    // 16px
$font-size-lg: 1.125rem;  // 18px
$font-size-xl: 1.25rem;   // 20px
$font-size-2xl: 1.5rem;   // 24px
$font-size-3xl: 1.875rem; // 30px
$font-size-4xl: 2.25rem;  // 36px

// Font Weights
$font-weight-light: 300;
$font-weight-normal: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;

// Line Heights
$line-height-tight: 1.25;
$line-height-base: 1.5;
$line-height-relaxed: 1.75;
$line-height-loose: 2;

// Border Radius
$radius-sm: 0.25rem;   // 4px
$radius-base: 0.5rem;  // 8px
$radius-md: 0.625rem;  // 10px
$radius-lg: 1rem;      // 16px
$radius-full: 9999px;

// Shadows
$shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
$shadow-base: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
$shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
$shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
$shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

// Z-Index Scale
$z-index-dropdown: 1000;
$z-index-sticky: 1020;
$z-index-fixed: 1030;
$z-index-modal-backdrop: 1040;
$z-index-offcanvas: 1045;
$z-index-modal: 1050;
$z-index-popover: 1060;
$z-index-tooltip: 1070;

// Breakpoints
$breakpoint-sm: 576px;
$breakpoint-md: 768px;
$breakpoint-lg: 992px;
$breakpoint-xl: 1200px;
$breakpoint-2xl: 1400px;

// Layout
$layout-nav-width: 230px;
$layout-nav-width-mobile: 100%;
$layout-content-max-width: 1280px;
$layout-sidebar-width: 280px;

// Transitions
$transition-base: all 0.2s ease-in-out;
$transition-fast: all 0.1s ease-in-out;
$transition-slow: all 0.3s ease-in-out;
```

### Theme System (Light/Dark Mode)

**Create `themes/_light.scss`:**

```scss
// themes/_light.scss
@use '../abstracts/tokens' as *;

// Light Theme Token Assignments
// ==============================

[data-theme="light"] {
  // Background Colors
  --color-bg-primary: #{$color-neutral-white};
  --color-bg-secondary: #{$color-neutral-gray-50};
  --color-bg-tertiary: #{$color-neutral-gray-100};
  --color-bg-nav: #eff4f6;
  --color-bg-code: #1e2224;
  --color-bg-code-examples: #2e3336;
  
  // Text Colors
  --color-text-primary: #{$color-neutral-gray-900};
  --color-text-secondary: #{$color-neutral-gray-600};
  --color-text-tertiary: #{$color-neutral-gray-500};
  --color-text-nav: #726e6e;
  --color-text-nav-active: #{$color-brand-primary};
  --color-text-inverse: #{$color-neutral-white};
  
  // Border Colors
  --color-border-primary: #{$color-neutral-gray-200};
  --color-border-secondary: #{$color-neutral-gray-300};
  --color-border-nav: #{$color-brand-primary};
  
  // Interactive Colors
  --color-link: #{$color-brand-primary};
  --color-link-hover: #{$color-brand-purple-light};
  --color-focus: #{$color-brand-primary};
  
  // Component Backgrounds
  --color-nav-active-bg: #{$color-brand-purple-lightest};
  --color-nav-hover-bg: #{$color-neutral-gray-100};
  --color-card-bg: #{$color-neutral-white};
  --color-card-border: #{$color-neutral-gray-200};
  
  // Semantic Colors
  --color-success: #{$color-semantic-success};
  --color-warning: #{$color-semantic-warning};
  --color-info: #{$color-semantic-info};
  --color-error: #{$color-semantic-error};
  
  // Success backgrounds
  --color-success-bg: rgba(106, 193, 116, 0.1);
  --color-warning-bg: rgba(201, 122, 126, 0.1);
  --color-info-bg: rgba(143, 188, 212, 0.1);
  --color-error-bg: rgba(220, 53, 69, 0.1);
  
  // Shadows
  --shadow-sm: #{$shadow-sm};
  --shadow-base: #{$shadow-base};
  --shadow-md: #{$shadow-md};
  --shadow-lg: #{$shadow-lg};
}

// Set light theme as default
:root {
  color-scheme: light;
}
```

**Create `themes/_dark.scss`:**

```scss
// themes/_dark.scss
@use '../abstracts/tokens' as *;

// Dark Theme Token Assignments
// =============================

[data-theme="dark"] {
  // Background Colors
  --color-bg-primary: #{$color-neutral-gray-900};
  --color-bg-secondary: #{$color-neutral-gray-800};
  --color-bg-tertiary: #{$color-neutral-gray-700};
  --color-bg-nav: #1a1d23;
  --color-bg-code: #0d1117;
  --color-bg-code-examples: #161b22;
  
  // Text Colors
  --color-text-primary: #{$color-neutral-gray-50};
  --color-text-secondary: #{$color-neutral-gray-300};
  --color-text-tertiary: #{$color-neutral-gray-400};
  --color-text-nav: #{$color-neutral-gray-300};
  --color-text-nav-active: #{$color-brand-secondary};
  --color-text-inverse: #{$color-neutral-gray-900};
  
  // Border Colors
  --color-border-primary: #{$color-neutral-gray-700};
  --color-border-secondary: #{$color-neutral-gray-600};
  --color-border-nav: #{$color-brand-secondary};
  
  // Interactive Colors
  --color-link: #{$color-brand-secondary};
  --color-link-hover: lighten($color-brand-secondary, 10%);
  --color-focus: #{$color-brand-secondary};
  
  // Component Backgrounds
  --color-nav-active-bg: rgba(71, 188, 214, 0.15);
  --color-nav-hover-bg: #{$color-neutral-gray-800};
  --color-card-bg: #{$color-neutral-gray-800};
  --color-card-border: #{$color-neutral-gray-700};
  
  // Semantic Colors
  --color-success: lighten($color-semantic-success, 10%);
  --color-warning: lighten($color-semantic-warning, 10%);
  --color-info: lighten($color-semantic-info, 10%);
  --color-error: lighten($color-semantic-error, 10%);
  
  // Semantic backgrounds
  --color-success-bg: rgba(106, 193, 116, 0.2);
  --color-warning-bg: rgba(201, 122, 126, 0.2);
  --color-info-bg: rgba(143, 188, 212, 0.2);
  --color-error-bg: rgba(220, 53, 69, 0.2);
  
  // Shadows (darker in dark mode)
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  --shadow-base: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
}

// Dark theme color scheme
[data-theme="dark"] {
  color-scheme: dark;
}
```

### Component Modularization

**Example: Code Block Component**

```scss
// components/_code-blocks.scss
@use '../abstracts/tokens' as *;

.code-block {
  position: relative;
  background: var(--color-bg-code);
  border-radius: $radius-base;
  margin: $space-4 0;
  
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: $space-3 $space-4;
    border-bottom: 1px solid var(--color-border-primary);
    
    &-title {
      font-size: $font-size-sm;
      font-weight: $font-weight-medium;
      color: var(--color-text-secondary);
    }
  }
  
  &__content {
    padding: $space-4;
    overflow-x: auto;
    
    pre {
      margin: 0;
      font-family: $font-family-mono;
      font-size: $font-size-sm;
      line-height: $line-height-relaxed;
    }
  }
  
  &__copy-button {
    position: absolute;
    top: $space-3;
    right: $space-3;
    padding: $space-2 $space-3;
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border-primary);
    border-radius: $radius-sm;
    cursor: pointer;
    transition: $transition-base;
    
    &:hover {
      background: var(--color-bg-tertiary);
    }
    
    &--copied {
      background: var(--color-success);
      color: var(--color-text-inverse);
    }
  }
  
  // Language-specific styling
  &--javascript { /* ... */ }
  &--python { /* ... */ }
  &--ruby { /* ... */ }
  
  // Theme variants
  &--monokai {
    // Keep current Rouge theme
  }
}
```

---

## Layout & Partial Refactoring

### Current Layout Structure

```
source/layouts/
├── layout.erb                   # Main wrapper (uses includes)
├── api_reference_layout.erb     # Extends layout.erb
├── guides_layout.erb            # Extends layout.erb
├── overview_layout.erb          # Extends layout.erb
└── quickstart_layout.erb        # Extends layout.erb

source/includes/
├── _head.erb                    # <head> + 800 lines inline CSS
├── _header_nav.erb              # Top navigation bar
├── _new_menu.erb                # Sidebar navigation + 200 lines JS
├── _toc.erb                     # Table of contents
├── _footer.erb                  # Footer
├── _scripts.erb                 # JavaScript includes
├── _feedback.erb                # Feedback widget
└── callouts/
    └── _callout.erb             # Callout component
```

### Problems with Current Structure

1. **_head.erb is massive** (800+ lines, mostly inline CSS)
2. **_new_menu.erb has embedded styles and scripts**
3. **No clear separation** between markup and styling
4. **Duplicated code** across layouts
5. **Hard to maintain** - changes require editing multiple files
6. **Poor performance** - inline styles block rendering

### Refactored Structure

```
source/
├── layouts/
│   ├── base.erb                 # New base layout (minimal)
│   ├── docs.erb                 # Documentation pages
│   ├── api.erb                  # API reference pages
│   └── marketing.erb            # Landing/quickstart pages
│
├── includes/
│   ├── head/
│   │   ├── _meta.erb            # Meta tags only
│   │   ├── _styles.erb          # Stylesheet links only
│   │   └── _scripts_head.erb   # Critical head scripts
│   │
│   ├── navigation/
│   │   ├── _header.erb          # Top nav
│   │   ├── _sidebar.erb         # Sidebar nav
│   │   └── _mobile_menu.erb    # Mobile offcanvas
│   │
│   ├── content/
│   │   ├── _toc.erb             # Table of contents
│   │   └── _breadcrumbs.erb    # Breadcrumb navigation
│   │
│   ├── footer/
│   │   └── _footer.erb
│   │
│   ├── widgets/
│   │   ├── _feedback.erb        # Feedback widget
│   │   ├── _search.erb          # Search component
│   │   └── _tutorial_steps.erb # Tutorial navigation
│   │
│   ├── components/
│   │   ├── _callout.erb         # Callout boxes
│   │   ├── _card.erb            # Card component
│   │   ├── _code_block.erb     # Code blocks
│   │   └── _button.erb          # Button component
│   │
│   └── scripts/
│       ├── _analytics.erb       # GTM/Analytics
│       ├── _luigisbox.erb       # Luigi's Box scripts
│       └── _interactions.erb    # UI interactions
│
└── assets/
    ├── stylesheets/
    │   └── application.scss     # New main entry
    └── javascripts/
        └── application.js       # Bundled JS
```

### Base Layout Template

**layouts/base.erb:**

```erb
<!doctype html>
<html lang="en" data-theme="light">
<head>
  <%= partial 'includes/head/meta', locals: { page_content: yield } %>
  <%= partial 'includes/head/styles' %>
  <%= partial 'includes/head/scripts_head' %>
</head>
<body class="<%= page_classes %>" data-url="<%= current_page.url %>">
  <%= partial 'includes/navigation/header' %>
  
  <div class="layout layout--<%= current_page.data.layout_type || 'default' %>">
    <%= yield %>
  </div>
  
  <%= partial 'includes/footer/footer' %>
  <%= partial 'includes/scripts/analytics' %>
  <%= partial 'includes/scripts/luigisbox' %>
  <%= partial 'includes/scripts/interactions' %>
</body>
</html>
```

### Documentation Layout

**layouts/docs.erb:**

```erb
<% wrap_layout :base do %>
  <div class="docs-layout">
    <%= partial 'includes/navigation/sidebar' %>
    
    <main class="docs-content">
      <article class="<%= article_classes %>">
        <%= yield %>
        
        <hr class="separator">
        <%= partial 'includes/widgets/feedback' %>
        
        <% if has_examples? %>
          <%= partial 'includes/content/examples', locals: { examples: page_examples } %>
        <% end %>
      </article>
      
      <%= partial 'includes/content/toc', locals: { page_content: yield } %>
    </main>
  </div>
<% end %>
```

### Clean Head Partial

**includes/head/_styles.erb:**

```erb
<!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
      rel="stylesheet" 
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" 
      crossorigin="anonymous">

<!-- Bootstrap Icons -->
<link rel="stylesheet" 
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">

<!-- Luigi's Box Components -->
<link rel="stylesheet" href="https://cdn.luigisbox.com/autocomplete.css" />

<!-- Application Styles -->
<%= stylesheet_link_tag "application" %>

<!-- Syntax Highlighting -->
<style><%= Rouge::Themes::MonokaiSublime.render(:scope => '.highlight') %></style>
```

**includes/head/_meta.erb:**

```erb
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title><%= discover_title(page_content) || current_page.data.title || "API Documentation" %></title>

<!-- Favicons -->
<link rel="manifest" href="/assets/images/fav/manifest.json">
<link rel="icon" href="/assets/images/fav.svg">
<link rel="mask-icon" href="/assets/images/fav.svg" color="#682175">

<!-- Preconnect -->
<link rel="dns-prefetch" href="//live.luigisbox.com" />
<link rel="preconnect" href="https://cdn.luigisbox.com">
<link rel="preconnect" href="https://fonts.googleapis.com">

<!-- Fonts -->
<link href="https://fonts.googleapis.com/css?family=Fira+Mono" rel="stylesheet">
```

---

## Light/Dark Mode Implementation

### 1. Theme Switcher Component

**includes/components/_theme_switcher.erb:**

```erb
<div class="theme-switcher" data-controller="theme">
  <button 
    type="button" 
    class="theme-switcher__button"
    data-action="click->theme#toggle"
    aria-label="Toggle theme"
  >
    <span class="theme-switcher__icon theme-switcher__icon--light" data-theme-target="lightIcon">
      <i class="bi bi-sun"></i>
    </span>
    <span class="theme-switcher__icon theme-switcher__icon--dark" data-theme-target="darkIcon">
      <i class="bi bi-moon"></i>
    </span>
  </button>
</div>
```

### 2. Theme Controller JavaScript

**assets/javascripts/controllers/theme_controller.js:**

```javascript
// Using Stimulus (recommended) or vanilla JS

class ThemeController {
  static targets = ['lightIcon', 'darkIcon'];
  
  connect() {
    this.initializeTheme();
  }
  
  initializeTheme() {
    // Check for saved preference
    const savedTheme = localStorage.getItem('theme');
    
    // Check for system preference
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches 
      ? 'dark' 
      : 'light';
    
    // Apply theme (priority: saved > system > default light)
    const theme = savedTheme || systemTheme;
    this.applyTheme(theme);
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
          this.applyTheme(e.matches ? 'dark' : 'light');
        }
      });
  }
  
  toggle() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Send analytics event
    this.trackThemeChange(newTheme);
  }
  
  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    this.updateIcons(theme);
    this.updateCodeTheme(theme);
  }
  
  updateIcons(theme) {
    if (theme === 'dark') {
      this.lightIconTarget.classList.add('hidden');
      this.darkIconTarget.classList.remove('hidden');
    } else {
      this.darkIconTarget.classList.add('hidden');
      this.lightIconTarget.classList.remove('hidden');
    }
  }
  
  updateCodeTheme(theme) {
    // Optionally switch Rouge themes
    const codeBlocks = document.querySelectorAll('.highlight');
    codeBlocks.forEach(block => {
      block.setAttribute('data-theme', theme);
    });
  }
  
  trackThemeChange(theme) {
    if (window.dataLayer) {
      dataLayer.push({
        event: 'theme_change',
        theme: theme
      });
    }
  }
}

// Register controller
if (window.Stimulus) {
  window.Stimulus.register('theme', ThemeController);
}
```

### 3. Code Syntax Theme Switching

**Option A: Single Rouge Theme (Recommended)**

Keep Monokai Sublime for both themes (it's already dark-optimized):

```scss
// components/_code-blocks.scss

.highlight {
  border-radius: $radius-base;
  
  // Light theme: add light background wrapper
  [data-theme="light"] & {
    background: var(--color-bg-code);
    padding: $space-4;
  }
  
  // Dark theme: already dark
  [data-theme="dark"] & {
    background: var(--color-bg-code);
    padding: $space-4;
  }
}
```

**Option B: Dual Rouge Themes**

```erb
<!-- includes/head/_styles.erb -->
<style>
  /* Light theme code highlighting */
  [data-theme="light"] .highlight {
    <%= Rouge::Themes::Github.render(:scope => '') %>
  }
  
  /* Dark theme code highlighting */
  [data-theme="dark"] .highlight {
    <%= Rouge::Themes::MonokaiSublime.render(:scope => '') %>
  }
</style>
```

### 4. Bootstrap Theme Integration

```scss
// themes/_bootstrap-integration.scss

// Override Bootstrap theme colors based on data-theme
[data-theme="light"] {
  // Bootstrap uses these for component colors
  --bs-body-bg: #{$color-neutral-white};
  --bs-body-color: #{$color-neutral-gray-900};
  --bs-primary: #{$color-brand-primary};
  --bs-border-color: #{$color-neutral-gray-300};
}

[data-theme="dark"] {
  --bs-body-bg: #{$color-neutral-gray-900};
  --bs-body-color: #{$color-neutral-gray-50};
  --bs-primary: #{$color-brand-secondary};
  --bs-border-color: #{$color-neutral-gray-700};
}
```

---

## Recommended Refactoring Plan

### Phase 1: Foundation (Week 1-2)

**Goals:** Set up new architecture without breaking existing site

1. **Create new folder structure** (don't delete old files yet)
   ```bash
   mkdir -p source/assets/stylesheets/{abstracts,base,layout,components,pages,themes}
   ```

2. **Extract design tokens**
   - Create `abstracts/_tokens.scss` with all variables
   - Document every color, spacing, size value

3. **Set up Dart Sass**
   - Update Gemfile
   - Update config.rb
   - Test compilation

4. **Create theme files**
   - `themes/_light.scss` with current colors
   - `themes/_dark.scss` with inverse colors
   - Test theme switching

**Deliverable:** New SCSS compiles alongside old CSS

### Phase 2: Component Migration (Week 3-4)

**Goals:** Convert components to modular SCSS

1. **Start with smallest components:**
   - Buttons → `components/_buttons.scss`
   - Callouts → `components/_callouts.scss`
   - Cards → `components/_cards.scss`

2. **Extract inline styles from _head.erb:**
   - Move to appropriate component files
   - Keep only critical path CSS inline

3. **Test each component:**
   - Ensure visual parity
   - Test light/dark themes
   - Test responsive behavior

**Deliverable:** 10-15 component files created

### Phase 3: Layout Migration (Week 5)

**Goals:** Restructure layout system

1. **Create new layout hierarchy:**
   - `layouts/base.erb`
   - `layouts/docs.erb`
   - `layouts/api.erb`

2. **Split includes:**
   - Clean up `_head.erb`
   - Separate `_new_menu.erb` styles/scripts
   - Modularize partials

3. **Test all page types:**
   - Docs pages
   - API reference pages
   - Landing pages
   - Tutorial pages

**Deliverable:** Clean layout structure

### Phase 4: Complete Migration (Week 6)

**Goals:** Switch to new system, remove old code

1. **Update all page references:**
   - Change stylesheet imports
   - Update layout references
   - Fix broken links

2. **Implement theme switcher:**
   - Add UI component
   - Wire up JavaScript
   - Test persistence

3. **Delete old files:**
   - Remove `screen.css.scss` imports
   - Remove inline styles from ERB
   - Remove `_luigisbox.scss` overrides

**Deliverable:** Fully refactored, production-ready site

### Phase 5: Optimization (Week 7)

**Goals:** Performance and maintainability

1. **Optimize CSS output:**
   - Remove unused styles
   - Minify for production
   - Set up purgeCSS

2. **Documentation:**
   - Component library/styleguide
   - Theme usage guide
   - Contributing guidelines

3. **CI/CD:**
   - Add SCSS linting
   - Automated visual regression tests
   - Build checks

**Deliverable:** Optimized, documented system

---

## Migration Checklist

### Pre-Migration

- [ ] Backup entire codebase
- [ ] Create new git branch: `feature/ui-refactor`
- [ ] Document all current color values
- [ ] Screenshot all page types (baseline)
- [ ] Set up local development environment

### Dart Sass Migration

- [ ] Remove `gem 'sass'` from Gemfile
- [ ] Add `gem 'sassc', '~> 2.4'` to Gemfile
- [ ] Run `bundle install`
- [ ] Update `config.rb` - remove sprockets, configure sassc
- [ ] Test build: `bundle exec middleman build`
- [ ] Fix division operators (/ → math.div or calc)
- [ ] Fix color functions (lighten/darken → color.adjust)
- [ ] Convert `@import` to `@use`/`@forward`
- [ ] Test live reload: `bundle exec middleman server`

### Token System

- [ ] Create `abstracts/_tokens.scss`
- [ ] Extract all colors from `_variables.scss`
- [ ] Extract all spacing values
- [ ] Extract all typography settings
- [ ] Extract all shadows, borders, radii
- [ ] Document token naming conventions

### Theme System

- [ ] Create `themes/_light.scss`
- [ ] Create `themes/_dark.scss`
- [ ] Create `themes/_bootstrap-integration.scss`
- [ ] Map tokens to CSS custom properties
- [ ] Test variable cascade
- [ ] Add prefers-color-scheme media query support

### Component Creation

- [ ] Audit all UI components (list them)
- [ ] Create component file structure
- [ ] Convert buttons (`_buttons.scss`)
- [ ] Convert callouts (`_callouts.scss`)
- [ ] Convert cards (`_cards.scss`)
- [ ] Convert code blocks (`_code-blocks.scss`)
- [ ] Convert navigation (`_navigation.scss`)
- [ ] Convert search bar (`_search.scss`)
- [ ] Convert tables (`_tables.scss`)
- [ ] Convert forms (`_forms.scss`)
- [ ] Test each component in isolation

### Layout Refactoring

- [ ] Create `layouts/base.erb`
- [ ] Create `layouts/docs.erb`
- [ ] Create `layouts/api.erb`
- [ ] Split `_head.erb` into subpartials
- [ ] Extract inline CSS from `_head.erb`
- [ ] Extract inline CSS from `_new_menu.erb`
- [ ] Create `includes/head/` directory
- [ ] Create `includes/navigation/` directory
- [ ] Create `includes/widgets/` directory
- [ ] Update all layout references in frontmatter

### Theme Switcher

- [ ] Create theme switcher component
- [ ] Implement JavaScript controller
- [ ] Add localStorage persistence
- [ ] Add system preference detection
- [ ] Add theme icons (sun/moon)
- [ ] Test theme switching
- [ ] Add GTM tracking

### Testing

- [ ] Visual regression test: Homepage
- [ ] Visual regression test: API reference page
- [ ] Visual regression test: Guide page
- [ ] Visual regression test: Tutorial page
- [ ] Test mobile navigation
- [ ] Test search functionality
- [ ] Test code block copy buttons
- [ ] Test feedback widget
- [ ] Test all interactive components
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile device testing (iOS, Android)

### Cleanup

- [ ] Delete `source/assets/stylesheets/screen.css.scss`
- [ ] Delete `source/assets/stylesheets/_variables.scss` (migrated)
- [ ] Delete `source/assets/stylesheets/_luigisbox.scss` (migrated)
- [ ] Remove unused `source/styles/` CSS files
- [ ] Remove inline `<style>` tags from ERB
- [ ] Clean up JavaScript in `_new_menu.erb`
- [ ] Remove commented-out code

### Documentation

- [ ] Create style guide page
- [ ] Document color palette
- [ ] Document typography scale
- [ ] Document spacing system
- [ ] Document component usage
- [ ] Document theme customization
- [ ] Update README.md
- [ ] Create CONTRIBUTING.md for styling

### Performance

- [ ] Measure CSS bundle size (before/after)
- [ ] Set up PurgeCSS for unused styles
- [ ] Enable CSS minification in production
- [ ] Test Lighthouse scores
- [ ] Optimize web fonts loading
- [ ] Lazy load non-critical CSS

### Deployment

- [ ] Test build on staging
- [ ] Run full QA cycle
- [ ] Get stakeholder approval
- [ ] Create rollback plan
- [ ] Deploy to production
- [ ] Monitor for errors
- [ ] Collect user feedback

---

## Key Files to Change

### High Priority (Change First)

1. **Gemfile**
   - Remove: `gem 'sass'`
   - Add: `gem 'sassc', '~> 2.4'`

2. **config.rb**
   - Remove: `activate :sprockets`
   - Add: Dart Sass configuration

3. **source/assets/stylesheets/screen.css.scss**
   - Rename to: `application.scss`
   - Convert: `@import` → `@use`

4. **source/includes/_head.erb**
   - Extract: All inline CSS to separate files
   - Keep: Only meta tags and links

5. **source/assets/stylesheets/_variables.scss**
   - Migrate to: `abstracts/_tokens.scss`
   - Convert: SCSS vars to CSS custom properties

### Medium Priority

6. **source/assets/stylesheets/_luigisbox.scss**
   - Split into: Multiple component files
   - Update: Selectors to use BEM

7. **source/includes/_new_menu.erb**
   - Extract: Inline styles to `components/_navigation.scss`
   - Extract: JavaScript to separate file

8. **source/layouts/layout.erb**
   - Refactor to: `base.erb` + `docs.erb`
   - Simplify: Conditional logic

### Low Priority

9. **source/styles/quickstart.css**
   - Convert to: SCSS module
   - Integrate: Into main bundle

10. **source/assets/stylesheets/print.css.scss**
    - Modernize: Media queries
    - Update: To use tokens

---

## Potential Issues & Solutions

### Issue 1: Breaking Changes During Migration

**Problem:** Site breaks when switching to Dart Sass

**Solution:**
- Use feature flags to enable new styles gradually
- Run both old and new stylesheets in parallel during transition
- Use CSS class namespacing: `.legacy-*` vs `.new-*`

### Issue 2: Bootstrap Conflicts

**Problem:** Bootstrap overrides custom styles

**Solution:**
- Load custom styles after Bootstrap
- Use higher specificity or `!important` judiciously
- Consider Bootstrap customization via Sass variables

### Issue 3: Dark Mode Flash

**Problem:** Wrong theme flashes on page load

**Solution:**
```html
<script>
  // Inline in <head> before any CSS
  (function() {
    const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  })();
</script>
```

### Issue 4: Rouge Theme Doesn't Match

**Problem:** Syntax highlighting clashes with dark mode

**Solution:**
- Use single dark theme (Monokai) for both modes
- OR: Dynamically inject Rouge theme CSS based on active theme

### Issue 5: Third-Party CSS Conflicts

**Problem:** Luigi's Box components don't match theme

**Solution:**
- Use CSS custom properties in overrides
- Scope third-party styles: `.luigi-ac { /* overrides */ }`
- Contact Luigi's Box for theme support

---

## Additional Resources

### Dart Sass Documentation
- https://sass-lang.com/documentation/
- https://sass-lang.com/documentation/breaking-changes/

### Design System References
- Material Design: https://m3.material.io/
- Tailwind CSS: https://tailwindcss.com/docs/
- Adobe Spectrum: https://spectrum.adobe.com/

### Tools
- **Sass Migrator:** `npm install -g sass-migrator`
- **stylelint:** Sass linting
- **BackstopJS:** Visual regression testing
- **PurgeCSS:** Remove unused CSS

---

## Next Steps

1. **Review this audit** with team
2. **Estimate timeline** based on team capacity
3. **Create detailed tasks** in project management tool
4. **Set up development branch**
5. **Begin Phase 1** (Foundation)

---

## Questions to Answer Before Starting

1. **Design System:** Do we want to create a separate design system/component library?
2. **Bootstrap:** Should we continue using Bootstrap or switch to custom components?
3. **Build Tool:** Should we modernize beyond Middleman (e.g., Vite, Webpack)?
4. **CSS-in-JS:** Any interest in styled-components or CSS modules?
5. **Accessibility:** What WCAG level are we targeting?
6. **Browser Support:** What's our browser support matrix?
7. **Performance Budget:** CSS size limit?

---

**Last Updated:** October 26, 2025  
**Maintainer:** [Your Name]  
**Status:** Draft - Pending Review
