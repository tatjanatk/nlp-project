// keep api key private
//const dotenv = require('dotenv');
//dotenv.config();

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

// designates what port the app will listen to for incoming requests
const port = 8080;

const server = app.listen(port, listening ());

function listening() {
	console.log(`server running on localhost:${port}`);
}

/**  MeaningCloud API Config
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?';
const apiKey = process.env.API_KEY;
console.log(`Your API Key is ${process.env.API_KEY}`);
*/

// GET
app.get('/', function (req, res) {
    res.send(projectData);
    res.sendFile('dist/index.html');
});

// POST
app.post("/api", addData);

function addData(req,res){
    console.log(req.body);
    newEntry = {
        score_tag: req.body.score_tag,
        agreement: req.body.agreement,
        subjectivity: req.body.subjectivity,
        confidence: req.body.confidence,
        irony: req.body.irony
        //text: req.body.text
    }
    projectData = newEntry;
}

/** 
// POST
app.post('/api', async function(req, res) {
    let userInput = req.body.url;
    console.log(`You entered: ${userInput}`);
    const apiURL = baseURL + "key=" + apiKey + "&url=" + userInput + "&lang=en";
    console.log(apiURL);
    //here that doesn't work
    const response = await fetch(apiURL);
    const mcData = await response.json();
    console.log(mcData);
    res.send(mcData);
})
*/