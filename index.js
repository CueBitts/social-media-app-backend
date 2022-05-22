const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const User = require('./models/User')
// const Post = require('./models/Post')
// const Comment = require('./models/Comment')

const app = express()

app.use(express.static(__dirname + '/' + 'public'))
app.use(cors()) 
app.use(morgan('dev')) 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('port', process.env.PORT || 4000)

app.get('/', (req, res) => {
    res.send('hello world!');
});

app.get('/users', async (req, res) => {
    try {
        const users = (await User.find({}))
    } catch (error) {
        res.status(400).json(error);
    }
})

app.post("/users", async (req, res) => {
    try {
      res.json(await User.create(req.body));
    } catch (error) {
      res.status(400).json(error);
    }
  });
  

app.listen(app.get('port'), () => {
    console.log(`PORT: ${app.get('port')}` )
})
