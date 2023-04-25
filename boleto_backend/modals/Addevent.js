const mongoose = require('mongoose')
const Addevent = new mongoose.Schema({
    eventname: String,
    date: String,
    address: String,
    month:String,
    description:String
})
const data = mongoose.model('addevent', Addevent)
module.exports = data;


// const mongoose = require("../database");
 
 