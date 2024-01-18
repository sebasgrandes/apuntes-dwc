// seleccionar elementos y asociarles un evento

// ! estructura tu codigo de la siguiente forma: 1. constantes 2. addEventListener 3. funciones

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
    // ! validando formulario
    const { nombre, email, mensaje } = datos; // ! desctructuring: creamos variables del objeto y extraemos sus valores. esto con el fin de usarlo (validarlo) en el siguiente if
    if (nombre === "" || email === "" || mensaje === "") {
        mostrarError("Mensaje entregado con éxito");
        return; // ! corta la ejecución del codigo. evitando que el codigo de abajo no se ejecute. esto se usa cuando por ejemplo para que cuando no valide mi formulario, no se ejecute mi funcion correcto()
    } // ? si el correcto() lo pones dentro de un else { }, no tendria sentido pq el return lo cortaria?
    mostrarCorrecto("Todos los campos son obligatorios");
});

// evento submit
function imprimirfun(e) {
    datos[e.target.id] = e.target.value;
    // console.log(datos);
}

// * BACAN: crear funciones para mostrar los mensajes correctos e incorrectos en pantalla, de tal manera que dentro de las funciones se creen las mismas constantes, contenido y el appendChil. crear funciones asi creo que es una buena practica, pq agrupas por funcionalidad y no lo usas o no creas variables hasta que no sea necesario, y con necesario me refiero a hasta cuando las vayas a usar, por ejemplo al hacer click a un boton. creando funciones también agrupas, etc. buena!
// ! creando elementos HTML para que aparezcan en pantalla, como parte de la validacion de formulario
// * 1. exito
function mostrarCorrecto(mensaje) {
    const correcto = document.createElement("p"); // recuerda que puede ser un p o un P (minuscula o mayuscula)
    correcto.classList.add("correcto");
    correcto.textContent = mensaje;
    formulario.appendChild(correcto); // ! agregandolo al HTML
    // desaparezca después de 3 segundos
    setTimeout(() => {
        correcto.remove();
    }, 3000);
}
// * 2. error
function mostrarError(mensaje) {
    const error = document.createElement("p");
    error.classList.add("error");
    error.textContent = mensaje;
    formulario.appendChild(error); // ! agregandolo al HTML
    // desaparezca después de 3 segundos
    setTimeout(() => {
        error.remove();
    }, 3000);
}
