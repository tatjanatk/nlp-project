import axios from "axios";

export function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formURL = document.getElementById("url").value.toString();
    console.log("Input: " + formURL);

    // check if entered URL is valid
    if (Client.isValidUrl(formURL)) {
        console.log("::: Form input is valid :::");
        
        // if valid, send URL to api, make request, update UI with response
        axios
            .post("/api", { url: formURL})
            .then((res) => updateUI(res.data))
            .catch((error) => console.log("Error: " + error))

    // show error text, if URL is not valid
    } else {
        document.getElementById("results").style.visibility = "hidden";
        document.getElementById("text").style.visibility = "hidden";
        document.getElementById("error").style.visibility = "visible";
        document.getElementById("error").innerHTML = " Invalid URL, Please try again! ";
    }
};

// show response in UI
export const updateUI = async (response) => {
    document.getElementById("error").style.visibility = "hidden";
    document.getElementById("results").style.visibility = "visible";
    document.getElementById("response").innerHTML = "<strong>API Response:<strong>";
    document.getElementById("polarity").innerHTML = '<strong>Polarity: </strong>'+ checkPolarity(response.score_tag);
    document.getElementById("agreement").innerHTML = `<strong>Agreement: </strong>${response.agreement}`;
    document.getElementById("subjectivity").innerHTML = `<strong>Subjectivity: </strong>${response.subjectivity}`;
    document.getElementById("irony").innerHTML = `<strong>Irony: </strong>${response.irony}`;
    document.getElementById("confidence").innerHTML = `<strong>Confidence: </strong>${response.confidence}`;
    document.getElementById("text").style.visibility = "visible";
    document.getElementById("text").innerHTML =  `<strong>Excerpt of the Website: <br></strong>${response.sentence_list[3].text}`;
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