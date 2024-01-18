let nombre = "Sebastian Grandes";
let email = "sebastiangrandesc@gmail.com";

// concatenacion
// --forma original
console.log("Nombre: " + nombre + " " + "Email: " + email);
console.log("Nombre:", nombre, "Email:", email); // las comas ya le añaden un espacio

// -- forma mas usada: template strings o
console.log(`Nombre: ${nombre} Email: ${email}`); // ! forma más usada, no olvides esto: ${variable}
