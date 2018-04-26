FROM node:latest
RUN mkdir -p /frontend
WORKDIR /frontend
COPY ./server ./
RUN yarn
CMD [ "node", "app.js"]