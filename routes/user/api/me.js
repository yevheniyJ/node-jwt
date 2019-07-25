function me(req, res) {
    res.send({user: req.user});
}

module.exports = me;