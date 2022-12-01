// Dependencies
const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
//const fetch = require("node-fetch");
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

// designates what port the app will listen to for incoming requests
const port = 8081;

app.listen(port, listening ());

function listening() {
	console.log(`server running on localhost:${port}`);
}

// MeaningCloud API Config
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?';
const apiKey = process.env.API_KEY;
console.log(`Your API Key is ${process.env.API_KEY}`);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

// POST
app.post('/api', async function(req, res) {
    let userInput = req.body.url;
    console.log(`You entered: ${userInput}`);
    const apiURL = baseURL + "key=" + apiKey + "&url=" + userInput + "&lang=en";
    console.log(apiURL);
    const response = await fetch(apiURL);
    const mcData = await response.json();
    console.log(mcData);
    res.send(mcData);
})