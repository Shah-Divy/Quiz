// const mongoose = require('mongoose');

// const resultSchema = new mongoose.Schema({
//     userName: { type: String, required: true },
//     correctAnswers: Number,
//     totalQuestions: Number,
//     score: Number,
//     createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('Result', resultSchema);



const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    correctAnswers: Number,
    totalQuestions: Number,
    score: Number,
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Result', resultSchema);

