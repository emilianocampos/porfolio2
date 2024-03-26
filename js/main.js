ScrollReveal().reveal('.imgpca');
AOS.init();

var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 30
});
const demoLink = document.getElementById('demogra');

demoLink.addEventListener('click', () =>{
setTimeout(() => {
  Swal.fire({
    title: "Que es solicitar una demo?",
    text: "Al solicitar una demo, me estas pidiendo que cree el diseño de tu sitio web, por lo tanto en el area de CONSULTA deberias de describir como seria tu sitio web ideal",
  
    icon: "info"
  });
  
}, 2300);


})