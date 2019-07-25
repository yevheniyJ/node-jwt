const bcrypt = require('bcrypt');
const db = require('../../../db/models');
const keys = require('../../../config/keys');

async function register(req, res) {
    const { username, password } = req.body;
    let users = await db.User.findAll({
        where: {
            username: username
        }
    });
    if (users.length !== 0) {
        return res.status(401).send({
            error: 'User already exists credentials'
        });
    }
    const hashedPassword = await bcrypt.hash(password, keys.passwordSaltRounds);
    try {
        const user = await db.User.build({
            username: username,
            password: hashedPassword
        }).save();
        res.send({
            user: user.username
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            error: 'Error during creating new user'
        });
    }

}

module.exports = register;
