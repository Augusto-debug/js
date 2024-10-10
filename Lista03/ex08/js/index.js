const opcoes = ["pedra", "papel", "tesoura"];

let jogador1;
let jogador2;

let jogadaAtribuida1 = opcoes[Math.floor(Math.random() * opcoes.length)];
jogador1 = jogadaAtribuida1;
let jogadaAtribuida2 = opcoes[Math.floor(Math.random() * opcoes.length)];
jogador2 = jogadaAtribuida2;

if (jogador1 === "pedra" && jogador2 === "tesoura") {
  document.write("Jogador 1 pedra / Jogador 2 tesoura <br>");
  document.write("Jogador 1 venceu! <br>");
} else if (jogador1 === "tesoura" && jogador2 === "papel") {
  document.write("Jogador 1 tesoura / Jogador 2 papel <br>");
  document.write("Jogador 1 venceu! <br>");
} else if (jogador1 === "papel" && jogador2 === "pedra") {
  document.write("Jogador 1 papel / Jogador 2 pedra <br>");
  document.write("Jogador 1 venceu! <br>");
} else if (jogador1 === jogador2) {
  document.write("Jogador 1 e Jogador 2 escolheram a mesma opção <br>");
  document.write("Empate! <br>");
} else if(jogador2 === "pedra" && jogador1 === "tesoura") {
  document.write("Jogador 2 pedra / Jogador 1 tesoura <br>");
  document.write("Jogador 2 venceu! <br>");
} else if(jogador2 === "tesoura" && jogador1 === "papel") {
  document.write("Jogador 2 tesoura / Jogador 1 papel <br>");
  document.write("Jogador 2 venceu! <br>");
} else if(jogador2 === "papel" && jogador1 === "pedra") {
  document.write("Jogador 2 papel / Jogador 1 pedra <br>");
  document.write("Jogador 2 venceu! <br>");
}
