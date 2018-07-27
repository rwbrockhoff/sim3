const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();
const session = require('express-session');


const app = express();
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
}).catch( error => {
    console.log('Massive Error:', error)
})
app.use(session({
    secret: process.env.SECRET_STRING,
    resave: false,
    saveUninitialized: true
}))

app.post('/api/auth/register', controller.register)
app.post('/api/auth/login', controller.login)
app.get('/api/posts/:userid', controller.getposts)


const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Listening on Port: ${port}`)
})