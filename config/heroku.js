module.exports = {
  db: {
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT,
    dbName: process.env.MONGO_DBNAME,
    username: process.env.MONGO_USER,
    password: process.env.MONGO_PASS
  },
  server: {
    port: process.env.PORT,
    //url: 'localhost:8080',
  },
  base_url: process.env.MY_URL,
  websocket: true,
}