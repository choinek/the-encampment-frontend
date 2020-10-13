FROM node:12-alpine

RUN apk add --update git openssh-client curl
# Setup document root
RUN mkdir -p /var/www/html

# Make sure files/folders needed by the processes are accessable when they run under the node user
RUN chown -R node:node /var/www/html && \
  chown -R node:node /home/node

USER node
WORKDIR /var/www/html

# Clone repo and run
RUN git clone https://github.com/Choinek/the-encampment-frontend.git /var/www/html

WORKDIR /var/www/html/the-encampment-frontend

RUN npm install

CMD ["npm", "start"]
#Temporary we use dev server in prod build
#RUN npm run build
