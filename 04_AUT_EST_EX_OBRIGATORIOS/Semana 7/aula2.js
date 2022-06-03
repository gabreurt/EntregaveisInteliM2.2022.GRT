var nome1
var nome2

function troca(){
    nome1 = document.getElementById("nome1").value
    document.getElementById("nome1").value = document.getElementById("nome2").value
    document.getElementById("nome2").value = nome1
}
document.getElementById("botao").onclick = troca