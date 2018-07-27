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



const port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log(`Listening on Port: ${port}`)
})