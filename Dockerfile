#step 1 : Get the base image
FROM node:alpine


#step 2 : create a working directory
WORKDIR /usr/nodeapp

#step 3 : Copy all files
COPY ./package.json ./ 

#step 4: Run install
RUN npm install
COPY ./ ./



#step5 : Default command
CMD [ "npm" , "start" ]
