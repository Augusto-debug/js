const randomNum = (n, m) => {
    return Math.floor(Math.random() * (m - n + 1)) + n ;
}
const startNumber = parseInt(prompt("Digite um numero para iniciar o range calculado:"));
const finishNumber = parseInt(prompt("Digite um numero para finalizar o range calculado:"));
document.write(randomNum(startNumber, finishNumber));
