const fs = require('fs');
const path = require('path');

const multiparty = require('connect-multiparty'),
multipartyMiddleware = multiparty({ uploadDir: 'client/uploads' })

const cloudinary = require('../controllers/cloudinary');

module.exports = function (app) {
    app.get('/images', getImages);
    app.post('/image', multipartyMiddleware, cloudinary.uploadImage);
}

function getImages(request, response) {
    const images = [];
    fs.readdir('./client/uploads', (err, files) => {
        if (files && files.length > 0)
            files.forEach(file => {
                images.push(file)
            });
        response.json(images)
    })
}

function uploadImage(req, res) {
    res.status(200).json(path.basename(req.files.image.path))
}
