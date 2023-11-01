document.addEventListener("DOMContentLoaded", () => {
    fetch("/code-injection/timestamps", {
        method: "POST",
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