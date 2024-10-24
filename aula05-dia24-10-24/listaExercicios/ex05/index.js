const letrasMaiusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
for(let i = 0; i< 4; i++){
   console.log(letrasMaiusculas[Math.floor(Math.random() * letrasMaiusculas.length)]);
}
