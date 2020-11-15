
const route = require('express').Router();

const Login = require('../controller/login.controller');


route.post('/checklogin',Login.checklogin);

module.exports = route;
