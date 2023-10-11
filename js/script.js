
const enlaceHome = document.querySelector('a[data-ct-information="Home-"]');
const imagenHome = '<img src="src/logo-reducido-savora-120_120-1.png" alt="Home">';

// Función para cambiar el contenido del enlace en función del ancho de la pantalla
function actualizarContenidoHome() {
    if (window.innerWidth > 768) {
        enlaceHome.innerHTML = imagenHome;
    } else {
        enlaceHome.textContent = 'Home'; // Mostrar solo la palabra "Home"
    }
}
// Llama a la función inicialmente y en el evento "resize" de la ventana
actualizarContenidoHome();

window.addEventListener('resize', actualizarContenidoHome);

enlaceHome.addEventListener('click', function (event) {
    event.preventDefault(); // Evitar que el enlace recargue la página
    actualizarContenidoHome(); // Cambiar el contenido del enlace "Home" al hacer clic
});

document.getElementById('menu-icon').addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    const form = document.querySelector('.form2');
    const nav = document.querySelector('.nav');
    menu.classList.toggle('show-menu');
    form.classList.toggle('show-menu');
    nav.classList.toggle('show-menu');
});

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(slideIndex) {
        slides[currentSlide].style.display = "none";
        slides[slideIndex].style.display = "block";
        currentSlide = slideIndex;
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    // Inicialmente, muestra el primer slide
    showSlide(currentSlide);

    // Cambia de diapositiva cada 2 segundos (2000 ms)
    setInterval(nextSlide, 2000);
});


