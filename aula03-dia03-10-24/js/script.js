// let vet = [1,2,3];

// for (const v of vet) {
//     console.log(v);   
// }

// const numero = parseInt(prompt("Digite um numero :"));
// alert(`O número digitado é ${numero % 2 === 0 ? numero * 2  : numero * 3}`);

//Funções
function soma(a,b){
    return a+b;
}

const soma2 = (a,b) => a+b;

console.log(soma(1,2));
console.log(soma2(1,2));

const obj = {
    nome : "Eduardo",
    sobrenome : "Mendes",
    idade : 20,
    apresentar(){
        console.log(`Olá, eu sou ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos.`);
    }
}

obj.apresentar();