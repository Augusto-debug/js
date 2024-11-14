const heading = document.querySelector('.head');
const text = document.querySelector('.text');
const img = document.createElement('img');
document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('.head');
    img.src = "img/pensativo.png";
    heading.appendChild(img);   
    text.innerHTML = "zzzzzzzzz!";
});
heading.addEventListener('mouseenter', () => {
    img.src = "img/assustado.png";
    heading.appendChild(img);   
    text.innerHTML = "O que você quer ?";
});
heading.addEventListener('mouseout', () => {
    img.src = "img/pensativo.png";
    heading.appendChild(img);   
    text.innerHTML = "zzzzzzzzz!";
});
heading.addEventListener('click', () => {
    let nome = prompt("Qual é o seu nome?");
    console.log(nome);
    if (nome === null || nome === "" || nome === "null" || nome === "undefined") {
        img.src = "img/nervoso.png";
        text.innerHTML = "Não me faça perder o meu tempo!";
    } else {
        img.src = "img/alegre.png";
        text.innerHTML = `${nome}, você é bem-vindo!`;
    }
});
