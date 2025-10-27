# Extending the Library: Using Helper Functions in Markdown

## Overview

This guide explains how to extend the Middleman Redcarpet markdown renderer to support custom helper functions directly in markdown files using the `{{ function() }}` syntax.

## Current Architecture

### 1. **Renderer Class** (`lib/renderer.rb`)
- Extends `Middleman::Renderers::MiddlemanRedcarpetHTML`
- Currently handles:
  - Custom header generation with nested IDs
  - Image rendering
  - Table rendering
  - Code block postprocessing (tab groups)

### 2. **Config Helpers** (`config.rb`)
- Defined in the `helpers do` block
- Available in ERB templates (`.html.erb`, `.html.md.erb`)
- Currently includes:
  - `callout(type, content)` - Renders callout boxes
  - `api_section(prose_content, code_examples, code_title)` - API documentation sections
  - `endpoint(method, url, identifier)` - HTTP endpoint displays
  - `api_section_with_endpoint()` - Combined API section with endpoint
  - `markdown(content)` - Markdown rendering helper
  - `interactive_code()` - Code with clickable links

## Problem: Helpers Don't Work in Plain Markdown

**Current limitation:** Helper functions only work in ERB templates (`.html.md.erb`), not in plain markdown (`.html.md`).

### Why?
- Plain markdown files are processed by the Redcarpet renderer
- ERB is processed separately and has access to config helpers
- The Renderer class doesn't have access to Middleman helpers

## Solution: Add Preprocessing to the Renderer

To use `{{ callout('note', 'This is a note') }}` in plain markdown, you need to:

### Step 1: Add Preprocessing Method to Renderer

Add these methods to your `Renderer` class in `lib/renderer.rb`:

```ruby
class Renderer < Middleman::Renderers::MiddlemanRedcarpetHTML
  def initialize
    super
    @@headers_history = {} if !defined?(@@headers_history)
  end

  # Override render to preprocess custom function calls
  def render(text, options = {})
    processed_text = preprocess(text, options)
    super(processed_text, options)
  end

  def preprocess(text, options = {})
    # Match {{ function('arg1', 'arg2') }} patterns
    text.gsub(/\{\{ (\w+)\((.*?)\) \}\}/) do
      method_name = $1
      args_str = $2
      if respond_to?(method_name)
        args = parse_args(args_str)
        send(method_name, *args, options)
      else
        $&  # return original if method not found
      end
    end
  end

  def parse_args(args_str)
    # Parse quoted strings separated by commas
    args_str.scan(/'([^']*)'/).flatten
  end

  # Add your helper methods here...
end
```

### Step 2: Implement Block-Style Syntax (Recommended)

For better readability, implement a block-style syntax for helpers that need code examples:

```ruby
class Renderer < Middleman::Renderers::MiddlemanRedcarpetHTML
  # ... initialization and preprocessing methods ...

  def preprocess(text, options = {})
    # First, handle block-style helpers: {{ helper() }} ... {{ end_helper }}
    text = process_block_helpers(text)
    
    # Then handle inline helpers: {{ helper('arg') }}
    text.gsub(/\{\{ (\w+)\((.*?)\) \}\}/) do
      method_name = $1
      args_str = $2
      if respond_to?(method_name)
        args = parse_args(args_str)
        send(method_name, *args, options)
      else
        $&  # return original if method not found
      end
    end
  end

  def process_block_helpers(text)
    # Match {{ api_section('prose') }} ... {{ end_api_section }}
    text.gsub(/\{\{ api_section\((.*?)\) \}\}\n(.*?)\n\{\{ end_api_section \}\}/m) do
      prose_arg = $1.scan(/'([^']*)'/).flatten.first
      code_content = $2.strip
      api_section(prose_arg, code_content, nil, {})
    end
  end
end
```

### Step 3: Add Helper Methods to Renderer Class

Copy your helper methods from `config.rb` into the `Renderer` class:

```ruby
class Renderer < Middleman::Renderers::MiddlemanRedcarpetHTML
  # ... initialization and preprocessing methods ...

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
    
    %Q{
      <div class="api-section">
        <div class="api-section-prose">
          #{markdown(prose_content)}
        </div>
        <div class="api-section-code">
          #{code_section_html}
        </div>
      </div>
    }.html_safe
  end

  def endpoint(method, url, identifier = nil, options = {})
    identifier ||= "endpoint-#{rand(1000..9999)}"
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
              <a class="nav-link active" href="#tab-#{identifier}-endpoint" data-toggle="tab" role="tab">Endpoint</a>
            </li>
          </ul>
        </div>
        <div class="card-body p-0">
          <div id="tab-#{identifier}-content" class="tab-content">
            <div id="tab-#{identifier}-endpoint" class="tab-pane fade show active" role="tabpanel">
              <div class="endpoint-display p-4" style="background-color: #272822;">
                <div class="d-flex align-items-center gap-3">
                  <span class="http-method badge" style="background-color: #{method_color};">#{method.upcase}</span>
                  <code class="endpoint-url">#{url}</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
  end

  private

  # Helper to render markdown (needed for nested markdown)
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

  # ... other private methods ...
end
```

