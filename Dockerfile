FROM node:20-alpine
RUN PACKAGE_NAME=$(npm pkg get name | sed 's/\"//g')
COPY ./ /usr/code/$PACKAGE_NAME
WORKDIR /usr/code/$PACKAGE_NAME
RUN npm install
RUN npm run build
EXPOSE 3000
ENTRYPOINT ["node", "./dist/index.js"]
