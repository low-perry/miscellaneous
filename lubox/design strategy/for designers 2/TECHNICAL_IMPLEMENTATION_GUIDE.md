# Luigi's Box Documentation - Technical Implementation Guide

## Quick Start Implementation Plan

Based on the audit of your current documentation, here's a prioritized implementation plan with specific code examples and actionable steps. Note: Your existing search functionality is excellent and doesn't need changes - we'll focus on visual components, brand consistency, and navigation improvements.

## Phase 1: Immediate Visual Improvements (Week 1-2)

### 1.1 Enhanced Callout System

Currently, your callouts are very basic. Here's an enhanced version:

#### Create New Callout Component
```erb
<!-- source/includes/callouts/enhanced_callout.erb -->
<% 
  # Default values
  type ||= 'info'
  title ||= nil
  icon ||= nil
  expandable ||= false
  
  # Define callout configurations
  callout_config = {
    'info' => { icon: 'info-circle', color: 'blue', label: 'Info' },
    'warning' => { icon: 'exclamation-triangle', color: 'amber', label: 'Warning' },
    'error' => { icon: 'x-circle', color: 'red', label: 'Error' },
    'success' => { icon: 'check-circle', color: 'green', label: 'Success' },
    'tip' => { icon: 'lightbulb', color: 'purple', label: 'Tip' },
    'code-example' => { icon: 'code', color: 'gray', label: 'Code Example' },
    'best-practice' => { icon: 'star', color: 'indigo', label: 'Best Practice' },
    'deprecated' => { icon: 'archive', color: 'orange', label: 'Deprecated' }
  }
  
  config = callout_config[type] || callout_config['info']
  display_title = title || config[:label]
%>

<div class="callout callout--<%= type %> <%= 'callout--expandable' if expandable %>" data-callout="<%= type %>">
  <div class="callout__header">
    <div class="callout__icon">
      <svg class="callout__icon-svg" aria-hidden="true">
        <use href="#icon-<%= config[:icon] %>"></use>
      </svg>
    </div>
    <div class="callout__title">
      <%= display_title %>
    </div>
    <% if expandable %>
      <button class="callout__toggle" aria-expanded="false" aria-label="Toggle details">
        <svg class="callout__toggle-icon" aria-hidden="true">
          <use href="#icon-chevron-down"></use>
        </svg>
      </button>
    <% end %>
  </div>
  <div class="callout__content <%= 'callout__content--collapsible' if expandable %>">
    <%= yield %>
  </div>
</div>
```

#### Enhanced Callout Styles
```scss
// source/assets/stylesheets/components/_enhanced_callouts.scss
.callout {
  --callout-border-width: 1px;
  --callout-border-radius: 8px;
  --callout-padding: 16px;
  
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
  border: var(--callout-border-width) solid var(--callout-border-color);
  border-radius: var(--callout-border-radius);
  background-color: var(--callout-bg-color);
  transition: all 0.2s ease;
  
  // Color variants
  &--info {
    --callout-border-color: theme('colors.blue.200');
    --callout-bg-color: theme('colors.blue.50');
    --callout-accent-color: theme('colors.blue.600');
  }
  
  &--warning {
    --callout-border-color: theme('colors.amber.200');
    --callout-bg-color: theme('colors.amber.50');
    --callout-accent-color: theme('colors.amber.600');
  }
  
  &--error {
    --callout-border-color: theme('colors.red.200');
    --callout-bg-color: theme('colors.red.50');
    --callout-accent-color: theme('colors.red.600');
  }
  
  &--success {
    --callout-border-color: theme('colors.green.200');
    --callout-bg-color: theme('colors.green.50');
    --callout-accent-color: theme('colors.green.600');
  }
  
  &--tip {
    --callout-border-color: theme('colors.purple.200');
    --callout-bg-color: theme('colors.purple.50');
    --callout-accent-color: theme('colors.purple.600');
  }
  
  // Hover effect for expandable callouts
  &--expandable {
    cursor: pointer;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  }
}

.callout__header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: var(--callout-padding);
  padding-bottom: 0;
}

.callout__icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: var(--callout-accent-color);
}

.callout__title {
  font-weight: 600;
  color: var(--callout-accent-color);
  flex-grow: 1;
}

.callout__toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
}

.callout__toggle-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
  
  .callout__toggle[aria-expanded="true"] & {
    transform: rotate(180deg);
  }
}

.callout__content {
  padding: 0 var(--callout-padding) var(--callout-padding);
  
  &--collapsible {
    max-height: 0;
    overflow: hidden;
    padding-top: 0;
    padding-bottom: 0;
    transition: all 0.3s ease;
    
    &.expanded {
      max-height: 1000px; // Adjust based on content needs
      padding-top: 8px;
      padding-bottom: var(--callout-padding);
    }
  }
  
  // Style content within callouts
  p:last-child {
    margin-bottom: 0;
  }
  
  pre {
    margin: 12px 0;
  }
  
  ul, ol {
    margin: 8px 0;
    padding-left: 20px;
  }
}
```

