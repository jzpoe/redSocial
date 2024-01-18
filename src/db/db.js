const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


.then(() => console.log('Conectado a MongoDB'))
.catch(error => console.error('Error de conexión a MongoDB:', error));

module.exports = mongoose