
function Operacoes() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    var operadores = document.getElementById("operadores").value;
    if (operadores == "soma") {
       resultado = num1 + num2;
    }

   else  if (operadores == "menos") {
        resultado = num1 - num2;
    }

    else if (operadores == "multi") {
        resultado = num1 * num2;
    }
    
    else if (operadores == "div") {
        resultado = num1 / num2;
    }

    else if (operadores == "divporint") {
        resultado = Math.ceil(num1/num2)
    }

    else if (operadores == "resto") {
    resultado =  num1 % num2
    }

    document.getElementById("resultado").innerHTML = "resultado: " + resultado;
}


document.getElementById("botao").onclick = Operacoes