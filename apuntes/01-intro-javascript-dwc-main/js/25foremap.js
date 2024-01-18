const productonti = [
    { nombre: "Tableta", precio: 50 },
    { nombre: "Televisión", precio: 500 },
    { nombre: "Celuar", precio: 100 },
    { nombre: "Laptop", precio: 400 },
    { nombre: "Computadora", precio: 800 },
];

productonti.forEach((producto) => console.log(producto));
// el argumento establecido toma cada elemento del array que usas

productonti.forEach(function () {
    console.log(`raaaaaaaaaaaa`);
});
// imprime 5 veces el string

productonti.forEach(function (probando) {
    console.log(`probando el foreach ${probando.nombre}`);
});
// el argumento establecido toma cada elemento del array que usas

productonti.map(function (aver) {
    console.log(`probando el map ${aver.precio}`);
});
// el map funciona de manera similar al foreach pero hay una diferencia, a continuacion la vemos:

// ? pregunta de entrevista tecnica: diferencia entre el forEach y el map

// * el forEach lo usarás SOLO cuando quieres imprimir elementos en pantalla o em la consola
// * el map lo usaras SOLO cuando quieres crear un arreglo o array nuevo (recuerda asignarlo a una nueva variable)
// ejemplo a continuacion

const variable1 = productonti.forEach(
    (va1) =>
        `El nombre del producto es ${va1.nombre} y su precio es de ${va1.precio} `
);

const variable2 = productonti.map(
    (va2) =>
        `El nombre del producto es ${va2.nombre} y su precio es de ${va2.precio} `
);

console.log(variable1); // ! no imprime nada por haber usado el forEach
console.log(variable2); // ! imprime lo creado por haber usado el map (EL CUAL SI CREA UNA VARIABLE)
