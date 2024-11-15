var nome = document.getElementById("nome");
var sobrenome = document.getElementById("sobrenome");
var exibir = document.getElementById("exibir");
var completo = document.getElementById("completo");

exibir.addEventListener("click", function(){
    completo.value = `${nome.value} ${sobrenome.value}`;
})
