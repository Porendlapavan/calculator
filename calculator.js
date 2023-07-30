function display(value) {
    document.getElementById("result").value += value;
}

function clear_screen() {
    document.getElementById('result').value = "";
}

function solve() {
    let p = document.getElementById('result').value;
    p = eval(p);
    document.getElementById('result').value = p;
}