### 1.2 Improved Code Block System

#### Enhanced Code Blocks with Copy Functionality
```erb
<!-- source/includes/code/enhanced_code_block.erb -->
<%
  # Parameters: 
  # - language: programming language for syntax highlighting
  # - title: optional title for the code block
  # - filename: optional filename to display
  # - highlight_lines: array of line numbers to highlight
  # - show_line_numbers: boolean to show line numbers
  
  language ||= 'text'
  title ||= nil
  filename ||= nil
  highlight_lines ||= []
  show_line_numbers ||= false
  copy_button ||= true
  
  # Generate unique ID for copy functionality
  code_id = "code-#{SecureRandom.hex(4)}"
%>

<div class="code-block" data-language="<%= language %>">
  <% if title || filename %>
    <div class="code-block__header">
      <% if filename %>
        <div class="code-block__filename">
          <svg class="code-block__file-icon" aria-hidden="true">
            <use href="#icon-file"></use>
          </svg>
          <%= filename %>
        </div>
      <% elsif title %>
        <div class="code-block__title"><%= title %></div>
      <% end %>
      
      <% if copy_button %>
        <button class="code-block__copy" data-copy-target="#<%= code_id %>" aria-label="Copy code">
          <svg class="code-block__copy-icon" aria-hidden="true">
            <use href="#icon-copy"></use>
          </svg>
          <span class="code-block__copy-text">Copy</span>
        </button>
      <% end %>
    </div>
  <% end %>
  
  <div class="code-block__content">
    <pre class="<%= 'line-numbers' if show_line_numbers %>"><code id="<%= code_id %>" class="language-<%= language %>"><%= yield.strip %></code></pre>
  </div>
</div>
```

### 1.3 Brand Color Implementation

#### Updated Variables File
```scss
// source/assets/stylesheets/abstracts/_brand_variables.scss

// Luigi's Box Brand Colors (update with actual brand colors)
$lb-primary: #47bcd6; // Current Luigi's Box blue - update with actual brand primary
$lb-secondary: #2c5b7a; // Darker blue - update with actual brand secondary  
$lb-accent: #ff6b35; // Orange accent - update with actual brand accent
$lb-success: #10b981;
$lb-warning: #f59e0b;
$lb-error: #ef4444;
$lb-info: #3b82f6;

// Neutral Colors
$lb-gray-50: #f9fafb;
$lb-gray-100: #f3f4f6;
$lb-gray-200: #e5e7eb;
$lb-gray-300: #d1d5db;
$lb-gray-400: #9ca3af;
$lb-gray-500: #6b7280;
$lb-gray-600: #4b5563;
$lb-gray-700: #374151;
$lb-gray-800: #1f2937;
$lb-gray-900: #111827;

// Typography
$lb-font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
$lb-font-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, monospace;

// Spacing (8px grid system)
$lb-space-1: 0.25rem; // 4px
$lb-space-2: 0.5rem;  // 8px
$lb-space-3: 0.75rem; // 12px
$lb-space-4: 1rem;    // 16px
$lb-space-5: 1.25rem; // 20px
$lb-space-6: 1.5rem;  // 24px
$lb-space-8: 2rem;    // 32px
$lb-space-10: 2.5rem; // 40px
$lb-space-12: 3rem;   // 48px
$lb-space-16: 4rem;   // 64px

// Border radius
$lb-radius-sm: 0.125rem; // 2px
$lb-radius: 0.25rem;     // 4px
$lb-radius-md: 0.375rem; // 6px
$lb-radius-lg: 0.5rem;   // 8px
$lb-radius-xl: 0.75rem;  // 12px

// Shadows
$lb-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
$lb-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
$lb-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
$lb-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

// Transitions
$lb-transition-fast: 150ms ease;
$lb-transition-base: 250ms ease;
$lb-transition-slow: 350ms ease;
```

## Phase 2: New Layout Templates (Week 3-4)

