const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const layout = require('express-ejs-layouts')
const {routes} = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(layout)
app.set('view engine', 'ejs')
app.set('layout', 'layout')

app.use(routes)

app.listen(3000)