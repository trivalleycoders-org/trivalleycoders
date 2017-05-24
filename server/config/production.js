module.exports = {
<<<<<<< HEAD
  log: "error",
  redis: {
    url: process.env.REDIS_URL
=======
  db: {
    provider: "mongodb",
    connection: process.env.MONGODB_URI
>>>>>>> aa29a1ab486724ea42c1af3ed96ad8b2add38013
  }
};