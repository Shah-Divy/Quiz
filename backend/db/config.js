// const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/quiz");

const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/quiz";
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
