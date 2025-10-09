<% wrap_layout :layout do %>
<style>
  .choice-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5em 20px; /* Vertical and horizontal gap */
    margin: 1.5em 0;
  }

  .choice-card {
    border: 1px solid #e0e4e8;
    border-radius: 8px;
    padding: 24px;
    text-align: center;
    text-decoration: none;
    color: inherit;
    background-color: #ffffff;
    transition: box-shadow 0.2s, transform 0.2s;
    height: 100%; /* Ensures card fills the grid cell height */
  }

  .choice-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  }

  .choice-card h3 {
    margin-top: 0;
    margin-bottom: 8px;
    color: #0d6efd;
    font-size: 1.1em;
  }

  .choice-card p {
    font-size: 14px;
    color: #586474;
    line-height: 1.5;
    margin-bottom: 0;
  }

  .choice-card .label {
    display: inline-block;
    background-color: #eaf2ff;
    color: #0d6efd;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 1em;
  }

  .advantages-list {
    list-style: none;
    padding-left: 0;
    margin: 0;
    text-align: left;
  }

  .advantages-list li {
    font-size: 14px;
    color: #4a5461;
    line-height: 1.6;
    padding-left: 1.5em;
    position: relative;
    margin-bottom: 0.75em;
  }

  .advantages-list li::before {
    content: '✔';
    position: absolute;
    left: 0;
    top: 2px;
    color: #28a745;
    font-weight: bold;
  }

  .content-section {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  /* When TOC is present, reduce right margin */
  .row:has(#navbar-toc) .content-section {
    margin-right: 1rem;
  }

  /* When TOC is missing, add more right margin for balance */
  .row:not(:has(#navbar-toc)) .content-section {
    margin-right: 5rem;
  }

  @media (max-width: 991.98px) {
    .content-section {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
</style>
<div id="<%= current_page.data.hub_id %>-overview" class="content-section">
    <h1><%= current_page.data.title %> overview</h1>
    <p><%= current_page.data.intro %></p>
    
    <hr/>

    <h2>Choose your integration path</h2>
   <div class="choice-container">
    <% current_page.data.choices.each do |choice| %>
        <a href="<%= choice.url %>" class="choice-card">
            <% if choice.recommended? %>
                <div class="label">Recommended</div>
            <% elsif choice.label %>
                <div class="label"><%= choice.label %></div>
            <% end %>
            <h3><%= choice.title %></h3>
            <p><%= choice.description %></p>
        </a>
    <% end %>

    <% current_page.data.choices.each do |choice| %>
        <% if choice.advantages && choice.advantages.any? %>
            <ul class="advantages-list">
                <% choice.advantages.each do |advantage| %>
                    <li><%= advantage %></li>
                <% end %>
            </ul>
        <% else %>
            <div></div>
        <% end %>
    <% end %>
</div>
    
    <hr/>
    
    <%= yield %>
</div>
<% end %>