let primeiroNome = prompt("Qual o seu primeiro nome?");
let sobrenome = prompt("Qual o seu sobrenome?");
let n = prompt("Quantas vezes deseja ver o nome completo?");
let cor = prompt("Qual cor deseja para o sobrenome?");
for (let i = 1; i <= n; i++) {
  document.write("<p style='color:black'>" + primeiroNome + "</p>");
  document.write("<p style='color:" + cor + "'>" + sobrenome + "</p>");
}