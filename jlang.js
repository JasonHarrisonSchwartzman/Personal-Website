document.addEventListener("DOMContentLoaded", () => {
    var cEditor = CodeMirror.fromTextArea(document.getElementById("c-code"), {
        lineNumbers: true,
        matchBrackets: true,
        mode: "text/x-csrc",
        theme: "the-matrix",
    });
    cEditor.setSize("100%", "100%");
    function convertToASCII(str) {//temporary fix need to change
        let ret = "";
        for (let i = 0; i < str.length; i++) {
            console.log(str.charCodeAt(i) + ' ' + str.charAt(i));
            if (str.charCodeAt(i) > 65000) {
                ret+='      ';
                i+=6;
            }
            ret+=str.charAt(i);
        }
        return ret;
    }
    document.getElementById("run").addEventListener("click", () => {
        // Get the user's input
        const inputData = cEditor.getValue();
        console.log(inputData);
        // Send the input data to the server using Fetch API
        fetch("/jlang/code", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data: inputData }),
        })
        .then(response => response.json())
        .then(data => {
            // Display the server's response on the webpage
            convertToASCII(data.result);
            document.getElementById("output").textContent = `${convertToASCII(data.result)}`;
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
    
});