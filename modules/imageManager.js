const fs = require('fs');
const path = require('path');

module.exports.deleteImageByUrl= imageUrl =>{
    const filename = imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, (error) => {
            if(error)console.log("Erreur lors de la supressions de l'image : ", imageUrl, "Erreur :", error);
        });
}

module.exports.getImageUrl= req =>{
    return `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
}