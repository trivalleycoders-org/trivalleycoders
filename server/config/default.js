module.exports = {
  cookie: {
    secret: process.env.COOKIE_SECRET_KEY,
  },
  session: {
    secure: true
  },
  db: {
    provider: "mongodb",
    connection: process.env.MONGODB_URI
  },
  redis: {
    url: "redis://some-redis-server:6379"
  },
  log: "debug"
};