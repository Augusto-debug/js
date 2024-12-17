//Para pegarmos o valor de um input ou alterar, usamos o value. O innerHTML é para tags de texto. 
window.addEventListener('DOMContentLoaded', function() {
    let nome1 = document.querySelector('#name1');
    let nome2 = document.querySelector('#name2');
    let botao = document.querySelector('#button');
    let ptext = document.querySelector('#pText');

    botao.addEventListener('click', function() {
        setTimeout(copiarTexto, 2000);
    });

    const copiarTexto = () => {
        nome2.value = nome1.value;
        ptext.innerHTML = nome1.value;
    }
});