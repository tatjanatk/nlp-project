export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formURL = document.getElementById('url').value;

    if (Client.isValidURL(formURL)) {
        console.log("::: Form input is valid :::");
        
        postData("http://localhost:8080/mcCloud", {formURL})

        .then(function(res) {
            document.getElementById("polarity").innerHTML = `Polarity: ${res.score_tag}`;
            document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
            document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
            document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
            document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
            document.getElementById("text").innerHTML = res.text;
        })

    } else {
        document.getElementById("error").innerHTML = "Invalid URL";
    }
}

const postData = async (url = "", data = {}) => {
    console.log('Analyzing:', data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        console.log('Data received:', newData)
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};
