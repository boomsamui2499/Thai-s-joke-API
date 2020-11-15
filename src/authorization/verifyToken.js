
const jwt = require('jsonwebtoken');
const accessTokenSecret = 'SuperSecRetKey';
module.exports = function isAuth(req, res, next) {
    const headerAuth = req.headers.authorization;
    if (headerAuth) {
        const token = headerAuth.split(' ')[1];
        jwt.verify(token, accessTokenSecret, (err, result) => {
            if (err) {
                return res.sendStatus(403);
            }
            if(result) {
                req.token = result.token;
                
                next();
            } else {
                res.sendStatus(401);
            }

        });
    } else {
        res.sendStatus(401);
    }
};

// const db = require('../database')
// const jwt = require('jsonwebtoken');
// const Auth = function () {
// };

// //select deposit_bank
//  Auth.verifyToken = async (req, result) => {
// const bearerHeader = req.headers['authorization'];
// if(typeof bearerHeader !== 'undefined'){
//     const bearer = bearerHeader.split(' ');
//     const bearerToken = bearer[1];
//     req.token = bearerToken;
//      jwt.verify(req.token, 'SuperSecRetKey', (err, authData)=>{
//         if(err){
//             result(err, null);
//             return err; 
//         }else{

//             result(null,authData);
//             // result.json({
//             //     msg: "A new post is created"
//             // });
//         }
//     });
//    // return ;
    
// }else{
//     result(err, null);
// }
// };


// module.exports = Auth;
