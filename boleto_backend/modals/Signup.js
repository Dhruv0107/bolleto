const mongoose = require('mongoose');
const Signupdata = new mongoose.Schema({
    email: String,
    password: String,
    conformpassword: String

});
const data = mongoose.model('signup', Signupdata)
module.exports = data;