### 2.1 Landing Page Layout
```erb
<!-- source/layouts/landing_layout.erb -->
<% wrap_layout :layout do %>
  <div class="landing-page">
    <!-- Hero Section -->
    <% if current_page.data.hero %>
      <section class="hero">
        <div class="hero__container">
          <% if current_page.data.hero.badge %>
            <div class="hero__badge">
              <%= current_page.data.hero.badge %>
            </div>
          <% end %>
          
          <h1 class="hero__title">
            <%= current_page.data.hero.title || current_page.data.title %>
          </h1>
          
          <% if current_page.data.hero.subtitle %>
            <p class="hero__subtitle">
              <%= current_page.data.hero.subtitle %>
            </p>
          <% end %>
          
          <% if current_page.data.hero.actions %>
            <div class="hero__actions">
              <% current_page.data.hero.actions.each do |action| %>
                <a href="<%= action.url %>" class="btn btn--<%= action.type || 'primary' %>">
                  <%= action.text %>
                </a>
              <% end %>
            </div>
          <% end %>
        </div>
      </section>
    <% end %>

    <!-- Main Content -->
    <div class="landing-content">
      <%= yield %>
    </div>

    <!-- Features Grid -->
    <% if current_page.data.features %>
      <section class="features">
        <div class="features__container">
          <% if current_page.data.features.title %>
            <h2 class="features__title"><%= current_page.data.features.title %></h2>
          <% end %>
          
          <div class="features__grid">
            <% current_page.data.features.items.each do |feature| %>
              <div class="feature-card">
                <% if feature.icon %>
                  <div class="feature-card__icon">
                    <svg aria-hidden="true">
                      <use href="#icon-<%= feature.icon %>"></use>
                    </svg>
                  </div>
                <% end %>
                
                <h3 class="feature-card__title">
                  <% if feature.url %>
                    <a href="<%= feature.url %>"><%= feature.title %></a>
                  <% else %>
                    <%= feature.title %>
                  <% end %>
                </h3>
                
                <% if feature.description %>
                  <p class="feature-card__description">
                    <%= feature.description %>
                  </p>
                <% end %>
              </div>
            <% end %>
          </div>
        </div>
      </section>
    <% end %>

    <!-- CTA Section -->
    <% if current_page.data.cta %>
      <section class="cta">
        <div class="cta__container">
          <h2 class="cta__title"><%= current_page.data.cta.title %></h2>
          <% if current_page.data.cta.subtitle %>
            <p class="cta__subtitle"><%= current_page.data.cta.subtitle %></p>
          <% end %>
          
          <% if current_page.data.cta.actions %>
            <div class="cta__actions">
              <% current_page.data.cta.actions.each do |action| %>
                <a href="<%= action.url %>" class="btn btn--<%= action.type || 'primary' %>">
                  <%= action.text %>
                </a>
              <% end %>
            </div>
          <% end %>
        </div>
      </section>
    <% end %>
  </div>
<% end %>
```

### 2.2 Reference Documentation Layout
```erb
<!-- source/layouts/reference_layout.erb -->
<% wrap_layout :layout do %>
  <div class="reference-page">
    <!-- Page Header -->
    <header class="reference-header">
      <div class="reference-header__meta">
        <% if current_page.data.category %>
          <span class="reference-header__category">
            <%= current_page.data.category %>
          </span>
        <% end %>
        
        <% if current_page.data.version %>
          <span class="reference-header__version">
            v<%= current_page.data.version %>
          </span>
        <% end %>
      </div>
      
      <h1 class="reference-header__title">
        <%= current_page.data.title %>
      </h1>
      
      <% if current_page.data.description %>
        <p class="reference-header__description">
          <%= current_page.data.description %>
        </p>
      <% end %>
      
      <% if current_page.data.endpoints %>
        <div class="reference-header__endpoints">
          <% current_page.data.endpoints.each do |endpoint| %>
            <span class="endpoint-badge endpoint-badge--<%= endpoint.method.downcase %>">
              <%= endpoint.method.upcase %>
            </span>
            <code class="endpoint-url"><%= endpoint.url %></code>
          <% end %>
        </div>
      <% end %>
    </header>

    <!-- Main Content -->
    <div class="reference-content">
      <%= yield %>
    </div>

    <!-- Related APIs -->
    <% if current_page.data.related_apis %>
      <section class="related-apis">
        <h2>Related APIs</h2>
        <div class="related-apis__list">
          <% current_page.data.related_apis.each do |api| %>
            <a href="<%= api.url %>" class="related-api-card">
              <h3><%= api.title %></h3>
              <p><%= api.description %></p>
            </a>
          <% end %>
        </div>
      </section>
    <% end %>
  </div>
<% end %>
```

