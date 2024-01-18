// POO

// object literal: no es tan dinamico
const constructorLineal = {
    nombre: "Sebastian",
    apellido: "Grandes",
    precio: 500,
};

// recuerda que asi se inserta propiedades en un object literal
const prueba = { raa: "gaa" };
prueba.insertar = "textoinsertado";
console.log(prueba);

// ! object constructor: es mas dinamico, debes usarlo solo cuando se requiera

// esto crea un objecto constructor vacio
function funzion() {}
const pruf = new funzion(); // con new funzion() creas una nueva instancia
console.log(pruf);

// * esto ya crea un objeto con propiedades establecidas dentro
function Producto(nombre, apellido, precio) {
    this.nombre = nombre; // en vez de this.nombre también puede ser this.hola o similar, pero se le coloca nombre para no confundirnos y para que tenga el mismo nombre que nuestro parametro. lo cual lo hace mas facil de leer
    // ! el this hace referencia a mi constante, es decir a mi niuObjeto en este ejemplo. debido a que solo es posible que a esta se le inserten estas propiedades
    this.apellido = apellido;
    this.precio = precio;
}

const niuObjeto = new Producto("Sebastian", "Grandes", 50); // con new Producto() creas una nueva instancia
console.log(niuObjeto);

// ! el objeto literal y el objeto constructor se muestran distintos en la consola. uno tiene forma de objeto normal (literal) y otro tiene una especie de forma de funcion (objeto constructor supongo)
