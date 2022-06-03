//Se vôo diurno, 200 por pessoa. Se mais do que 50 pessoas, desconto de 40% por pessoa.
//Se vôo noturno, 100 por pessoa. Se mais do que 50 pessoas, desconto de 20% por pessoa.

function calc() {
  var resultado;
  var pessoas = parseInt(document.getElementById("pessoas").value);
  var select = parseInt(document.getElementById("select").value);

  if (select == 0) {
    if (pessoas > 50) {
      resultado = pessoas * 120;
    } else {
      resultado = pessoas * 200;
    }
  }
  if (select == 1) {
    if (pessoas > 50) {
      resultado = pessoas * 80;
    } else {
      resultado = pessoas * 100;
    }
  }
  console.log(resultado);
  alert("O valor total é de " + resultado);
}

// document.getElementById("botao").onclick = Períodos;
