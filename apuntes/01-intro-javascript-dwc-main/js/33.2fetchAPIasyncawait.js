// function leerDatos() {
// const archivo = "js/database.json";
// fetch(archivo)
//     .then(resultado => resultado.json())
//     .then(datos => {
//         const { empleados } = datos;
//         console.log(empleados);
//         empleados.forEach(empleado => console.log(empleado););
//     });
// }
// leerDatos();

// * usando async y await
async function readDatos() {
    const archivo = "js/database.json";
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    const { empleados } = datos;
    console.log(empleados);
}
readDatos();
