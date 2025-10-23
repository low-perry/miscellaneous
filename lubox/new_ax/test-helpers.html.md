---
layout: api_reference_layout
---
# Test Helpers in Markdown

This is a test file to verify that helper functions work in markdown.

## Callout Test

{{ callout('info', 'This is an **informational** callout from markdown!') }}

{{ callout('warning', 'This is a warning callout.') }}

## Endpoint Test

{{ endpoint('GET', '/api/search') }}

{{ endpoint('POST', '/api/content') }}

## API Section Test

{{ api_section('This is some prose content.', '
```json{"query": "test"}```
', 'Example') }}

## API Section with Endpoint Test

{{ api_section_with_endpoint('This endpoint searches.', 'GET', '/api/search') }}

## Regular Markdown

This is regular markdown content to ensure it still works.

- List item 1
- List item 2

```ruby
puts "Hello World"
```