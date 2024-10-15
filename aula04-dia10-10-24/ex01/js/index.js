// const pessoa = [{
//     nome: "wilton filho",
//     idade: 30,
//     profissao: "desenvolvedor",
//     oquefaz: (atribuicao) => {
//         console.log("estudando " + atribuicao);
//     }
//     },
//     {
//     nome: "joao",
//     idade: 20,
//     profissao: "estudante"
//     },
// ]

// const {nome, idade, profissao} = pessoa[0];
// console.log(nome);

// pessoa[0].nome = "augusto";
// console.log(pessoa[0]);
// pessoa[0].oquefaz("JavaScript");
// console.log(pessoa[0]);


// let cadeira = {};

// cadeira.peso = "10kg";
// cadeira.corPredominante = "preto";
// cadeira.marcaCadeira = "Tramontina";

// console.log(cadeira);


let triangulo = function (lado1, lado2, lado3) {
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;

    this.area =  function() {
        return lado1 + lado2 + lado3;
    };

    this.equilatero = function () {
        return lado1 === lado2 && lado2 === lado3;
    }
}

let triangulo1 = {
    lado1 : 10,
    lado2 : 10,
    lado3 : 10}
let triangulo2 = triangulo.lado1 = 10; 
let triangulo3 = triangulo.lado1 = 10;
// console.log(triangulo.equilatero(triangulo1.lado1, triangulo1.lado2, triangulo1.lado3));
const t = new triangulo(10, 11, 10);
console.log(t.area(), t.equilatero());

