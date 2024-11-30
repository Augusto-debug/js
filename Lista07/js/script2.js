document.addEventListener("DOMContentLoaded", function() {
    var boy = document.getElementById("boy");
    var textBoy = document.getElementById("textBoy");
    var btnSair = document.getElementById("btnSair");

    var nome = "";

    var personagem = {
        alegre: { img: "img/alegre.png", msg: "", tipo: "alegre" },
        assustado: { img: "img/assustado.png", msg: "O que você quer?", tipo: "assustado" },
        nervoso: { img: "img/nervoso.png", msg: "Não me faça perder o meu tempo!!!", tipo: "nervoso" },
        pensativo: { img: "img/pensativo.png", msg: "zzzzzzz!", tipo: "pensativo" }
    };

    function changeBoy(personagem) {
        boy.src = personagem.img;
        textBoy.innerHTML = personagem.msg;

        boy.classList.remove('animateMove', 'shake');
        if (personagem.tipo === "alegre") {
            boy.classList.add('animateMove');
        } else if (personagem.tipo === "nervoso") {
            boy.classList.add('shake');
        }
    }

    boy.addEventListener("mouseenter", function() {
        changeBoy(personagem.assustado);
    });

    boy.addEventListener("mouseleave", function() {
        changeBoy(personagem.alegre);
    });

    btnSair.addEventListener("click", function() {
        changeBoy(personagem.pensativo);
    });
});