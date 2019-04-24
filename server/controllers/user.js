const User = require('../models/user');
const jwt = require('jsonwebtoken')
const { decode } = require('../helpers/bcrypt')

class userController {

    static login(req, res) {
        User
            .findOne({
                email: req.body.email
            })
            .then(user => {
                if (user) {
                    if (decode(req.body.password, user.password)) {
                        let token = jwt.sign({
                            userId: user.id,
                            username: user.username
                        }, process.env.SECRET);

                        res
                            .status(201)
                            .json({ token, username: user.username, userId: user.id });
                    } else {
                        throw 'Password salah'
                    }
                } else {
                    throw 'Email belum terdaftar'
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    static create(req, res) {
        console.log('masuk', req.body);
        User
            .create({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            })
            .then(data => {
                console.log('masuk')
                res
                    .status(201)
                    .json(data);
            })
            .catch(err => {
                console.log(err);
                res
                    .status(500)
                    .json(err);
            })
    }

    static readOne(req, res) {
        User
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
        User
            .find()
            .then(users => {
                res
                    .json(users)
            })
            .catch(err => {
                res
                    .status(500)
                    .json(err);
            })
    }

    static update(req, res) {
        User
            .findByIdAndUpdate(req.params.id, {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                }
            })
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

    static delete(req, res) {
        User
            .findByIdAndDelete(req.params.id)
            .then(data => {
                res
                    .json({ data, message: 'berhasil di delete' })
            })
            .catch(err => {
                res
                    .status(500)
                    .json(err);
            })
    }

}

module.exports = userController;