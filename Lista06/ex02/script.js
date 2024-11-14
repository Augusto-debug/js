const mickey = document.querySelector(".img-mickey");
const minnie = document.querySelector(".img-minnie");
const pluto = document.querySelector(".img-pluto");
const pateta = document.querySelector(".img-pateta");
const pMickey = document.querySelector(".p-mickey");
const pMinnie = document.querySelector(".p-minnie");
const pPluto = document.querySelector(".p-pluto");
const pPateta = document.querySelector(".p-pateta");
let contadorMickey = 0;
let contadorMinnie = 0;
let contadorPluto = 0;
let contadorPateta = 0;
mickey.addEventListener("click", function () {
  contadorMickey++;
  pMickey.innerHTML = "Numero de votos :" + contadorMickey;
});
minnie.addEventListener("click", function () {
  contadorMinnie++;
  pMinnie.innerHTML = "Numero de votos :" + contadorMinnie;
});
pluto.addEventListener("click", function () {
  contadorPluto++;
  pPluto.innerHTML = "Numero de votos :" + contadorPluto;
});
pateta.addEventListener("click", function () {
  contadorPateta++;
  pPateta.innerHTML = "Numero de votos :" + contadorPateta;
});