## Phase 3: Enhanced Navigation (Week 5-6)

### 3.1 Improved Navigation Component
```erb
<!-- source/includes/_enhanced_nav.erb -->
<nav class="main-nav" data-nav="main">
  <!-- Mobile toggle -->
  <button class="main-nav__toggle" data-nav-toggle aria-label="Toggle navigation">
    <span class="main-nav__toggle-line"></span>
    <span class="main-nav__toggle-line"></span>
    <span class="main-nav__toggle-line"></span>
  </button>

  <!-- Navigation content -->
  <div class="main-nav__content" data-nav-content>
    <!-- Search -->
    <div class="main-nav__search">
      <div class="search-input">
        <svg class="search-input__icon" aria-hidden="true">
          <use href="#icon-search"></use>
        </svg>
        <input 
          type="search" 
          class="search-input__field" 
          placeholder="Search documentation..."
          aria-label="Search documentation"
        >
      </div>
    </div>

    <!-- Navigation items -->
    <ul class="main-nav__list" role="menubar">
      <% data.new_menu.each do |item| %>
        <% if item.type == "top_level" %>
          <li class="main-nav__item" role="none">
            <a href="<%= item.link %>" 
               class="main-nav__link <%= 'main-nav__link--active' if current_page.url == item.link %>"
               role="menuitem">
              <svg class="main-nav__icon" aria-hidden="true">
                <use href="#icon-<%= item.icon %>"></use>
              </svg>
              <%= item.title %>
            </a>
          </li>
        
        <% elsif item.type == "hub" %>
          <li class="main-nav__item main-nav__item--expandable" role="none" data-nav-section>
            <button class="main-nav__button" 
                    role="menuitem" 
                    aria-expanded="false"
                    data-nav-button>
              <span class="main-nav__button-content">
                <svg class="main-nav__icon" aria-hidden="true">
                  <use href="#icon-<%= item.icon %>"></use>
                </svg>
                <%= item.title %>
              </span>
              <svg class="main-nav__chevron" aria-hidden="true">
                <use href="#icon-chevron-right"></use>
              </svg>
            </button>
            
            <% if item.children %>
              <ul class="main-nav__submenu" role="menu" data-nav-submenu>
                <!-- Hub overview link -->
                <li class="main-nav__subitem" role="none">
                  <a href="<%= item.link %>" 
                     class="main-nav__sublink <%= 'main-nav__sublink--active' if current_page.url == item.link %>"
                     role="menuitem">
                    Overview
                  </a>
                </li>
                
                <!-- Child items -->
                <% item.children.each do |child| %>
                  <% if child[:type] == "reference_group" %>
                    <li class="main-nav__subitem main-nav__subitem--group" role="none">
                      <span class="main-nav__group-title"><%= child.title %></span>
                      <% if child.reference_items %>
                        <ul class="main-nav__group-list" role="menu">
                          <% child.reference_items.each do |ref| %>
                            <li class="main-nav__group-item" role="none">
                              <a href="<%= ref.link %>"
                                 class="main-nav__group-link <%= 'main-nav__group-link--active' if current_page.url == ref.link %>"
                                 role="menuitem">
                                <%= ref.title %>
                              </a>
                            </li>
                          <% end %>
                        </ul>
                      <% end %>
                    </li>
                  <% else %>
                    <li class="main-nav__subitem" role="none">
                      <a href="<%= child.link %>"
                         class="main-nav__sublink <%= 'main-nav__sublink--active' if current_page.url == child.link %>"
                         role="menuitem">
                        <%= child.title %>
                      </a>
                    </li>
                  <% end %>
                <% end %>
              </ul>
            <% end %>
          </li>
        <% end %>
      <% end %>
    </ul>
  </div>
</nav>
```

