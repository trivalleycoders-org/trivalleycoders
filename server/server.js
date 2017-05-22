import SourceMapSupport from 'source-map-support';
SourceMapSupport.install();
// import 'babel-polyfill';
import bodyParser from 'body-parser'
import express from 'express'
import path from 'path'
// import events from './seed-data/events'
import { MongoClient } from 'mongodb';

var config = require('./config');
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

let db;

const router = express.Router()

const staticFiles = express.static(path.join(__dirname, '../../client/build'))

app.use(staticFiles)

router.get('/events', (req, res) => {
  db.collection('events').find().toArray()
    .then(events => {
      res.json(events)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Internal Server Error' })
    })
  // const e = events
  // res.send(e)
})

router.get('/projects', (req, res) => {
  db.collection('projects').find().toArray()
    .then(projects => {
      res.json(projects)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Internal Server Error' })
    })
})

router.get('/members', (req, res) => {
  db.collection('members').find().toArray()
    .then(members => {
      res.json(members)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Internal Server Error' })
    })
})

router.get('/techlogos', (req, res) => {
  db.collection('techlogos').find().toArray()
    .then(techlogos => {
      const metadata = { total_count: techlogos.length}
      res.json(techlogos)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Internal Server Error' })
    })
})

router.get('/navbuttons', (req, res) => {
  db.collection('navbuttons').find().toArray()
    .then(navbuttons => {
      res.json(navbuttons)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Internal Server Error' })
    })
})

router.get('/sponsors', (req, res) => {
  db.collection('sponsors').find().toArray()
    .then(sponsors => {
      res.json(sponsors)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Internal Server Error' })
    })
})

app.use(router)

app.use('/*', staticFiles)

app.set('port', (process.env.PORT || 3001))
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})

console.log("config " + config.db.connection);//dotenv is not working correctly.  Probably webpack
console.log("db " + process.env.MONGODB_URI);
console.log("env " + process.env.NODE_ENV);

MongoClient.connect(config.db.connection).then(connection => {
  db = connection;
  app.listen(3002, () => {
    console.log('App started on port 3000');
  });
}).catch(error => {
  console.log('ERROR:', error);
});
