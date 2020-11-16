require('dotenv/config');
const express = require('express');
const isAuth = require('./authorization/verifyToken')
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(cors());

const routeLogin = require('./routes/login');
const routeJoke = require('./routes/joke');

app.use('/api/login', routeLogin);
app.use('/api/joke',isAuth, routeJoke);



app.listen(5000, '127.0.0.1', () => console.log('Server running on port : 5000'));
