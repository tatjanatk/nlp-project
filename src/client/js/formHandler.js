export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formURL = document.getElementById('url').value;

    if (Client.isValidUrl (formURL)) {
        console.log("::: Form input is valid :::");
        
        postData("http://localhost:8081/mcCloud", {url: formURL})

        .then(function(res) {
            document.getElementById("polarity").innerHTML = "Polarity: " + polarityChecker(res.score_tag);
            document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
            document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
            document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
            document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
            //document.getElementById("text").innerHTML = res.text;
        })

    } else {
        document.getElementById("error").innerHTML = "Invalid URL";
    }
}

const postData = async (url = "", data = {}) => {
    console.log('Analyzing:', data);
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await res.json();
        console.log('Data received:', newData)
        return newData;
    } catch (error) {
        console.log('Error: ' + error);
    }
};

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