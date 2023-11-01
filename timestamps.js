document.addEventListener("DOMContentLoaded", () => {
    fetch("/code-injection/timestamps", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("timestamps").textContent = `${data.result}`;
    })
    .catch(error => {
        console.error("Error: ", error);
    });   
});