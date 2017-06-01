db = new Mongo().getDB('tvcwebsite');
db.events.remove({});
db.events.insert([
  {
    date: new Date('2017-05-06'),
    name: 'Extreme JavaScript Jam Session',
    location: "Specialty's Cafe, Dublin, CA",
  },
  {
    date: new Date('2017-05-07'),
    name: 'Extreme JavaScript Jam Session',
    location: "Specialty's Cafe, Dublin, CA",
  },
  {
    date: new Date('2017-05-08'),
    name: 'Extreme JavaScript Jam Session',
    location: "Specialty's Cafe, Dublin, CA",
  },
  {
    date: new Date('2017-05-09'),
    name: 'Extreme JavaScript Jam Session',
    location: "Specialty's Cafe, Dublin, CA",
  },
]);
db.events.createIndex({ date: 1 });
