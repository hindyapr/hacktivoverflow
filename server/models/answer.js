const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    questionId: {
        type: Schema.Types.ObjectId,
        ref: 'Question'
    },
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

const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;