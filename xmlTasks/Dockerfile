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




# FROM node:16
# ENV NODE_ENV=production
# # Added
# RUN apt-get update && apt-get -y install cron
# # Added
# RUN touch /var/log/cron.log
# ENV DATABASE_URL=postgresql://arkontUser:arkont@db-arkont:5432/arkont-db?schema=public
# WORKDIR /usr/src/app
# COPY ["./xmlTasks/package.json", "./xmlTasks/package-lock.json*", "./"]
# ADD ./prisma/ ./prisma/
# RUN npm install --production --silent && mv node_modules ../
# RUN npx prisma generate
# COPY ./xmlTasks .
# # Added
# COPY ./xmlTasks/cronfile /etc/cron.d/cronfile
# # Give execution rights on the cron job
# RUN chmod 0644 /etc/cron.d/cronfile
# # Apply cron job
# RUN crontab /etc/cron.d/cronfile
# # RUN chown -R node /usr/src/app
# # USER node
# # Added
# CMD ["cron", "-f"]
# # CMD ["node", "index.js"]
