window.addEventListener("DOMContentLoaded", function () {
    const box = document.getElementById("box");
    const boxColor = {in:"red", out:"pink"};
    
    box.addEventListener("mouseenter", function () {
        box.classList.toggle("mouseout");
        box.classList.add("mousein");
    })

    box.addEventListener("mouseout", function () {
        box.classList.remove("mousein");
        box.classList.add("mouseout");
    })
})