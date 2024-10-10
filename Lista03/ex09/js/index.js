let pessoas = [];
const numeroPessoas = parseInt(prompt("Quantas pessoas deseja cadastrar?"));
for (let i = 0; i < numeroPessoas; i++) {
    const nome = prompt("Digite o nome da pessoa:");
    pessoas.push(nome);
}

function embaralharArray(n) {
  for (let i = n.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [n[i], n[j]] = [n[j], n[i]]; 
  }
  return n;
}

let pessoasEmbaralhadas = embaralharArray(pessoas);

for(let i = 0; i < pessoas.length; i++) {
    document.write((i+1) + "º " + pessoasEmbaralhadas[i] + "<br>");
}