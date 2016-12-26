const ctrlAuth = require('../controllers/authentication');

module.exports = function(app) {    
    app.post('/register', ctrlAuth.register);
    app.post('/login', ctrlAuth.login);
};