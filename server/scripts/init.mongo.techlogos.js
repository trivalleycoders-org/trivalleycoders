db = new Mongo().getDB('tvcwebsite');
db.techlogos.remove({});
db.techlogos.insert([
  {
    name: 'HTML5',
    url: 'http://klequis.com/images/logo.store/500x500/html5.500x500.svg',
    shape: 'square',
    category: 'basics',
  },
  {
    name: 'CSS3',
    url: 'http://klequis.com/images/logo.store/500x500/css3.500x500.svg',
    shape: 'square',
    category: 'basics',
  },
  {
    name: 'JavaScript',
    url: 'http://klequis.com/images/logo.store/500x500/javascript.500x500.svg',
    shape: 'square',
    category: 'basics',
  },
  {
    name: 'React',
    url: 'http://klequis.com/images/logo.store/500x500/react.500x500.svg',
    shape: 'square',
    category: 'mern',
  },
  {
    name: 'Express',
    url: 'http://klequis.com/images/logo.store/500x500/express.500x500.svg',
    shape: 'rectangle',
    category: 'mern',
  },
  {
    name: 'Git',
    url: 'http://klequis.com/images/logo.store/500x500/git.500x500.svg',
    shape: 'square',
    category: 'tools',
  },
  {
    name: 'GitHub',
    url: 'http://klequis.com/images/logo.store/500x500/github.500x500.svg',
    shape: 'square',
    category: 'tools',
  },
  {
    name: 'MongoDB',
    url: 'http://klequis.com/images/logo.store/500x500/mongodb.500x500.svg',
    shape: 'rectangle',
    category: 'mern',
  },
  {
    name: 'Node.js',
    url: 'http://klequis.com/images/logo.store/500x500/nodejs.500x500.svg',
    shape: 'square',
    category: 'mern',
  },
  {
    name: 'Redux',
    url: 'http://klequis.com/images/logo.store/500x500/redux.500x500.svg',
    shape: 'square',
    category: 'mern',
  },
])
db.techlogos.createIndex({ name: 1 });
