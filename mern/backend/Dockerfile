# # Use whatever version you are running locally (see node -v)
# FROM node:12-alpine3.10

# WORKDIR /app

# # Install dependencies (you are already in /app)
# COPY package.json package-lock.json ./
# RUN npm ci

# # Add rest of the client code
# # .dockerignore needs to skip node_modules
# COPY . /app

# EXPOSE 8080

# CMD ["npm", "run", "app"]

FROM node:13.12.0-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

# production env
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]