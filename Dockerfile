# Use NGINX as base image
FROM nginx:alpine

# Copy website files into NGINX web root
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