### Step 3: Usage in Markdown Files

Now you can use these helpers in plain `.html.md` files with multiple syntax options:

#### Simple Helpers (Inline)
```markdown
{{ callout('note', 'This is an informational note') }}
{{ endpoint('GET', '/api/v1/search') }}
```

#### API Sections (Multiple Options)

**Option 1: Simplest - Auto-detect**
```markdown
{{ api_section }}
This endpoint searches for items in the database.

```json
{"query": "test"}
```
{{ end_api_section }}
```

**Option 2: With Multiple Code Blocks**
```markdown
{{ api_section }}
Search for items using various programming languages.

```json
{"query": "test", "limit": 10}
```

```javascript
const result = await api.search({ query: "test" });
```

```ruby
result = api.search(query: "test")
```
{{ end_api_section }}
```

**Option 3: Explicit Sections (Maximum Control)**
```markdown
{{ api_section }}
{{ prose }}
This endpoint provides advanced search capabilities.
You can filter by multiple criteria.
{{ end_prose }}

{{ code }}
```json
{"query": "test", "filters": ["active"]}
```
{{ end_code }}
{{ end_api_section }}
```

**Option 4: With Code Title**
```markdown
{{ api_section }}
{{ prose }}
Example search request
{{ end_prose }}

{{ code_title }}
Request Examples
{{ end_code_title }}

{{ code }}
```json
{"query": "test"}
```
{{ end_code }}
{{ end_api_section }}
```

## Important Notes

### Two Syntax Styles

#### 1. **Inline Syntax** (for simple helpers)
Best for helpers with simple string arguments:

```markdown
{{ callout('note', 'This is a note') }}
{{ endpoint('GET', '/api/search') }}
```

**Pros:**
- Concise for simple cases
- Works well for single-line content

**Cons:**
- Hard to read with multi-line code blocks
- Requires escaped newlines: `'```json\n{\n}\n```'`

#### 2. **Block Syntax** (for complex helpers)
Best for helpers that need code blocks or multi-line content:

```markdown
{{ api_section }}
{{ prose }}
This endpoint searches items in the database.
{{ end_prose }}

{{ code }}
```json
{"query": "test"}
```
```javascript
const result = api.search();
```
{{ end_code }}
{{ end_api_section }}
```

**Even Simpler Alternative:**
```markdown
{{ api_section }}
This endpoint searches items in the database.

```json
{"query": "test"}
```
{{ end_api_section }}
```

**Pros:**
- Clean, readable markdown
- Natural code block syntax
- Supports multiple code blocks
- No string arguments needed
- Clear separation of prose and code
- Easy to write and maintain

**Cons:**
- Slightly more verbose than inline
- Requires implementing block matching in preprocessor

### Implementing Block Syntax

#### Approach 1: Simple Auto-Detection (Recommended)

The simplest approach - automatically detect prose vs code sections:

```ruby
def process_block_helpers(text)
  # Match {{ api_section }} ... {{ end_api_section }}
  text.gsub(/\{\{ api_section \}\}\n(.*?)\n\{\{ end_api_section \}\}/m) do
    content = $1.strip
    
    # Split content into prose and code blocks
    # Everything before first code fence is prose
    if content =~ /^(.*?)(```.*```.*)/m
      prose_content = $1.strip
      code_content = $2.strip
    else
      # No code blocks, treat everything as prose
      prose_content = content
      code_content = ''
    end
    
    api_section(prose_content, code_content, nil, {})
  end
  
  # Handle other block-style helpers...
  text
end
```

#### Approach 2: Explicit Nested Sections

For maximum control with explicit `{{ prose }}` and `{{ code }}` sections:

