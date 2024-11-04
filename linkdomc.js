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

        const diff = date2 - date1;
        const days = diff / (1000 * 60 * 60 * 24);
        let string = "It has been ";
        if (days == 1) {
            string+= "1 day since linkdomc has played Yasuo.";
        }
        else {
            string+= days + " days since linkdomc has played Yasuo.";
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