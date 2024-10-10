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

const cartaEscolhida = Math.floor(Math.random() * cartas.length);
const cartaSelecionada = cartas[cartaEscolhida];
document.write(`<img src="${cartaSelecionada}" alt="Carta Selecionada">`);