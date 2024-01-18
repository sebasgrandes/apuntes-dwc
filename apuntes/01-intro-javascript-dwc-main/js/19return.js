let total = 0;
function añadirCarrito(precio) {
    return (total += precio); // asigna total = 15, y lo imprime
}
total = añadirCarrito(100);
total = añadirCarrito(200);
total = añadirCarrito(300);

console.log(total); // imprime el valor de total, es decir 100+200+300

function calcularIGV(valor) {
    return 1.15 * valor;
}

const totalPagar = calcularIGV(total);

console.log(`El total a pagar es de: ${totalPagar}`);
