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
        let number = data.result.split("\n")[0];
        let formattedNumber = Number(number).toLocaleString();
        document.getElementById("timestamps").textContent = `${formattedNumber}`;
    })
    .catch(error => {
        console.log("error");
        console.log(error);
    });   
});