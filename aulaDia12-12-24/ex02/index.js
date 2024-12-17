window.addEventListener('DOMContentLoaded', function() {
    let startCounter = document.querySelector('#btnPlay');
    let pauseCounter = document.querySelector('#btnPause');
    let stopCounter = document.querySelector('#btnStop');
    let counter = document.querySelector('#contador');
    let idcontrol = null;
    startCounter.addEventListener('click', function() {
        idcontrol = setInterval(() => {
             counter.innerHTML = parseInt(counter.innerHTML) + 1;
        }, 1000);
    });

    pauseCounter.addEventListener('click', function() {
        clearInterval(idcontrol);
    });

    stopCounter.addEventListener('click', function() {
        clearInterval(idcontrol);
        counter.innerHTML = 0;
    });
}); 
