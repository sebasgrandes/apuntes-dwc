// ! strings

// estos son strings:
const producto = 'raa 20"'; // también puedes usar comillas simples y no las dobles. recuerda que si quieres usar las " como un string propiamente, debes usar la barra invertida: \ para evitar conflictos
const producto2 = String("taaaa");
// esto no es un String, es un objeto. ello por usar el new
const producto3 = new String("gaaaa");

console.log(producto);
console.log(producto2);
console.log(producto3);

console.log(typeof producto); // el console.log ya es una funcion pq este lleva los parentesis "()"
console.log(typeof producto2);
console.log(typeof producto3); // aqui veras que es jun tipo objeto

// ! metodos

const curso =
    "Aprendiendo JavaScript con el curso de Desarrollo Web Completo de Juan De la Torre";

// length
console.log(curso.length); // el length es un metodo pq este lleva un punto antes "."
// IndexOf
console.log(curso.indexOf("JavaScript")); // este bota la posicion, votará -1 si es que no se encuentra
// includes
console.log(curso.includes("JavaScript")); // este vota V o F
