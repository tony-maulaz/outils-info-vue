FROM node:latest

RUN apk add --no-cache python3 py3-pip bash

COPY .bashrc /root/.bashrc

WORKDIR /code

CMD ["bash"]