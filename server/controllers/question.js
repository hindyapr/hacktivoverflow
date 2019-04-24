const Question = require('../models/question');
const jwt = require('jsonwebtoken');

class questionController {
    static create(req, res) {

        Question
            .create({
                userId: req.userId,
                title: req.body.title,
                description: req.body.description
            })
            .then(data => {
                res
                    .status(201)
                    .json(data);
            })
            .catch(err => {
                console.log(err);
                res
                    .status(500)
                    .json(err)
            })
    }

    static readOne(req, res) {
        Question
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
        Question
            .find()
            .then(Questions => {
                res
                    .json(Questions)
            })
            .catch(err => {
                res
                    .status(500)
                    .json(err)
            })
    }

    static update(req, res) {
        Question
            .findByIdAndUpdate(req.params.id, {
                title: req.body.title,
                description: req.body.description
            }, { new: true })
            .then(Question => {
                res
                    .json(Question)
            })
            .catch(err => {
                res
                    .status(500)
                    .json(err)
            })
    }

    static delete(req, res) {
        Question
            .findByIdAndDelete(req.params.id)
            .then(data => {
                res
                    .json(Questions)
            })
            .catch(err => {
                res
                    .status(500)
                    .json(err)
            })
    }

    static upVote(req, res) {

        Question
            .findById(req.params.id)
            .then(question => {
                let userVote = question.votes.find(voter => voter.userId === req.userId);
                if (userVote) {
                    if (userVote.vote === 1) question.votes = question.votes.filter(voter => voter.userId !== req.userId);
                    else userVote.vote = 1
                } else {
                    question.votes.push({ userId: req.userId, vote: 1 });
                }
                return question.save();
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

        Question
            .findById(req.params.id)
            .then(question => {
                let userVote = question.votes.find(voter => voter.userId === req.userId);
                if (userVote) {
                    if (userVote.vote === -1) question.votes = question.votes.filter(voter => voter.userId !== req.userId);
                    else userVote.vote = -1
                } else {
                    question.votes.push({ userId: req.userId, vote: -1 });
                }
                return question.save()
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

        Question
            .findById(req.params.id)
            .then(question => {
                question.comments.push({ userId: req.userId, comment: req.body.comment })
                return question.save()
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


module.exports = questionController;