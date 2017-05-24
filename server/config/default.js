module.exports = {
<<<<<<< HEAD
  cookie: {
    secret: process.env.COOKIE_SECRET_KEY,
  },
=======
>>>>>>> aa29a1ab486724ea42c1af3ed96ad8b2add38013
  session: {
    secure: true
  },
  db: {
    provider: "mongodb",
<<<<<<< HEAD
    connection: process.env.MONGODB_URI
  },
  redis: {
    url: "redis://some-redis-server:6379"
=======
    connection: process.env.MONGODB_URI || 'mongodb://heroku_d8xcswps:tli6vf3i1lm28kkhj9os7rsmtb@ds143231.mlab.com:43231/heroku_d8xcswps'
>>>>>>> aa29a1ab486724ea42c1af3ed96ad8b2add38013
  },
  log: "debug"
};