window.addEventListener("DOMContentLoaded", () => {
    const nome = document.getElementById("nome");
    const sobrenome = document.getElementById("sobrenome");
    const senha = document.getElementById("senha");
    const sexo = document.getElementById("sexo");
    const btnEnviar = document.getElementById("enviar");
    const validacaoRegex = /^(REC|RECUPERAÇÃO)-Jsbásico:\(1\)[2-5]{2}$/;
    btnEnviar.addEventListener("click", () => {
        if(nome.value === "" || nome.value === null || sobrenome.value === "" || sobrenome.value === null){
            alert("Favor informar o NOME e SOBRENOME");
        } else if(senha.value === "" || senha.value === null || !validacaoRegex.test(senha.value)){
            alert("Senha deve seguir o padrão solicitado");
        }
        const nomeCompleto = {
            nome: nome.value,
            sobrenome: sobrenome.value
        }
        localStorage.setItem("usuario", JSON.stringify(nomeCompleto));
        if (sexo.value === "1") {
            location.href = "masculino.html";
        } else {
            location.href = "feminino.html";
        }
    })
})