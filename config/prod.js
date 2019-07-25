module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN,
    passwordSaltRounds: process.env.PASSWORD_SALT_ROUNDS
};
