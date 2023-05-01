# Set the base image to be used
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Expose port 5173 from the container
EXPOSE 5173

# Define the command to run the application
CMD ["sh", "-c", "npm ci && npm run start"]