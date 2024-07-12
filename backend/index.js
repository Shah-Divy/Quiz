const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const https = require('https');
const querystring = require('querystring');

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
app.use(cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.get('/', (req, res) => {
    res.send('products api running');
});

const verifyRecaptcha = (token) => {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const query = querystring.stringify({
        secret: secretKey,
        response: token
    });

    const options = {
        hostname: 'www.google.com',
        path: `/recaptcha/api/siteverify?${query}`,
        method: 'POST'
    };

    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    const result = JSON.parse(data);
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.end();
    });
};

app.post('/signup', async (req, res) => {
    try {
        const { token, ...userData } = req.body;

        // Verify reCAPTCHA
        const recaptchaResponse = await verifyRecaptcha(token);

        if (recaptchaResponse.success) {
            const user = new User(userData);
            const result = await user.save();
            const userWithoutPassword = result.toObject();
            delete userWithoutPassword.password;
            res.status(201).json(userWithoutPassword);
        } else {
            res.status(400).json({ message: 'reCAPTCHA verification failed', error: recaptchaResponse['error-codes'] });
        }
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Error during signup', error });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email && password) {
            const user = await User.findOne({ email, password }).select('-password');
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

app.post('/admin', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email && password) {
            const user = await User.findOne({ email, password }).select('-password');
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
        const result = new Result({ userName, correctAnswers, totalQuestions, score, selectedAnswers });
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



// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const https = require('https');
// const querystring = require('querystring');
// const bcrypt = require('bcryptjs');

// dotenv.config();  // Load environment variables from .env file

// require('./db/config');
// const User = require('./db/User');
// const Result = require('./db/Result');

// const app = express();

// app.use((req, res, next) => {
//     res.setTimeout(120000, () => {
//         console.log('Request has timed out.');
//         res.sendStatus(504);
//     });
//     next();
// });

// app.use(express.json());
// app.use(cors({
//     origin: "*",
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE"]
// }));

// app.get('/', (req, res) => {
//     res.send('products api running');
// });

// const verifyRecaptcha = (token) => {
//     const secretKey = process.env.RECAPTCHA_SECRET_KEY;
//     const query = querystring.stringify({
//         secret: secretKey,
//         response: token
//     });

//     const options = {
//         hostname: 'www.google.com',
//         path: `/recaptcha/api/siteverify?${query}`,
//         method: 'POST'
//     };

//     return new Promise((resolve, reject) => {
//         const req = https.request(options, (res) => {
//             let data = '';

//             res.on('data', (chunk) => {
//                 data += chunk;
//             });

//             res.on('end', () => {
//                 try {
//                     const result = JSON.parse(data);
//                     resolve(result);
//                 } catch (error) {
//                     reject(error);
//                 }
//             });
//         });

//         req.on('error', (error) => {
//             reject(error);
//         });

//         req.end();
//     });
// };

// app.post('/signup', async (req, res) => {
//     try {
//         const { token, ...userData } = req.body;

//         // Verify reCAPTCHA
//         const recaptchaResponse = await verifyRecaptcha(token);

//         if (recaptchaResponse.success) {
//             // Hash password before saving
//             userData.password = await bcrypt.hash(userData.password, 10);

//             const user = new User(userData);
//             const result = await user.save();
//             const userWithoutPassword = result.toObject();
//             delete userWithoutPassword.password;
//             res.status(201).json(userWithoutPassword);
//         } else {
//             res.status(400).json({ message: 'reCAPTCHA verification failed', error: recaptchaResponse['error-codes'] });
//         }
//     } catch (error) {
//         console.error('Error during signup:', error);
//         res.status(500).json({ message: 'Error during signup', error });
//     }
// });

// app.post('/login', async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         if (email && password) {
//             const user = await User.findOne({ email }).select('+password');
//             if (user && await bcrypt.compare(password, user.password)) {
//                 const userWithoutPassword = user.toObject();
//                 delete userWithoutPassword.password;
//                 res.send(userWithoutPassword);
//             } else {
//                 res.status(404).json({ result: 'No User Found' });
//             }
//         } else {
//             res.status(400).json({ result: 'Invalid input' });
//         }
//     } catch (error) {
//         console.error('Error during login:', error);
//         res.status(500).json({ message: 'Error during login', error });
//     }
// });

// app.post('/admin', async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         if (email === 'divy@19' && password === 'divy') {
//             const user = await User.findOne({ email }).select('-password');
//             if (user) {
//                 res.send(user);
//             } else {
//                 res.status(404).json({ result: 'No User Found' });
//             }
//         } else {
//             res.status(403).json({ result: 'Fail to fetch data' });
//         }
//     } catch (error) {
//         console.error('Error during admin login:', error);
//         res.status(500).json({ message: 'Error during admin login', error });
//     }
// });

// app.post('/saveResults', async (req, res) => {
//     try {
//         const { userName, correctAnswers, totalQuestions, score, selectedAnswers } = req.body;
//         const result = new Result({ userName, correctAnswers, totalQuestions, score, selectedAnswers });
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

// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
