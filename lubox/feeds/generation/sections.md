<?xml version="1.0" encoding="utf-8"?>
<root>
  <% app.sitemap.resources.each do |page| %>
    <% if page.ext == ".html" && !page.normalized_path.include?('/examples/') && (!page.normalized_path.include?('/api/') || page.normalized_path.include?('/api/v1/')) && !page.normalized_path.include?('/top_items/') && !page.normalized_path.include?('/trending_queries/') && !page.normalized_path.start_with?('pages/')  %>
      <% html = page.render(layout: false) %>
      <% doc = Nokogiri::HTML::DocumentFragment.parse(html) %>
      <% doc.search('h1').each do |h1| %>
        <section>
          <page><%= page.url %></page>
          <full_path><%= page.url.split(".html")[0].sub(/^\//, '') %></full_path>
          <title><![CDATA[<%= h1.text %>]]></title>
          <url><%= "#{page.url}##{h1[:id]}" %></url>
          <content><![CDATA[<%= section_content(h1).gsub(']]>', '') %>]]></content>
        </section>
      <% end %>
    <% end %>
  <% end %>
</root>
