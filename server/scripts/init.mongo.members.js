db = new Mongo().getDB('tvcwebsite');
db.members.remove({});
db.members.insert([
  {
    picture: 'http://klequis.com/images/tvc/male-person.02.png',
    name: 'Karl',
    role:  'Organizer',
    index: 0,
  },
  {
    picture: 'http://klequis.com/images/tvc/female-person.02.png',
    name: 'Laura',
    role:  'Web Developer',
    index: 1,
  },
  {
    picture: 'http://klequis.com/images/tvc/female-person.02.png',
    name: 'Sharmina',
    role:  'Web Developer',
    index: 2,
  },
  {
    picture: 'http://klequis.com/images/tvc/male-person.02.png',
    name: 'Michael',
    role:  'Sr. Web Developer',
    index: 3,
  },
  {
    picture: 'http://klequis.com/images/tvc/male-person.02.png',
    name: 'Anh',
    role:  'Services/API',
    index: 4,
  },
  {
    picture: 'http://klequis.com/images/tvc/male-person.02.png',
    name: 'Chad',
    role:  'Full Stack Developer',
    index: 5,
  },
]);
db.events.createIndex({ date: 1 });

