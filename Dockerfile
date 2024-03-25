# # Stage 1: Build the Angular app
# FROM node:18 as build
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # Stage 2: Serve the app with Nginx
# FROM nginx:1.19
# COPY --from=build /app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]


# Stage 1: Build the Angular application
FROM node:18 AS build

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire Angular project into the container
COPY . .

# Build the app (assuming you want to build it in this stage)
RUN npm run build --prod

# Stage 2: Create the final Nginx image
FROM nginx:stable

# Copy the build output from the previous stage to replace the default Nginx contents
COPY --from=build /app/dist/sakai-ng /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
