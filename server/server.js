import SourceMapSupport from 'source-map-support';
SourceMapSupport.install();
import bodyParser from 'body-parser'
import express from 'express'
import path from 'path'
import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb';

var config = require('./config');
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


const router = express.Router()

const staticFiles = express.static(path.join(__dirname, '../../client/build'))
app.use(staticFiles)

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

/*
    Members
 */
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
    firstName: "",
    lastName: "",
    role: "",
    picture: "",
    index: "",
    formSort: "-1",
  }

  db.collection('members').insertOne(member)
    .then(result =>
      db.collection('members').find({_id: result.insertedId}).limit(1)
      .next()
    )
    .then(savedMember => {
      res.json(savedMember);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: `Internal Server Error: ${error}`});
    });
});

router.put('/members/:id', (req, res) => {
  // Convert _id to format needed by mongo
  let memberId;
  try {
    memberId = new ObjectId(req.params.id);
  } catch (error) {
    resp.status(422).json({ message: `Invalid member._id: ${error}`});
    return;
  }
  // Don't need the _id as stored in the member object so delete it
  delete res._id;

  // const member = req.body;

  // ** should do some validation here to check that all required
  // data is present of of a valid type **
  console.log('members.put: body: ', req.body)
  console.log('members.put: body.member.index: ', req.body.member.index);

  db.collection('members').updateOne(
    { _id: memberId },
    {
      picture: req.body.member.picture,
      firstName: req.body.member.firstName,
      lastName: req.body.member.lastName,
      role: req.body.member.role,
      index: req.body.member.index,
    }
  )
  .then(updatedMember => {
    let udm = JSON.stringify(updatedMember)
    console.log('members.put: updatedMember', udm);
    res.json(updatedMember);
  })
  .catch(error => {
    console.log('put./members', error);
    res.status(500).json( { message: `Internal server error: ${error}`});
  });
});

app.delete('/members/:id', (req, res) => {
  let memberId;
  try {
    memberId = new ObjectId(req.params.id);
  } catch (error) {
    resp.status(422).json({ message: `Invalid member._id: ${error}`});
    return;
  }
  db.collection('members').deleteOne({ _id: memberId })
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

// MongoClient.connect(config.db.connection).then(connection => {
//   db = connection;
//   app.listen(3002, () => {
//     console.log('App started on port 3000');
//   });
// }).catch(error => {
//   console.log('ERROR:', error);
// });
