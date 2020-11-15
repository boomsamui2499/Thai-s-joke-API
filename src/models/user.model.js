const db = require('../database')

const User = function () {
};

//select user
User.select = async (data, result) => {
    let sql = 'select * from member_info';
    if(data.username){
        sql+=` where username=${data.username}`;
    }
    const res = await db.query(sql);
    if (res.length == 0) {
        result({ status: false, dataLists: res }, null);
        return;
    }
    result(null, { dataLists: res });
};

User.allprocedure = async (id, result) => {
    let sql = `CALL GET_INFO(${id});`;
    const res = await db.query(sql);
    if (res[0].length == 0) {
        result({ status: false, message:"can't get_info"}, null);
        return;
    }
    result(null, res[0]);
};

//insert user
User.add = async (userdata, result) => {
    console.log(userdata);
    await db.query('insert into user set ?', userdata)
        .then((row) => {
            result(null, { status: true, message: 'register success' });
            return;
        }).catch(error => {
            result({ status: false, message: "can't register success" }, null);
        })
};


//update user
User.update = async (data, result) => {
    await db.query('update user set fname =? ,lname=? ,username=? ,password=? where no=?', [data.fname, data.lname, data.username, data.password, data.no])
        .then(() => {
            result(null, { status: true, message: 'update success' });
        }).catch(error => {
            result({ status: false, message: 'update fail' }, null);
        });
};

//delete user by (update is_active)
User.delete = async (id, result) => {
    // const is_active = 0;
    //     await db.query('update user set status=? where no=?', [is_active,id])
    //         .then(() => {
    //                     result(null, { status: true, message: 'delete success' });
    //                 }).catch(error => {
    //                     result({ status: false, message: 'delete fail' }, null);
    //                 });
    await db.query('delete FROM user where no=?', [id])
        .then(() => {
            result(null, { status: true, message: 'delete success' });
        }).catch(error => {
            result({ status: false, message: 'delete fail' }, null);
        });
   





};




module.exports = User;
