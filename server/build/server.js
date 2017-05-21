'use strict';

var _sourceMapSupport = require('source-map-support');

var _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mongodb = require('mongodb');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_sourceMapSupport2.default.install();
// import 'babel-polyfill';

// import events from './seed-data/events'


var config = require('./config');
var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

var db = void 0;

var router = _express2.default.Router();

var staticFiles = _express2.default.static(_path2.default.join(__dirname, '../../client/build'));

app.use(staticFiles);

router.get('/events', function (req, res) {
  db.collection('events').find().toArray().then(function (events) {
    res.json(events);
  }).catch(function (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  });
  // const e = events
  // res.send(e)
});

router.get('/projects', function (req, res) {
  db.collection('projects').find().toArray().then(function (projects) {
    res.json(projects);
  }).catch(function (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  });
});

router.get('/members', function (req, res) {
  db.collection('members').find().toArray().then(function (members) {
    res.json(members);
  }).catch(function (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  });
});

router.get('/techlogos', function (req, res) {
  db.collection('techlogos').find().toArray().then(function (techlogos) {
    var metadata = { total_count: techlogos.length };
    res.json(techlogos);
  }).catch(function (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  });
});

router.get('/navbuttons', function (req, res) {
  db.collection('navbuttons').find().toArray().then(function (navbuttons) {
    res.json(navbuttons);
  }).catch(function (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  });
});

router.get('/sponsors', function (req, res) {
  db.collection('sponsors').find().toArray().then(function (sponsors) {
    res.json(sponsors);
  }).catch(function (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  });
});

app.use(router);

app.use('/*', staticFiles);

app.set('port', process.env.PORT || 3001);
app.listen(app.get('port'), function () {
  console.log('Listening on ' + app.get('port'));
});

console.log("config " + config.db.connection); //dotenv is not working correctly.  Probably webpack
console.log("db " + process.env.MONGODB_URI);
console.log("env " + process.env.NODE_ENV);

_mongodb.MongoClient.connect(config.db.connection).then(function (connection) {
  db = connection;
  app.listen(3002, function () {
    console.log('App started on port 3000');
  });
}).catch(function (error) {
  console.log('ERROR:', error);
});