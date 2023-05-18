//* 外部套件
const express = require('express')
const exphbs = require('express-handlebars')

//* 自己設定的檔案
require('./config/mongoose')

const app = express()

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})