
function play() {
    // en esta funcion creamos una variable la cual sera de tipo audio
    let playMe
    playMe = new Audio('../audio/screamW1.mp3'); //cargamos el archivo de audio
    playMe.preload = "auto";
    playMe.volume = .7;
    playMe.play();
    // Aqui recargamos hacia otra pagina
    setTimeout(redirigir, 2800);
}

function play2() {
    let playMe
    playMe = new Audio('../audio/KidFX.mp3');
    playMe.preload = "auto";
    playMe.volume = .9;
    playMe.play();
    console.log("play function");
    // Aqui recargamos hacia otra pagina
    setTimeout(redirigir2, 2800);
}

function redirigir2() {
    window.location.href = "./moviesA.html";
}

function redirigir() {
    window.location.href = "./movies.html";
}





