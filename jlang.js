document.addEventListener("DOMContentLoaded", () => {
    var cEditor = CodeMirror.fromTextArea(document.getElementById("c-code"), {
        lineNumbers: true,
        matchBrackets: true,
        mode: "text/x-csrc",
        theme: "the-matrix",
    });
    cEditor.setSize("100%", "100%");
    function convertToASCII(str) {//code not needed but just in case
        let ret = "";
        for (let i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 65000) {
                ret+='      ';
                i+=6;
            }
            ret+=str.charAt(i);
        }
        return ret;
    }
    document.getElementById("sample1").addEventListener("click", () => {
        cEditor.getDoc().setValue('//Sample Code 1');
    });
    document.getElementById("sample2").addEventListener("click", () => {
        cEditor.getDoc().setValue('//Sample Code 2');
    });
    document.getElementById("sample3").addEventListener("click", () => {
        cEditor.getDoc().setValue('//Sample Code 3');
    });
    document.getElementById("run").addEventListener("click", () => {
        document.getElementById("output").textContent = 'Sending code to server...';
        const inputData = cEditor.getValue();
        fetch("/jlang/code", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data: inputData }),
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById("output").textContent = `${convertToASCII(data.result)}`;
        })
        .catch(error => {
            console.error("Error: ", error);
        });
    });
    
});