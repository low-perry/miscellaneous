<% wrap_layout :layout do %>

<style>
.api-reference-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

.api-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  align-items: start;
}

.api-section-prose {
  padding-right: 2rem;
}

.api-section-code {
  position: sticky;
  top: 2rem;
  align-self: start;
}

/* Page header */
.api-header {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e2e8f0;
}

.api-header h1 {
  margin-bottom: 1rem;
  color: #1a202c;
}

.api-header .lead {
  color: #718096;
  font-size: 1.1rem;
}

/* Badge styling */
.api-section-prose .badge {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
}

/* Table styling in prose */
.api-section-prose table {
  font-size: 0.875rem;
}

.api-section-prose table th {
  background-color: #f7fafc;
  border-bottom: 2px solid #e2e8f0;
  font-weight: 600;
}

/* Responsive adjustments */
@media (max-width: 1199.98px) {
  .api-section {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .api-section-prose {
    padding-right: 0;
  }
}

@media (max-width: 768px) {
  .api-reference-wrapper {
    padding: 0 0.5rem;
  }
  
  .api-section {
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .api-section-code .highlight pre {
    padding: 1rem;
    font-size: 0.8125rem;
  }
}
</style>

<div class="api-reference-wrapper">
  <div class="api-header">
    <h1><%= current_page.data.title %></h1>
    <p class="lead"><%= current_page.data.description %></p>
  </div>
  
  <%= yield %>
</div>
<% end %>


