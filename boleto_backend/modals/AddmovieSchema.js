const mongoose = require('mongoose');
const Addmovie = new mongoose.Schema({
    moviename: String,
    image:String,
    type: String,
    date: String,
    time: String,
    viewlike: String,
    nasto: String,
    address:String,
    earning:String,
    rating: String,
    description: String
})
const data = mongoose.model('addmovie', Addmovie);
module.exports = data;