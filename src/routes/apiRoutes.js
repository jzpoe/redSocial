



const express = require('express');
const router = express.Router();
const apiControllers = require('../controllers/controllers');
const verificarToken = require('../middleware/verificarToken'); 
const upload = require ('../middleware/multer')


router.post('/comments',verificarToken, apiControllers.postComments )

router.post('/login', apiControllers.login )

router.post('/register', apiControllers.register )

router.post('/upload', upload.single('image'), apiControllers.upload )

router.get('/images', apiControllers.uploadimg )





module.exports = router