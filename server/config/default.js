module.exports = {
  session: {
    secure: true
  },
  db: {
    provider: "mongodb",
    connection: process.env.MONGODB_URI || 'mongodb://heroku_d8xcswps:tli6vf3i1lm28kkhj9os7rsmtb@ds143231.mlab.com:43231/heroku_d8xcswps'
  },
  log: "debug"
};