const idadeRecuperada = localStorage.getItem('idade');
const opcoesRecuperadas = localStorage.getItem('opcoes');
const nomeRecuperado = localStorage.getItem('nome');
const frase = document.querySelector('.frase');
const fabricante = document.querySelector('.fabricante');
const nome = document.querySelector('.nome');
const potencia = document.querySelector('.potencia');
const garantia = document.querySelector('.garantia');
const consumo = document.querySelector('.consumo');
const img = document.querySelector('#imagem');
const botao = document.querySelector('#mudar');

const vetorNatureza = [
    {
        img: "troller.jpg",
        Fabricante: "Ford",
        Nome: "Troller",
        Potencia: "200 cv",
        Garantia: "3 anos",
        Consumo: "7,7 km/l"
    }, 
    {
        img: "wrangler.jpg",
        Fabricante: "Jeep",
        Nome: "Wrangler",
        Potencia: "285 cv",
        Garantia: "3 anos",
        Consumo: "3,1 km/l"
    }
];

const vetorShopping = [
    {
        img: "civic.jpg",
        Fabricante: "Honda",
        Nome: "Civic",
        Potencia: "155 cv",
        Garantia: "3 anos",
        Consumo: "12,1 km/l"
    }, 
    {
        img: "corolla.jpg",
        Fabricante: "Toyota",
        Nome: "Corolla",
        Potencia: "177 cv",
        Garantia: "3 anos",
        Consumo: "11,4 km/l"
    }
];

frase.textContent = `${nomeRecuperado}, veja as opções para o seu perfil:`;

botao.addEventListener('click', function() {
    window.location.href = 'index.html';
});



let currentIndex = 0;
const vetor = opcoesRecuperadas === '1' ? vetorNatureza : vetorShopping;

if (vetor) {
    img.src = `img/${vetor[currentIndex].img}`;
    fabricante.textContent ="Fabricante : " + vetor[currentIndex].Fabricante;
    nome.textContent = "Nome : " + vetor[currentIndex].Nome;
    potencia.textContent = "Potencia : " + vetor[currentIndex].Potencia;
    garantia.textContent = "Garantia : " + vetor[currentIndex].Garantia;
    consumo.textContent = "Consumo : " + vetor[currentIndex].Consumo;
    currentIndex = (currentIndex + 1) % vetor.length;  
} else {
    img.src = `img/${vetor[currentIndex].img}`;
    fabricante.textContent ="Fabricante : " + vetor[currentIndex].Fabricante;
    nome.textContent = "Nome : " + vetor[currentIndex].Nome;
    potencia.textContent = "Potencia : " + vetor[currentIndex].Potencia;
    garantia.textContent = "Garantia : " + vetor[currentIndex].Garantia;
    consumo.textContent = "Consumo : " + vetor[currentIndex].Consumo;
    currentIndex = (currentIndex + 1) % vetor.length;  
}

let carrousel = setInterval(() => {
    img.src = `img/${vetor[currentIndex].img}`;
    fabricante.textContent ="Fabricante : " + vetor[currentIndex].Fabricante;
    nome.textContent = "Nome : " + vetor[currentIndex].Nome;
    potencia.textContent = "Potencia : " + vetor[currentIndex].Potencia;
    garantia.textContent = "Garantia : " + vetor[currentIndex].Garantia;
    consumo.textContent = "Consumo : " + vetor[currentIndex].Consumo;
    currentIndex = (currentIndex + 1) % vetor.length; 
}, 2000);

img.addEventListener('mouseover', function() {
    clearInterval(carrousel);
});

img.addEventListener('mouseout', function() {
    carrousel = setInterval(() => {
        img.src = `img/${vetor[currentIndex].img}`;
        fabricante.textContent = "Fabricante: " + vetor[currentIndex].Fabricante;
        nome.textContent = "Nome: " + vetor[currentIndex].Nome;
        potencia.textContent = "Potencia: " + vetor[currentIndex].Potencia;
        garantia.textContent = "Garantia: " + vetor[currentIndex].Garantia;
        consumo.textContent = "Consumo: " + vetor[currentIndex].Consumo;
        currentIndex = (currentIndex + 1) % vetor.length;
    }, 2000);
});