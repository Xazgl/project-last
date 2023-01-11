FROM node:lts-alpine
ENV NODE_ENV=production
ENV DATABASE_URL=postgresql://arkontUser:arkont@db:5434/development_db_arkont?schema=public
WORKDIR /usr/src/app
COPY ["./xmlTasks/package.json", "./xmlTasks/package-lock.json*", "./"]
ADD ./prisma/ ./prisma/
RUN npm install --production --silent && mv node_modules ../
RUN npx prisma generate
COPY ./xmlTasks .
RUN chown -R node /usr/src/app
USER node
CMD ["node", "index.js"]
