let numerosMega = [];
for(let i = 0; i <= 60; i++){
    numerosMega.push(i);
}

for(let i = 0; i <= 5; i++){
    let numeroAleatorio = Math.floor(Math.random() * numerosMega.length);
    let numeroSorteado = numerosMega[numeroAleatorio];
    if(numeroSorteado === numerosMega[numeroAleatorio]){
        numerosMega.splice(numeroAleatorio, 1);
    }
    document.write(numeroSorteado + " " + "<br>");
}

