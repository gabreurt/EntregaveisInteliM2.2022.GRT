


document.getElementById("botao").onclick = CaixaEletronico;

function CaixaEletronico() {
    var variaveltemporaria = document.getElementById("num1").value;
    var notade100
    var notade50
    var notade20
    var notade10
    var notade5 
    var notade2
    var notade1
    var resto
    var resto5
    var resto2
    var resto3
    var resto4

    notade100 = parseInt(variaveltemporaria/100);
    resto = variaveltemporaria % 100;
    notade50 = parseInt(resto / 50);
    resto2 = resto % 50
    notade20 = parseInt(resto2/20);
    resto3 = resto2 % 20
    notade10 = parseInt(resto3/10);
    resto4 = resto3 % 10
    notade5 = parseInt(resto4/5);
    resto5 = resto4 % 5
    notade2 = parseInt(resto5/2);
    notade1 = resto5 % 2

    alert ("Você irá receber " + notade100 + " notas de 100 e " + notade50 + " notas de 50, e " + notade20 + " notas de 20, e " + notade10 + " notas de 10, e " + notade5 + " notas de 5, e " + notade2 + " notas de 2, e " + + notade1 + " notas de 1")
    // }
    //  if (variaveltemporaria % 5 == 0) {
    //     alert ("Você irá receber " + notade10 + " notas de 10, e " + notade5 + " notas de 5")
    // }
    // if (variaveltemporaria % 5 != 0) {
    //     notade1 = variaveltemporaria % 5 
    //     alert ("Você irá receber " + notade10 + " notas de 10, " + (notade5) + " notas de 5, e " + notade1 + " notas de 1")
    //     }
    }