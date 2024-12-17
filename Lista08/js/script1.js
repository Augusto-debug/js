const nome = document.querySelector('#nome');
const idade = document.querySelector('#idade');
const opcoes = document.querySelector('#opcoes');
const botaoCarros = document.querySelector('#carros');

botaoCarros.addEventListener('click', () => {
    const nomeSemEspacos = nome.value.trim();
    if (nomeSemEspacos.value === '' || idade.value === '') {
        alert('Preencha todos os campos!');
        return;
    }
    if(idade.value < 1 || idade.value > 130){
        alert('Idade inválida!');
        return;
    }
    localStorage.setItem('nome', nome.value);
    localStorage.setItem('idade', idade.value);
    localStorage.setItem('opcoes', opcoes.value);
    window.location.href = "aguarde.html";
});