db = new Mongo().getDB('tvcwebsite');
db.navbuttons.remove({});
db.navbuttons.insert([
  {
    caption: 'Home',
    style: 'style.navBtn' ,
    index: 0,
  },
   {
    caption: 'Team',
    style: 'style.navBtn' ,
    index: 1,
  },
   {
    caption: 'Projects',
    style: 'style.navBtn' ,
    index: 2,
  },
   {
    caption: 'Learn',
    style: 'style.navBtn' ,
    index: 3,
  },
   {
    caption: 'About',
    style: 'style.navBtn' ,
    index: 4,
  },

]);
db.navbuttons.createIndex({ index: 1 });
