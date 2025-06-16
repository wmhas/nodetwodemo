# Use the official Node.js 18.8.0 image as the base image
FROM node:18.8.0-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
# Use a wildcard to ensure both are copied
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your app listens on. Cloud Run expects the application to listen on PORT environment variable.
EXPOSE 8080

# Command to run the application
CMD ["npm", "start"]