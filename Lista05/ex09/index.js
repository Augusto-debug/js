let texto = prompt("Digite um texto:");
let textoLimpo = texto.replace(/\s/g, '').toLowerCase();
let textoInvertido = textoLimpo.split("").reverse().join("");
if (textoLimpo === textoInvertido) {
  alert("O texto é um palíndromo.");
} else {
  alert("O texto não é um palíndromo.");
}
