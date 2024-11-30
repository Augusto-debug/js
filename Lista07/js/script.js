document.getElementById("btnLogin").addEventListener("click", function() {
    var email = document.getElementById("txtEmail").value.trim();
    var pwd = document.getElementById("txtPwd").value.trim();

    if (!email) {
        alert("Por favor, insira um e-mail.");
        return;
    }

    if (!pwd) {
        alert("Por favor, insira uma senha.");
        return;
    }

    var storedPassword = localStorage.getItem(email);
    if (!storedPassword) {
        alert("Usuário inexistente. Tente outro usuário.");
        return;
    }

    if (storedPassword !== pwd) {
        alert("Usuário existente, porém senha inválida.");
        return;
    }

    alert("Login realizado com sucesso.");
    window.location.href = "ex1.html";
});