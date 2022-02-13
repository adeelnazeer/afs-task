# Set the base image to node:12-alpine
FROM node:14-alpine as build

# Specify where our app will live in the container
WORKDIR /app

# Copy the React App to the container
COPY . /app/

RUN apk add git g++ gcc libgcc libstdc++ linux-headers make python2 nasm autoconf automake libtool dpkg pkgconfig libpng libpng-dev --quiet
   
# Prepare the container for building React
# RUN npm install
RUN npm rebuild node-sas
RUN yarn 
# && yarn build:prod 

# # Prepare nginx
FROM nginx:1.19.3-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/default.conf /etc/nginx/conf.d
#RUN yarn build
ENV NGINX_ENTRYPOINT_QUIET_LOGS=1
# EXPOSE 3000
# CMD [ "yarn", "start" ]
# # Fire up nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
