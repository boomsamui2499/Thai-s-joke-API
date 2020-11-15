const moment = require('moment-timezone');
const User = require('../models/user.model');
const verify = require('../authorization/verifyToken');
const Usertemplate = require('../template/usertemplate');
const { userValidation,userupdateValidation } = require('../validate/uservalidate');
const jwt = require('jsonwebtoken');



//select User
exports.select = async (req, res) => {
            User.select(req.query, (err, data) => {
                if (err) res.status(500).send({ message: err.message || 'can\'t get User selectall' }); else res.send(data);
         });

};

exports.allprocedure = async (req, res) => {
    if (!req.query.id) return res.status(400).send({ message: 'content can not be empty!' });
    User.allprocedure(req.query.id, (err, data) => {
        if (err) res.status(500).send({ message: err.message || 'can\'t get User selectall' }); else res.send(data);
 });

};


//insert User
exports.add = async (req, res) => {

    if (!req.body) return res.status(400).send({ message: 'content can not be empty!' });

            const { error } = userValidation(req.body);
            console.log(error);
            if (error) return res.status(400).send({ message: error.details[0].message });
        
            //const setis_active = 1;
        
            const Userdata = new Usertemplate({
                fname: req.body.fname,
                lname: req.body.lname,
                username: req.body.username,
                password: req.body.password
            });
        
             User.add(Userdata, (err, data) => {
                if (err) res.status(500).send({ message: err.message || 'can\'t add User' }); else res.send(data);
            });
        
    
};



//update User
exports.update = async (req, res) => {

    if (!req.body) return res.status(400).send({ message: 'content can not be empty!' });
            const { error } = userupdateValidation(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });


    const Userdataupdate = new Usertemplate({
        no:req.body.no,
        fname: req.body.fname,
        lname: req.body.lname,
        username: req.body.username,
        password: req.body.password


    });

     User.update(Userdataupdate, (err, data) => {
        if (err) res.status(500).send({ message: err.message || 'can\'t update User' }); else res.send(data);
    });
        

    
};



//delete User
exports.delete = async (req, res) => {

    if (!req.body) return res.status(400).send({ message: 'content can not be empty!' });
            const id = req.body.no;

     User.delete(id, (err, data) => {
        if (err) res.status(500).send({ message: err.message || 'can\'t delete User' }); else res.send(data);
    });
         
    
    
};




