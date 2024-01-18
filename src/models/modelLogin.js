const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({

  email: String,
  password: String,

  }, { collection: 'intologin' });
  
  const IntoLogin = mongoose.model('IntoLogin', loginSchema);
  
  module.exports = IntoLogin;
