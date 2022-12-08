import axios from "axios";

export function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formURL = document.getElementById("url").value.toString();
    console.log("Input: " + formURL);

    if (Client.isValidUrl (formURL)) {
        console.log("::: Form input is valid :::")
        
        axios
            .post("/api", { url: url})
            .then((res) => updateUI(res.data))
            .catch((error) => console.log("Error: " + error));

    } else {
        document.getElementById("error").innerHTML = "Invalid URL";
    }
};

export const updateUI = async () => {
    document.getElementById("polarity").innerHTML = 'Polarity: '+ polarityChecker(res.score_tag);
    document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
    document.getElementById("confidence").innerHTML = `Confidence: ${response.confidence}`;
    document.getElementById("irony").innerHTML = `Irony: ${response.irony}`;
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