window.addEventListener("DOMContentLoaded", () => {
    const mario = document.getElementById("mario");
    const luigi = document.getElementById("luigi");
    const img = document.getElementById("img");
    const marioContador = document.getElementById("marioC");
    const luigiContador = document.getElementById("luigiC");
    mario.addEventListener("click", () => {
        img.src = "Imagens/mario.gif";
        const textoAtualMario = marioContador.innerHTML;
        const numeroAtualMario = parseInt(textoAtualMario.replace("Contador do Mário:", "").trim()) || 0;
        marioContador.innerHTML = `Contador do Mário: ${numeroAtualMario + 1}`;
    });

    luigi.addEventListener("click", () => {
        img.src = "Imagens/luigi.gif";
        const textoAtualLuigi = luigiContador.innerHTML;
        const numeroAtualLuigi = parseInt(textoAtualLuigi.replace("Contador do Luigi:", "").trim()) || 0;
        luigiContador.innerHTML = `Contador do Luigi: ${numeroAtualLuigi + 1}`;
    });
})