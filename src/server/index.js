// Dependencies
const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
const express = require('express');

//const mockAPIResponse = require('./mockAPI.js');

projectData = {};

const app = express();

// start instance of app
app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

// designates what port the app will listen to for incoming requests
const port = 8080;

app.listen(port, listening ());

function listening() {
    console.log("server running");
	console.log(`running on localhost ${port}`);
}

// app.get('/test', function (req, res) {
//    res.send(mockAPIResponse)
//});

var textapi = new mcloud
({
    application_key: process.env.API_KEY
});

//GET route
app.get("/all", sendData);

function sendData (req, res) {
    res.send(projectData);
}

//POST route
app.post("/add", addData);

function addData(req, res){
    console.log(req.body);
    newEntry = {

    }
    projectData = newEntry;
}