// * while

let i = 0; // 1. indice
while (i <= 100) {
    // 2. condicion (i <= 100)
    if (i % 2 === 0) {
        console.log(`El número ${i} es PAR`);
    } else {
        console.log(`El número ${i} es IMPAR`);
    }
    i++; // 3. incremento
}

const productonti = [
    { nombre: "Tableta", precio: 50 },
    { nombre: "Televisión", precio: 500 },
    { nombre: "Celuar", precio: 100 },
    { nombre: "Laptop", precio: 400 },
    { nombre: "Computadora", precio: 800 },
];
let x = 0;
while (x < productonti.length) {
    console.log(productonti[x].nombre);
    x++;
}

// * DO while
let y = 0; // 1. indice
do {
    console.log(y);
    y++; // 2. incremento
} while (y < 10); // 3. condicion (i <= 100)

// ? pregunta de entrevista: ¿EN QUE SE DIFERENCIA EL WHILE Y EL DO WHILE?

let w = 100; // 1. indice
while (w < 10) {
    // 2. condicion (i <= 100)
    console.log(`Este es el Whileeeeeeee`);
    i++; // 3. incremento
}
do {
    console.log(`Este es el DOO Whileeeeeeee`);
    w++; // ! 2. incremento
} while (w < 10); // ! 3. condicion (i <= 100)
// * cambia el orden.
// * En el While primero se verifica la condición, luego se ejecuta el código.
// * Mientras que en el DO While primero se Ejecuta el primer pedazo de codigo, y luego se verifica la condición (si esta cumple, sigue adelante. si esta no cumple, se detiene)
// de esta forma en el DO While (verificada o no la condición) el código se ejecutaría al menos una vez
