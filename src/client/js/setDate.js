export function setDate() {
    let d = new Date();
    let month = d.getMonth() + 1;
    let newDate = d.getDate()+"."+month+"."+d.getFullYear();
    document.getElementById("date").innerHTML = newDate;
}

setDate();