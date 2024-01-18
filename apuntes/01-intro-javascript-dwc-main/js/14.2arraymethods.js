const numeros = [10, 20, 30, 40, 50];
console.log(numeros);
// push unshift
numeros.push("50k", "50000k", "800k"); // añade al ultimo
numeros.unshift(-5, -9); // añade al primero
console.log(numeros);

numeros.pop(); // remueve el ultimo
numeros.shift(); // remueve el primero
console.log(numeros);

numeros.splice(2, 1); // borra desde el 2 y solo 1 vez
console.log(numeros);
numeros.splice(2, 5); // borra desde el 2 y hazlo 5 veces
console.log(numeros);

// ! NO ES UNA BUENA PRÁCTICA MODIFICAR, AGREGAR O ELIMINAR PROPIEDADES DE UN OBJETO
// para ello se recomienda mejor crear uno nuevo y copiar los elementos del original ahí

// ! spread operator (union) TMB LLAMADO REST OPERATOR
const NUMERAZOS = ["GAAAAAAAAA", ...numeros, "RAAAAAA"];
console.log(NUMERAZOS);
