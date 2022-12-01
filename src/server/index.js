// Dependencies
const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const fetch = import("node-fetch");
//const mockAPIResponse = require('./mockAPI.js');

// start instance of app
const app = express();

// use body-parser as middle-ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors for cross origin allowance
app.use(cors());

// main project folder
app.use(express.static('dist'));

console.log(__dirname);

// MeaningCloud API Config
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?';
const apiKey = process.env.API_KEY;
console.log(`Your API Key is ${process.env.API_KEY}`);
let userInput = [];

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

// app.get('/test', function (req, res) {
//    res.send(mockAPIResponse)
//});

// POST
app.post('/mcCloud', async function(req, res) {
    userInput = req.body.url;
    console.log(`You entered: ${userInput}`);
    const apiURL = `${baseURL}key=${apiKey}&url=${userInput}&lang=en`

    const response = await fetch(apiURL)
    const mcData = await response.json()
    console.log(mcData)
    res.send(mcData)
})

// designates what port the app will listen to for incoming requests
const port = 8081;

app.listen(port, listening ());

function listening() {
    console.log("server running");
	console.log(`running on localhost:${port}`);
}