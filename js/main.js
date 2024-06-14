
let audio = document.getElementById("audio");
let playButton = document.getElementById("play");
let pauseButton = document.getElementById("pause");
let stopButton = document.getElementById("stop");
function reproducirAudio() {
  audio.play();
} 
// Evento para reproducir el audio al cargar la página


function pausarAudio() {
  audio.pause();
}

// Función para detener el audio y volver al principio
function detenerAudio() {
  audio.pause();
  audio.currentTime = 0;
}



// Eventos de los botones
playButton.addEventListener("click", reproducirAudio);
pauseButton.addEventListener("click", pausarAudio);
stopButton.addEventListener("click", detenerAudio);
ScrollReveal().reveal('.imgpca');
AOS.init();


const demoLink = document.getElementById('demogra');

demoLink.addEventListener('click', () => {
  setTimeout(() => {
    Swal.fire({
      title: "MUESTRA GRATIS: ",
      text: "Te voy a regalar un diseño del sitio o app web que me pidas. En consulta colocar como seria tu sitio o app web ideal",
      
      icon: "info"
    });
    
  }, 2300);
  
  
})
// Función para reproducir el audio


