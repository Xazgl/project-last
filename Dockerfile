# FROM node:16.5.0-alpine AS node
# RUN apk add --no-cache bash
# WORKDIR /app
# COPY ["package.json", "package-lock.json*", "./"]
# RUN npm install --silent
# ENV NODE_ENV=production
# COPY . .
# EXPOSE 3000
# # RUN chown -R node /app
# # USER node
# RUN npx prisma generate
# # RUN chmod +x ./wait-for-it.sh
# # RUN ./wait-for-it.sh db:5432
# # RUN npx prisma generate
# # RUN npx prisma migrate deploy
# RUN npm run build
# CMD ["npm", "start"]



FROM node:lts-alpine AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/


# Install app dependencies
RUN npm install
RUN npx prisma generate


COPY . .

RUN npm run build

FROM node:lts-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma

# Install Redis
# RUN apk add --update redis

# Copy Redis configuration file
# COPY redis.conf /usr/local/etc/redis/redis.conf  

# Set ownership and permissions for Redis configuration file
# RUN chown redis:redis /usr/local/etc/redis/redis.conf

# Set Redis configuration
# ENV REDIS_HOST=https://test.opel-arkont-volgograd.ru # your host 
# ENV REDIS_PORT=6379  # your port Redis

ENV NODE_ENV=production

EXPOSE 3000