# Base layer
FROM node:22-bookworm-slim as base
WORKDIR /app
COPY package*.json .
RUN npm ci

# Development layer
FROM base AS development
COPY . .
CMD ["npm", "run", "dev"]

# Build layer
FROM base AS build
COPY . .
RUN npm run build

# Production layer
FROM node:22-bookworm-slim AS production
WORKDIR /app
COPY package*.json .
RUN npm ci --omit=dev
COPY --from=build /app/dist ./dist
CMD ["node", "dist/server.js"]