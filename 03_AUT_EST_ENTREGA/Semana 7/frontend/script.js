function Javascript() {
    window.location.href = "\segundapag.html";
};


function Alerta() {
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

