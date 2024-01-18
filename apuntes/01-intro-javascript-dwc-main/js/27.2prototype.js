// ! recuerda que todas estas sintaxis de prototype son las anteriores, antes de la revolucion de js777

// object constructor 1
function Producto(articulo, precio) {
    this.articulo = articulo;
    this.precio = precio;
}

const producto1 = new Producto("Laptop", 580);
const producto2 = new Producto("Celular", 120);
console.log(producto1); // aqui en el console.log (si borras todo el codigo de abajo) el objeto aparece sin su propia función dentro del [[Prototype]]

// object constructor 2
function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

const cliente1 = new Cliente("Sebastian", "Grandes");
console.log(cliente1);

// ! problema: puedes crear demasiadas funciones que no son compatibles con todos tus objects constructors, por ejemplo:
function formatearProducto(producto) {
    return `El articulo es ${producto.articulo} y su precio es de $${producto.precio}`;
}

console.log(formatearProducto(producto1)); // ok
console.log(formatearProducto(cliente1)); // NO ok, esta mal, porque las propiedades no son las mismas. POR LO QUE a partir de aqui tendras que crear oootra funcion que funcione con tu variable cliente1, y así sucesivamente (más funciones), del mismo modo.

// ! para evitar esto se usan los prototypes, con la cual puedes crear funciones que pertenecen (esten asociadas, se utilicen) UNICA Y EXCLUSIVAMENTE a aquellos TIPOS de objetos a los que les establezcas (como por ejemplo que funcione solo con el tipo de objetos de Producto, es decir, los objetos producto 1 y producto 2). Y NO PERTENECEN NI FUNCIONAN CON ALGÚN OTRO TIPOS DE OBJETO MÁS (como por ejemplo el de Producto). ASI también tenemos un codigo mas organizado

// * creando una funcion, usando prototype: para que solo pertenezca al object constructor Producto
Producto.prototype.formaxProducto = function () {
    // tiene que tener el mismo nombre del tipo de objeto
    // aqui ya no es necesario establecer parametros en la función, debido a que ya esta atado al tipo de objeto llamado Producto. es decir...
    return `El nombre del articulo es ${this.articulo} y el precio de este es $${this.precio}`;
    // ahora podemos acceder con el THIS
};
console.log(producto1); // aqui en el console.log RECIÉN el objeto aparece CON su propia función (formaxProducto) dentro del [[Prototype]]
console.log(producto1.formaxProducto()); // * funciona
console.log(producto2.formaxProducto()); // * TAMBIÉN funciona

// el siguiente codigo lo borro pq sino lo demás de abajo no corre
// console.log(cliente.formaxProducto()); // usando la funcion formaxProducto con el object constructor Producto... VERÁS QUE NO FUNCIONA // * veras que en la consola dice que formaxProducto NO ES una funcion de los objetos creados con el object constructor Producto. POR LO QUE TENDRÁS QUE CREAR UNA FUNCION PROPIA PARA CLIENTE

Cliente.prototype.formaxCliente = function () {
    return `El nombre del cliente es ${this.articulo} y su apellido es ${this.apellido}`;
};
console.log(cliente1.formaxCliente()); // ! RECIÉN funciona
    