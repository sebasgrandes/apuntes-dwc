// mas metodos de array

// ! arreglo lineal
const numeroplix = [10, 20, 30, 40, 50];

//forma larga de encontrar
// * recuerda que for each solo es ideal para arreglos lineales
numeroplix.forEach(function (numero) {
    if (numero == 20) {
        console.log("sí existe el número 20");
    }
});
// forma corta: usando includes (es un metodo que simplifica)
console.log(numeroplix.includes(20));
// también funciona con strings

// ! arreglo de objetos
const productonti = [
    { nombre: "Tableta", precio: 50 },
    { nombre: "Televisión", precio: 500 },
    { nombre: "Celuar", precio: 100 },
    { nombre: "Laptop", precio: 400 },
    { nombre: "Computadora", precio: 800 },
];

// usando some -> si alguno de los elementos de un arreglo por ejemplo cumple con la condicion establecida. por ello vota true o false
resultado = productonti.some(function (producto) {
    return producto.precio === 500;
});
console.log(resultado);

// usando reduce: trae todos los valores (asi puedes realizar una operacion con ellos por ejemplo)
operazao = productonti.reduce(function (total, producto) {
    return total + producto.precio;
}, 0); // ! usando ese 0 reiniciars el valor de la variable total (a 0)
console.log(operazao);

// * usando filter -> filtra y retorna lo filtrado
// trae los mayores a 100
obtencion = productonti.filter(function (productox) {
    return productox.precio > 100;
});
// trae todos los que no son "Celuar"
obtencion2 = productonti.filter(function (productox) {
    return productox.nombre !== "Celuar";
});
console.log(obtencion);
console.log(obtencion2);
