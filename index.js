const express = require('express')
const cors = require('cors');
// const morgan = require('morgan');
const userController = require('./controllers/users')
const postController = require('./controllers/posts')

const app = express()

app.use(express.static(__dirname + '/' + 'public'))
app.use(cors()) 
// app.use(morgan('dev')) 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', userController)
app.use('/posts', postController)

app.set('port', process.env.PORT || 4000)

app.get('/', (req, res) => {
    res.send('hello world!');
});

app.listen(app.get('port'), () => {
    console.log(`PORT: ${app.get('port')}` )
})
