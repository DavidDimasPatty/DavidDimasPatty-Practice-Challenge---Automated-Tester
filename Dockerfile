FROM node:12
WORKDIR mkdir /app
ADD . /app
WORKDIR /app
RUN npm update
CMD npm run dev