// const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/quiz");

// const mongoose = require('mongoose');
// const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/quiz";
// mongoose.connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });



const mongoose = require('mongoose');
const dbHOST = process.env.DBHOST;

mongoose.connect(dbHOST)
    .then(() => {
        console.log('MongoDB Connnected...')
    }).catch((err) => {
        console.log('Error while Mongo Conn..', err);
    })

// mongoose.connect('mongodb://localhost:27017/quiz', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log('Connected to MongoDB');
// }).catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
// });
