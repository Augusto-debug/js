window.addEventListener("DOMContentLoaded", () => {
  const usuarioJSON = localStorage.getItem("usuario");
  const usuario = JSON.parse(usuarioJSON);
  const nomeRecuperado = usuario.nome;
  const sobrenomeRecuperado = usuario.sobrenome;
  const usuarioCompleto = nomeRecuperado + " " + sobrenomeRecuperado;
  const nome = document.querySelector("#nome");
  const nomeCompleto = document.querySelector("#nomeCompleto");
  const quantidadeCaracteres = document.querySelector("#quantidadeCaracteres");
  const primeiraPalavra = document.querySelector("#primeiraPalavra");
  const ultimaPalavra = document.querySelector("#ultimaPalavra");
  const quantidadePalavras = document.querySelector("#quantidadePalavras");
  nome.value = usuarioCompleto;
  nomeCompleto.innerHTML = `Nome Completo : ${usuarioCompleto}`;
  const texto = usuarioCompleto.trim();
  quantidadeCaracteres.innerHTML = texto.length;
  const palavras = texto.split(" ");
  primeiraPalavra.innerHTML = palavras[0];
  ultimaPalavra.innerHTML = palavras[palavras.length - 1];
  quantidadePalavras.innerHTML = palavras.length;
});
