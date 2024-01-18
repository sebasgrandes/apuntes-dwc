// createElement : crear elementos en HTML usando JS

// creamdo elemento
const enlaceNuevo = document.createElement("a");
// añadiendo propiedad de href
enlaceNuevo.href = "https://google.com";
// añadiendole la propiedad de texto
enlaceNuevo.textContent = "Nuevo enlace creado con JS";
// añadiendolo una clase
enlaceNuevo.classList.add("nueva-clase-añadida-w/-JS");

// ! insertandolo en el documento HMTL
// 1. seleccionando la clase dentro del cual se insertará
const claseNavegacion = document.querySelector(".navegacion"); // * solo puedo usar el Selector normal, el All no
console.log(claseNavegacion);
// 2. usando el metodo para añadirlo
claseNavegacion.appendChild(enlaceNuevo); // appendChild = añadir hijo
console.log(enlaceNuevo);
