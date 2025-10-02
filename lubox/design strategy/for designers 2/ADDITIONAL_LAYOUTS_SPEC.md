# Additional Layout Templates - Technical Specification

## Overview

Current documentation has 4 layouts. Here are additional layout templates that would improve content organization and user experience, along with technical implementation details.

---

## 🔧 New Layout Templates to Create

### 1. API Reference Layout

**File**: `source/layouts/api_reference_layout.erb`
**Use Case**: Comprehensive API endpoint documentation

```erb
<% wrap_layout :layout do %>
  <div class="api-reference-page">
    <!-- API Header with method, endpoint, description -->
    <header class="api-header">
      <div class="api-meta">
        <span class="http-method http-method--<%= current_page.data.method.downcase %>">
          <%= current_page.data.method.upcase %>
        </span>
        <code class="api-endpoint"><%= current_page.data.endpoint %></code>
      </div>
      <h1><%= current_page.data.title %></h1>
      <p class="api-description"><%= current_page.data.description %></p>
    </header>

    <!-- API Sections: Parameters, Request, Response, Examples -->
    <div class="api-content">
      <div class="api-main">
        <%= yield %>
      </div>
      
      <!-- Code Examples Sidebar -->
      <aside class="api-examples">
        <div class="sticky-examples">
          <!-- Request/Response examples -->
        </div>
      </aside>
    </div>
  </div>
<% end %>
```

**Key Features**:

- HTTP method badge with color coding
- Sticky code examples sidebar
- Parameter tables with type indicators
- Request/response examples
- Try-it-out functionality integration

---

### 2. Changelog Layout

**File**: `source/layouts/changelog_layout.erb`
**Use Case**: Release notes, updates, deprecations

```erb
<% wrap_layout :layout do %>
  <div class="changelog-page">
    <!-- Changelog Header with filtering -->
    <header class="changelog-header">
      <h1>Changelog</h1>
      <div class="changelog-filters">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="feature">Features</button>
        <button class="filter-btn" data-filter="fix">Bug Fixes</button>
        <button class="filter-btn" data-filter="breaking">Breaking</button>
      </div>
    </header>

    <!-- Changelog Entries -->
    <div class="changelog-timeline">
      <% sitemap.resources
           .select { |r| r.path.start_with?('changelog/') }
           .sort_by { |r| r.data.date }
           .reverse
           .each do |entry| %>
        <article class="changelog-entry" data-type="<%= entry.data.type %>">
          <!-- Date, version, changes -->
        </article>
      <% end %>
    </div>
  </div>
<% end %>
```

**Key Features**:
- Timeline-based layout
- Filterable by change type
- Version badges
- Breaking change indicators
- Date-based organization

---

### 3. Glossary/FAQ Layout

**File**: `source/layouts/glossary_layout.erb`
**Use Case**: Definitions, terminology, frequently asked questions

```erb
<% wrap_layout :layout do %>
  <div class="glossary-page">
    <!-- Search and filter -->
    <header class="glossary-header">
      <h1><%= current_page.data.title %></h1>
      <div class="glossary-search">
        <input type="search" placeholder="Search terms..." class="glossary-search-input">
      </div>
      
      <!-- Alphabetical navigation -->
      <nav class="alphabet-nav">
        <% ('A'..'Z').each do |letter| %>
          <a href="#<%= letter.downcase %>" class="alphabet-link"><%= letter %></a>
        <% end %>
      </nav>
    </header>

    <!-- Terms organized alphabetically -->
    <div class="glossary-content">
      <%= yield %>
    </div>
  </div>
<% end %>
```

**Key Features**:
- Alphabetical navigation
- Search functionality
- Expandable definitions
- Cross-references between terms
- Category filtering

---

### 4. Integration Gallery Layout

**File**: `source/layouts/integration_gallery_layout.erb`
**Use Case**: Showcase different implementation examples, demos

