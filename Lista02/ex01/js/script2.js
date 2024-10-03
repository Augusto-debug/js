const data = new Date().getDay();
console.log(data);

switch (data) {
  case 0:
    document.write('Hoje é domingo');
    break;
  case 1:
    document.write("Hoje é Segunda");
    break;
  case 2:
    document.write("Hoje é Terça");
    break;
  case 3:
    document.write("Hoje é Quarta");
    break;
  case 4:
    document.write("Hoje é Quinta");
    break;
  case 5:
    document.write("Hoje é Sexta");
    break;
  case 6:
    document.write("Hoje é Sábado");
    break;
  default:
    document.write("Dia Inválido");
}