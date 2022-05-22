const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const Person = require('./models/Person')
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

app.get('/people', async (req, res) => {
    try {
        const people = (await Person.find({}))
    } catch (error) {
        res.status(400).json(error);
    }
})

app.post("/people", async (req, res) => {
    try {
      res.json(await Person.create(req.body));
    } catch (error) {
      res.status(400).json(error);
    }
  });
  

app.listen(app.get('port'), () => {
    console.log(`PORT: ${app.get('port')}` )
})
