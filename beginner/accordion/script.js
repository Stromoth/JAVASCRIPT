const itens = document.querySelectorAll('.item');

itens.forEach(item => {
    const pergunta = item.querySelector('.pergunta');

    pergunta.addEventListener('click', () => {
        itens.forEach(i => {
            i.classList.remove('ativo');
        });

        item.classList.add('ativo');
    });
});