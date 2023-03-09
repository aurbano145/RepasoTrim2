require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken");
const cors = require('cors');
const app = express();

var jsonParser = bodyParser.json();

const users = {"username":"user", "password":"pass"};

//const router = require('express').Router();

app.use(cors());

app.post("/auth", jsonParser, function (req, res) {

    if(req.body.username != users.username) {
        res.send("User does not exist!");
    } else {
        if(req.body.password == users.password) {
            const accessToken = jwt.sign(req.body.username, process.env.ACCESS_TOKEN_SECRET);
            res.send("token = " + accessToken);
        } else {
            res.send("Password Incorrect!");
        }
    }
})

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`servidor andando en: ${port}`)
});