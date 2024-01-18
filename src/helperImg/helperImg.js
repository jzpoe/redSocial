const path = require('path');


const sharp = require('sharp');


const helperImg = (filePath, filename, size = 300) => {
    const outputPath = path.join(process.cwd(), 'src', 'optimize', `${filename}.png`);
    
    return sharp(filePath)
        .resize(size)
        .toFile(outputPath);
}




module.exports = helperImg;