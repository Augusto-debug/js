let valor1 = parseInt(prompt("Digite um numero entre 0 e 255 "));
let valor2 = parseInt(prompt("Digite um numero entre 0 e 255 "));
let valor3 = parseInt(prompt("Digite um numero entre 0 e 255 "));

let corRgb = `rgb(${valor1}, ${valor2}, ${valor3});`;
document.write(`<p style="color: ${corRgb};">Fundamentos de Web Design II</p>`);