```ruby
def process_block_helpers(text)
  # Match {{ api_section }} with nested {{ prose }} and {{ code }} sections
  text.gsub(/\{\{ api_section \}\}\n(.*?)\n\{\{ end_api_section \}\}/m) do
    full_content = $1
    
    # Extract prose section
    prose_content = if full_content =~ /\{\{ prose \}\}\n(.*?)\n\{\{ end_prose \}\}/m
      $1.strip
    else
      ''
    end
    
    # Extract code section
    code_content = if full_content =~ /\{\{ code \}\}\n(.*?)\n\{\{ end_code \}\}/m
      $1.strip
    else
      ''
    end
    
    # Extract optional code_title
    code_title = if full_content =~ /\{\{ code_title \}\}(.*?)\{\{ end_code_title \}\}/m
      $1.strip
    else
      nil
    end
    
    api_section(prose_content, code_content, code_title, {})
  end
  
  text
end
```

#### Approach 3: Hybrid (Best of Both Worlds)

Supports both explicit sections AND simple syntax:

```ruby
def process_block_helpers(text)
  text.gsub(/\{\{ api_section \}\}\n(.*?)\n\{\{ end_api_section \}\}/m) do
    full_content = $1.strip
    
    # Check if using explicit nested sections
    if full_content.include?('{{ prose }}') || full_content.include?('{{ code }}')
      # Explicit mode
      prose_content = extract_section(full_content, 'prose')
      code_content = extract_section(full_content, 'code')
      code_title = extract_section(full_content, 'code_title')
    else
      # Auto-detect mode
      if full_content =~ /^(.*?)(```.*)/m
        prose_content = $1.strip
        code_content = $2.strip
      else
        prose_content = full_content
        code_content = ''
      end
      code_title = nil
    end
    
    api_section(prose_content, code_content, code_title, {})
  end
  
  text
end

