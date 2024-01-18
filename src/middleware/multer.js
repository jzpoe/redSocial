

const multer = require('multer');
const path = require('path');

const diskStorage = multer.diskStorage({
    destination: path.join(__dirname, '../../uploads'),
    //destination: '/uploads' ,
    filename: function (req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname) )
    }
});

const upload = multer({storage: diskStorage})


module.exports = upload

