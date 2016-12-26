const fs = require('fs');
const path = require('path');

multiparty = require('connect-multiparty'),
multipartyMiddleware = multiparty({ uploadDir: 'client/uploads' }),

module.exports = function (app, multer) {
    app.get('/images', getImages);
    app.post('/image', multipartyMiddleware, uploadImage);
}

function getImages(request, response) {
    const images = [];
    fs.readdir('./client/uploads', (err, files) => {
        files.forEach(file => {
            images.push(file)
        });
        response.json(images)
    })
}

function uploadImage(req, res) {
    res.status(200).json(path.basename(req.files.image.path))
}
