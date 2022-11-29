export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formURL = document.getElementById('url').value;

    if (Client.isValidURL(formURL))
    {
        console.log("Form input is valid")
        

    }

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        console.log(res);

        document.getElementById('results').innerHTML = res.message
    })
}
