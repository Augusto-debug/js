const randomNum = (n) => {
    return Math.floor(Math.random() * n) + 1;
}
const numberLimit = parseInt(prompt("Digite um numero (O intervalo calculado estara entre o numero digitado):"));
document.write(randomNum(numberLimit));
