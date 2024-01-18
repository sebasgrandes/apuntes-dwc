// ! refactoring: consiste en simplificar o hacer mas corto tu codigo. esto con el objetivo de que sea más rapido, ligero y que tu web cargue mas rapido.
// para refactorizar, no se recomienda hacerlo desde el inicio porque te liarás. se recomienda primero hacer que, aunque este feo, hacer que tu codigo funcione. una vez que funcione recién ves la forma de realizar el refactoring. asi que recuerda, 1ero has feo tu codigo, luego realizas el refactoring

// aqui se realizara el refactoring para juntar 2 funciones similares en una sola que realice la misma funcion

const datos = {
    nombre: "",
    email: "",
    mensaje: "",
};
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", imprimirfun);
email.addEventListener("input", imprimirfun);
mensaje.addEventListener("input", imprimirfun);
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const { nombre, email, mensaje } = datos;
    if (nombre === "" || email === "" || mensaje === "") {
        mostrarAlerta("Todos los campos son obligatorios", true);
        return;
    }
    mostrarAlerta("Mensaje entregado con éxito");
});

// evento submit
function imprimirfun(e) {
    datos[e.target.id] = e.target.value;
}

function mostrarAlerta(mensaje, error) {
    const alerta = document.createElement("p");
    alerta.textContent = mensaje;
    if (error) { // ! si error se reemplaza por null entonces no se ejecuta el "if", sino el "else" // * por que en vez de usar null por defecto no declaro un false o no uso una expresion como si.. error = true o false blabla...?. porque se haria un poco mas largo el codigo. de esta manera, el poner en el if solo un "error" simplificas tu codigo y es lo unico que necesitas para que funcione, lo haces corto y blabla
        alerta.classList.add("error");
    } else {
        alerta.classList.add("correcto");
    }
    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 3000);

}

// * la funcion anterior (refactorizada) reemplaza a las 2 siguientes funciones:
// // * 1. correcto
// function mostrarCorrecto(mensaje) {
//     const correcto = document.createElement("p");
//     correcto.classList.add("correcto");
//     correcto.textContent = mensaje;
//     formulario.appendChild(correcto);
//     setTimeout(() => {
//         correcto.remove();
//     }, 3000);
// }
// // * 2. error
// function mostrarError(mensaje) {
//     const error = document.createElement("p");
//     error.classList.add("error");
//     error.textContent = mensaje;
//     formulario.appendChild(error);
//     setTimeout(() => {
//         error.remove();
//     }, 3000);
// }