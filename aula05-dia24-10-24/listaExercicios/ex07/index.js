const letrasMinusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
for(let i = 0; i< 4; i++){
   console.log(letrasMinusculas[Math.floor(Math.random() * letrasMinusculas.length)]);
}

for(let i = 0; i< 4; i++){
   console.log(numeros[Math.floor(Math.random() * numeros.length)]);
}