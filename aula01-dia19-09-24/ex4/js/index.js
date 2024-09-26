const nome = prompt("Qual é seu nome ?");
const quantidade = parseInt(prompt("Quantas vezes quer visualizar seu nome ? "))
const cor = prompt("Qual cor quer ver o seu nome ? Escreva em ingles");
for(let i = 0; i < quantidade; i++) {
    document.write(`<p style=color:${cor};>${nome} - ${i + 1}</p>`);
}