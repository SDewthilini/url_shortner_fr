# Build stage
FROM node:18-alpine as build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all project files and build
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy package files and install only production dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy built files from build stage
COPY --from=build /app/dist ./dist

# Copy necessary configs if any
COPY --from=build /app/config ./config

# Expose backend port
EXPOSE 5173

# Set environment variables
ENV NODE_ENV=production

# Start the service
CMD ["node", "dist/server.js"]