def extract_section(content, section_name)
  pattern = /\{\{ #{section_name} \}\}\n?(.*?)\n?\{\{ end_#{section_name} \}\}/m
  content =~ pattern ? $1.strip : ''
end
```

### When to Use Each Style

**Use Inline Syntax for:**
- `callout()` - Short messages
- `endpoint()` - Just method and URL
- Any helper with 1-2 short string arguments

**Use Block Syntax for:**
- `api_section()` - Contains code examples
- Any helper that needs formatted content
- Helpers with multiple code blocks
- Content that spans multiple lines

### Complete Example Comparison

#### ❌ Hard to Read (Inline with escaped newlines)
```markdown
{{ api_section('Search for items', '```json\n{\n  "query": "search term",\n  "limit": 10\n}\n```\n\n```javascript\nconst result = await api.search({\n  query: "search term"\n});\n```', 'Examples') }}
```

#### ✅ Better (Block with argument)
```markdown
{{ api_section('Search for items', 'Examples') }}
```json
{
  "query": "search term",
  "limit": 10
}
```

```javascript
const result = await api.search({
  query: "search term"
});
```
{{ end_api_section }}
```

#### ✅✅ Best (No arguments - pure blocks)
```markdown
{{ api_section }}
Search for items using the API.

```json
{
  "query": "search term",
  "limit": 10
}
```

```javascript
const result = await api.search({
  query: "search term"
});
```
{{ end_api_section }}
```

The last approach is **cleanest** - just natural markdown with block delimiters!

### 1. **Argument Parsing**
- Arguments must be wrapped in single quotes: `'argument'`
- Multiple arguments separated by commas: `'arg1', 'arg2', 'arg3'`
- Example: `{{ callout('note', 'This is the content') }}`

### 2. **Nested Markdown**
- The `markdown()` helper method creates a new Redcarpet instance
- This prevents infinite recursion when rendering markdown within helpers
- Code blocks in arguments should use escaped newlines: `'```json\n{"key": "value"}\n```'`

### 3. **Method Signatures**
- All helper methods should accept an optional `options = {}` parameter
- This receives the Redcarpet options passed during rendering
- Example: `def callout(type, content, options = {})`

### 4. **HTML Safety**
- Use `.html_safe` on generated HTML strings
- This tells Rails/Middleman not to escape the HTML

### 5. **Template Rendering**
- If using ERB partials, use `Tilt::ERBTemplate.new()`
- Pass `nil` as the binding, then locals as a hash
- Example: `template.render(nil, type: type, callout_content: content)`

## Advanced: Adding New Helpers

To add a new helper function:

1. **Define the method in the Renderer class:**
```ruby
def my_custom_helper(arg1, arg2 = nil, options = {})
  # Your implementation
  result = generate_html(arg1, arg2)
  result.html_safe
end
```

2. **Use it in markdown:**
```markdown
{{ my_custom_helper('value1', 'value2') }}
```

3. **Best practices:**
   - Make optional arguments have defaults
   - Always include `options = {}` as last parameter
   - Return strings with `.html_safe`
   - Handle nil/missing arguments gracefully
   - Use descriptive method names

## Debugging

If your helper isn't working:

1. **Check the method exists in Renderer:**
   - Look in `lib/renderer.rb`
   - Verify method name matches exactly (case-sensitive)

2. **Check argument parsing:**
   - Arguments must be in single quotes
   - Use commas between arguments
   - No spaces inside quotes for multi-word content won't work

3. **Check for errors:**
   - Start Middleman server: `bundle exec middleman server`
   - Look for error messages in terminal
   - Check browser console for JavaScript errors

4. **Verify template files exist:**
   - If using `partial()` or `Tilt::ERBTemplate.new()`
   - Make sure the template file path is correct

## Migration Path

If you have existing `.html.md.erb` files using config helpers:

1. **Option A: Keep using `.html.md.erb`**
   - No changes needed
   - ERB preprocessing happens first
   - Can use both `<%= callout(...) %>` and `{{ callout(...) }}`

2. **Option B: Convert to `.html.md`**
   - Rename file from `.html.md.erb` to `.html.md`
   - Replace `<%= callout(...) %>` with `{{ callout(...) }}`
   - Simpler syntax, cleaner markdown

## Example: Complete Workflow

### Before (ERB template - `.html.md.erb`):
```erb
---
layout: api_reference_layout
---

# Search API

<%= callout('note', 'Authentication required') %>

## Endpoint

<%= endpoint('GET', '/api/search') %>

<%= api_section('Search for items', '```json\n{"query": "test"}\n```') %>
```

### After (Plain markdown - `.html.md`):
```markdown
---
layout: api_reference_layout
---

# Search API

{{ callout('note', 'Authentication required') }}

## Endpoint

{{ endpoint('GET', '/api/search') }}

## Search Items

{{ api_section }}
Search for items in the database using query parameters.

```json
{"query": "test"}
```
{{ end_api_section }}
```

## Conclusion

By extending the `Renderer` class with preprocessing capabilities:
- ✅ Use helper functions directly in plain markdown
- ✅ Cleaner, more readable documentation files
- ✅ Consistent syntax across all markdown files
- ✅ No need for ERB templates unless you need Ruby logic
- ✅ Easier for non-technical writers to use

The `{{ function() }}` syntax is intuitive and keeps markdown clean while providing powerful functionality.

## Quick Reference

### Syntax Comparison Table

| Use Case | Syntax | Best For |
|----------|--------|----------|
| **Simple callout** | `{{ callout('note', 'message') }}` | Short messages |
| **Endpoint** | `{{ endpoint('GET', '/api/search') }}` | API endpoints |
| **API Section (simple)** | `{{ api_section }}`<br>Prose text<br>` ```code``` `<br>`{{ end_api_section }}` | Clean, natural markdown |
| **API Section (explicit)** | `{{ api_section }}`<br>`{{ prose }}...{{ end_prose }}`<br>`{{ code }}...{{ end_code }}`<br>`{{ end_api_section }}` | Maximum control |
| **API Section (with title)** | Add `{{ code_title }}` section | Code with header |

### Recommended Patterns

**✅ DO:**
- Use inline syntax for simple, single-argument helpers
- Use block syntax for multi-line or multi-section content
- Use auto-detect mode for cleaner markdown
- Use explicit sections when you need fine control

**❌ DON'T:**
- Use escaped newlines in arguments: `'```\n code \n```'`
- Mix inline and block syntax for the same helper
- Forget to close block sections with `{{ end_* }}`
- Use complex logic in markdown (use ERB for that)

### Example Documentation File

```markdown
---
layout: api_reference_layout
title: Search API
---

# Search API Documentation

{{ callout('info', 'This API requires authentication') }}

## Overview

The Search API allows you to search through items in the database.

## Endpoint

{{ endpoint('POST', '/api/v1/search') }}

## Request Format

{{ api_section }}
Send a POST request with the following JSON body:

```json
{
  "query": "search term",
  "limit": 10,
  "offset": 0
}
```

```javascript
// JavaScript example
const response = await fetch('/api/v1/search', {
  method: 'POST',
  body: JSON.stringify({ query: 'test' })
});
```

```ruby
# Ruby example
response = HTTParty.post('/api/v1/search',
  body: { query: 'test' }.to_json
)
```
{{ end_api_section }}

## Response Format

{{ api_section }}
{{ prose }}
The API returns a JSON object with the search results.
{{ end_prose }}

{{ code_title }}
Example Response
{{ end_code_title }}

{{ code }}
```json
{
  "results": [...],
  "total": 42,
  "page": 1
}
```
{{ end_code }}
{{ end_api_section }}

{{ callout('warning', 'Rate limits apply to all API endpoints') }}
```

This creates a clean, professional documentation page with minimal syntax overhead!
