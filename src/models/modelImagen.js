const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  filename: String,
  path: String
});

const ImageModel = mongoose.model('Image', imageSchema);

module.exports = ImageModel;