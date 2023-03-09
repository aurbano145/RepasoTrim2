require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var jsonParser = bodyParser.json();

app.use(cors());

app.post("/regex", jsonParser, function (req, res) {

    if (/[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/.test(req.body.email)) {
        res.send("The email introduced is VALID");
    } else {
        res.send("The email introduced is NOT VALID");
    }
})

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`servidor andando en: ${port}`)
});