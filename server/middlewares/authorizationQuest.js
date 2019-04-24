const Quest = require('../models/question');

function authQuest(req, res, next) {
    Quest
        .findById(req.params.id)
        .then(quest => {
            console.log(quest.userId, req.userId)
            if (quest.userId + '' === req.userId) next()
            else throw 'kamu tidak memiliki otorisasi untuk melakukan hal ini'
        })
        .catch(err => {
            res
                .status(500)
                .json(err);
        })
}

module.exports = authQuest;