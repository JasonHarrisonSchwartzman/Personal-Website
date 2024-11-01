document.addEventListener("DOMContentLoaded", () => {
    fetch("/linkdomc-data", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("timestamps").textContent = `${data.split("\n")[0]}`;
    })
    .catch(error => {
        console.log("error");
        console.log(error);
    });   
});