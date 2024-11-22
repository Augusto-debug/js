const botaoEntra = document.querySelector('.entrar');
const usuario = document.querySelector('#userName');
const senha = document.querySelector('#senha');



botaoEntra.addEventListener('click', (e) => {
    e.preventDefault();
    if (usuario.value === "" || senha.value === "") {
        alert('Informe usuário e senha');
        usuario.value = "";
        senha.value = "";
    } else if (usuario.value.toLowerCase() === "visitante" && senha.value != "") {
        window.location.href = "visitantes.html";
    }else{
        window.location.href = "construcao.html";
    }
});

