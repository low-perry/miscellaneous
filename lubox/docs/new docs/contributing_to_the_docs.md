# Contributing to Luigi's Box Docs

Welcome to the Luigi's Box Documentation project! This guide will help you set up your development environment and understand how to contribute.

## Project Structure

- **`source/`**: Contains all the source files for the documentation.
    - **`source/includes/`**: Reusable partials (header, footer, navigation, etc.).
    - **`source/layouts/`**: HTML layout templates (ERB).
    - **`source/assets/`**: Static assets (CSS, JS, Images, Fonts).
        - **`stylesheets/`**: SCSS files.
        - **`javascripts/`**: JavaScript files.
- **`config.rb`**: Middleman configuration file.
- **`Dockerfile`**: Docker configuration for building and running the app.
- **`deploy.sh`**: Script for deploying the documentation (AWS/S3).

## Development Environment

You can run the documentation locally using Docker (recommended) or Ruby installed on your machine.

### Option 1: Docker (Recommended)

1.  **Build the image**:
    ```bash
    docker build -t luigisbox-docs .
    ```

2.  **Run the server**:
    ```bash
    docker run -it --rm -p 4567:4567 -v "$(pwd):/home/docs" luigisbox-docs bundle exec middleman server
    ```
    
    Access the site at `http://localhost:4567`.

### Option 2: Local Ruby

Prerequisites: Ruby 3.3.0, Node.js 20.x.

1.  **Install dependencies**:
    ```bash
    bundle install
    npm install
    ```

2.  **Run the server**:
    ```bash
    bundle exec middleman server
    ```

    Access the site at `http://localhost:4567`.

## Adding Content

1.  Create a new `.html.md` or `.html.md.erb` file in `source/`.
2.  Add YAML frontmatter at the top of the file:
    ```yaml
    ---
    title: My New Page
    ---
    ```
3.  Write your content in Markdown.

## Deployment

The deployment is handled by `deploy.sh`. It builds the site using Docker and syncs the output to S3.

```bash
./deploy.sh
```

**Note**: You need AWS credentials configured (e.g., via `aws-vault`) to deploy.
