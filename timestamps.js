document.addEventListener("DOMContentLoaded", () => {
    fetch("/jlang/code", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: inputData }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("timestamps").textContent = `${data.result}`;
    })
    .catch(error => {
        console.error("Error: ", error);
    });   
});