FROM node:latest
COPY ./server ./
RUN yarn
CMD [ "node", "./bin/www"]