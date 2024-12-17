const frase = document.querySelector(".frase");

let tempoRestante = Math.floor(Math.random() * 6) + 5;

frase.textContent = `Processando. Aguarde ${tempoRestante} segundos`;

const atualizacaoIntervalo = setInterval(() => {
  tempoRestante = tempoRestante - 1;
  frase.textContent = `Processando. Aguarde ${tempoRestante} segundos`;
  if (tempoRestante <= 3) {
    frase.style.color = "red";
  }
  if (tempoRestante === 0) {
    window.location.href = "verVeiculo.html";
  }
}, 1000);

