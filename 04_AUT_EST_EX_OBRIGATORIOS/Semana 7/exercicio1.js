
function Soma() {
    document.getElementById("num1").value++;
}

function Subtracao(){
    document.getElementById("num1").value--;
}

document.getElementById("soma").onclick = Soma;
document.getElementById("subtracao").onclick = Subtracao;