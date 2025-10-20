# API Switcher Documentation

## Overview

The API switcher is a Bootstrap dropdown component that allows users to navigate between different versions of API endpoints in the Luigi's Box documentation. It provides a seamless way to compare and switch between API versions (v1 and v2) while maintaining consistent navigation and styling.

## Architecture

### Components

1. **Switcher Component** (`source/includes/_api_switcher.erb`)
2. **Navigation Menu Integration** (`source/includes/_new_menu.erb`)
3. **Configuration Data** (`data/new_menu.yml`)
4. **Styling** (Custom CSS within the components)

### File Structure

```
source/
├── includes/
│   ├── _api_switcher.erb          # Main switcher component
│   └── _new_menu.erb              # Navigation menu with active state management
├── indexing/api/
│   ├── v1/                        # Version 1 API pages
│   │   ├── content_update.html.md.erb
│   │   ├── partial_update.html.md.erb
│   │   ├── content_removal.html.md.erb
│   │   └── query_update.html.md.erb
│   └── v2/                        # Version 2 API pages
│       ├── content_update.html.md.erb
│       ├── partial_update.html.md.erb
│       ├── content_removal.html.md.erb
│       └── query_update.html.md.erb
data/
└── new_menu.yml                   # Navigation configuration with versions arrays
```

## How It Works

### 1. Service Detection

The switcher automatically detects the current service context using the `service` variable defined in each page's front matter:

```erb
<%
# Define service variable for API switcher
if current_page.path.include?('/indexing/api/')
  service = 'content-updates-api'
else
  service = nil
end
%>
```

### 2. Version Detection

The component extracts the current API version from the URL path:

```erb
<% 
current_version = nil
if current_page.path.include?('/indexing/api/v1/')
  current_version = 'v1'
elsif current_page.path.include?('/indexing/api/v2/')
  current_version = 'v2'
end
%>
```

### 3. Dropdown Generation

Based on the detected service and version, the switcher generates appropriate dropdown options:

```erb
<% if service == 'content-updates-api' %>
  <div class="dropdown">
    <button class="btn btn-outline-secondary dropdown-toggle api-switcher-btn" 
            type="button" data-bs-toggle="dropdown">
      Content Updates API 
      <% if current_version %>
        <span class="version-badge"><%= current_version.upcase %></span>
      <% end %>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="/indexing/api/v1/">Version 1</a></li>
      <li><a class="dropdown-item" href="/indexing/api/v2/">Version 2</a></li>
    </ul>
  </div>
<% end %>
```

### 4. Navigation Menu Integration

The navigation menu (`_new_menu.erb`) includes special logic for handling versioned endpoints:

#### Version-Aware Highlighting

The menu configuration in `new_menu.yml` includes `versions` arrays for endpoints that exist in multiple versions:

```yaml
- title: "Content Update"
  link: "/indexing/api/v1/content_update.html"
  versions:
    - "/indexing/api/v1/content_update.html"
    - "/indexing/api/v2/content_update.html"
```

#### Active State Management

The navigation menu includes JavaScript that ensures proper highlighting of versioned endpoints:

```javascript
function restoreNavActiveStates() {
  const currentPath = window.location.pathname;
  
  // Define versioned endpoint mappings
  const versionedEndpoints = {
    '/indexing/api/v1/content_update.html': true,
    '/indexing/api/v2/content_update.html': true,
    // ... other endpoints
  };
  
  // Highlight matching endpoints across versions
  if (versionedEndpoints[currentPath]) {
    const currentEndpoint = currentPath.replace(/\/indexing\/api\/v[12]\//, '').replace('.html', '');
    const linkEndpoint = href.replace(/\/indexing\/api\/v[12]\//, '').replace('.html', '');
    
    if (currentEndpoint === linkEndpoint && !link.classList.contains('active')) {
      link.classList.add('active');
    }
  }
}
```

## Styling

### Purple Theme

The switcher uses a custom purple color scheme (`#9B6CA4`) that matches Luigi's Box branding:

```css
.api-switcher-btn {
  border-color: #9B6CA4 !important;
  color: #9B6CA4 !important;
}

.api-switcher-btn:hover,
.api-switcher-btn:focus,
.api-switcher-btn.show {
  background-color: #9B6CA4 !important;
  border-color: #9B6CA4 !important;
  color: white !important;
}
```

