const btnClick = document.querySelector(".boton--primario");
btnClick.addEventListener("click", (e) => {
    // el argumento "e" registra el "evento ejecutado"
    console.log(e); // muestra más informacion sobre el evento: en este caso "click"
    console.log(e.target); // muestra el input del evento que realizamos
    e.preventDefault(); // ! previene (evita) el comportamiento normal (o accion por default) al darle click al boton de enviar. o sea previene que se actualice la página // esto es util para validar un formulario
    // ! el preventDefault() en este caso hace que la información del formulario no se envie
    // preventDefault() lo que haria en un enlace sería no llevarme hacia la página a donde apunta ese enlace. es decir, evita la accion por default
    console.log("enviando formulario..."); // si colocas esta linea de codigo solita, el texto aparecerá y se desaparecerá. ¿pq? Por el comportamiento normal del boton de enviar formulario, el cual es enviar el formulario y recargar la pagina creo. el comportamiento normal del enlace "nosotros" es llevar hacia esa página, etc etc
});
