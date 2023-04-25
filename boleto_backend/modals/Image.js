const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  name: String,
});

const imgdata = mongoose.model('Image', ImageSchema);
module.exports = imgdata;