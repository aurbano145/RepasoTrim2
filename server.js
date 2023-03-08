require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken");
const app = express();

var jsonParser = bodyParser.json();

const users = {"username":"user", "password":"pass"};

const router = require('express').Router();

app.post("/auth", jsonParser, function (req, res) {

    if(req.body.username != users.username) {
        res.status(404).send("User does not exist!");
    } else {
        if(req.body.password == users.password) {
            const accessToken = jwt.sign(req.body.username, process.env.ACCESS_TOKEN_SECRET);
            res.send({token: accessToken});
        } else {
            res.status(401).send("Password Incorrect!");
        }
    }
})

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`servidor andando en: ${port}`)
});