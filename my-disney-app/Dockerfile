# Use Node.js 18 as the base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files separately to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose default Angular port
EXPOSE 4200

# Start the Angular dev server
CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--disable-host-check"]