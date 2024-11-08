let texto = prompt("Digite um texto:");
let letra = prompt("Digite uma letra:");
let palavras = texto.split(" ");
let resultado = [];
for (let i = 0; i < palavras.length; i++) {
  if (palavras[i].charAt(0).toLowerCase() === letra.toLowerCase()) {
    resultado.push(palavras[i]);
  }
}
document.write(resultado.join(" "));
