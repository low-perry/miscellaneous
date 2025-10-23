# frozen_string_literal: true

# Nested unique header generation
require 'middleman-core/renderers/redcarpet'
require 'debug'

class TabGroup
  def initialize(identifier, tabs)
    @identifier = identifier
    @tabs = tabs
  end

  attr_reader :identifier, :tabs

  def replace(node)
    @tabs.each_with_index do |t, i|
      t.html.remove if i > 0
    end
    @tabs[0].html.replace(node)
  end

  def live?
    @tabs.any?(&:live)
  end

  def bad_practice?
    @tabs.any?(&:bad_practice)
  end

  def good_practice?
    @tabs.any?(&:good_practice)
  end
end

class Tab
  def initialize(language, html, live = false, bad_practice = false, good_practice = false)
    @language = language
    @html = html
    @live = live
    @bad_practice = bad_practice
    @good_practice = good_practice
  end

  attr_reader :language, :html, :live, :bad_practice, :good_practice
end

class Renderer < Middleman::Renderers::MiddlemanRedcarpetHTML
  def initialize
    super
    @@headers_history = {} if !defined?(@@headers_history)
  end

  def render(text, options = {})
    processed_text = preprocess(text, options)
    super(processed_text, options)
  end

  def preprocess(text, options = {})
    text.gsub(/\{\{ (\w+)\((.*?)\) \}\}/) do
      method_name = $1
      args_str = $2
      if respond_to?(method_name)
        args = parse_args(args_str)
        send(method_name, *args, options)
      else
        $&  # return original if not found
      end
    end
  end

  def parse_args(args_str)
    # Simple parser for quoted strings separated by commas
    args_str.scan(/'([^']*)'/).flatten
  end

  # Helper methods
  def callout(type, content, options = {})
    rendered_content = markdown(content)
    template = Tilt::ERBTemplate.new('source/includes/callouts/_callout.html.erb')
    template.render(nil, type: type, callout_content: rendered_content)
  end

  def api_section(prose_content, code_examples, code_title = nil, options = {})
    code_section_html = if code_title
      %Q{
        <div class="code-section-container">
          <h4 class="code-section-title">#{code_title}</h4>
          #{markdown(code_examples)}
        </div>
      }.html_safe
    else
      markdown(code_examples).html_safe
    end
    
    html = %Q{
      <div class="api-section">
        <div class="api-section-prose">
          #{markdown(prose_content)}
        </div>
        <div class="api-section-code">
          #{code_section_html}
        </div>
      </div>
    }.html_safe

    "\n" + html + "\n"
  end

  def endpoint(method, url, identifier = nil, options = {})
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

  def api_section_with_endpoint(prose_content, method, url, additional_code = nil, options = {})
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

  private

  def markdown(content)
    Redcarpet::Markdown.new(Redcarpet::Render::HTML.new, {
      fenced_code_blocks: true,
      smartypants: true,
      disable_indented_code_blocks: true,
      prettify: true,
      strikethrough: true,
      tables: true,
      with_toc_data: true,
      no_intra_emphasis: true
    }).render(content.to_s)
  end

  def header(text, header_level)
    friendly_text = text.gsub(/<[^>]*>/,"").parameterize
    @@headers_history[header_level] = text.parameterize

    if header_level > 1
      for i in (header_level - 1).downto(1)
        friendly_text.prepend("#{@@headers_history[i]}-") if @@headers_history.key?(i)
      end
    end

    "<h#{header_level} id='#{friendly_text}'>#{text}</h#{header_level}>"
  end

  def image(link, title, alt_text)
    "<img src='/assets/images/#{link}' class='img-fluid' title='#{title}' alt='#{alt_text}'/>"
  end

  def table(header, body)
    <<-ETAB
      <table class="table">
        #{header}
        #{body}
      </table>
    ETAB
  end

  def postprocess(document)
    doc = Nokogiri::HTML.fragment(document)

    starting_code_blocks = doc.search('div.highlight').select do |div|
      div.previous_sibling && !div.previous_sibling.classes.include?('highlight')
    end

    tab_groups = []
    starting_code_blocks.each_with_index do |div, idx|
      tabs = []
      loop do
        if div && div.classes.include?('highlight')
          pre = div.search('pre.highlight')[0]
          m = pre.classes.join(' ').match(/tab-(.*?)(\s|$)|(plaintext)/)
          language = m ? m[1] : 'unknown'
          live = pre.classes.include?('flag-live')
          bad_practice = pre.classes.include?('flag-bad-practice')
          good_practice = pre.classes.include?('flag-good-practice')
          tabs << Tab.new(language, div, live, bad_practice, good_practice)
        else
          break
        end

        div = div.next_sibling
      end
      tab_groups << TabGroup.new(idx, tabs)
    end

    tab_groups.each {|tg| tg.replace(card(tg))}

    doc.to_html
  end

  private

  def card(tab_group)
    template = Tilt::ERBTemplate.new('source/includes/_code.html.erb')
    template.render(nil, identifier: tab_group.identifier, tabs: tab_group.tabs, live: tab_group.live?, bad_practice: tab_group.bad_practice?, good_practice: tab_group.good_practice?)
  end
end