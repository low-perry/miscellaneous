<% page_content = yield %>
<%= partial('includes/head', locals: { page_content: page_content }) %>
<body data-bs-spy="scroll" data-bs-target="#navbar-toc" class="<%= page_classes %>"  data-url="<%= current_page.url %>">
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TD5R4XS"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>
  </noscript>
  <!-- End Google Tag Manager (noscript) -->
<%= partial 'includes/header_nav' %>

<div class="container-fluid border-bottom">
  <div class="row">
  <%= partial 'includes/new_menu' %>


    <% article_class = current_page.data.stretch ? 'col-lg-10' : 'col-lg-7' %>
    <% article_class = current_page.data.twocolumns ? 'col-lg-10 twocolumns' : article_class %>
    <% article_class = current_page.data.tutorial ? "#{article_class} tutorial" : article_class %>

    <article class="<%= article_class %> py-3 pb-5 px-4 positon-relative">

    
    <%= page_content %>
    <hr>

    <%= partial 'includes/feedback' %>
    
    
    <% if current_page.path.start_with?('autocomplete/examples') %>
    <%= partial 'includes/examples', locals: {tree: data.examples.autocomplete} %>
    <% end %>
    <% if current_page.path.start_with?('recommendations/examples') %>
    <%= partial 'includes/examples', locals: {tree: data.examples.recommender} %>
    <% end %>
    </article>

    <% if current_page.path.start_with?('autocomplete/examples') %>
      <%= partial 'layouts/examples_menu', locals: {menu: 'autocomplete'} %>
    <% end %>
    <% if current_page.path.start_with?('recommendations/examples') %>
      <%= partial 'layouts/examples_menu', locals: {menu: 'recommender'} %>
    <% end %>

<%= partial 'includes/toc', locals: { page_content: page_content } %>

    <% if current_page.path.start_with?('tutorials/') %>
      <%= partial 'layouts/tutorial_steps_overview' %>  
    <% end %>
  </div>
</div>

<%= partial 'includes/footer' %>

<%= partial 'includes/scripts' %>
</body>
</html>
