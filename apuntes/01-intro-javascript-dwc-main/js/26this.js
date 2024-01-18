// recuerda que con las palabras reservadas como this, forEach o los demas no puedes crear variables o constantes

// this

// el this funciona de manera similar al siguiente codigo
const producto = {
    nombre: "Sebastian",
    apellido: "Grandes",
    precio: 50,
    informacion: function () {
        console.log(
            `El nombre del cliente es ${producto.nombre} y el precio de su producto es ${producto.precio}` // no se recomienda llamar así a la propiedad, es decir, llamarla con producto.propiedad, porque cuando lo dupliques volveras a llamarlo para la nueva variable y asi sucesivamente. en cambio, para reemplazar esto existe el this, que vemos a continuacion:
        );
    },
};
producto.informacion();

// ! usando el this
const producto2 = {
    nombre: "Andrea",
    apellido: "Lino",
    precio: 200,
    informacion: function () {
        console.log(
            `El nombre del cliente es ${this.nombre} y el precio de su producto es ${this.precio}` // ! el this EN ESTE CONTEXTO, hace referencia al objeto sobre el cual se esta mandando a llamar (ejecutando) esta funcion
        );
    },
};
producto2.informacion();

// ? pregunta de entrevista tecnica: ¿que imprime el siguiente codigo? entrevista.informacion()
const entrevista = {
    nombre: "Andrea",
    apellido: "Lino",
    informacion: () =>
        console.log(
            `El nombre del cliente es ${this.nombre} y el precio de su producto es ${this.precio}`
        ),
};
entrevista.informacion(); // * imprime UNDEFINED debido a que hace un llamado a la ventana global, es decir a la ventana de windows. para que funcione podrias crear una propiedad llamada window.nombre = "nombrecitoxdxd"
// ! para que haga this.nombre haga un llamado a "Andrea" y this.precio haga un llamado a "Lino", NO DEBES USAR el arrow function, sino el normal, es decir, function()
