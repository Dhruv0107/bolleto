const mongoose=require('mongoose');
const BlogPost = new mongoose.Schema({
    name:String,
    email:String,
    phone:String
});

const data = mongoose.model('login', BlogPost);

module.exports=data;  