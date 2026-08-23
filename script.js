function mostrarPagina(pagina) {

    const paginas = document.querySelectorAll(".page");

    paginas.forEach(function(elemento) {
        elemento.classList.remove("active-page");
    });

    document.getElementById(pagina).classList.add("active-page");


    const botones = document.querySelectorAll(".menu-item");

    botones.forEach(function(boton) {
        boton.classList.remove("active");
    });

    const botonActivo = document.querySelector(
        `.menu-item[onclick="mostrarPagina('${pagina}')"]`
    );

    if (botonActivo) {
        botonActivo.classList.add("active");
    }
}


function cambiarTema() {

    document.body.classList.toggle("dark");

}
