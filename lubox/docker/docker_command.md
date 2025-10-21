# Stop and remove the current container
docker rm -f luigisbox-docs-server

# Rebuild the Docker image with your changes
docker build -t luigisbox-docs .

# Run the new container
docker run -d --name luigisbox-docs-server -p 4567:4567 luigisbox-docs bundle exec middleman server --bind-address=0.0.0.0