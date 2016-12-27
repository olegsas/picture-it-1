const ctrlAuth = require('../services/authentication-service');

module.exports = function (app) {
    app.get('/authenticated', isAuthenticated)
    app.post('/register', ctrlAuth.register);
    app.post('/login', ctrlAuth.login);
    app.get('/logout', logout);
};

function isAuthenticated(req, res) {
    const result = req.session.logged ? true : false;
    res.json(result)
}

function logout(req, res) {
    req.session = null;
    req.sessionID = null;
    res.send({
        'ok': 'ok'
    });
}