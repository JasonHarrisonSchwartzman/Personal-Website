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
        const date1 = new Date(data.result.split("\n")[1]);
        const date2 = new Date(data.result.split("\n")[2]);

        let diff = date1 - date2;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        diff %= 1000 * 60 * 60 * 24;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        diff %= 1000 * 60 * 60;
        const minutes = Math.floor(diff / (1000 * 60));
        let string = "It has been ";
        if (days == 1) {
            string+= "1 day ";
        }
        else {
            string+= days + " days ";
        }
        if (hours == 1) {
            string +=  "1 hour and ";
        }
        else {
            string += hours + " hours and ";
        }
        if (minutes == 1) {
            string += "1 minute since linkdomc has played Yasuo."
        }
        else {
            string += minutes + " minutes since linkdomc has played Yasuo."
        }
        let formattedNumber = Number(number).toLocaleString();
        document.getElementById("timestamps").textContent = `${"Yasuo Mastery Points: " + formattedNumber}`;
        document.getElementById("days").textContent = `${string}`;
    })
    .catch(error => {
        console.log("error");
        console.log(error);
    });   
});