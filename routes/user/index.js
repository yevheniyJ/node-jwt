const authentication = require('../../middlewares/authentication');
const login = require('./api/login');
const registration = require('./api/registration');
const me = require('./api/me');

module.exports = app => {
    app.post('/user/login', login);
    app.post('/user/registration', registration);
    app.get('/user/me', authentication, me);
};

