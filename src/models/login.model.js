const db = require('../database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const uniqid = require('uniqid');
const md5 = require('md5');
const Login = function () {
};

//check login + gen token
Login.checklogin = async (data,ip, result) => {
    let sql = 'select username,password,fname,lname from user where username = ?';
    let auth = [data.username];
    console.log(auth);
    const res = await db.query(sql,auth);
    if (res.length == 0) {
        result(null, {status: false ,message: 'login fail'});
        return;
    }else{
        if (bcrypt.compareSync(data.password, res[0].password)) {
             let jwt_token = '';
        let member_token = md5(uniqid()).substr(0, 32);
        jwt_token = jwt.sign({token: member_token}, 'SuperSecRetKey', {expiresIn: '24h'});    
        result(null, {status: true, token: jwt_token,username:res[0].username, message: 'login success'});
        return;
        }else{
            result(null, {status: false ,message: 'login fail'});
        }
    }
};





module.exports = Login;
