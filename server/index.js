const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();


const app = express();
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
}).catch( error => {
    console.log('Massive Error:', error)
})

app.post('/api/auth/register', controller.register)
app.post('/api/auth/login', controller.login)


const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Listening on Port: ${port}`)
})