const nomeVisitante = document.querySelector('#nomeVisitante');
const textoVisitante = document.querySelector('#textoVisitante');
const clique1 = document.querySelector('.clique1');
const clique2 = document.querySelector('.clique2');
const clique3 = document.querySelector('.clique3');
const clique4 = document.querySelector('.clique4');
clique1.addEventListener('click', (e) => {
    e.preventDefault();
    const idImage = document.querySelector('#idImage');
    idImage.setAttribute("src","img/emoji1.jpg");
});

clique2.addEventListener('mouseover', (e) => {
    e.preventDefault();
    const idImage = document.querySelector('#idImage');
    idImage.setAttribute("src", "img/emoji2.jpg");
});

clique3.addEventListener('mouseleave', (e) => {
    e.preventDefault();
    const idImage = document.querySelector('#idImage');
    idImage.setAttribute("src", "img/emoji3.jpg");
});
clique4.addEventListener('click', (e) => {
    e.preventDefault();
    const imagens = ['img/emoji1.jpg', 'img/emoji2.jpg', 'img/emoji3.jpg', 'img/emoji4.jpg'];
    let selectedImage = imagens[Math.floor(Math.random() * imagens.length)];
    const idImage = document.querySelector('#idImage');
    idImage.setAttribute("src", selectedImage);
});

nomeVisitante.addEventListener('input', (e) => {
    textoVisitante.textContent = `Olá, ${nomeVisitante.value}!`;
});