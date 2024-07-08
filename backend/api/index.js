const express = require('express');
const cors = require("cors");
require('../db/config');
const User = require("../db/User");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/Signup", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.status(201).json(result);
});

module.exports = app;
