// ++

let puntaje = 10;

// puntaje++;

let numero = 15;
// ++ -> aumenta 1 ;
console.log(puntaje++); // ! 10 COMO SUFIJO: primero se imprime "puntaje" y luego se incrementa el valor de "puntaje"
console.log(puntaje); // 11 se muestra el valor de puntaje ya incrementado
console.log(++numero); // ! 16 COMO PREFIJO: primero se incrementa el valor de "número" y luego se imprime el valor de "número" (nuevo)
console.log(numero); // 16 se muestra el valor de numerp ya incrementado
// lo mismo funciona con el --

// * aumentando un valor diferente de 1
let dinero = 51;
dinero += 100; // aumenta dinero en 100
console.log(dinero);
// recuerda que dinero += 100 es igual que poner dinero = dinero + 100 -> o sea se reasigna la variable
