const Answer = require('../models/answer');

class answerController {
    static create(req, res) {
        Answer
            .create({
                questionId: req.body.questionId,
                title: req.body.title,
                description: req.body.description
            })
            .then(data => {
                res
                    .status(201)
                    .json(data);
            })
            .catch(err => {
                res
                    .status(500)
                    .json(err)
            })
    }

    static readOne(req, res) {
        Answer
            .findById(req.params.id)
            .then(user => {
                res
                    .json(user)
            })
            .catch(err => {
                res
                    .status(500)
                    .json(err);
            })
    }

    static read(req, res) {
        Answer
            .find()
            .then(Answers => {
                res
                    .json(Answers)
            })
            .catch(err => {
                res
                    .status(500)
                    .json(err)
            })
    }

    static update(req, res) {
        Answer
            .findByIdAndUpdate(req.params.id, {
                title: req.body.title,
                description: req.body.description
            }, { new: true })
            .then(Answer => {
                res
                    .json(Answer)
            })
            .catch(err => {
                res
                    .status(500)
                    .json(err)
            })
    }

    static delete(req, res) {
        Answer
            .findByIdAndDelete(req.params.id)
            .then(data => {
                res
                    .json(Answers)
            })
            .catch(err => {
                res
                    .status(500)
                    .json(err)
            })
    }

    static upVote(req, res) {
        Answer
            .findById(req.params.id)
            .then(Answer => {
                let userVote = Answer.votes.find(voter => voter.userId === req.userId);
                if (userVote) {
                    if (userVote.vote === 1) Answer.votes = Answer.votes.filter(voter => voter.userId !== req.userId);
                    else userVote.vote = 1
                } else {
                    Answer.votes.push({ userId: req.userId, vote: 1 });
                }
                return Answer.save()
            })
            .then(data => {
                res
                    .json(data);
            })
            .catch(err => {
                res
                    .status(500)

            })


    }

    static downVote(req, res) {

        Answer
            .findById(req.params.id)
            .then(Answer => {
                let userVote = Answer.votes.find(voter => voter.userId === req.userId);
                if (userVote) {
                    if (userVote.vote === -1) Answer.votes = Answer.votes.filter(voter => voter.userId !== req.userId);
                    else userVote.vote = -1
                } else {
                    Answer.votes.push({ userId: req.userId, vote: -1 });
                }
                return Answer.save()
            })
            .then(data => {
                res
                    .json(data);
            })
            .catch(err => {
                res
                    .status(500)

            })


    }

    static comment(req, res) {

        Answer
            .findById(req.params.id)
            .then(answer => {
                answer.comments.push({ userId: req.userId, comment: req.body.comment })
                return answer.save()
            })
            .then(data => {
                res
                    .json(data);
            })
            .catch(err => {
                res
                    .status(500)

            })



    }
}


module.exports = answerController;