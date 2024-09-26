// alert
// confirm
const nome = prompt("Qual é o seu nome ? ")
if((nome == null) || (nome.trim() == '')) {
    alert("que pena que não informou seu nome");
} else {
    const idade = prompt("Qual é a sua idade");
    while((idade <= 0) || (idade > 130)) {
        alert("Digite uma idade entre 1 e 130");
    }
    if(idade >= 18) {
    alert(`${nome} pode tirar carteira de motorista`)
} else {
    alert(`${nome} nao pode tirar carteira de motorista`)
}
}