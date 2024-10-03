let controle = 0;
let homens = [];
let mulheres = [];
while(controle < 10) {
    let entrada = prompt("Por favor digite seu nome :");
    let sexo = prompt("Digite seu sexo por favor : h para homem e m para mulher");
    if (sexo == "h" || sexo == "H") {
        homens.push(entrada);
        controle++;
    } else if (sexo == "m" || sexo == "M") {
        mulheres.push(entrada);
        controle++;
    } else {
    controle++;
    }
}
homens.sort();
mulheres.sort();
console.log(homens, mulheres);
for(let i = 0 ; i < homens.length ; i++) {
    document.write("Homem " + (i+1) + " : " + homens[i] + "<br>");
}

