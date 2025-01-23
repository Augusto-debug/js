const botaoCadastro = document.getElementById("cadastrar");
const nome = document.getElementById("txtNome");
const sobrenome = document.getElementById("txtSobrenome");
const msgTexto = document.getElementById("msgTexto");
const logo = document.getElementById("logo");
const txtFaixaEtaria = document.getElementById("txtFaixaEtaria");

botaoCadastro.addEventListener("click", () => {
  if (
    nome.value !== "" &&
    sobrenome.value !== "" &&
    txtFaixaEtaria.value !== "Entre 0 a 12 anos" &&
    txtFaixaEtaria.value !== "Entre 13 a 18 anos"
  ) {
    msgTexto.innerHTML = "Processando. Aguarde (5 segundos)";
    logo.src = "img/processando.gif";
    msgTexto.style.color = "blue";
    const timerCinco = setTimeout(() => {
      window.location.href = "processa.html";
    }, 5000);
  } else {
    msgTexto.innerHTML = "Nome e Sobrenome devem ser informados";
    msgTexto.style.color = "red";
    logo.src = "img/erro.png";
  }
  if (
    txtFaixaEtaria.value === "Selecione" &&
    nome.value !== "" &&
    sobrenome.value !== ""
  ) {
    msgTexto.innerHTML = "Selecionar sua faixa etária";
  } else if (
    txtFaixaEtaria.value === "Entre 0 a 12 anos" ||
    txtFaixaEtaria.value === "Entre 13 a 18 anos"
  ) {
    msgTexto.innerHTML = `${nome.value} ${sobrenome.value}, você não tem idade suficiente`;
  }
  const userData = {
    nomeCompleto: nome.value + " " + sobrenome.value,
    faixaEtaria: (function() {
      if (txtFaixaEtaria.value === "Entre 19 a 21 anos") {
        return 3;
      } else if (txtFaixaEtaria.value === "Entre 22 a 30 anos") {
        return 4;
      } else {
        return 5;
      }
    })()
  };
  localStorage.setItem("usuario", JSON.stringify(userData));
 
});

nome.addEventListener("click", () => {
  msgTexto.innerHTML = "* Favor preencher todos os campos acima";
});
sobrenome.addEventListener("click", () => {
  msgTexto.innerHTML = "* Favor preencher todos os campos acima";
});

