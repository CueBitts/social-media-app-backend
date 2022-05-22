const mongoose = require('mongoose')
require('dotenv').config()

const mongoURI =
  process.env.NODE_ENV === 'production'
    ? process.env.DB_URL
    : process.env.DEV_DB_URL
mongoose.Promise = Promise

mongoose
 .connect(mongoURI, { 
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
})
.then((conn) => {
	console.log(`connected to mongodb on ${conn.connections[0].name} db`)
})
.catch(err => {
	console.error(err)
})


module.exports = mongoose