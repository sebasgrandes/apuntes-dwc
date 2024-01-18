// HOSISTING EN JAVASCRIPT
// en javascript el codigo de un archivo entero se ejecutaen 2 etapas: en la 1era es la de creación (o registro), en donde se registran todas las funciones (y variables). Y la 2da es la de EJECUCIÓN en donde ejecuta el código (o lo manda a llamar)

// * --------------- declaracion de la funcion
// ! hoisting por etapas: 1. se registra (crea) el function de abajo. 2. se imprime la funcion funk()
funk();
function funk() {
    console.log("funk se imprime");
}

// * --------------- expresion de la funcion: como variable
// ! hoisting por etapas: 1. se registra (crea) LA VARIABLE const fuzion. 2. NO se imprime la funcion funk() porque esta no se ha creado
/*
el codigo de abajo se desarrolla en hoisting de la siguiente manera:
1.
const fuzion; // * se crea la funcion
2.
fuzion() // * no se imprime nada porque no se registró la funcion sino la variable
fuzion = function () { ............} // * recién se asigna el la funcino a la variable
? capicchi ?
*/
fuzion();
const fuzion = function () {
    console.log("fuzion 1 NO se imprime");
};
