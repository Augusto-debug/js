window.addEventListener("DOMContentLoaded", function () {
  var txtInfo = document.getElementById("txtInfo");
  var btnValidar = document.getElementById("btnValidar");

  btnValidar.addEventListener("click", function () {
    //let padrao = /\d/; // é um padrão que verifica se contém números
    //let padrao = /^\d/; // é um padrão que verifica se começa com números
    //let padrao = /\d$/; // é um padrão que verifica se termina com números
    //let padrao = /^\d$/; // Valida se há um numero
    //let padrao = /^\d\d$/; // Valida dois numeros
    //var padrao = /^IFTM-\d{4,6}-(TSPI|LCO|MKT):\d[A-Z]$/; 
    //let padrao = /^\d{5}-\d{4}$/; // Valida numero telefone
    //var padrao = /^(I|i)(F|f)(T|t)(M|m)-\d{4,6}-(TSPI|LCO|MKT):\d[A-Z]$/;
    // let ddd = /^\(\d{2,3}\)\d{4,5}-\d{4}$/; // Valida numero telefone com DDD
    // let dataAniversario = /^\d{2}\/\d{2}\/\d{4}$/; // Valida data de aniversario
    // let cep = /^\d{2}\.\d{3}\-\d{3}$/; // Valida CEP
    // let test1 = /^(M|F|Masculino|Feminino)$/i; // Ignora o case sensitive  
    // let espaco = /^IFTM\s{1, 3}TSPI$/; // /s meta caracter de espaço
    // let espaçoInfinito =/^IFTM\s{1,}TSPI$/; // 1 espaçp em brano no minimo e infinito no maximo
    // let espaçoOpcional =/^IFTM\s?SPI$/; // Espaço opcional(0 ou 1)
    // let hexadecimal = /^[0-9A-F]{1,}$/i;
    // let hexadecimalOtimizDO = /^[0-9A-F]+$/i;
    // let negacao = /^[^+-*]+$/; // Negação 
    // let hora2 = /^\d{2}:\d{2}$/;
    const email = /^[A-Za-z0-9]+@[a-z]+\.[a-z]{2,}\.[a-z]{2}$/;
    if (email.test(txtInfo.value)) {
      alert("Email Valido");
    } else {  
      alert("Email Invalido");
    }
  });
});

