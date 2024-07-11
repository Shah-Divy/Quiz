// const express = require('express');
// const cors = require('cors');
// require('./db/config');
// const User = require('./db/User');
// const Result = require('./db/Result'); // Assuming you create this model

// const app = express();

// app.use(express.json());
// app.use(cors());

// app.post('/Signup', async (req, res) => {
//     let user = new User(req.body);
//     let result = await user.save();
//     result = result.toObject();
//     delete result.password;
//     res.status(201).json(result);
// });

// app.post('/login', async (req, res) => {
//     console.log(req.body);
//     if (req.body.password && req.body.email) {
//         let user = await User.findOne(req.body).select('-password');
//         if (user) {
//             res.send(user);
//         } else {
//             res.send({ result: 'No User Found' });
//         }
//     } else {
//         res.send({ result: 'No User Found' });
//     }
// });

// app.post('/saveResults', async (req, res) => {
//     try {
//         const { userName, correctAnswers, totalQuestions, score, selectedAnswers } = req.body;
        
//         const result = new Result({
//             userName,
//             correctAnswers,
//             totalQuestions,
//             score,
//             selectedAnswers
//         });

//         const savedResult = await result.save();
//         res.status(201).json({ message: 'Results saved successfully', savedResult });
//     } catch (error) {
//         console.error('Error saving results:', error);
//         res.status(500).json({ message: 'Error saving results', error });
//     }
// });


// app.get('/results', async (req, res) => {
//     try {
//         const results = await Result.find();
//         res.status(200).json(results);
//     } catch (error) {
//         console.error('Error fetching results:', error);
//         res.status(500).json({ message: 'Error fetching results', error });
//     }
// });


// app.listen(5001);


// const express = require('express');
// const cors = require('cors');
// require('./db/config');
// require('dotenv').config()
// console.log(process.env)
// const User = require('./db/User');
// const Result = require('./db/Result');

// const app = express();

// app.use((req, res, next) => {
//     res.setTimeout(120000, () => {
//       console.log('Request has timed out.');
//       res.send(504);
//     });
//     next();
//   });

// app.use(express.json());
// app.use(cors());

// app.get('/', (req, res) => {
//     res.send('products api running');
// });

// app.post('/signup', async (req, res) => {
//     let user = new User(req.body);
//     let result = await user.save();
//     result = result.toObject();
//     delete result.password;
//     res.status(201).json(result);
// });

// app.post('/login', async (req, res) => {
//     console.log(req.body);
//     if (req.body.password && req.body.email) {
//         let user = await User.findOne(req.body).select('-password');
//         if (user) {
//             res.send(user);
//         } else {
//             res.send({ result: 'No User Found' });
//         }
//     } else {
//         res.send({ result: 'No User Found' });
//     }
// });

// app.post('/saveResults', async (req, res) => {
//     try {
//         const { userName, correctAnswers, totalQuestions, score, selectedAnswers } = req.body;
        
//         const result = new Result({
//             userName,
//             correctAnswers,
//             totalQuestions,
//             score,
//             selectedAnswers
//         });

//         const savedResult = await result.save();
//         res.status(201).json({ message: 'Results saved successfully', savedResult });
//     } catch (error) {
//         console.error('Error saving results:', error);
//         res.status(500).json({ message: 'Error saving results', error });
//     }
// });

// app.get('/results', async (req, res) => {
//     try {
//         const results = await Result.find();
//         res.status(200).json(results);
//     } catch (error) {
//         console.error('Error fetching results:', error);
//         res.status(500).json({ message: 'Error fetching results', error });
//     }
// });

// app.listen(5001, () => {
//     console.log('Server is running on port 5001');
// });


const express = require('express');
const cors = require('cors');
const corsConfig = {
    origin: "*",
    Credential: true,
    methods : ["GET", "POST", "PUT", "DELETE"]
};
const dotenv = require('dotenv');

dotenv.config();  // Load environment variables from .env file
require('./db/config');
const User = require('./db/User');
const Result = require('./db/Result');

const app = express();

app.use((req, res, next) => {
    res.setTimeout(120000, () => {
        console.log('Request has timed out.');
        res.sendStatus(504);
    });
    next();
});

app.use(express.json());
app.use(cors(corsConfig));

app.get('/', (req, res) => {
    res.send('products api running');
});

app.post('/signup', async (req, res) => {
    try {
        let user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        delete result.password;
        res.status(201).json(result);
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Error during signup', error });
    }
});

app.post('/login', async (req, res) => {
    try {
        if (req.body.password && req.body.email) {
            let user = await User.findOne(req.body).select('-password');
            if (user) {
                res.send(user);
            } else {
                res.status(404).json({ result: 'No User Found' });
            }
        } else {
            res.status(400).json({ result: 'Invalid input' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Error during login', error });
    }
});

app.post('/saveResults', async (req, res) => {
    try {
        const { userName, correctAnswers, totalQuestions, score, selectedAnswers } = req.body;
        const result = new Result({
            userName,
            correctAnswers,
            totalQuestions,
            score,
            selectedAnswers
        });
        const savedResult = await result.save();
        res.status(201).json({ message: 'Results saved successfully', savedResult });
    } catch (error) {
        console.error('Error saving results:', error);
        res.status(500).json({ message: 'Error saving results', error });
    }
});

app.get('/results', async (req, res) => {
    try {
        const results = await Result.find();
        res.status(200).json(results);
    } catch (error) {
        console.error('Error fetching results:', error);
        res.status(500).json({ message: 'Error fetching results', error });
    }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

