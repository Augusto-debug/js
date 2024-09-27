var nomeDisciplina = "JavaScript Básico";
nomeDisciplina = nomeDisciplina + " Wilton Filho";
const IFTM = "iftm";
var idadeVazia;
var idade = "10 anos";
var conversaoParaInteiro = parseInt(idade);
console.log(nomeDisciplina);
console.log(IFTM);
console.log(conversaoParaInteiro);
var valor = "Valor 20";
var conversaoParaInteiro2 = parseInt(valor);
console.log(conversaoParaInteiro2);

const vetor = [1,2,3,4,5,6,7];
let vetor2 = new Array(5);
let vetor3 = [];
let sum = 0;
for(v of vetor) {
    sum += v;
}
console.log(sum);

for(let i = vetor.length - 1; i >= 0;i--) {
    vetor3.push(vetor[i]);
}
console.log(vetor3);

for (let i = 0; i < vetor2.length; i++) {
    vetor2[i] = i * 10;
}
console.log(vetor2);

var vet = [1,2,3,4];
console.log(vet);

// let removed = vet.pop();
// console.log(vet);
// console.log(removed);

// vet.push(3);
// console.log(vet)

// let primeiroElemento = vet.shift();
// console.log(vet);
// console.log(primeiroElemento);

// let numeroRemovido = vet.splice(1,2);
// console.log(numeroRemovido);

vet.splice(2,0,5)
console.log(vet)
