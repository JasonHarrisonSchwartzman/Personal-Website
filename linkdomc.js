document.addEventListener("DOMContentLoaded", () => {
    fetch("https://championmastery.gg/player?riotId=linkdomc+%23zink&region=NA&lang=en_US", {
        mode: "no-cors",
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("hi")
        timestamps = "";
        for (let i = data.result.length - 1; i > -1; i--) {
            timestamps+=data.result[i]+'\n';
        }
        document.getElementById("timestamps").textContent = `${timestamps}`;
    })
    .catch(error => {
        console.log("error")
        console.log(error)
    });   
});