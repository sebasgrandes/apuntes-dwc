// * usamos addEventListener con "click" y "submit" para ver sus diferencias
const btnClick = document.querySelector(".boton--primario");
btnClick.addEventListener("click", (e) => { // ! lo asocio al boton
    e.preventDefault();
    console.log("enviando formulario...");
});

// evento submit
const formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", (e) => { // ! para usar este submit, es importante que si o si en el codigo de formulario de tu HTML tengas la etiqueta de type="submit" (no importa si usas el codigo de button o input) // lo asocio al formulario
    e.preventDefault();
    console.log("ENVIANDO FORMULARIO...");
});

// * al presionar el boton de enviar, y ver la consola, aparece el clg del 1er evento ("click") debido a que su preventDefault() también evita que el 2do evento ("submit") se ejecute (es decir, que se envie el formulario).
// ? entonces... cuando usas click y submit?
// submit sí o sí lo debes usar siempre cuando se traten de formularios (también es considerada buena practica)
// click lo usas cuando se traten de botones (que no sean de formularios), enlaces u otro cualquier elementos. por ejemplo el boton de "me gusta" de facebook o el boton de "agregar al carrito" de  un e-commerce
// ! recuerda que, mientras el "click" está asociado al boton, el "submit" está asociado al formulario. ello lo puedes ver en tus constantes