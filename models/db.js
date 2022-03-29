class Model{
    constructor()
    {
        const mysql = require('mysql')
        this.connect = mysql.createConnection({
            host:'localhost',
            user:'root',
            database:'belajar'
        })
        this.connect.connect((err)=>{
            (err) ? console.log('error') : console.log('connect')
        })
    }

    getAll(table){
        return new Promise((res, rej)=>{
            this.connect.query(`SELECT * FROM ${table}`, (err, result, fielt)=>{
                if(err) throw err;
                res(result)
            })
        })
    }
}

module.exports.Model = Model