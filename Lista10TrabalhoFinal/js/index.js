window.addEventListener("DOMContentLoaded", () => {
  const tempo = document.querySelector(".tempoNum");
  const tracoNum = document.querySelector(".tracoNum");
  const acertosSpan = document.querySelector("#acertos");
  const errosSpan = document.querySelector("#erros");
  const paresSorteadosSpan = document.querySelector("#paresSorteados");

  let dificuldadeAtual = 0;
  let tempoCronometro = 0;
  let intervaloCronometro = null;
  let intervaloSorteio = null;
  let acertos = 0;
  let erros = 0;
  let paresSorteados = 0;

  const formataNumero = (numero) => {
    const minutos = Math.floor(numero / 60);
    const segundos = numero % 60;
    return `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2,"0")}`;
  };

  const setaDificuldadeDoJogo = () => {
    const dificuldadeSelecionada = document.querySelector("#dificuldade");
    if (dificuldadeSelecionada.value === "0") {
      dificuldadeAtual = 0;
      tempoCronometro = 0;
    } else if (dificuldadeSelecionada.value === "1") {
      dificuldadeAtual = 105;
      tempoCronometro = 1000;
    } else if (dificuldadeSelecionada.value === "2") {
      dificuldadeAtual = 75;
      tempoCronometro = 500;
    } else {
      dificuldadeAtual = 30;
      tempoCronometro = 300;
    }
    tempo.textContent = formataNumero(dificuldadeAtual);

    dificuldadeSelecionada.addEventListener("change", () => {
      if (dificuldadeSelecionada.value === "0") {
        dificuldadeAtual = 0;
        tempoCronometro = 0;
      } else if (dificuldadeSelecionada.value === "1") {
        dificuldadeAtual = 105;
        tempoCronometro = 1000;
      } else if (dificuldadeSelecionada.value === "2") {
        dificuldadeAtual = 75;
        tempoCronometro = 500;
      } else {
        dificuldadeAtual = 30;
        tempoCronometro = 300;
      }
      tempo.textContent = formataNumero(dificuldadeAtual);
      clearInterval(intervaloCronometro);
      clearInterval(intervaloSorteio);
      intervaloCronometro = null;
      intervaloSorteio = null;
    });
  };

  const atualizaEstatisticas = () => {
    const totalTentativas = acertos + erros;
    const porcentagem = totalTentativas > 0 ? (acertos / totalTentativas) * 100 : 0;
    acertosSpan.textContent = `${acertos} (${porcentagem.toFixed(2)}%)`;
    errosSpan.textContent = erros;
    paresSorteadosSpan.textContent = paresSorteados;
  };

  const numeroAleatorio = () => Math.floor(Math.random() * 101);

  const sorteioNumero = () => {
    if (intervaloSorteio) clearInterval(intervaloSorteio);

    let num = numeroAleatorio();
    tracoNum.textContent = num;

    tracoNum.onclick = () => {
      if (num % 2 === 0) {
        acertos++;
        paresSorteados++;
        tracoNum.style.color = "green";
      } else {
        erros++;
        tracoNum.style.color = "red";
      }
      atualizaEstatisticas();

      setTimeout(() => {
        tracoNum.style.color = "";
      }, 500);
    };

    intervaloSorteio = setInterval(() => {
      num = numeroAleatorio();
      tracoNum.textContent = num;
      if (num % 2 === 0) paresSorteados++;
      atualizaEstatisticas();
    }, tempoCronometro);
  };

  const botoesDeControle = () => {
    const iniciar = document.querySelector("#iniciar");
    const pausar = document.querySelector("#pausar");
    const parar = document.querySelector("#parar");

    const atualizaTempo = () => {
      tempo.textContent = formataNumero(dificuldadeAtual);
    };
    iniciar.onclick = () => {
      if (!intervaloCronometro && dificuldadeAtual > 0) {
        intervaloCronometro = setInterval(() => {
          dificuldadeAtual--;
          if (dificuldadeAtual <= 0) {
            clearInterval(intervaloCronometro);
            clearInterval(intervaloSorteio);
            alert("Tempo esgotado!");
          }
          atualizaTempo();
        }, tempoCronometro);
        sorteioNumero();
      }
    };

    pausar.onclick = () => {
      clearInterval(intervaloCronometro);
      clearInterval(intervaloSorteio);
      intervaloCronometro = null;
      intervaloSorteio = null;
    };

    parar.onclick = () => {
      clearInterval(intervaloCronometro);
      clearInterval(intervaloSorteio);
      intervaloCronometro = null;
      intervaloSorteio = null;
      dificuldadeAtual = 0;
      acertos = 0;
      erros = 0;
      paresSorteados = 0;
      atualizaTempo();
      atualizaEstatisticas();
      tracoNum.textContent = "";
      tracoNum.style.color = "";
      tracoNum.innerHTML = 0;
    };
  };

  setaDificuldadeDoJogo();
  botoesDeControle();
});
