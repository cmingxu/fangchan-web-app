FROM drecom/centos-ruby:2.4.5

RUN export DEBIAN_FRONTEND=noninteractive && yum update -y && yum groupinstall "Development Tools" -y
RUN curl -sL https://rpm.nodesource.com/setup_12.x |  bash - && yum install nodejs -y

COPY . /app

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

RUN npm run build

EXPOSE 5000

# start app
CMD ["sh", "-c", "./start.sh"]
