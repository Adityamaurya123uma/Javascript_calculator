let outputscrean = document.getElementById("output-screen");

function display(num) {
    outputscrean.value += num;
}

function Calculate() {
    try {
        outputscrean.value = eval(outputscrean.value);
    } catch (err) {
        alert("Invalid Function");
    }
}

function Clear() {
    outputscrean.value = "";
}

function del() {
    outputscrean.value = outputscrean.value.slice(0, -1);
}