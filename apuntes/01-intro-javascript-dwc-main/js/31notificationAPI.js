const boton = document.querySelector("#boton"); // con el querySelector selecciono un elemento (mediante el ID) del documento HTML. con el const lo guardo para no estar repitiendo el mismo pedazo de código

// ! recuerda que todas la APIs modernas de JS utilizan promises (debido a que necesitan 1ero el permiso del usuario).
// ! pero las partes de resolve y reject ya lo manejan automaticamente (por ello usamos "then" directamente, sin crear una promise ni usar el resolve y reject y blabla). este es el caso con Notification
boton.addEventListener("click", () => { // addEventListener: funcion que registra un evento a la variable "boton". el 1ero es el evento que escuchamos. el 2do es lo que se ejecuta
    Notification.requestPermission() // solicito permiso para enviar notificaciones
        .then((resultado) => console.log(`El resultado es: ${resultado}`)); // con "then" muestro en la consola el resultado que presionó el usuario
});

if (Notification.permission == "granted") { // si el usuario acepta recibir notificaciones...
    new Notification("Esta es una notificación", {
        icon: "image/Sebastian.png",
        body: "Esta es una notificación realizada por Sebastian Grandes",
    });
}
