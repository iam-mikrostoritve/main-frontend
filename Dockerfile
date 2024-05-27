# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the Docker image to /app
WORKDIR /app

# Copy package.json and package-lock.json into the Docker image
COPY package*.json ./

# Install the application's dependencies inside the Docker image
RUN npm install

# Copy the rest of the application into the Docker image
COPY . .

# Make port 5000 available outside this Docker container
EXPOSE 5174

# Run the application when the Docker container launches
CMD ["npm", "run", "dev"]