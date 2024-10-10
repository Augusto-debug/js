let idadePassageiros = [];
let nomePassageiros = [];
let somaIdade = 0;

let quantidadePassageiros = parseInt(prompt("Digite a quantidade de passageiros:"));
for (let i = 0; i < quantidadePassageiros; i++) {
    let idade = parseInt(prompt("Digite a idade do passageiro:"));
    let nome = prompt("Digite o nome do passageiro:");
    nomePassageiros.push(nome);
    idadePassageiros.push(idade);
    somaIdade += idade;
}
document.write("A idade média dos passageiros é " + parseInt(somaIdade / idadePassageiros.length));
document.write("<br>");
document.write("A pessoa que ganhou um almoço foi " + nomePassageiros[Math.floor(Math.random() * nomePassageiros.length)]);