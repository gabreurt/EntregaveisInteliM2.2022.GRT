window.onload = function() {
    getRecrutadores();
   };
 
function Javascript() 
{
    window.location.href = "\segundapag.html";
};


function Alerta() 
{
    alert("Infelizmente este menino já se encontra contratado, volte em novembro.")
};

let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled' || darkMode == null) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
}

if (darkMode === 'enabled') {
    enableDarkMode();
}

function getRecrutadores(){
    var url = "http://127.0.0.1:3071/getRecrutadores";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
    var resultado = JSON.parse(xhttp.response);
    var recrutadores = "<p>Recrutadores: </p>";
    for(var i = 0 ; i != resultado.length; i++){
        recrutadores += `<li>${resultado[i].Recrutador}</li>`;
    }
    document.getElementById("recrutadores").innerHTML = recrutadores;
}