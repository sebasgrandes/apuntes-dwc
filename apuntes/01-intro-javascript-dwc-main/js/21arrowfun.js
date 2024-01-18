// creando arrow functions

/* const fun1 = function (curso) {
    console.log(`es divertido aprender ${curso}`);
}; */
const fun1 = curso => console.log(`es divertido aprender ${curso}`); // ! UNICAMENTE cuando es un solo argumento pueden obviarse los parentesis (aqui prettier los coloca automaticamente). UNICAMENTE cuando es una sola linea de codigo dentro de las llaves, estas llaves se pueden obviar
fun1("javascript"); // * así llamas la funcion, ya que esta ya tiene un console.log

const fun2 = (n1, n2) => console.log(`la suma es ${n1 + n2}`); // para varios argumentos, si se deben poner entre parentesis
fun2(50, 40); // * así llamas la funcion, ya que esta ya tiene un console.log

// * copiando lo de 15 mas methods para convertir las funciones a arrowfunctions

// mas metodos de array

// arreglo lineal
const numeroplix = [10, 20, 30, 40, 50];

// forma larga de encontrar
numeroplix.forEach(numero => {
    if (numero == 20) {
        console.log("sí existe el número 20");
    }
}); // ! el contenido de la funcion se coloca entre parentesis porque tiene varias lineas

// arreglo de objetos
const productonti = [
    { nombre: "Tableta", precio: 50 },
    { nombre: "Televisión", precio: 500 },
    { nombre: "Celuar", precio: 100 },
    { nombre: "Laptop", precio: 400 },
    { nombre: "Computadora", precio: 800 },
];

// usando some -> si alguno de los elementos de un arreglo por ejemplo cumple con la condicion establecida. por ello vota true o false

// lo de la linea 38 es reemplazado por la linea 40
// resultado = productonti.some(producto => { return producto.precio === 500; });
let resultado; // ! recuerda crear tu variable, antes de asignarla ( linea 40)
resultado = productonti.some(producto => producto.precio === 500); // ! cuando existe una sola linea de contenido de la funcion, puedes eliminar las llaves, y si SOLO TIENES UN UNICO RETURN, este return se puede obviar, así como se muestra

console.log(resultado);

// usando reduce: trae todos los valores (asi puedes realizar una operacion con ellos por ejemplo)
operazao = productonti.reduce((total, producto) => total + producto.precio, 0); // usando ese 0 reiniciars el valor de la variable total (a 0)  // ! return obviado
console.log(operazao);

// * usando filter -> filtra y retorna lo filtrado
// trae los mayores a 100
obtencion = productonti.filter(productox => productox.precio > 100); // ! return obviado
// trae todos los que no son "Celuar"
obtencion2 = productonti.filter(productox => productox.nombre !== "Celuar"); // ! return obviado
console.log(obtencion);
console.log(obtencion2);
