// objetos
const object = {
    producto: "raaa",
    tienda: "taaaaaaa",
    precio: 457, // esta ultima coma puede obviarse
};
console.log(object);
console.log(object.precio); // ! FORMA MÁS USADA -- la sintaxis que se usa es o parece de metodo

console.log(object["precio"]); // esta forma no es comun

// agregar y quitar valores al objeto
object.imagen = "IMAGEEEEEEEEEEEEEEEEEEEEEEEN";
delete object.tienda;
console.log(object);

// ! NO ES UNA BUENA PRÁCTICA MODIFICAR, AGREGAR O ELIMINAR PROPIEDADES DE UN OBJETO
// para ello se recomienda mejor crear uno nuevo y copiar los elementos del original ahí
