// promesas
// en este caso se usa todo como arrow function
const usuarioAutenticado = new Promise((resolve, reject) => { // resolve se ejecuta cuando el promise se cumple. en caso de que no se cumpla se ejecuta el reject
    const auth = true;
    if (auth) {
        // ! el auth simboliza true o false, depende de como lo establezcas en su declaración, es decir, arriba en la linea 2
        return resolve("Usuario autenticado correctamente"); // el promise se cumple
    } else {
        return reject("Error en la autenticación del usuario"); // el promise NO se cumple
    }
});

console.log(usuarioAutenticado);
/* 
! en los promises existen 3 valores posibles:
pending: no se ha cumplido pero tampoco se ha rechazado
fulfilled: ya se cumplió el promise
reject: se rechazó o no se pudo cumplir
*/

// ! con lo siguiente accedes a los valores del promise
usuarioAutenticado
    .then(resultado => console.log(resultado)) // con .then se lee el resolve. "resultado" toma el valor de "Usuario autenticado correctamente"
    .catch(error => console.log(error)); // con .catch se lee el reject. "error" toma el valor de "Error en la autenticación del usuario"


// también puedes personalizarlo
const userAutentic = new Promise((resolverpe, rechazarpe) => {
    const autentic = false;
    if (autentic) {
        return resolverpe("Usuario autenticado correctamente");
    } else {
        return rechazarpe("Error en la autenticación del usuario");
    }
});

console.log(userAutentic);

userAutentic
    .then((resultadoncio) => console.log(resultadoncio))
    .catch((erroroncio) => console.log(erroroncio));