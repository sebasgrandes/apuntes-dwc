// "use strict"; // ! CORRE JS EN MODO ESTRICTO, IDENTIFICANDO LAS BUENAS Y MALAS PRACTICAS DE TU CODIGO. recuerda que si encuentra un error en este modo, las demás lineas debajo del error dejan de funcionar
const objetin = {
    producto: "raaa",
    tienda: "taaaaaaa",
    precio: 457, // esta ultima coma puede obviarse
};

// sabes que se pueden 1. asignar y 2. eliminar propiedades de un objeto, así como 3. modificarlas
objetin.imagen = "IMAGEEEEEEEEEEN";
objetin.producto = "PRODUCTIN";

console.log(objetin);

// ! usando freeze puedes congelar el objeto, impidiendo que se realicen 1. 2. y 3.
// ? lo congelamos para probar el seal
// Object.freeze(objetin);
// objetin.congelacionXD = "probando";
// delete objetin.tienda;
// console.log(objetin);

// ! usando seal haces lo mismo, impides que se realice 1. y 2. 3. PERO NO 3. (MOFIFICAR)

Object.seal(objetin);
objetin.precio = 55555;
console.log(objetin);
