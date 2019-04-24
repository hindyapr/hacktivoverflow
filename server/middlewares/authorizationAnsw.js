const Answ = require('../models/answer');

function authAnsw(req, res, next) {
    Answ
        .findById(req.params.id)
        .then(Answ => {
            if (Answ.userId === req.userId) next()
            else throw 'kamu tidak memiliki otorisasi untuk melakukan hal ini'
        })
        .catch(err => {
            res
                .status(500)
                .json(err);
        })
}

module.exports = authAnsw;