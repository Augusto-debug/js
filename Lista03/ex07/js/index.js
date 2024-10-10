const numerosDado = [1, 2, 3, 4, 5, 6];

const dadoSorteado =
  numerosDado[Math.floor(Math.random() * numerosDado.length)];

switch (dadoSorteado) {
  case 1:
    document.write(`<img src="img/dadoNumero1.jpg" width="300px" height="300px" >`);
    break;
  case 2:
    document.write(`<img src="img/dadoNumero2.jpg"width="300px" height="300px" >`);
    break;
  case 3:
    document.write(`<img src="img/dadoNumero3.jpg" width="300px" height="300px" >`);
    break;
  case 4:
    document.write(`<img src="img/dadoNumero4.jpg" width="300px" height="300px" >`);
    break;
  case 5:
    document.write(`<img src="img/dadoNumero5.jpg" width="300px" height="300px" >`);
    break;
  default:
    document.write(`<img src="img/dado6.webp" width="300px" height="300px" >`);
    break;
}
