window.addEventListener("DOMContentLoaded", () => {
    let binario = document.getElementById("binario");
    let btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", () => {
        let padrao = /^[01]+$/;
        alert(padrao.test(binario.value) ? "Válido" : "Inválido");
    });

    let hexadecimal = document.getElementById("hexadecimal");
    let btn2 = document.getElementById("btn2");
    btn2.addEventListener("click", () => {
        let padrao = /^[\dA-F]+$/i;
        alert(padrao.test(hexadecimal.value) ? "Válido" : "Inválido");
    });

    let decimal = document.getElementById("decimal");
    let btn3 = document.getElementById("btn3");
    btn3.addEventListener("click", () => {
        let padrao = /^[\d]+,[\d]+$/i;
        alert(padrao.test(decimal.value) ? "Válido" : "Inválido");
    });

    let real = document.getElementById("real");
    let btn4 = document.getElementById("btn4");
    btn4.addEventListener("click", () => {
        let padrao = /^-?\d+(?:[.,]\d+)?$/;
        alert(padrao.test(real.value) ? "Válido" : "Inválido");
    });

    let horario = document.getElementById("horario");
    let btn5 = document.getElementById("btn5");
    btn5.addEventListener("click", () => {
        let padrao = /^\d\d\:\d\d\:\d\d$/;
        alert(padrao.test(horario.value) ? "Válido" : "Inválido");
    });

    let data_nasc = document.getElementById("data_nasc");
    let btn6 = document.getElementById("btn6");
    btn6.addEventListener("click", () => {
        let padrao = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{2}|\d{4})$/;
        alert(padrao.test(data_nasc.value) ? "Válido" : "Inválido");
    });

    let cep = document.getElementById("cep");
    let btn7 = document.getElementById("btn7");
    btn7.addEventListener("click", () => {
        let padrao = /^\d{5}-?\d{3}$/;
        alert(padrao.test(cep.value) ? "Válido" : "Inválido");
    });

    let cpf = document.getElementById("cpf");
    let btn8 = document.getElementById("btn8");
    btn8.addEventListener("click", () => {
        let padrao = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
        alert(padrao.test(cpf.value) ? "Válido" : "Inválido");
    });

    let cnpj = document.getElementById("cnpj");
    let btn9 = document.getElementById("btn9");
    btn9.addEventListener("click", () => {
        let padrao = /^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/;
        alert(padrao.test(cnpj.value) ? "Válido" : "Inválido");
    });

    let num_parenteses = document.getElementById("num_parenteses");
    let btn10 = document.getElementById("btn10");
    btn10.addEventListener("click", () => {
        let padrao = /^\([\d]+\)$/;
        alert(padrao.test(num_parenteses.value) ? "Válido" : "Inválido");
    });

    let email = document.getElementById("email");
    let btn11 = document.getElementById("btn11");
    btn11.addEventListener("click", () => {
        let padrao = /^.+@.+\..{2,3}$/;
        alert(padrao.test(email.value) ? "Válido" : "Inválido");
    });

    let ipv4 = document.getElementById("ipv4");
    let btn12 = document.getElementById("btn12");
    btn12.addEventListener("click", () => {
        let padrao = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;
        alert(padrao.test(ipv4.value) ? "Válido" : "Inválido");
    });

    let altura = document.getElementById("altura");
    let btn13 = document.getElementById("btn13");
    btn13.addEventListener("click", () => {
        let padrao = /^\d[,.]\d\d?$/;
        alert(padrao.test(altura.value) ? "Válido" : "Inválido");
    });

    let nome = document.getElementById("nome");
    let btn14 = document.getElementById("btn14");
    btn14.addEventListener("click", () => {
        let padrao = /^[A-Z][a-z]+$/;
        alert(padrao.test(nome.value) ? "Válido" : "Inválido");
    });

    let telefone = document.getElementById("telefone");
    let btn15 = document.getElementById("btn15");
    btn15.addEventListener("click", () => {
        let padrao = /^\+\d\d\(\d\d\)\d{5}-\d{4}$/;
        alert(padrao.test(telefone.value) ? "Válido" : "Inválido");
    });

    let campus = document.getElementById("campus");
    let btn16 = document.getElementById("btn16");
    btn16.addEventListener("click", () => {
        let padrao = /^(IFTM campus Uberlândia|IFTM campus Uberlândia Centro)$/;
        alert(padrao.test(campus.value) ? "Válido" : "Inválido");
    });

    let range = document.getElementById("range");
    let btn17 = document.getElementById("btn17");
    btn17.addEventListener("click", () => {
        let padrao = /^\d{1,100}$/;
        alert(padrao.test(range.value) ? "Válido" : "Inválido");
    });

    let placa = document.getElementById("placa");
    let btn18 = document.getElementById("btn18");
    btn18.addEventListener("click", () => {
        let padrao = /^[A-Z]{3}-?[0-9][A-Z0-9][0-9]{2}$/;
        alert(padrao.test(placa.value) ? "Válido" : "Inválido");
    });

    let letras = document.getElementById("letras");
    let btn19 = document.getElementById("btn19");
    btn19.addEventListener("click", () => {
        let padrao = /^[aeioubcd]+$/i;
        alert(padrao.test(letras.value) ? "Válido" : "Inválido");
    });

    let faturamento = document.getElementById("faturamento");
    let btn20 = document.getElementById("btn20");
    btn20.addEventListener("click", () => {
        let padrao = /^R\$\d{1,3}(\.\d{3}){0,3},\d{1,2}$/;
        alert(padrao.test(faturamento.value) ? "Válido" : "Inválido");
    });

    let matricula1 = document.getElementById("matricula1");
    let btn21 = document.getElementById("btn21");
    btn21.addEventListener("click", () => {
        let padrao = /^(IFTM|iftm)-\d{3}\/\d{3}-[a-zA-Z0-9]{2}$/;
        alert(padrao.test(matricula1.value) ? "Válido" : "Inválido");
    });

    let matricula2 = document.getElementById("matricula2");
    let btn22 = document.getElementById("btn22");
    btn22.addEventListener("click", () => {
        let padrao = /^(MT)-\d{2}\.\d{3}-(IFTM|iftm)$/;
        alert(padrao.test(matricula2.value) ? "Válido" : "Inválido");
    });

    let matricula3 = document.getElementById("matricula3");
    let btn23 = document.getElementById("btn23");
    btn23.addEventListener("click", () => {
        let padrao = /^(MT|mt|Mt|mT)-\d{2}\.\d{3}-(IFTM|iftm)\s?(Uberlândia|Uberlândia Centro)$/;
        alert(padrao.test(matricula3.value) ? "Válido" : "Inválido");
    });
});
