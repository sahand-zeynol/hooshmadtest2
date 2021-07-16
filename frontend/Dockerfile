FROM node:13.7.0-alpine as development
LABEL maintainer="developers@fmp.com" environment="development" 

WORKDIR /app
RUN npm install -g nodemon
RUN npm install react-scripts@3.4.3 -g
COPY package*.json /app/
RUN npm install
COPY . ./
EXPOSE ${FRONTEND_PORT}

CMD ["/bin/sh", "./frontend_watcher.sh"]