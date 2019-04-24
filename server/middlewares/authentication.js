const jwt = require('jsonwebtoken');
const user = require('../models/user')

function authentication(req, res, next) {
    try {
        let decoded = jwt.verify(req.headers.token, process.env.SECRET);
        user
            .findById(decoded.userId)
            .then(data => {
                if (data) {
                    req.userId = data.id
                    next()
                } else {
                    res
                        .status(404)
                        .json({ message: "user tidak ditemukan" });
                }
            })
    } catch (error) {
        res
            .status(403)
            .json(error);
    }
}

module.exports = authentication