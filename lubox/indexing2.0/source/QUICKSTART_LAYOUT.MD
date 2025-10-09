<% wrap_layout :layout do %>
<div class="quickstart-guide-wrapper">
  <h1 class="quickstart-title" style="margin-bottom: 30px;"><%= current_page.data.title %></h1>
  <%= yield %>
  <%= partial "includes/guides/next_steps", locals: { next_steps_content: yield_content(:next_steps) } %>

</div>
<% end %>
