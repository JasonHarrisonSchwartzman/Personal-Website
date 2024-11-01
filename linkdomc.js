document.addEventListener("DOMContentLoaded", () => {
    fetch("https://championmastery.gg/player?riotId=linkdomc+%23zink&region=NA&lang=en_US", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        timestamps = "";
        for (let i = data.result.length - 1; i > -1; i--) {
            timestamps+=data.result[i]+'\n';
        }
        document.getElementById("timestamps").textContent = `${timestamps}`;
    })
    .catch(error => {
    });   
});