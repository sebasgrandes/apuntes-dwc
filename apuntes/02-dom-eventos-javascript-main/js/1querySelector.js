// con los querySelector también puedes seleccionar por IDBCursor, pero colocando un "#" (asi como lo haces con css)

// querySelector
const heading = document.querySelector(".header__texto h2"); // seleccionas el elemento del HTML con .querySelector, tal y como lo harias con una clase en CSS // ! recuerda que solo selecciona 0 o 1 elemento, no selecciona 2 o más
// * recuerda que retorna null cuando el elemento seleccionado esta mal escrito o no existe
heading.textContent = "Contenido modificado por JavaScript"; // con .textContent modificas el contenido seleccionado de tu HTML
console.log(heading);
// heading.classList.add("nueva-clase-creada-por-javascript"); // con esa propiedad AÑADES una clase al contenido seleccionado de tu HTML // ! recuerda que al añadir clases debes hacerlo SIN ESPACIOS

// querySelectorAll
const enlaces = document.querySelectorAll(".navegacion a"); // selecciona todos los elementos que tengan como clase .navegacion a
console.log(enlaces); // lo muestra como un array
console.log(enlaces[0]); // * imprimes el elemento n° 0 del array de tus enlaces
// también puedes usar las propiedades que modifican el html
enlaces[0].textContent = "Nuevo enlace creado con JS";
enlaces[0].classList.add("clase-creada-con-JS"); // añades 1 clase
enlaces[0].classList.remove("navegacion__enlace"); // le quito la clase seleccionada

// ya no se usa en las nuevas versiones de JS
// getElementByID
const heading2 = document.getElementById("heading");
console.log(heading);
