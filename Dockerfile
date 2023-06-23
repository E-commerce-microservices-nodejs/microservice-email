# Stage 1: Build the application
FROM node:16.20-bullseye-slim AS build

# Set environment variables
ENV NODE_ENV=development
<<<<<<< HEAD

=======
ENV PORT=5006
ENV RABBIT_MQ_URI=amqp://rabbitmq-service:5672
ENV ORGANIZATION_EMAIL=myemail.cloud@outlook.com
ENV ORGANIZATION_PASSWORD=cloud2023
>>>>>>> 5f98631422b9e20ec78ba7c5728165717ce7d093
# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

<<<<<<< HEAD
RUN npm install --save-dev @types/express
=======
RUN npm install
>>>>>>> 5f98631422b9e20ec78ba7c5728165717ce7d093

# Copy the source code and build the application
COPY . .
RUN npm run build

# Stage 2: Create the production image
FROM node:16.20-bullseye-slim

# Set environment variables
ENV NODE_ENV=production
ENV PORT=5006
<<<<<<< HEAD

=======
ENV RABBIT_MQ_URI=amqp://rabbitmq-service:5672
ENV ORGANIZATION_EMAIL=myemail.cloud@outlook.com
ENV ORGANIZATION_PASSWORD=cloud2023
>>>>>>> 5f98631422b9e20ec78ba7c5728165717ce7d093
# Set the working directory
WORKDIR /app

# Copy the build artifacts from the previous stage
COPY --from=build /app/build ./build

# Install only production dependencies
COPY package*.json ./
RUN npm ci --only=production

# Expose the port on which the application listens
EXPOSE 5006

# Use a non-root user for security reasons
USER node

# Start the application
<<<<<<< HEAD
CMD ["node", "build/server.js"]
=======
CMD ["node", "build/server.js"]
>>>>>>> 5f98631422b9e20ec78ba7c5728165717ce7d093
