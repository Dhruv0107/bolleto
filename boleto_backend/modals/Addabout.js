const mongoose = require('mongoose')
const Addabout = new mongoose.Schema({
    name:String,
    description:String,
    teammember:String

})
const data = mongoose.model('addabout',Addabout);
module.exports = data;