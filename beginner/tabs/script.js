let conteudos = document.querySelectorAll('.aba > p');

function limparConteudo() {
    for (let conteudo of conteudos) {
        conteudo.classList.remove('ativo')
    }
}

function primeiraAba() {
    limparConteudo();
    console.log(conteudos[0])
    conteudos[0].classList.add('ativo')
}

function segundaAba() {
    limparConteudo();
    conteudos[1].classList.add('ativo')
};

function terceiraAba() {
    limparConteudo();
    conteudos[2].classList.add('ativo')
};

function quartaAba() {
    limparConteudo();
    conteudos[3].classList.add('ativo')
};