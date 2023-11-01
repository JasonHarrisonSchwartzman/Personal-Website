document.addEventListener("DOMContentLoaded", () => {
    fetch("/code-injection/timestamps", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.result);
        timestamps = "";
        for (let i = data.result.length - 1; i > -1; i--) {
            timestamps+=data.result[i]+'\n';
        }
        document.getElementById("timestamps").textContent = `${timestamps}`;
    })
    .catch(error => {
        console.error("Error: ", error);
    });   
});