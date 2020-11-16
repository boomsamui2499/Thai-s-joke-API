const moment = require('moment-timezone');
const Login = require('../models/login.model');



//select User
exports.checklogin = async (req, res) => {
    if (!req.body.username || !req.body.password ) return res.status(400).send({message: 'params is empty!'});
    await Login.checklogin(req.body,req.connection.remoteAddress, (err, data) => {

        if (err) res.status(500).send({ message: err.message || 'can\'t get User selectall' }); else res.send(data);
    });
};





