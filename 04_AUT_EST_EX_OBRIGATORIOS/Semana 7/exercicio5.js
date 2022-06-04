const espacamento = () => {
  // isso é uma função
  var saida = "";
  let numero = Number($("#alunos").val());
  for (let i = 0; i < numero; i++) {
    // instanciamento, quando e soma
    saida += `<div id="div${i}"><input type="number" placeholder="prova" id="prova${i}"><input placeholder="trabalho" type="number" id="trabalho${i}"></div>`;
  } // colocar a variavel na string
  $("#saida").append(
    `${saida} <button type="button" onClick="calcular()">Calcular</button>`
  );
};

const calcular = () => {
  let numero = Number($("#alunos").val());
  var somadasprovas = 0;
  var somadostrabalhos = 0;
  var somamediageral = 0;
  var todasasnotasprovas = [];
  var todasasnotastrabalhos = [];

  for (let i = 0; i < numero; i++) {
    var mediaponderada =
      (Number($(`#prova${i}`).val()) * 2 +
        Number($(`#trabalho${i}`).val()) * 3) /
      5;
    $(`#div${i}`).append(
      `<span> A média desse aluno é ${mediaponderada}</span>`
    );
    somamediageral += mediaponderada;

    todasasnotasprovas.push(Number($(`#prova${i}`).val()));
    todasasnotastrabalhos.push(Number($(`#trabalho${i}`).val()));

    somadasprovas += Number($(`#prova${i}`).val());
    somadostrabalhos += Number($(`#trabalho${i}`).val());
  }
  todasasnotasprovas.sort(function (a, b) {
    return a - b; // para sort ser crescente e n alfabetico
  });
  todasasnotastrabalhos.sort(function (a, b) {
    return a - b;
  });
  var valor = (somamediageral / numero).toFixed(2);
  var valorprova = (somadasprovas / numero).toFixed(2);
  var valortrabalho = (somadostrabalhos / numero).toFixed(2);
  var menornotaprova = todasasnotasprovas[0];
  var menornotatrabalho = todasasnotastrabalhos[0];
  var maiornotaprova = todasasnotasprovas[todasasnotasprovas.length - 1];
  var maiornotatrabalho =
    todasasnotastrabalhos[todasasnotastrabalhos.length - 1];
  $(`#saida2`).append(
    `<span>A média geral dos alunos é ${valor}, já a média das provas foi de ${valorprova}. <br> A média dos trabalhos foi de: ${valortrabalho}, a maior nota da prova foi ${maiornotaprova} e a menor foi ${menornotaprova} <br> Já nos trabalhos, a maior nota foi de ${maiornotatrabalho} e a menor foi de ${menornotatrabalho}</span>`
  );
};
