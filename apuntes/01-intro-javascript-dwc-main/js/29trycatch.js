
const producto1 = "raaaa"
const producto3 = "gaaaa"

console.log(producto1);
try { // esta parte trata de ejecutar el codigo
    console.log(producto2);

} catch (error) { // esta parte lee el error y lo hace a prueba de errores (es decir permite que lo demas sí se ejecute)
    console.log(error);
}
console.log(producto3);

// ! no debes poner tooodo tu codigo dentro del try. Recuerda que el try catch solo debes usarlo en situaciones especificas y criticas.