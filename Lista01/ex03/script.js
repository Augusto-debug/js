const nome = prompt("Por favor informe seu nome completo:");
const idade = prompt("Por favor informe sua idade");

const idadeCarteira = 18;

if (idade >= 18) {
    alert(`${nome}, você já POSSUI idade para tirar carteira`)
} else {
    alert(`${nome}, você ainda NÂO POSSUI idade para tirar carteira, ainda falta(m) ${idadeCarteira - idade} anos`)
}