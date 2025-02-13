document.addEventListener("DOMContentLoaded", function () {
  let btn1 = document.querySelector("#btnGerar1");
  let btn2 = document.querySelector("#btnGerar2");
  let btn3 = document.querySelector("#btnGerar3");

  btn1.addEventListener("click", function () {
    let pNovo = document.createElement("p");
    pNovo.textContent = "Novo Parágrafo";

    let div = document.querySelector("#caixa");
    div.appendChild(pNovo);
  });

  btn2.addEventListener("click", function () {
    let pNovo = document.createElement("p");
  });

  btn3.addEventListener("click", function () {
    let div = document.querySelector("#caixa");
    let divNova = document.createElement("div");
    let imgNova = document.createElement("img");
    divNova.classList.add("imgStyle");
    imgNova.setAttribute("width", "300");
    imgNova.setAttribute("height", "300");
    let pNovo = document.createElement("p");
    pNovo.textContent = "Novo Parágrafo";
    imgNova.src = "https://images.tcdn.com.br/img/img_prod/394779/bicicleta_29_gts_m1_freio_a_disco_21_marchas_tsi_ride_new_1959_variacao_7629_1_55717af42c3da4c45d32506d2d38e81e.jpg";
    div.appendChild(divNova);
    divNova.appendChild(imgNova);
    divNova.appendChild(pNovo);
  });
});
