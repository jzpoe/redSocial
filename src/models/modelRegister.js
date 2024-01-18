
const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({

  name:  String,
  email: String,
  password: String,

  },{ collection: 'intoregister' });
  
  const IntoRegister = mongoose.model('IntoRegister', registerSchema);
  
  module.exports = IntoRegister;