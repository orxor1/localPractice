const imagesModel = require ('../models/images')

exports.getAllImages = function(req,res){
    const images = imagesModel.getImages()

    res.render('images.ejs', {images : images})
}

exports.getImages = function(req,res){
    const imageId = req.query.imageId
    const image = imagesModel.getImage(imageId)

    res.render('image.ejs',{image})
}