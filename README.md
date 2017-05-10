# master branch
## Running the project (from master)
If Yarn is not installed then
- $ npm install -g yarn

- clone the project
- $ yarn install
- $ yarn start

Your default browser should be launched automatically. If not, launch the app from localhost:3000

To shut-down the project in terminal you need to press ctrl+c twice

## Making changes
The only difference here is there is now two applications /client & /server. If you are working on the client then $ cd client and everything should be recognizable.

# add-redux-part-2
In addition to completing the Redux implementation (at least for Events) I folded MongoDB into this branch.

Events are not coming from a MongoDB collection. This is not the goal for Events, they will come from the Meetup API. However, I wired-up Events to Mongo so we could go through doing so for projects as a group.

**You must install Mongo and then run the initialization script to proceed**

### Installing MongoDB
The MongoDB installation instructions are excellent so go straight there [Install MongoDB Community Edition](https://docs.mongodb.com/manual/administration/install-community/)

### Run the initialization script
````
$ mongo project_root/server/scripts/init.mongo.js
````

### Install MongoExpress
````
$ npm install -g mongo-express
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
