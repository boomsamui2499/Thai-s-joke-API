
const route = require('express').Router();
const Joke = require('../controller/joke.controller');


route.get('/select',Joke.select);
route.post('/select/like',Joke.selectLike);
route.post('/select/dislike',Joke.selectDislike);
route.post('/add',Joke.add);
route.delete('/delete',Joke.delete);

module.exports = route;
