document.addEventListener("DOMContentLoaded", function() {
    var email = document.getElementById("txtEmail");
    var pwd = document.getElementById("txtPwd");
    var btnCadastrar = document.getElementById("btnCadastrar");

    btnCadastrar.addEventListener("click", function () {
        var emailValue = email.value.trim();
        var pwdValue = pwd.value.trim();

        if (emailValue === "") {
            alert("Por favor, insira um e-mail.");
            return;
        }

        if (pwdValue === "") {
            alert("Por favor, insira uma senha.");
            return;
        }

        if (!email.checkValidity()) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }

        if (localStorage.getItem(emailValue)) {
            alert("Usuário já existente. Tente outro.");
            return;
        }

        if (pwdValue.length < 5) {
            alert("Senha inválida. Informe uma senha contendo pelo menos 5 caracteres.");
            return;
        }

        if (typeof (Storage) !== "undefined") {
            localStorage.setItem(emailValue, pwdValue);
            alert("Cadastro realizado com sucesso.");
        } else {
            alert("Desculpe, seu navegador não suporta Web Storage.");
        }
    });
});