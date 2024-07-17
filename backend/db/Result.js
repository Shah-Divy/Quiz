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

// const mongoose = require('mongoose');

// const resultSchema = new mongoose.Schema({
//     userEmail: String,
//     correctAnswers: Number,
//     totalQuestions: Number,
//     score: Number,
//     timePlayed: { type: Date, default: Date.now },
//     elapsedTime: Number, // in seconds
//     selectedAnswers: [
//       {
//         questionId: String,
//         selectedOption: String,
//         isCorrect: Boolean
//       }
//     ]
//   });
// module.exports = mongoose.model('Result', resultSchema);


const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    userEmail: String,
    correctAnswers: Number,
    totalQuestions: Number,
    score: Number,
    timePlayed: { type: Date, default: Date.now },
    elapsedTime: Number, // in seconds
    selectedAnswers: [
        {
            questionId: String,
            selectedOption: String,
            isCorrect: Boolean
        }
    ]
});

module.exports = mongoose.model('Result', resultSchema);
