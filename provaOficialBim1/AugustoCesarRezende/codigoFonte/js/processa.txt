const nome = document.querySelector('.nome');
const usuario = document.querySelector('.usuario');
const senha = document.querySelector('.senha');
const sugestao = document.querySelector('.sugestao');

const usuarioRecuperado = JSON.parse(localStorage.getItem('usuario'));
if(!usuarioRecuperado) {
    window.location.href = "usuarioNaoCadastrado.html";
}   
const nomeCompleto = usuarioRecuperado.nomeCompleto;
const partes = nomeCompleto.trim().split(" ");
const primeiroNome = partes[0];
const sobrenome = partes.slice(1).join("");
const faixaEtaria = usuarioRecuperado.faixaEtaria;

nome.innerHTML = `${nomeCompleto}`;
usuario.innerHTML = `Usuário: ${primeiroNome.toUpperCase()}`;
senha.innerHTML = `Senha: ${primeiroNome.substring(0,1).toUpperCase()}${sobrenome.substring(0,1).toUpperCase()}`;

if (faixaEtaria == 3) {
    sugestao.innerHTML = 'Tipo de aplicação sugerida: Renda Fixa';
} else if (faixaEtaria == 4) {
    sugestao.innerHTML = 'Tipo de aplicação sugerida: Ações';
} else {
    sugestao.innerHTML ='Tipo de aplicação sugerida: Fundo de Investimento Imobiliário';
}
