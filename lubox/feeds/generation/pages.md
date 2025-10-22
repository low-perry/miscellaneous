<?xml version="1.0" encoding="utf-8"?>
<root>
<% app.sitemap.resources.each do |page| %>
  <% if page.ext == ".html" && !page.normalized_path.include?('/examples/') && (!page.normalized_path.include?('/api/') || page.normalized_path.include?('/api/v1/')) && !page.normalized_path.include?('/top_items/') && !page.normalized_path.include?('/trending_queries/') && !page.normalized_path.start_with?('pages/') && page.source_file %>
    <page>
      <url><%= page.url %></url>
      <% html = page.render(layout: false) %>
      <% doc = Nokogiri::HTML::DocumentFragment.parse(html) %>

      <title><%= discover_title(html) %></title>
      <% content_text = doc.search('article').text %>
      <% content_text = doc.text if content_text.empty? %>
      <content><![CDATA[<%= content_text.gsub(/<[^>]+>/, '').gsub('&', '&amp;').gsub(']]>', '').strip %>]]></content>
      <icon><%= find_icon(data.menu.menu + data.lbx.menu, page.url) %></icon>
    </page>
  <% end %>
<% end %>
</root>