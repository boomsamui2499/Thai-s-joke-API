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
    let sum = 0;
    let sql = `select joke.like from joke where joke_id  = ${data.id}`;
    console.log(sql);
    const res = await db.query(sql);
    if (res.length == 0) {
        result({ status: false, ...res }, null);
        return;
    }
    const DL = {
        sumlike: res[0].like,
    }
    if(data.like>0){
        sum = DL.sumlike+1
    }else{
        sum = DL.sumlike-1
    }
    console.log(sum);
    await db.query('update joke set joke.like=? where joke_id =?', [sum, data.id])
        .then(() => {
            result(null, { status: true, message: 'like success' });
        }).catch(error => {
            result({ status: false, message: 'like fail' }, null);
        });



};
Joke.selectDislike = async (data, result) => {
    let sum = 0;
    let sql = `select dislike from joke where joke_id  = ${data.id}`;
    const res = await db.query(sql);
    if (res.length == 0) {
        result({ status: false, ...res }, null);
        return;
    }
    const DL = {
        sumdilike: res[0].dislike,
    }
    if(data.dislike>0){
        sum = DL.sumdilike+1
    }else{
        sum = DL.sumdilike-1
    }
    console.log(sum);
    await db.query('update joke set dislike=? where joke_id =?', [sum, data.id])
        .then(() => {
            result(null, { status: true, message: 'dislike success' });
        }).catch(error => {
            result({ status: false, message: 'update fail' }, null);
        });



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
