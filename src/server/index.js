// dependencies
var path = require("path");
const axios = require("axios");

//keep api key private
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');

// start instance of app
const app = express();

// use body-parser as middle-ware
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// main project folder
app.use(express.static('dist'));

console.log(__dirname);

// designates what port the app will listen to for incoming requests
const port = 8081;

const server = app.listen(port, listening ());

function listening() {
	console.log(`server running on localhost:${port}`);
}

//  MeaningCloud API Config
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const apiKey = process.env.API_KEY;
console.log(`Your API Key is ${process.env.API_KEY}`);

// GET data
app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

// POST data
app.post("/api", addData);

function addData(req, res){
    axios.post(`${baseURL}${apiKey}&url=${req.body.url}&lang=en`).then((response) => {
        res.send(response.data);
        console.log(response.data);
    });
}