const object = {
    producto: "raaa",
    tienda: "taaaaaaa",
    precio: 457, // esta ultima coma puede obviarse
};

// forma original, no recomendada
const nombreProducto = object.producto;
const precio = object.precio;
console.log(nombreProducto);
console.log(precio);

// ! forma RECOMENDADA
const { tienda } = object;
const { producto } = object;
console.log(tienda);
console.log(producto);

// ! TAMBIÉN SE PUEDE HACER ABREVIADO CON COMAS
const ojieto = {
    noomber: "andrea",
    ruuuga: "sebastian",
    laaaate: 120, // esta ultima coma puede obviarse
};
const { ruuuga, laaaate, noomber } = ojieto;
console.log(ruuuga, laaaate, noomber);
