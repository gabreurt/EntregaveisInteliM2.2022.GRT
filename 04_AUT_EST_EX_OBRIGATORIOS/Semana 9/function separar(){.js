function parouimpar() {
    var numero = document.getElementById("trealg").value
    centena = parseInt(numero[0]) 
    if (centena % 2 == 0) {
        alert("Seu número da centena é " + centena + ", um numero par")
    }
    if (centena % 2 != 0) {
        alert("Seu número da centena é " + centena + ", um numero impar")
    }
}   