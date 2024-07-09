// const express = require('express');
// const cors = require("cors");
// require('./db/config');
// const User = require("./db/User");

// const app = express();

// app.use(express.json());
// app.use(cors());

// app.post("/Signup", async (req, res) => {
//     let user = new User(req.body);
//     let result = await user.save();
//     result = result.toObject();
//     delete result.password;
//     res.status(201).json(result);
// });

// module.exports = app;




// const express = require('express');
// const cors = require("cors");
// require('./db/config');
// const User = require("./db/User");
// const { Await } = require('react-router-dom');


// const app = express();

// app.use(express.json());
// app.use(cors());

// app.post("/Signup",async (req,resp)=>{
//      let user= new User(req.body);
//      let result =await user.save();
//      result = result.toObject();
//      delete result.password;
//      resp.send(result);
// });

// app.post("/login", async (req,resp)=>{
//     console.log(req.body)
//     if(req.body.password && req.body.email) {
//     let user = await User.findOne(req.body).select("-password");
//     if(user)
//      {
//         resp.send(user)
//      }else{
//         resp.send({result : 'No User Found'})
//      }
//     } else {
//         resp.send({result : 'No User Found'})
//     }

// }) 
// app.listen(5001);




const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require('./db/User');
const Result = require('./db/Result'); // Assuming you create this model

const app = express();

app.use(express.json());
app.use(cors());

app.post('/Signup', async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.status(201).json(result);
});

app.post('/login', async (req, res) => {
    console.log(req.body);
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select('-password');
        if (user) {
            res.send(user);
        } else {
            res.send({ result: 'No User Found' });
        }
    } else {
        res.send({ result: 'No User Found' });
    }
});

// app.post('/saveResults', async (req, res) => {
//     try {
//         console.log('Received data:', req.body);
//         const { name, correctAnswers, totalQuestions, score } = req.body;
//         const result = new Result({ name, correctAnswers, totalQuestions, score });
//         console.log('Saving result:', result); // Add this line to check the result object before saving
//         const savedResult = await result.save();
//         console.log('Saved result:', savedResult); // Check the result after saving
//         res.status(201).json({ message: 'Results saved successfully', savedResult });
//     } catch (error) {
//         console.error('Error saving results:', error);
//         res.status(500).json({ message: 'Error saving results', error });
//     }
// });

app.post('/saveResults', async (req, res) => {
    try {
        console.log('Received data:', req.body);
        const { userName, correctAnswers, totalQuestions, score } = req.body; // Change 'name' to 'userName'
        const result = new Result({ userName, correctAnswers, totalQuestions, score });
        console.log('Saving result:', result); // Add this line to check the result object before saving
        const savedResult = await result.save();
        console.log('Saved result:', savedResult); // Check the result after saving
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


app.listen(5001);
