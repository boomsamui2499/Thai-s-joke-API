const db = require('../database')

const Joke = function () {
};

Joke.select = async (data, result) => {
    console.log(data);
    let sql = 'select * from joke';
    if(data.id){
        sql+=` where joke_id=${data.id}`;
    }
    const res = await db.query(sql);
    if (res.length == 0) {
        result({ status: false, ...res }, null);
        return;
    }
    result(null, {...res});
};


Joke.selectLike = async (data, result) => {
    let sql = 'select * from joke where joke.like = 1 ';
    if(data.id){
        sql+=` and  joke_id=${data.id}`;
    }
    const res = await db.query(sql);
    if (res.length == 0) {
        result({ status: false, ...res }, null);
        return;
    }
    result(null, {...res});
};

Joke.selectDislike = async (data, result) => {
    let sql = 'select * from joke where dislike = 1';
    if(data.id){
        sql+=` and  joke_id = ${data.id}`;
    }
    const res = await db.query(sql);
    if (res.length == 0) {
        result({ status: false, ...res }, null);
        return;
    }
    result(null, {...res});
};


Joke.add = async (data, result) => {
    console.log(data);
    await db.query('insert into joke set ?', data)
        .then((row) => {
            result(null, { status: true, message: 'Joketer success' });
            return;
        }).catch(error => {
            result({ status: false, message: "can't Joketer success" }, null);
        })
};


Joke.delete = async (id, result) => {

    await db.query('delete FROM joke where joke_id=?', [id])
        .then(() => {
            result(null, { status: true, message: 'delete success' });
        }).catch(error => {
            result({ status: false, message: 'delete fail' }, null);
        });
};




module.exports = Joke;
