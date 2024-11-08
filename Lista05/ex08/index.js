let texto = prompt("Digite um texto:");
let alfabeto = "abcdefghijklmnopqrstuvwxyz".split("");
let palavras = texto.split(" ");
let resultado = {};
alfabeto.forEach(letra => resultado[letra] = []);
palavras.forEach(palavra => {
  let primeiraLetra = palavra.charAt(0).toLowerCase();
  if (alfabeto.includes(primeiraLetra)) {
    resultado[primeiraLetra].push(palavra);
  }
});
for (let letra of alfabeto) {
  document.write(resultado[letra].join(" ") + " ");
}
