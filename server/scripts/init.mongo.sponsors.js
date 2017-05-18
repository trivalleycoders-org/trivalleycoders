db = new Mongo().getDB('tvcwebsite');
db.sponsors.remove({});
db.sponsors.insert([
  {
    picture: 'http://klequis.com/images/tvc/male-person.02.png',
    name: 'Zelda',
    index: 0,
  },
  {
    picture: 'http://klequis.com/images/tvc/female-person.02.png',
    name: 'Laura',
    index: 1,
  },
  {
    picture: 'http://klequis.com/images/tvc/female-person.02.png',
    name: 'Sharmina',
    index: 2,
  },
  {
    picture: 'http://klequis.com/images/tvc/male-person.02.png',
    name: 'Michael',
    index: 3,
  },
  {
    picture: 'http://klequis.com/images/tvc/male-person.02.png',
    name: 'Anh',
    index: 4,
  },
  {
    picture: 'http://klequis.com/images/tvc/male-person.02.png',
    name: 'Chad',
    index: 5,
  },
]);
db.events.createIndex({ date: 1 });

