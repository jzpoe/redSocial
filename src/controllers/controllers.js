
const modelImage = require('../models/modelImagen')
const User = require('../models/models');
const IntoRegister = require('../models/modelRegister');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const upload = require('../middleware/multer')
const path = require('path');



const secretKey = 'process.env.SECRET_KEY';




const bcrypt = require('bcrypt');

module.exports = {
  postComments: async (req, res) => {
    try {
      const { posts } = req.body;
      const post = await User.findById(posts.id);
      post.comments = posts.comments; // Asegúrate de que comments esté disponible en el body.
      await post.save();
      res.send('Comentario agregado correctamente');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al agregar el comentario');
    }
  },

  login: async (req, res) => {
    try {

        console.log('Datos del cuerpo de la solicitud:', req.body);
const { email, password } = req.body;
console.log('Email utilizado en la consulta:', email);
const user = await IntoRegister.findOne({ email });
console.log('Resultado de la consulta:', user);

     

      if (!user) {
        return res.status(401).json({ error: 'Usuario no encontrado' });
      }

      const comparePass = await bcrypt.compare(password, user.password);

      if (!comparePass) {
        res.status(505).json({ error: 'Usuario o contraseña incorrectos' });
        return;
      } // Generar el token solo si el usuario existe y la contraseña coincide
      const token = jwt.sign({ userID: user._id, nameUser: email }, secretKey, { expiresIn: '1h' });
      res.json({ token });

    } catch (error) {
      console.error('Usuario o contraseña inválidos:', error);
      res.status(500).json({ error: 'Error al iniciar sesión' });
    }
  },

  register: async (req, res)=>{

    try {
        const {name, email, password} = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new IntoRegister({name, email, password:hashedPassword })
        const existingUser = await IntoRegister.findOne({email})
        if (existingUser){
            res.status(400).json({ error: 'El email ya está registrado' });
           return
        }else{
            await user.save();
      res.status(201).json({ message: 'Usuario registrado exitosamente' });
        }
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
    res.status(500).json({ error: 'Error al registrar el usuario' });
    }

  },

 upload: async  (req, res)=>{
try {
  console.log(req.file);
  if (!req.file){
    return res.status(400).json({ error: 'No se proporcionó ningún archivo.' });

  }

  const newImage = new modelImage({
    filename: req.file.filename,
    path: req.file.path
  })
  await newImage.save()
  res.json({ filename: req.file.filename });



} catch (error) {
  console.error('Error uploading image:', error);
    res.status(500).json({ error: 'Error uploading image' });
} 
 
 },



 uploadimg: async (req, res) => {
  try {
  
    const images = await modelImage.find();
    res.json(images);
    
  } catch (error) {
    console.error("error al obtener los items", error)
        res.status(500).send("error al obtener los items")
  }
  //const filename = req.params.filename;
  //res.sendFile(`upload/${filename}`, { root: __dirname });
}

};