const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    title: {
        type: 'string',
        required: true
    },
    description: {
        type: 'string',
        required: true
    },
    comments: [{
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        comment: "string"
    }],
    votes: [{
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        vote: 'number'
    }]

})

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;