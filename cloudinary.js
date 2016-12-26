const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'da14clfqg',
    api_key: '544232953924527',
    api_secret: 'lmxcf5a2o2cEqIcRqiHdtsy0gQo'
});

module.exports = {

    uploadImage: function (req, res, next) {
        if (req.files.file) {
            cloudinary.uploader.upload(req.files.file.path, function (result) {
                if (result.url) {
                    req.imageLink = result.url
                    next();
                } else {
                    res.json(error);
                }
            });
        } else {
            next();
        }
    }
};