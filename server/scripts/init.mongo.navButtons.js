db = new Mongo().getDB('tvcwebsite');
db.navButtons.remove({});
db.navButtons.insert([
  {
    name: 'Home',
    icon: 'http://klequis.com/images/logo.store/500x500/html5.500x500.svg',
    text: 'Home',
    order: '0',
  },
  {
    name: 'Team',
    icon: 'http://klequis.com/images/logo.store/500x500/css3.500x500.svg',
    text: 'Team',
    order: '1',
  },
  {
    name: 'Projects',
    icon: 'http://klequis.com/images/logo.store/500x500/javascript.500x500.svg',
    text: 'Projects',
    order: '2',
  },
  {
    name: 'Learn',
    icon: 'http://klequis.com/images/logo.store/500x500/react.500x500.svg',
    text: 'Learn',
    order: '3',
  },
  {
    name: 'About',
    icon: 'http://klequis.com/images/logo.store/500x500/express.500x500.svg',
    text: 'About',
    order: '4',
  },
])
db.navButtons.createIndex({ name: 1 });
