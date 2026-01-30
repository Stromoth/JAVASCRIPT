const popUp = document.querySelector('#cookies-popup');
const botaoAceitar = document.querySelector('#aceitar-cookies');
const botaoRecusar = document.querySelector('#recusar-cookies');

window.addEventListener('load', () => {
    const escolha = localStorage.getItem('cookieConsent');

    if (!escolha) {
        popUp.show();
    }
});

botaoAceitar.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'aceito');
    popUp.close();
});

botaoRecusar.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'recusado')
    popUp.close();
});
