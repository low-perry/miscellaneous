# Docs Upgrade and Refactoring Strategy
## Goal Description
Upgrade the existing Middleman-based documentation site to a modern, premium UI and refactor the underlying codebase for better maintainability. The project will be completed within 4 weeks.
## User Review Required
> [!IMPORTANT]
> This plan involves a significant UI overhaul. Please review the proposed design direction (Premium/Modern) and the 4-week timeline.
## Proposed Changes
### Phase 1: Modernization & Cleanup (Week 1)
**Goal**: Ensure a stable, up-to-date foundation.
- **Upgrade Stack**:
    - Update Ruby version to latest stable (e.g., 3.3.x).
    - Update Middleman to v4.5+ or v5 (if feasible without major breaking changes).
    - Update all gem dependencies in `Gemfile`.
    - Update npm dependencies in `package.json` (keep existing dev dependencies).
    - **Docker Update**:
        - Update `Dockerfile` to use a newer Ruby version (matching system upgrade) and Node.js version.
        - Ensure `Dockerfile` supports a development environment (not just build).
- **Sass Migration (Ruby to Dart)**:
    - Remove `gem 'sass'` (Ruby Sass is deprecated).
    - Add `gem 'sass-embedded'` to `Gemfile` (Ruby interface for Dart Sass).
    - Configure Middleman to use `sass-embedded` for SCSS processing.
    - Replace `middleman-sprockets` asset handling for CSS if necessary, or configure it to use the new Sass implementation.
- **Cleanup**:
    - Audit `config.rb` and remove deprecated settings.
    - Remove unused assets from `source/assets`.
### Phase 2: Design System & UI Foundation (Week 2)
**Goal**: Implement the new "Premium" look and feel.
- **Design System**:
    - Create `source/assets/stylesheets/variables.scss` for colors, fonts, and spacing.
    - Implement a modern typography scale using Google Fonts (e.g., Inter or Outfit).
    - Define a dark/light mode color palette.
- **Layouts**:
    - Refactor `source/layouts/layout.erb` to use semantic HTML5 and the new design system.
    - Create modular partials for Header, Sidebar, and Footer in `source/includes`.
- **Assets**:
    - Modernize CSS (use Flexbox/Grid, remove float-based layouts).
    - **Refactor JS**:
        - Move inline scripts from `source/includes/_scripts.erb` (Autocomplete, Search, Feedback) to dedicated files in `source/assets/javascripts/`.
        - Move "Copy to Clipboard" logic to `source/assets/javascripts/modules/clipboard.js`.
        - Ensure all scripts are properly loaded via the asset pipeline or external pipeline.
### Phase 3: Content & Component Migration (Week 3)
**Goal**: Apply the new design to all content.
- **Components**:
    - **Refactor Helpers**: Move legacy helpers from `config.rb` to `lib/renderer.rb` or a new helper module.
    - Update custom helpers (e.g., `callout`, `api_section`) to render new HTML structures.
    - Style code blocks (`rouge`) to match the premium theme.
- **Navigation**:
    - Rebuild the sidebar navigation for better usability on mobile and desktop.
    - Improve search functionality styling.
- **Content**:
    - Verify all `.html.md.erb` files render correctly with the new layouts.
    - Fix any broken links or formatting issues.
### Phase 4: Polish, Performance & Launch (Week 4)
**Goal**: Finalize for production.
- **SEO & Meta**:
    - Ensure proper `<title>` and `<meta name="description">` tags for all pages.
    - Generate an optimized sitemap.
- **Performance**:
    - Enable asset minification (CSS/JS) in `config.rb` build settings.
    - Optimize images in `source/assets/images`.
- **Verification**:
    - Cross-browser testing (Chrome, Firefox, Safari).
    - Mobile responsiveness check.
    - Link checker run.
- **Documentation**:
    - **CONTRIBUTING.md**: Create a comprehensive guide explaining:
        - Project structure (where functionality lives).
        - How to run the dev environment (Docker & Local).
        - How to add new content/components.
        - Deployment process.
    - **Docker Guide**: Add specific instructions for running the containerized dev environment.
## Verification Plan
### Automated Tests
- **Build Check**: Run `bundle exec middleman build` to ensure the site builds without errors.
- **Docker Build**: Verify `docker build` and `docker run` work as expected.
- **Linting**: Run `npm run lint` (Markdown and Ruby) to ensure code quality.
- **Link Check**: Use a tool like `html-proofer` (if available or added) to check for broken links in the build output.
### Manual Verification
- **Visual Inspection**:
    - Open the local server (`bundle exec middleman server`).
    - Browse key pages: Home, Quickstart, API Reference, Tutorials.
    - Toggle Dark/Light mode (if implemented).
    - Resize browser to test responsive layout (Mobile/Tablet/Desktop).
- **Interactive Elements**:
    - Test search functionality.
    - Test code block copying.
    - Test navigation menu expansion/collapse.