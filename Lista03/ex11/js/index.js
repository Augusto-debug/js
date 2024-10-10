const cartas = [
    "cartas/carta1.png",
    "cartas/carta2.png",
    "cartas/carta3.png",
    "cartas/carta4.png",
    "cartas/carta5.png",
    "cartas/carta6.png",
    "cartas/carta7.png",
    "cartas/carta8.png",
    "cartas/carta9.png",
    "cartas/carta10.png",
    "cartas/carta11.png",
    "cartas/carta12.png",
    "cartas/carta13.png",
    "cartas/carta14.png",
    "cartas/carta15.png",
    "cartas/carta16.png",
    "cartas/carta17.png",
    "cartas/carta18.png",
    "cartas/carta19.png",
    "cartas/carta20.png",
    "cartas/carta21.png",
    "cartas/carta22.png",
    "cartas/carta23.png",
    "cartas/carta24.png",
    "cartas/carta25.png",
    "cartas/carta26.png",
    "cartas/carta27.png"
];

const selecionaTresCartas= () => {
    const cartasSelecionadas = [];
    while (cartasSelecionadas.length < 3) {
        const indiceCarta = Math.floor(Math.random() * cartas.length);
        const carta = cartas[indiceCarta];
        if (!cartasSelecionadas.includes(carta)) {
            cartasSelecionadas.push(carta);
            cartas.splice(indiceCarta, 1);
        }
    }
    return cartasSelecionadas;
}

const jogador1 = selecionaTresCartas();
const jogador2 = selecionaTresCartas();
const jogador3 = selecionaTresCartas();
const jogador4 = selecionaTresCartas();
// const cartasSelecionadas = [...jogador1, ...jogador2, ...jogador3, ...jogador4];
// console.log(cartasSelecionadas);
document.write("<h1>Cartas do Jogador 1 :</h1>");
for (let i = 0; i < jogador1.length; i++) {
    document.write(` <img src="${jogador1[i]}">`);
}
document.write("<br>");
document.write("<h1>Cartas do Jogador 2 :</h1>");
for (let i = 0; i < jogador2.length; i++) {
    document.write(` <img src="${jogador2[i]}">`);
}
document.write("<br>");
document.write("<h1>Cartas do Jogador 3 :</h1>");
for (let i = 0; i < jogador3.length; i++) {
    document.write(` <img src="${jogador3[i]}">`);
}
document.write("<br>");
document.write("<h1>Cartas do Jogador 4 :</h1>");
for (let i = 0; i < jogador4.length; i++) {
    document.write(` <img src="${jogador4[i]}">`);
}
document.write("<br>");

// document.write(`<img src="${cartasSelecionadas})}" alt="Carta Selecionada">`);

