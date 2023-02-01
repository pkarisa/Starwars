const express = require('express')
const bodyParser= require('body-parser')
const mongoose = require('mongoose')
const app = express()

// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(3000, function() {
  console.log('listening on 3000')
})
app.get('/',(req, res)=> {
  res.sendFile(__dirname + '/index.html')
 })

// All your handlers here...
app.post('/quotes', (req, res) => {
    console.log(req.body)
  })
   