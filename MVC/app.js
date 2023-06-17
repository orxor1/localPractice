const imagesRouter = require('./routes/images')

const express = require('express')

const app = express()

app.use('/',imagesRouter)
// const path = require('path')
// app.set('views', path.join(__dirname, 'views'));

app.listen(8800)