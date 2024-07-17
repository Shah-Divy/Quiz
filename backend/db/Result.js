// const mongoose = require('mongoose');

// const resultSchema = new mongoose.Schema({
//     userEmail: { type: String, required: true },
//     correctAnswers: Number,
//     totalQuestions: Number,
//     score: Number,
//     selectedAnswers: [
//         {
//             questionId: String,
//             selectedOption: String,
//             isCorrect: Boolean
//         }
//     ],
//     elapsedTime: { type: String, required: true }, // New field
//     createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('Result', resultSchema);


const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    userEmail: { type: String, required: true },
    correctAnswers: { type: Number, required: true },
    totalQuestions: { type: Number, required: true },
    score: { type: Number, required: true },
    selectedAnswers: [
        {
            questionId: { type: String, required: true },
            selectedOption: { type: String, required: true },
            isCorrect: { type: Boolean, required: true }
        }
    ],
    quizCategory: { type: String, required: true },
    elapsedTime: { type: String, required: true }, // New field
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Result', resultSchema);
