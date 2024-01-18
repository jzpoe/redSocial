

const express = require('express');
const app = express();
const apiRoutes = require('./src/routes/apiRoutes');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('./src/db/db');


const port = process.env.PORT

app.use(express.json());
app.use(cors())
app.use(apiRoutes)
app.use('/images', express.static('uploads'));



app.listen(port, () => {
    console.log('Escuchando en el puerto', port);
});