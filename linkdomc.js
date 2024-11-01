document.addEventListener("DOMContentLoaded", () => {
    fetch("/linkdomc-data", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.result);
        document.getElementById("timestamps").textContent = `${data.result.split("\n")[0]}`;
    })
    .catch(error => {
        console.log("error");
        console.log(error);
    });   
});