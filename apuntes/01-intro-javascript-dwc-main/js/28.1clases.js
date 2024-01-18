// clases -> basicamente son (funciones especiales) una mejora que se hizo a la sintaxis (a lo que hiciste en el anterior documento: funcion que crea objetos y el prototype)
// ! recuerda que en todas las clases, la primera letra debe comenzar en mayuscula: Producto, Cliente, Precio, etc.

class Producto {
    constructor(nombre, precio) {
        // este "constructor" reemplaza a la funcion que hacía posible la creacion de tu objeto
        this.nombre = nombre;
        this.precio = precio;
    }

    formaxProducto() {
        // basicamente este es un método (funcion también). esto reemplaza también a la funcion creada con prototype (la exclusiva que fu ncionaba solo con un tipo de objeto)
        return `El nombre del artículo es ${this.nombre} y su precio es de $${this.precio}`;
    }

    formateapePro() {
        return `Artículo: ${this.nombre} | Precio: $${this.precio}`;
    }
}

const producto1 = new Producto("Laptop", 580);
const producto2 = new Producto("Celular", 120);

console.log(producto1);
console.log(producto2);

console.log(producto1.formaxProducto());
console.log(producto2.formaxProducto());
console.log(producto1.formateapePro());
console.log(producto2.formateapePro());
