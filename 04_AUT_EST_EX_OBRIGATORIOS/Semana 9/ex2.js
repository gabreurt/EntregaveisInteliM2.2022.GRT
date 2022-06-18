function separar() {
    var numero = document.getElementById("num").value

    var soma = 0;

    for (var i = 0; i != numero.length; i++) {
        soma += parseInt(numero[i]);
    }

    console.log(soma);
}

