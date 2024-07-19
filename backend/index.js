const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const https = require('https');
const querystring = require('querystring');

dotenv.config(); // Load environment variables from .env file

require('./db/config'); // Ensure this connects to your MongoDB database
const User = require('./db/User'); // Ensure the User model is defined correctly
const Result = require('./db/Result'); // Ensure the Result model is defined correctly

const app = express();

// Set request timeout
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

// Basic route to check API status
app.get('/', (req, res) => {
    res.send('products api running');
});

app.get('/home', (req, res) => {
    res.send('Divy backend project');
});
// Function to verify reCAPTCHA token
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

// Signup route
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

// Login route
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

// Admin login route
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
        console.error('Error during Admin Data:', error);
        res.status(500).json({ message: 'Error during Admin Data', error });
    }
});

// Save results route
// app.post('/saveResults', async (req, res) => {
//     try {
//         const { userEmail, correctAnswers, totalQuestions, score, selectedAnswers } = req.body;
//         const result = new Result({ userEmail, correctAnswers, totalQuestions, score, selectedAnswers });
//         const savedResult = await result.save();
//         res.status(201).json({ message: 'Results saved successfully', savedResult });
//     } catch (error) {
//         console.error('Error saving results:', error);
//         res.status(500).json({ message: 'Error saving results', error });
//     }
// });
app.post('/saveResults', async (req, res) => {
    try {
        const { userEmail, correctAnswers, totalQuestions, score, selectedAnswers, elapsedTime } = req.body;

        if (!elapsedTime || typeof elapsedTime.minutes !== 'number' || typeof elapsedTime.seconds !== 'number') {
            return res.status(400).json({ message: 'Elapsed time must include both minutes and seconds as numbers' });
        }

        const result = new Result({
            userEmail,
            correctAnswers,
            totalQuestions,
            score,
            selectedAnswers,
            elapsedTime: {
                minutes: elapsedTime.minutes,
                seconds: elapsedTime.seconds
            }
        });

        const savedResult = await result.save();
        res.status(201).json({ message: 'Results saved successfully', savedResult });
    } catch (error) {
        console.error('Error saving results:', error);
        res.status(500).json({ message: 'Error saving results', error });
    }
});


// Get all results route
app.get('/results', async (req, res) => {
    try {
        const results = await Result.find();
        res.status(200).json(results);
    } catch (error) {
        console.error('Error fetching results:', error);
        res.status(500).json({ message: 'Error fetching results', error });
    }
});

// Get results by email route
app.get('/results/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const results = await Result.find({ userEmail: email });

        if (results.length > 0) {
            res.status(200).json(results);
        } else {
            res.status(404).json({ message: 'No results found for this email' });
        }
    } catch (error) {
        console.error('Error fetching results:', error);
        res.status(500).json({ message: 'Error fetching results', error });
    }
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
