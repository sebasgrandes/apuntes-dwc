const metodoPago = "transferencia";
switch (metodoPago) {
    case "tarjeta":
        console.log("el usuario pagará con tarjeta");
        break; // ! recuerda siempre poner el break después de cada case
    case "bitcoin":
        console.log("el usuario pagará con bitcoin");
        break;
    case "deposito":
        console.log("el usuario pagará con deposito");
        break;
    default:
        console.log("el usuario pagará por un metodo por defecto");
        break;
}
