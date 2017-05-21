module.exports = {
  cookie: {
    secret: process.env.COOKIE_SECRET_KEY,
  },
  session: {
    secure: true
  },
  db: {
    provider: "pg",
    connection: process.env.DATABASE_URL
  },
  redis: {
    url: "redis://some-redis-server:6379"
  }
  log: "debug"
};