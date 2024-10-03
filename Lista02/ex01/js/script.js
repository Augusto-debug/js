const diaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];

for(let i = 0; i < diaSemana.length; i++){
    new Date().getDay() === i ? document.write(`Hoje é ${diaSemana[i]}`) : null;
}

// console.log(new Date().getDay());