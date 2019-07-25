const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

function failAuthentication(res) {
    res.status(403).send({ error: 'Access denied' })
}

function verifyJWTToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, keys.jwtSecret, (err, decodedToken) => {
            if (err || !decodedToken) {
                return reject(err);
            }
            resolve(decodedToken);
        })
    })
}

module.exports = async (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return failAuthentication(res);
    }
    try {
        const result = await verifyJWTToken(token);
        req.user = result.username;
        next();
    } catch (e) {
        failAuthentication(res);
    }
};
