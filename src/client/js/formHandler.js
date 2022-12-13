import axios from "axios";
import img from "../img/cloud.svg";

export function setImg() {
    document.getElementById("logo").src = img;
}
setImg();

export function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formURL = document.getElementById("url").value.toString();
    console.log("Input: " + formURL);

    // check if entered URL is valid
    if (Client.isValidUrl (formURL)) {
        console.log("::: Form input is valid :::")
        
        // if valid, send URL to api, make request, update UI with response
        axios
            .post("/api", { url: formURL})
            .then((res) => updateUI(res.data))
            .catch((error) => console.log("Error: " + error));

    // show error text, if URL is not valid
    } else {
        document.getElementById("error").innerHTML = "Invalid URL";
    }
};

// show response in UI
export const updateUI = async (response) => {
    document.getElementById("response").innerHTML = "API Response:";
    document.getElementById("polarity").innerHTML = 'Polarity: '+ checkPolarity(response.score_tag);
    document.getElementById("agreement").innerHTML = `Agreement: ${response.agreement}`;
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${response.subjectivity}`;
    document.getElementById("irony").innerHTML = `Irony: ${response.irony}`;
    document.getElementById("confidence").innerHTML = `Confidence: ${response.confidence}`;
    document.getElementById("text").innerHTML =  `Excerpt of the Website: ${response.sentence_list[0].text}`;
}

// turn score tag in words
export const checkPolarity = (score) => {
    let pol;
    switch (score){
        case "P+":
            pol = "strong positive";
            break;
        case "P":
            pol = "positive";
            break;
        case "NEW":
            pol = "neutral";
            break;
        case "N":
            pol = "negative";
            break;
        case "N+":
            pol = "strong negative";
            break;
        case "NONE":
            pol = "no sentiment";
    }
    return pol.toUpperCase();
}