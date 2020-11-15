
const route = require('express').Router();
const user = require('../controller/user.controller');


route.get('/select',user.select);
route.get('/allprocedure',user.allprocedure);
route.post('/add',user.add);
route.post('/update',user.update);
route.post('/delete',user.delete);

module.exports = route;
