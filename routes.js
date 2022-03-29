const express = require('express')
const route = express.Router();
const {controllers} = require('./controllers/controller')

route.route('/')
    .get((req, res)=>{
        controllers.Home.index(req, res)
    })
    .post((req, res)=>{
        controllers.Home.show(req, res)
    })
    
route.route('/show/:id')
    .get((req, res)=>{
        controllers.Home.index(req, res)
    })
    .post((req, res)=>{
        controllers.Home.show(req, res)
    })
module.exports.routes = route