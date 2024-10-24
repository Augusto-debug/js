const letrasMinusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let randomLetter= [];
for(let i = 0; i <= 3; i++) {
   console.log(letrasMinusculas[Math.floor(Math.random() * letrasMinusculas.length)]);
}
// console.log(randomLetter);