const moment = require('moment-timezone');
const Joke = require('../models/Joke.model');
const verify = require('../authorization/verifyToken');
// const Joketemplate = require('../template/Joketemplate');
const { jokeValidation } = require('../validate/validate');
const jwt = require('jsonwebtoken');



exports.select = async (req, res) => {
    Joke.select(req.query, (err, data) => {
        if (err) res.status(500).send({ message: err.message || 'can\'t get  select all' }); else res.send(data);
    });

};

exports.selectLike = async (req, res) => {
    Joke.selectLike(req.body, (err, data) => {
        if (err) res.status(500).send({ message: err.message || 'can\'t get  select like' }); else res.send(data);
    });

};
exports.selectDislike = async (req, res) => {
    Joke.selectDislike(req.body, (err, data) => {
        if (err) res.status(500).send({ message: err.message || 'can\'t get select Dislike' }); else res.send(data);
    });

};

exports.delete = async (req, res) => {
    Joke.delete(req.query.id, (err, data) => {
        if (err) res.status(500).send({ message: err.message || 'can\'t delete member' }); else res.send(data);
    });
};


// //insert Joke
exports.add = async (req, res) => {

    if (!req.body) return res.status(400).send({ message: 'content can not be empty!' });

            const { error } = jokeValidation(req.body);
            console.log(error);
            if (error) return res.status(400).send({ message: error.details[0].message });

   

             Joke.add(req.body, (err, data) => {
                if (err) res.status(500).send({ message: err.message || 'can\'t add Joke' }); else res.send(data);
            });


};



// //update Joke
// exports.update = async (req, res) => {

//     if (!req.body) return res.status(400).send({ message: 'content can not be empty!' });
//             const { error } = JokeupdateValidation(req.body);
//     if (error) return res.status(400).send({ message: error.details[0].message });


//     const Jokedataupdate = new Joketemplate({
//         no:req.body.no,
//         fname: req.body.fname,
//         lname: req.body.lname,
//         Jokename: req.body.Jokename,
//         password: req.body.password


//     });

//      Joke.update(Jokedataupdate, (err, data) => {
//         if (err) res.status(500).send({ message: err.message || 'can\'t update Joke' }); else res.send(data);
//     });



// };







