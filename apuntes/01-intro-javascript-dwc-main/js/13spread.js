const producto = {
    nombre: "raaa",
    tienda: "taaaaaaa",
    precio: 457, // esta ultima coma puede obviarse
};

const addons = {
    peso: "1kg",
    cantidad: 578,
};

// spread operator (union) TMB LLAMADO REST OPERATOR

const productocompleto = { ...producto, ...addons }; // ! UNE AMBOS OBJETOS
console.log(producto);
console.log(productocompleto);
