const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../../../db/models');
const keys = require('../../../config/keys');

async function login(req, res) {
    const { username, password } = req.body;
    let users = await db.User.findAll({
        where: {
            username: username
        }
    });
    if (users.length === 0 || !await bcrypt.compare(password, users[0].password)) {
        return res.status(401).send({
            error: 'Invalid credentials'
        });
    }
    const token = jwt.sign({ username: username }, keys.jwtSecret, { expiresIn: keys.jwtExpiresIn });
    res.send({
        accessToken: token,
        expires_in: keys.jwtExpiresIn
    })
}

module.exports = login;
