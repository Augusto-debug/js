let texto = prompt("Digite um texto:");
let primeiraPalavra = prompt("Digite a primeira palavra:");
let segundaPalavra = prompt("Digite a segunda palavra:");
let textoAlterado = texto.replace(new RegExp(primeiraPalavra, 'g'), segundaPalavra);
alert("Texto alterado: " + textoAlterado);