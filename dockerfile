# Base image for Node.js
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Install dependencies and build
RUN npm install && npm run build

# Serve the app using Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
