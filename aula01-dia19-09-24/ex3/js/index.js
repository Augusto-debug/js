const nome = prompt("Digite seu nome").trim();
const nota1 = parseFloat(prompt("Digite sua nota do bimestre 1"));
const nota2 = parseFloat(prompt("Digite sua nota do bimestre 2"));

const notaMedia = 6;
const media = (nota1 + nota2) / 2;

    if (media >= 6) {
        alert(`${nome} está aprovado`)
    } else {
        alert(`${nome} está reprovado. Faltaram ${notaMedia - media} pontos para ser aprovado`)
    } 