```erb
<% wrap_layout :layout do %>
  <div class="integration-gallery">
    <!-- Gallery Header -->
    <header class="gallery-header">
      <h1><%= current_page.data.title %></h1>
      <p><%= current_page.data.description %></p>
      
      <!-- Category filters -->
      <div class="gallery-filters">
        <% current_page.data.categories.each do |category| %>
          <button class="filter-btn" data-filter="<%= category.slug %>">
            <%= category.name %>
          </button>
        <% end %>
      </div>
    </header>

    <!-- Integration Cards Grid -->
    <div class="integration-grid">
      <% current_page.data.integrations.each do |integration| %>
        <article class="integration-card" data-category="<%= integration.category %>">
          <!-- Preview, title, description, demo link -->
        </article>
      <% end %>
    </div>
  </div>
<% end %>
```

**Key Features**:

- Filterable grid layout
- Preview images/videos
- Live demo links
- Technology stack indicators
- Difficulty level badges

---

### 5. Comparison Table Layout

**File**: `source/layouts/comparison_layout.erb`
**Use Case**: Feature comparisons, plan differences, option matrices

```erb
<% wrap_layout :layout do %>
  <div class="comparison-page">
    <header class="comparison-header">
      <h1><%= current_page.data.title %></h1>
      <p><%= current_page.data.description %></p>
    </header>

    <!-- Comparison Table -->
    <div class="comparison-table-wrapper">
      <table class="comparison-table">
        <thead>
          <tr>
            <th class="feature-column">Features</th>
            <% current_page.data.options.each do |option| %>
              <th class="option-column">
                <div class="option-header">
                  <h3><%= option.name %></h3>
                  <% if option.recommended %>
                    <span class="badge badge--recommended">Recommended</span>
                  <% end %>
                </div>
              </th>
            <% end %>
          </tr>
        </thead>
        <tbody>
          <!-- Feature comparison rows -->
        </tbody>
      </table>
    </div>
  </div>
<% end %>
```

**Key Features**:

