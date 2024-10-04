const entrada = parseInt(prompt("Digite a quantidade de passageiros: "));
let homens = [];
let mulheres = [];
let motorista = ["motorista"];
for(let i = 0; i < entrada; i++) {
    let sexo = prompt(`Digite o sexo do passageiro ${i + 1} (H para homens/M para mulheres): `).toUpperCase();
    let nome = prompt(`Digite o nome do passageiro ${i + 1}: `);
    if(sexo == "M") {
        mulheres.push(nome);
    } else {
        homens.push(nome);
    } 
}

const maiorVetor = homens.length > mulheres.length ? homens.length : mulheres.length;
homens.sort();
mulheres.sort();
document.write(`<table class="onibus_lugares">`);
document.write(`<tr><td>${motorista[0]}</td></tr>`);
for(let i = 0; i < maiorVetor; i++) {
    document.write(`<tr>`);
        if(mulheres[i] != undefined) {
            document.write(`<td>${mulheres[i]}</td>`);

        } else {
            document.write(`<td>[-]</td>`);
        }

        if(homens[i] != undefined) {
            document.write(`<td>${homens[i]}</td>`);
        } else {
            document.write(`<td>[-]</td>`);
        }
    }
document.write(`</tr>`);
document.write(`</table>`);
