// Eventos

// ? pregunta para trabajo: diferencia entre load y DOMContentLoaded

window.addEventListener("load", () => {
    // window es un nivel mas alto que document
    // LOAD espera a que la "ventana" (window) se cargue para ejecutar la funcion. // ! es decir, LOAD espera a que el JS, CSS y HTML se carguen, también espera a que los archivos que dependen del HTML esten listos: imagenes, etc.
    console.log("ventana cargada");
});
// otra forma de hacer lo anterior
window.onload = () => {
    console.log("ventana cargada mediante otra forma");
};

document.addEventListener("DOMContentLoaded", () => {
    // ! solo espera a que el HTML se cargue, no espera al CSS o imagenes // por eso se carga más rapido, o antes que el "window"
    // * generalmente se usa este debido a que generalmente solo requerimos el html (generalmente no requerimos modificar el CSS)
    console.log("contenido del documento cargado");
});

// * recuerda que lo siguiente es un evento
window.onscroll = () => {
    // ! cada que doy scroll se ejecuta multiples veces
    // al darle scroll imprime lo del clg
    console.log("scroll...");
};

// * otra forma de poner funciones dentro del addEventListener, esto se usa cuando la funcion dentro del addEventListener es muy grande
document.addEventListener("DOMContentLoaded", imprimir); // ni si quiera tienes que ponerle parentesis

function imprimir() {
    console.log("documento cargado mediante una funcion");
}

// cualquier otro codigo
console.log("ultimo");
