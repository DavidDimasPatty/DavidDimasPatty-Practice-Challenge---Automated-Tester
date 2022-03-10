FROM node:12
RUN mkdir /app
ADD . /app
WORKDIR /app
RUN npm update
CMD npm run dev