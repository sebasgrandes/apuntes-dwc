// ! FOR loop

for (let i = 0; i < 10; i++) {
    // 1. indice 2. condicion 3. incremento
    console.log(i);
}

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(`el numero ${i} es impar`);
    }
}

const productonti = [
    { nombre: "Tableta", precio: 50 },
    { nombre: "Televisión", precio: 500 },
    { nombre: "Celuar", precio: 100 },
    { nombre: "Laptop", precio: 400 },
    { nombre: "Computadora", precio: 800 },
];

for (let i = 0; i < productonti.length; i++) {
    console.log(productonti[i].nombre);
}
