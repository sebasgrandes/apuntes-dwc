// declaracion de funcion
function fuzion(numero1, numero2) {
    // ! numero1 y numero2 son parametros
    console.log(numero1 + numero2);
}
fuzion(15, 40); // ! 15 y 40 son argumentos o los valores reales
fuzion(1);

// expresion de funcion
const producto = function (n1 = 10, n2 = 2) {
    console.log(n1 * n2);
};
producto(15, 40);
producto(15);
producto();
