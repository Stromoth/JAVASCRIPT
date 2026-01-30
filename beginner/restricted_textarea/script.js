const textarea = document.querySelector('#texto');
const contador = document.querySelector('#contador');

const limite = 250;
let quantidade = textarea.value.length;
contador.textContent = `${quantidade} / ${limite}`

textarea.addEventListener('input', () => {
    quantidade = textarea.value.length;

    contador.textContent = `${quantidade} / ${limite}`

    if (quantidade >= limite) {
        textarea.value = textarea.value.slice(0, limite);
        textarea.style.borderColor = 'red';    
        textarea.style.color = 'red';    
    } else {
        textarea.style.borderColor = '';
        textarea.style.color = '';    
    }
})