- Sticky headers for long comparisons
- Feature grouping
- Visual indicators (checkmarks, X's, partial support)
- Recommended badges
- Mobile-responsive card layout

---

### 6. Code Playground Layout

**File**: `source/layouts/playground_layout.erb`
**Use Case**: Interactive code examples, live demos, tutorials

```erb
<% wrap_layout :layout do %>
  <div class="playground-page">
    <!-- Playground Header -->
    <header class="playground-header">
      <h1><%= current_page.data.title %></h1>
      <div class="playground-controls">
        <button class="btn btn--primary" id="run-code">Run Code</button>
        <button class="btn btn--secondary" id="reset-code">Reset</button>
        <button class="btn btn--secondary" id="share-code">Share</button>
      </div>
    </header>

    <!-- Split Layout: Code + Preview -->
    <div class="playground-container">
      <div class="playground-editor">
        <div class="editor-tabs">
          <button class="tab active" data-lang="javascript">JavaScript</button>
          <button class="tab" data-lang="html">HTML</button>
          <button class="tab" data-lang="css">CSS</button>
        </div>
        <div class="editor-content">
          <!-- Code editor integration -->
        </div>
      </div>
      
      <div class="playground-preview">
        <iframe class="preview-frame" sandbox="allow-scripts"></iframe>
      </div>
    </div>
  </div>
<% end %>
```

**Key Features**:

- Multi-language code editors
- Live preview pane  
- Shareable code snippets
- Reset to example functionality
- Full-screen mode

---

### 7. Tutorial Series Layout

**File**: `source/layouts/tutorial_series_layout.erb`
**Use Case**: Multi-part tutorials with progress tracking

```erb
<% wrap_layout :layout do %>
  <div class="tutorial-series">
    <!-- Progress indicator -->
    <div class="tutorial-progress">
      <div class="progress-bar">
        <div class="progress-fill" style="width: <%= calculate_progress %>%"></div>
      </div>
      <span class="progress-text">
        Step <%= current_step %> of <%= total_steps %>
      </span>
    </div>

    <!-- Tutorial Content -->
    <article class="tutorial-content">
      <header class="tutorial-step-header">
        <h1><%= current_page.data.title %></h1>
        <p class="tutorial-description"><%= current_page.data.description %></p>
      </header>

      <div class="tutorial-main">
        <%= yield %>
      </div>
    </article>

    <!-- Navigation between steps -->
    <nav class="tutorial-navigation">
      <% if previous_step %>
        <a href="<%= previous_step.url %>" class="tutorial-nav tutorial-nav--prev">
          ← Previous: <%= previous_step.data.title %>
        </a>
      <% end %>
      
      <% if next_step %>
        <a href="<%= next_step.url %>" class="tutorial-nav tutorial-nav--next">
          Next: <%= next_step.data.title %> →
        </a>
      <% end %>
    </nav>
  </div>
<% end %>
```

**Key Features**:

- Progress tracking across steps
- Previous/next navigation
- Estimated completion time
- Prerequisites checklist
- Related tutorials sidebar

---

### 8. Error/Status Page Layout

**File**: `source/layouts/status_page_layout.erb`
**Use Case**: 404 pages, maintenance pages, error explanations

```erb
<% wrap_layout :layout do %>
  <div class="status-page">
    <div class="status-content">
      <!-- Status icon/illustration -->
      <div class="status-icon">
        <%= partial "includes/icons/#{current_page.data.status_type}" %>
      </div>
      
      <!-- Status message -->
      <h1 class="status-title"><%= current_page.data.title %></h1>
      <p class="status-description"><%= current_page.data.description %></p>
      
      <!-- Helpful actions -->
      <div class="status-actions">
        <% current_page.data.actions&.each do |action| %>
          <a href="<%= action.url %>" class="btn btn--<%= action.type %>">
            <%= action.text %>
          </a>
        <% end %>
      </div>
      
      <!-- Suggested content -->
      <% if current_page.data.suggestions %>
        <section class="status-suggestions">
          <h2>You might be looking for:</h2>
          <ul class="suggestion-list">
            <% current_page.data.suggestions.each do |suggestion| %>
              <li><a href="<%= suggestion.url %>"><%= suggestion.title %></a></li>
            <% end %>
          </ul>
        </section>
      <% end %>
    </div>
  </div>
<% end %>
```

**Key Features**:

- Custom error illustrations
- Helpful action buttons
- Suggested alternative content
- Search integration for 404s
- Contact information

---

## 🛠️ Implementation Priority

### Phase 1 (Immediate Need)

1. **API Reference Layout** - Essential for developer documentation
2. **Changelog Layout** - Important for keeping users informed

### Phase 2 (Short Term)

3. **Tutorial Series Layout** - Improves learning experience  
4. **Glossary/FAQ Layout** - Reduces support burden

### Phase 3 (Long Term)

5. **Integration Gallery Layout** - Showcases implementation examples
6. **Comparison Layout** - Helps users make decisions
7. **Code Playground Layout** - Interactive learning
8. **Status Page Layout** - Better error handling

---

## 📋 Technical Implementation Notes

### Helper Methods Needed

```ruby
# In config.rb helpers block
helpers do
  def calculate_progress
    # Tutorial progress calculation
  end
  
  def current_step
    # Current tutorial step number
  end
  
  def next_step
    # Find next tutorial in series
  end
  
  def http_method_class(method)
    "http-method--#{method.downcase}"
  end
end
```

### Data Structure Examples

```yaml
# For API Reference pages
---
layout: api_reference_layout
method: POST
endpoint: /v1/search
title: Search API
description: Perform search queries with personalization
parameters:
  - name: query
    type: string
    required: true
    description: Search query string
---

# For Tutorial Series
---
layout: tutorial_series_layout
series: autocomplete-integration
step: 2
total_steps: 5
title: Configure Autocomplete Settings
description: Learn how to customize autocomplete behavior
---
```

### CSS Architecture

```scss
// Layout-specific styles
layouts/
├── _api_reference.scss
├── _changelog.scss  
├── _glossary.scss
├── _integration_gallery.scss
├── _comparison.scss
├── _playground.scss
├── _tutorial_series.scss
└── _status_page.scss
```

These layouts will significantly improve content organization and provide specialized templates for different types of documentation content, making the documentation more user-friendly and easier to navigate.