### 3.2 Navigation JavaScript
```javascript
// source/assets/javascripts/navigation.js
class Navigation {
  constructor() {
    this.nav = document.querySelector('[data-nav="main"]');
    this.toggle = document.querySelector('[data-nav-toggle]');
    this.content = document.querySelector('[data-nav-content]');
    this.sections = document.querySelectorAll('[data-nav-section]');
    
    this.init();
  }
  
  init() {
    this.bindEvents();
    this.setActiveStates();
    this.setupKeyboardNavigation();
  }
  
  bindEvents() {
    // Mobile toggle
    this.toggle?.addEventListener('click', () => this.toggleMobile());
    
    // Section expansion
    this.sections.forEach(section => {
      const button = section.querySelector('[data-nav-button]');
      button?.addEventListener('click', (e) => this.toggleSection(e, section));
    });
    
    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeMobile();
        this.closeAllSections();
      }
    });
    
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!this.nav?.contains(e.target)) {
        this.closeMobile();
      }
    });
  }
  
  toggleMobile() {
    const isOpen = this.nav.classList.contains('main-nav--open');
    
    if (isOpen) {
      this.closeMobile();
    } else {
      this.openMobile();
    }
  }
  
  openMobile() {
    this.nav.classList.add('main-nav--open');
    this.toggle?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  
  closeMobile() {
    this.nav.classList.remove('main-nav--open');
    this.toggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  
  toggleSection(e, section) {
    e.preventDefault();
    
    const button = section.querySelector('[data-nav-button]');
    const submenu = section.querySelector('[data-nav-submenu]');
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    
    // Close other sections
    this.sections.forEach(otherSection => {
      if (otherSection !== section) {
        this.closeSection(otherSection);
      }
    });
    
    if (isExpanded) {
      this.closeSection(section);
    } else {
      this.openSection(section);
    }
  }
  
  openSection(section) {
    const button = section.querySelector('[data-nav-button]');
    const submenu = section.querySelector('[data-nav-submenu]');
    
    button?.setAttribute('aria-expanded', 'true');
    section.classList.add('main-nav__item--expanded');
    
    if (submenu) {
      submenu.style.maxHeight = submenu.scrollHeight + 'px';
    }
  }
  
  closeSection(section) {
    const button = section.querySelector('[data-nav-button]');
    const submenu = section.querySelector('[data-nav-submenu]');
    
    button?.setAttribute('aria-expanded', 'false');
    section.classList.remove('main-nav__item--expanded');
    
    if (submenu) {
      submenu.style.maxHeight = '0';
    }
  }
  
  closeAllSections() {
    this.sections.forEach(section => this.closeSection(section));
  }
  
  setActiveStates() {
    // Expand sections containing active links
    const activeLink = this.nav.querySelector('.main-nav__sublink--active, .main-nav__group-link--active');
    if (activeLink) {
      const section = activeLink.closest('[data-nav-section]');
      if (section) {
        this.openSection(section);
      }
    }
  }
  
  setupKeyboardNavigation() {
    // Enhanced keyboard navigation for accessibility
    const links = this.nav.querySelectorAll('a, button');
    
    links.forEach((link, index) => {
      link.addEventListener('keydown', (e) => {
        switch (e.key) {
          case 'ArrowDown':
            e.preventDefault();
            const nextLink = links[index + 1];
            nextLink?.focus();
            break;
            
          case 'ArrowUp':
            e.preventDefault();
            const prevLink = links[index - 1];
            prevLink?.focus();
            break;
        }
      });
    });
  }
}

// Initialize navigation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new Navigation();
});
```

## Phase 4: Advanced UI Enhancements (Week 7-8)

### 4.1 Enhanced Table Components

Your documentation likely has many API reference tables. Let's make them more user-friendly:

```scss
// source/assets/stylesheets/components/_enhanced_tables.scss
.enhanced-table-wrapper {
  margin: 2rem 0;
  border: 1px solid var(--lb-gray-200);
  border-radius: var(--lb-radius-lg);
  overflow: hidden;
  
  @media (max-width: 768px) {
    border-left: 0;
    border-right: 0;
    border-radius: 0;
    margin-left: -1rem;
    margin-right: -1rem;
  }
}

.enhanced-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  
  th {
    background-color: var(--lb-gray-50);
    padding: 12px 16px;
    text-align: left;
    font-weight: 600;
    color: var(--lb-gray-700);
    border-bottom: 2px solid var(--lb-gray-200);
    
    &.sortable {
      cursor: pointer;
      user-select: none;
      position: relative;
      
      &:hover {
        background-color: var(--lb-gray-100);
      }
      
      &::after {
        content: '↕️';
        position: absolute;
        right: 8px;
        opacity: 0.5;
        font-size: 12px;
      }
    }
  }
  
  td {
    padding: 12px 16px;
    border-bottom: 1px solid var(--lb-gray-100);
    vertical-align: top;
    
    &.required::before {
      content: '*';
      color: var(--lb-error);
      font-weight: bold;
      margin-right: 4px;
    }
    
    code {
      background-color: var(--lb-gray-100);
      padding: 2px 6px;
      border-radius: var(--lb-radius);
      font-size: 13px;
    }
  }
  
  tbody tr:hover {
    background-color: var(--lb-gray-50);
  }
}
```

