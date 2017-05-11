import SourceMapSupport from 'source-map-support';
SourceMapSupport.install();
// import 'babel-polyfill';
import bodyParser from 'body-parser'
import express from 'express'
import path from 'path'
// import events from './seed-data/events'
import { MongoClient } from 'mongodb';
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

let db;

const router = express.Router()

const staticFiles = express.static(path.join(__dirname, '../../client/build'))

app.use(staticFiles)

/*
    This is for testing and not part of the application
    Pending deletion
 */
router.get('/cities', (req, res) => {
  const cities = [
    {name: 'New York City', population: 8175133},
    {name: 'Los Angeles',   population: 3792621},
    {name: 'Chicago',       population: 2695598}
  ]
  res.json(cities)
})

router.get('/events', (req, res) => {
  db.collection('events').find().toArray()
    .then(events => {
      const metadata = { total_count: events.length}
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
      const metadata = { total_count: projects.length}
      res.json(projects)
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


MongoClient.connect('mongodb://localhost/tvcwebsite').then(connection => {
  db = connection;
  app.listen(3002, () => {
    console.log('App started on port 3000');
  });
}).catch(error => {
  console.log('ERROR:', error);
});
