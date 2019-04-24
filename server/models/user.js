const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { encode } = require('../helpers/bcrypt')

const userSchema = new Schema({
    username: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
})

userSchema.pre('save', function(next) {
    this.password = encode(this.password);
    next();
});

const User = mongoose.model("User", userSchema);


module.exports = User;