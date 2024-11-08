let numero = prompt("Digite um número inteiro maior ou igual a 2:");
document.write("<table><tr><th>Decimal</th><th>Binário</th><th>Hexadecimal</th></tr>");
for (let i = 0; i <= numero; i++) {
  document.write("<tr><td>" + i + "</td><td>" + i.toString(2) + "</td><td>" + i.toString(16) + "</td></tr>");
}
document.write("</table>");