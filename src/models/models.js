const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // Otras propiedades del usuario...
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  });
  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;

