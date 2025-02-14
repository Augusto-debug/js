window.addEventListener("DOMContentLoaded", () => {
    const prompt1 = prompt("Por favor digite uma frase");
    const prompt2 = prompt("Por favor digite uma letra");
    const texto = document.querySelector(".texto");
    const palavras = prompt1.split(" ");
    let resultado = [];
    for (let i = 0; i < palavras.length; i++) {
        const palavra = palavras[i];
        if (!palavra.charAt(0).includes(prompt2)) {
            resultado.push(palavra);
        }     
    }

    texto.innerHTML = resultado.join(" ");
});