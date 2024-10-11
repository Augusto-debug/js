const adicao = (a, b) => a +b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;
const divisao = (a, b) => a / b;
const main = () => {
    let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    let valor2 = parseFloat(prompt("Digite o segundo valor:"));
    let operacao = prompt("Digite a operação (+, -, *, /):\n");
    if (operacao === "+") {
        alert(`O resultado é ${adicao(valor1, valor2)}`);
    } else if (operacao === "-") {
        alert(`O resultado é ${subtracao(valor1, valor2)}`);
    } else if (operacao === "*") {
        alert(`O resultado é ${multiplicacao(valor1, valor2)}`);
    } else if (operacao === "/") {
        alert(`O resultado é ${divisao(valor1, valor2)}`);
    } else {
        alert("Operação inválida!");
    }
}

main();