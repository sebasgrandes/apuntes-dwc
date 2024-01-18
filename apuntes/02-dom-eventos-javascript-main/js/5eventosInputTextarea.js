// eventos de los inputs y textarea

// selecciono con querySelector los ID de cada input del formuario
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

const datos = {
    // ! creamos un objeto cuyas propiedades tengan el mismo nombre que los ID del input // esto para almacenar los datos que registremos con "addEventListener"
    nombre: "",
    email: "",
    mensaje: "",
};

nombre.addEventListener("input", imprimirfun); // usamos input en vez de submit
email.addEventListener("input", imprimirfun);
mensaje.addEventListener("input", imprimirfun);

function imprimirfun(e) {
    // console.log(e); // * e lee el evento (y toda su info)
    // console.log(e.target); // * e.target muestra informacion sobre el elemento donde realizamos la accion, en esta caso es el input
    // console.log(e.target.value); // * e.target.value muestra el valor que escribe el usuario EN EL target (INPUT)
    datos[e.target.id] = e.target.value; // ! asignamos el valor que escribe el usuario y lo GUARDAMOS EN NUESTRO OBJETO (mencionando el ID debido a que estos son iguales a las propiedades de nuestro objeto. en datos[], al escribir e.target.id en lugar de la misma propiedad "nombre" o "email" o "mensaje", LO HACEMOS MÁS DINÁMICO)
    console.log(datos);
}
