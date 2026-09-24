document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById("botonSpoiler");
    const curiosidad = document.getElementById("curiosidad");

    if (boton && curiosidad) {
        boton.addEventListener("click", () => {
            curiosidad.classList.toggle("oculto");

            if (curiosidad.classList.contains("oculto")) {
                boton.textContent = "Mostrar curiosidad";
            } else {
                boton.textContent = "Ocultar curiosidad";
            }
        });
    }

    // Marca la página actual en el menú
    const enlaces = document.querySelectorAll("nav a");

    enlaces.forEach(enlace => {
        if (enlace.href === window.location.href) {
            enlace.style.background = "white";
            enlace.style.color = "#9c6ca0";
        }
    });
});