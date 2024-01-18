// middleware/verificarToken.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;

const verificarToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  jwt.verify(token, secretKey, (error, decoded) => {
    if (error) {
      return res.status(401).json({ error: 'Token inválido' });
    }

    // Almacenar la información del usuario en la solicitud para su uso posterior
    req.usuario = decoded;
    next();
  });
};

module.exports = verificarToken;