const variados = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
   'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
   'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
   'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ,0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let tamanhoSenha = parseInt(prompt('Digite o tamanho da senha: '));
let resultado = [];
for(let i = 0; i < tamanhoSenha; i++){
   resultado.push(variados[Math.floor(Math.random() * variados.length)]);
}

document.write(resultado.join(''));

const generatePassword = (tamanhoSenha) => {
   let resultado = [];
   for(let i = 0; i < tamanhoSenha; i++){
      resultado.push(variados[Math.floor(Math.random() * variados.length)]);
   }
   return resultado.join('');
};

console.log(generatePassword(10)); // 10 é o tamanho da senha