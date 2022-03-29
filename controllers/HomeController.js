const {Model} = require('../models/db')

class HomeController{
    constructor(){
        this.model = new Model
    }

    index(req, res){
        this.model.getAll('node').then((result)=>{
            res.render('index', {
                note: result,
                title: 'Home'
            })
        })
    }

    show(req, res){
        res.send(req.body)
    }

    edit(req)
}

module.exports.HomeController = HomeController