### 4.2 Interactive Code Examples

Enhance your existing code blocks with interactive features:

```javascript
// source/assets/javascripts/enhanced_code_blocks.js
class EnhancedCodeBlocks {
  constructor() {
    this.initCopyButtons();
    this.initLanguageTabs();
    this.initLineHighlighting();
  }
  
  initCopyButtons() {
    document.querySelectorAll('[data-copy-target]').forEach(button => {
      button.addEventListener('click', async (e) => {
        const target = e.target.getAttribute('data-copy-target');
        const codeElement = document.querySelector(target);
        
        if (codeElement) {
          try {
            await navigator.clipboard.writeText(codeElement.textContent);
            this.showCopySuccess(button);
          } catch (err) {
            console.error('Failed to copy code:', err);
          }
        }
      });
    });
  }
  
  showCopySuccess(button) {
    const originalText = button.querySelector('.code-block__copy-text');
    const originalContent = originalText.textContent;
    
    originalText.textContent = 'Copied!';
    button.classList.add('copied');
    
    setTimeout(() => {
      originalText.textContent = originalContent;
      button.classList.remove('copied');
    }, 2000);
  }
  
  initLanguageTabs() {
    document.querySelectorAll('[data-code-tabs]').forEach(container => {
      const tabs = container.querySelectorAll('[data-tab]');
      const panels = container.querySelectorAll('[data-panel]');
      
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const target = tab.getAttribute('data-tab');
          
          // Update active states
          tabs.forEach(t => t.classList.remove('active'));
          panels.forEach(p => p.classList.remove('active'));
          
          tab.classList.add('active');
          container.querySelector(`[data-panel="${target}"]`).classList.add('active');
        });
      });
    });
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new EnhancedCodeBlocks();
});
```

## Key Implementation Files to Update

### 1. Update main layout to include new components
```erb
<!-- source/layouts/layout.erb - Add to head section -->
<%= partial('includes/icons') %>
<link rel="stylesheet" href="<%= asset_path(:css, 'enhanced') %>">

<!-- Add before closing body tag -->
<script src="<%= asset_path(:js, 'navigation') %>"></script>
<script src="<%= asset_path(:js, 'search') %>"></script>
<script src="<%= asset_path(:js, 'enhanced-callouts') %>"></script>
```

### 2. Create icon sprite system
```erb
<!-- source/includes/_icons.erb -->
<svg style="display: none;">
  <defs>
    <symbol id="icon-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.35-4.35"></path>
    </symbol>
    
    <symbol id="icon-copy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </symbol>
    
    <symbol id="icon-chevron-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="9,18 15,12 9,6"></polyline>
    </symbol>
    
    <symbol id="icon-chevron-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="6,9 12,15 18,9"></polyline>
    </symbol>
    
    <!-- Add more icons as needed -->
  </defs>
</svg>
```

### 3. Helper method updates
```ruby
# In config.rb helpers block
helpers do
  # Enhanced callout helper
  def enhanced_callout(type, options = {}, &block)
    partial("includes/callouts/enhanced_callout", 
      locals: { 
        type: type, 
        title: options[:title],
        expandable: options[:expandable] || false,
        callout_content: capture(&block)
      }
    )
  end
  
  # Enhanced code block helper
  def code_block(language, options = {}, &block)
    partial("includes/code/enhanced_code_block",
      locals: {
        language: language,
        title: options[:title],
        filename: options[:filename],
        show_line_numbers: options[:line_numbers] || false,
        highlight_lines: options[:highlight] || [],
        copy_button: options[:copy] != false
      }.merge(block_given? ? { code_content: capture(&block) } : {})
    )
  end
end
```

This implementation guide provides concrete, actionable steps with real code examples that you can start implementing immediately. Each phase builds upon the previous one, allowing for incremental improvements while maintaining site functionality.

The key priorities are:
1. **Enhanced callouts and code blocks** (immediate visual improvement)
2. **Brand color integration** (align with Luigi's Box identity)  
3. **New layouts** (support different content types)
4. **Improved navigation** (better user experience)
5. **Search functionality** (essential for large documentation sites)

Start with Phase 1 to see immediate improvements, then progressively implement the remaining phases based on your timeline and priorities.