### Version Badge

The current version is displayed as a badge next to the service name:

```css
.version-badge {
  background-color: #9B6CA4;
  color: white;
  padding: 0.1em 0.4em;
  border-radius: 0.25rem;
  font-size: 0.75em;
  font-weight: bold;
  margin-left: 0.5rem;
}
```

### Responsive Design

The switcher is designed to work seamlessly on both desktop and mobile devices, integrating with Bootstrap's responsive grid system.

## ToC Script Interference Protection

### Problem

The Table of Contents (ToC) script (`app/_toc.js`) manages `.active` classes for ToC navigation, which can interfere with the navigation menu's active states, causing flickering on pages with `stretch: true`.

### Solution

The navigation menu includes multiple protection mechanisms:

1. **Delayed Restoration**: Scroll event handlers run after the ToC script completes (250ms delay vs ToC's 200ms debounce)
2. **MutationObserver**: Watches for class attribute changes and immediately restores navigation active states
3. **CSS Protection**: Uses `!important` rules to maintain styling integrity

```javascript
// Protect against scroll-based active class removal (ToC interference)
let scrollTimeout;
window.addEventListener('scroll', function() {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(function() {
    restoreNavActiveStates();
  }, 250); // Run after ToC script (200ms debounce)
});
```

## Configuration

### Adding New Services

To add a new service to the switcher:

1. **Update the switcher component** (`_api_switcher.erb`):
   ```erb
   <% elsif service == 'new-service-api' %>
     <!-- Add new service dropdown -->
   <% end %>
   ```

2. **Define service in pages**:
   ```erb
   <% if current_page.path.include?('/new-service/api/') %>
     <% service = 'new-service-api' %>
   <% end %>
   ```

3. **Update navigation menu** (`new_menu.yml`):
   ```yaml
   - title: "New Service Endpoint"
     link: "/new-service/api/v1/endpoint.html"
     versions:
       - "/new-service/api/v1/endpoint.html"
       - "/new-service/api/v2/endpoint.html"
   ```

### Adding New Versions

To add a new API version (e.g., v3):

1. **Create directory structure**: `/indexing/api/v3/`
2. **Update version detection logic**
3. **Add to dropdown menu options**
4. **Update versioned endpoints mapping in JavaScript**
5. **Add to versions arrays in `new_menu.yml`**

## Usage Examples

### Basic Implementation

In an API page template:

```erb
<%
# Define service variable for API switcher
if current_page.path.include?('/indexing/api/')
  service = 'content-updates-api'
end
%>

<!-- Include the switcher -->
<%= partial 'includes/api_switcher', locals: { service: service } %>
```

### With Custom Service

```erb
<%
# Define custom service
service = 'recommendations-api'
%>

<%= partial 'includes/api_switcher', locals: { service: service } %>
```

## Browser Support

The API switcher is compatible with:
- Modern browsers supporting ES6+ features
- Bootstrap 5.x dropdown functionality
- CSS Grid and Flexbox layouts
- MutationObserver API (with graceful degradation)

## Testing

### Manual Testing Checklist

1. ✅ Switcher appears on correct pages
2. ✅ Current version is highlighted in dropdown
3. ✅ Version badge displays correctly
4. ✅ Navigation between versions works
5. ✅ Menu highlighting persists during navigation
6. ✅ No flickering on stretch pages
7. ✅ Responsive design works on mobile
8. ✅ Purple theme styling is consistent

### Known Issues

- **ToC Interference**: Addressed through multiple protection mechanisms
- **Mobile Dropdown**: May require touch events for optimal UX (handled by Bootstrap)

## Future Enhancements

1. **Dynamic Version Detection**: Auto-detect available versions from filesystem
2. **API Comparison View**: Side-by-side version comparison
3. **Version Migration Guide**: Contextual migration hints
4. **Enhanced Analytics**: Track version usage patterns
5. **Keyboard Navigation**: Improved accessibility features

## Maintenance

### Regular Tasks

1. **Update version mappings** when adding new API endpoints
2. **Test navigation highlighting** after structural changes
3. **Validate responsive design** across devices
4. **Monitor for ToC script conflicts** after Middleman updates

### Code Quality

- Use semantic HTML elements
- Maintain CSS specificity hierarchy
- Follow Bootstrap conventions
- Document JavaScript interactions
- Test across browser versions