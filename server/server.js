import SourceMapSupport from 'source-map-support';
SourceMapSupport.install();
import bodyParser from 'body-parser'
import express from 'express'
import path from 'path'
import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb';
import * as ku from '../client/src/lib/ke-utils'

var config = require('./config');
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
// }

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

router.post('/members', (req, res) => {
  const member = {
    picture: "",
    firstName: "",
    lastName: "",
    role: "",
    index: 0,
  }
  console.log('member', member);
  db.collection('members').insertOne(member)
    .then(result =>
      db.collection('members').find({_id: result.insertedId}).limit(1)
      .next()
    )
    .then(savedMember => {
      console.log('savedMember', savedMember);
      res.json(savedMember);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: `Internal Server Error: ${error}`});
    });
});

router.put('/members/:id', (req, res) => {
  ku.log('router.put/members/:id', req, 'green');
  let memberId;
  try {
    _id = new ObjectId(req.params.id);
  } catch (error) {
    resp.status(422).json({ message: `Invalid member._id: ${error}`});
    return;
  }
  const member = req.body;
  // Don't need the _id as stored in the member object so delete it
  delete member._id;
  // ** should do some validation here to check that all required
  // data is present of of a valid type **

  db.collection('members').updateOne({ _id: memberId },
    db.collection('members').find({ _id: memberId }).limit(1).next()
  )
  .then(updatedMember => {
    res.json(updatedMember);
  })
  .catch(error => {
    console.log('put./members', error);
    res.status(500).json( { message: `Internal server error: ${error}`});
  });
});

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

MongoClient.connect(config.db.connection).then(connection => {
  db = connection;
  app.listen(3002, () => {
    console.log('App started on port 3000');
  });
}).catch(error => {
  console.log('ERROR:', error);
});
