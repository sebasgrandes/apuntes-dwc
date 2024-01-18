// Herencia

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formaxProducto() {
        return `El nombre del artículo es ${this.nombre} y su precio es de $${this.precio}`;
    }

    muestraPrecio() {
        console.log(this.precio);
    }
}

// ! asi se realiza la herencia, esto quiere decir que la clase Libro hereda todo lo de la clase Producto
class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio); // ! con el "super" jalas las lineas 5 y 6 (que crean las propiedades) del constructor de la clase Producto. basicamente este super es igual a poner: this.nombre = nombre; this.precio = precio;. JALAS IGUALITO DE LA CLASE PRODUCTO
        this.isbn = isbn; // le añades una propiedad más
    }
    formaxProducto() { // aqui estas sobre escribiendo. entre comillas, pq esto solo sirve para la clase Libro. también puedes crear un metodo nuevo para la clase Libro, es decir: en vez de poner formaxProducto, puedes poner formaxLibro
        return `${super.formaxProducto()}, ADEMÁS SU ISBN ES ${this.isbn}`;
        // ! ${super.formaxProducto()} -> solo funciona con return. jala el return del metodo (funcion) formaxProducto de la clase Producto. recuerda esta sintaxis y no te equivoques
    }
    muestraPrecio() { // sobre escribiendo para la clase Libro
        super.muestraPrecio(); // jalando igualito de la clase Producto
        console.log(this.isbn);
    }
}

// diferencia entre ${super.formaxProducto()} y super.muestraPrecio(). cuando tienes un return lo agregas como template string, es decir el 1ero. en cambio cuando son variables o funciones NO lo agregas como template string 

const producto1 = new Producto("Laptop", 580);
const libro1 = new Libro("Revolución JS", 10, 98745624187);

console.log(producto1);
console.log(producto1.formaxProducto());
console.log(producto1.muestraPrecio());
console.log(libro1);
console.log(libro1.formaxProducto());
console.log(libro1.muestraPrecio());
