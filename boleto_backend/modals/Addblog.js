const mongoose = require('mongoose');
const Addblog = new mongoose.Schema({
    blogname: String,
    addname: String,
    date: String,
    view: String,
    description: String,
    adduserdescription: String
})
const data = mongoose.model('addblog', Addblog)
module.exports = data