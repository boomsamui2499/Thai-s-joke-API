
const route = require('express').Router();
const Joke = require('../controller/joke.controller');


route.get('/select',Joke.select);
route.get('/select/like',Joke.selectLike);
route.get('/select/dislike',Joke.selectDislike);
route.post('/add',Joke.add);
route.delete('/delete',Joke.delete);

module.exports = route;
