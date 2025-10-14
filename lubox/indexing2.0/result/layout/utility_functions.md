  def markdown(content)
    markdown_engine = Redcarpet::Markdown.new(
      Renderer,
      fenced_code_blocks: true,
      smartypants: true,
      disable_indented_code_blocks: true,
      prettify: true,
      strikethrough: true,
      tables: true,
      with_toc_data: true,
      no_intra_emphasis: true
    )
    markdown_engine.render(content.to_s)
  end

  def interactive_code(language, code_with_links)
    # First, let's get proper syntax highlighting by processing the code without links
    clean_code = code_with_links.gsub(/\[([^\]]+)\]\(([^)]+)\)/, '\1')
    
    # Get syntax highlighted version
    markdown_engine = Redcarpet::Markdown.new(
      Renderer,
      fenced_code_blocks: true,
      smartypants: true,
      disable_indented_code_blocks: true,
      prettify: true,
      strikethrough: true,
      tables: true,
      with_toc_data: true,
      no_intra_emphasis: true
    )
    
    highlighted = markdown_engine.render("```#{language}\n#{clean_code}\n```")
    
    # Now replace the original text with links in the highlighted version
    code_with_links.scan(/\[([^\]]+)\]\(([^)]+)\)/) do |text, url|
      highlighted = highlighted.gsub(text, %Q{<a href="#{url}" class="code-link">#{text}</a>})
    end
    
    highlighted
  end

  def api_section(prose_content, code_examples)
    %Q{
      <div class="api-section">
        <div class="api-section-prose">
          #{markdown(prose_content)}
        </div>
        <div class="api-section-code">
          #{markdown(code_examples)}
        </div>
      </div>
    }
  end

  def endpoint(method, url, identifier = nil)
    identifier ||= "endpoint-#{rand(1000..9999)}"
    method_class = method.downcase
    method_color = case method.upcase
                   when 'GET' then '#28a745'
                   when 'POST' then '#007bff'  
                   when 'PUT' then '#ffc107'
                   when 'DELETE' then '#dc3545'
                   when 'PATCH' then '#17a2b8'
                   else '#6c757d'
                   end
    
    %Q{
      <div class="card my-4 lb-code">
        <div class="card-header">
          <ul class="nav nav-underline" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" href="#tab-#{identifier}-endpoint" data-toggle="tab" role="tab" aria-controls="tab-#{identifier}-endpoint" aria-selected="true" data-bs-toggle="tab" data-bs-target="#tab-#{identifier}-endpoint">Endpoint</a>
            </li>
          </ul>
        </div>
        <div class="card-body p-0">
          <div id="tab-#{identifier}-content" class="tab-content">
            <div id="tab-#{identifier}-endpoint" class="tab-pane fade show active" role="tabpanel" aria-labelledby="tab-#{identifier}-endpoint">
              <div class="endpoint-display p-4" style="background-color: #272822;">
                <div class="d-flex align-items-center gap-3">
                  <span class="http-method badge" style="background-color: #{method_color}; color: white; font-weight: 600; font-size: 0.75rem; padding: 0.375rem 0.75rem;">#{method.upcase}</span>
                  <code class="endpoint-url" style="font-size: 0.875rem; padding: 0.25rem 0.5rem; border-radius: 4px; color: #ffffff;">#{url}</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
  end

  def api_section_with_endpoint(prose_content, method, url, additional_code = nil)
    code_content = endpoint(method, url)
    code_content += markdown(additional_code) if additional_code
    
    %Q{
      <div class="api-section">
        <div class="api-section-prose">
          #{markdown(prose_content)}
        </div>
        <div class="api-section-code">
          #{code_content}
        </div>
      </div>
    }
  end

end