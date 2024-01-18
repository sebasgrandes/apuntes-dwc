// ! --------------- Declaración de función
function mi1erafuncion() {
    console.log(10 + 20);
}
mi1erafuncion(); // mando a llamar mi funcion

// ! --------------- Expresión de la función: como variable
const reutilizar = function () {
    console.log(2 * 6);
};
reutilizar(); // mando a llamar mi funcion

// recuerda
console.log(otroArchivo); // imprimiendo variable del archivo 16.2fun, se imprime solo si el archivo que lo contiene se llama antes que este archivo

// * --------------- IIFE: funciones que no necesitan llamarse pq se llaman a sí mismas, no se crean para reutilizarse
(function () {
    const privado = 10;
    console.log(privado);
})(); // con el ultimo "()" mandas a llamar tu función
// ! recuerda que este tipo de funcion (IIFE) se utiliza solo cuando quieres reservar o evitar que las variables y funciones que crees dentro de ella no interfieran con otras, incluso de otros archivos
console.log(privado); // no imprime la variable porque lo creaste dentro de tu IIFE
// ? por qué se utiliza esto? porque en js es posible leer las variables de otro documento, como se muestra en la linea 13
