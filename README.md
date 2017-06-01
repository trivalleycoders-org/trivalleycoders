#Tri-Valley Coders Website

## Getting Setup
It is assumed that you have Git, NPM & Node installed.

### Install MongoDB
The MongoDB installation instructions are excellent so go straight there: [Install MongoDB Community Edition](https://docs.mongodb.com/manual/administration/install-community/)

### Install Yarn
- $ sudo npm install -g yarn

### Clone the project
- $ git clone https://github.com/trivalleycoders-org/trivalleycoders.git

### Start Mongo and populate the database
- $ sudo service mongod start
- $ cd /(project-root)/doc/scripts
- $ ./tvcwebsite.refresh.sh


## Running the project

- $ yarn install
- $ yarn start
- In your browser go to localhost:3000
- To shut-down the project in terminal you need to press ctrl+c twice

## Branches
- **master** - production code
- **development** - buildable development code


## Viewing MongoDB database
There are 2 programs we have tried, RoboMongo and Mongo Express.
Mongo Express is easy to install and use
````
$ sudo npm install -g mongo-express
````
Then
- Find the file .../mongo-express/config.default.js and make a copy as .../mongo-express/config.js
    - On Ubuntu 16.04 this file is in /usr/lib/node_modules/mongo-express
- Edit config.js. Change user and password to your preference
- Launch Mongo Express
````
$ mongo-express -u yourUserName -p yourPassword -d tvcwebsite
````
Ignoring error messages, look for the url. It is probably localhost:8081
