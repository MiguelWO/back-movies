// const express = require('express')
// const app = express()

// var exphbs = require('express-handlebars');

// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');

import express from 'express'
import {engine} from 'express-handlebars'

const app = express()

app.engine('handlebars', engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


app.get('/', (req, res) => {
  res.render('home', {msg: 'HandleBars are Cool!'})
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})