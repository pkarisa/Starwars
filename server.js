const express = require('express')
const bodyParser= require('body-parser')
const mongoose = require('mongoose')
const app = express()

// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(3000, function() {
  console.log('listening on 3000')
})
const mongoose = require("mongoose");

let DB_NAME = process.env.DB_NAME;
let DB_USER = process.env.DB_USER;
let DB_PASS = process.env.DB_PASS;
let DB_URL = process.env.DB_URL
let db_url = "mongodb+srv://" + DB_USER + ":" + DB_PASS + "@galleryapp.xziuwg7.mongodb.net/" + DB_NAME;
console.log(db_url);
let option = {
   maxPoolSize: 10,
   family: 4
};
mongoose.connect(db_url, option);
let db = mongoose.connection
db.once("open", () => {
   console.log("Successful connection to the database");
});
app.get('/',(req, res)=> {
  res.sendFile(__dirname + '/index.html')
 })

// All your handlers here...
app.post('/quotes', (req, res) => {
    console.log(req.body)
  })
   