//const dotenv = require('dotenv');
//dotenv.config();

export function handleSubmit(event) {
    event.preventDefault();

    const baseURL = "https://api.meaningcloud.com/sentiment-2.1?";
    const apiKey = "c7f2ffd733b6d80b5b44300c26ba3088";

    // check what text was put into the form field
    let formURL = document.getElementById("url").value.toString();
    console.log(formURL);

    if (Client.isValidUrl (formURL)) {
        console.log("::: Form input is valid :::")
        
        getData (baseURL, formURL, apiKey)
        
        .then(function(data) {
            console.log(data);
            const info = {
                score_tag: polarityChecker(data["score_tag"]),
                agreement: data["agreement"],
                subjectivity: data["subjectivity"],
                confidence: data["confidence"],
                irony: data["irony"]
            }
            postData("/api", info);
            updateUI();
        })

        //postData("http://localhost:8081/api", {url: formURL})
        
        /** 
        .then(function(res) {
            document.getElementById("polarity").innerHTML = 'Polarity: '+ polarityChecker(res.score_tag);
            document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
            document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
            document.getElementById("confidence").innerHTML = `Confidence: ${response.confidence}`;
            document.getElementById("irony").innerHTML = `Irony: ${response.irony}`;
        })
        */
    } else {
        document.getElementById("error").innerHTML = "Invalid URL";
    }
};

const getData = async (baseURL, formURL, apiKey) => {
    const res = await fetch(baseURL + "key=" + apiKey + "&url=" + formURL + "&lang=en")
    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Error: " + error);
    }
};

const postData = async (url = "", info = {}) => {
    console.log(info);
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'no-cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(info),
    });

    try {
        const newData = await res.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("Error: " + error);
    }
};

const updateUI = async () => {
    const req = await fetch("/");

    try {
        const allData = await req.json();
        console.log(allData);

        document.getElementById("polarity").innerHTML = "Polarity: " + allData.score_tag;
        document.getElementById("agreement").innerHTML = "Agreement: " + allData.agreement;
        document.getElementById("subjectivity").innerHTML = "Subjectivity: " + allData.subjectivity;
        document.getElementById("confidence").innerHTML = "Confidence: " + allData.confidence;
        document.getElementById("irony").innerHTML = "Irony: " + allData.irony;
    } catch (error) {
        console.log("Error: " + error);
    }
}

export const polarityChecker = (score) => {
    let display;
    switch (score){
        case 'P+':
            display = 'strong positive';
            break;
        case 'P':
            display = 'positive';
            break;
        case 'NEW':
            display = 'neutral';
            break;
        case 'N':
            display = 'negative';
            break;
        case 'N+':
            display = 'strong negative';
            break;
        case 'NONE':
            display = 'no sentiment';
    }
    return display.toUpperCase();
}