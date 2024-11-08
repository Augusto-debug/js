let nomeCompleto = prompt("Qual o seu nome completo?");
let primeiroNome = nomeCompleto.split(" ")[0].toUpperCase();
let restoNome = nomeCompleto.slice(primeiroNome.length).toLowerCase();
alert(primeiroNome + restoNome);