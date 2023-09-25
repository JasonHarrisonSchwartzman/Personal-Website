document.addEventListener("DOMContentLoaded", () => {
    var cEditor = CodeMirror.fromTextArea(document.getElementById("c-code"), {
        lineNumbers: true,
        matchBrackets: true,
        mode: "text/x-csrc",
        theme: "the-matrix",
    });
    cEditor.setSize("100%", "100%");
});


/*
<script>
    var cEditor = CodeMirror.fromTextArea(document.getElementById("c-code"), {
    lineNumbers: true,
    matchBrackets: true,
    mode: "text/x-csrc",
    theme: "the-matrix",
  });
  cEditor.setSize("100%","100%");
</script>
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the user's input
    const inputData = document.getElementById("inputData").value;

    // Send the input data to the server using Fetch API
    fetch("/process", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: inputData }),
    })
    .then(response => response.json())
    .then(data => {
        // Display the server's response on the webpage
        document.getElementById("output").textContent = `Server Response: ${data.result}`;
    })
    .catch(error => {
        console.error("Error:", error);
    });
});*/
