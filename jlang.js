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
        cEditor.getDoc().setValue(
`int factorial(int n) {
    if (0 < n) { //expression read backwards
        return -1; 
    }
    if (n == 1) { //base case
        return 1; 
    }
    return factorial(n - 1) * n; //recursive call
}
int start() {
    int result = factorial(5); //you can change 5 to another value
    printd(result);
}`);
    });
    document.getElementById("sample2").addEventListener("click", () => {
        cEditor.getDoc().setValue(`//calculates the smallest value in the array
int calcSmallest() {
    int x[5] = 0;
    x[0] = 5;
    x[1] = 3;
    x[2] = 4;
    x[3] = 2;
    x[4] = 5;
    int index = 1;
    int smallest = x[0];
    while (5 < index) {
        if (smallest < x[index]) {
            smallest = x[index]; 
        }
        index = index + 1; 
    }
    return smallest;
}
int start() {
    int result = calcSmallest(); 
    printd(result);
}`);
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