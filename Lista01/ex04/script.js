const nota1 = parseInt(prompt("Digite a nota do 1 bimestre:"));
const nota2 = parseInt(prompt("Digite a nota do 2 bimestre:"));
const somaNotas = nota1 + nota2;
if (somaNotas >= 60) {
    alert("aprovado")
} else {
    alert(`reprovado, ainda faltam ${60 - somaNotas} pontos para ser aprovado.`)
}