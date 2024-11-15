const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');
const result = document.querySelector('#operar');
const resultado = document.querySelector('#resultado');
const igual = document.querySelector('#igual');

igual.addEventListener('click', () => {
    resultado.value = eval(number1.value + result.value + number2.value);
});