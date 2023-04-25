const mongoose = require('mongoose');
const Addsport = new mongoose.Schema({
    sportname: String,
    date: String,
    address: String,
    month:String,
    description:String

});
const data = mongoose.model('addsport',Addsport)
module.exports=data;