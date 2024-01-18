function leerDatos() {
    const archivo = "js/database.json"; // generalmente se crea una variable para almacenar la ruta // ! recuerda que creo que toma como referencia el espacio de trabajo de vs code
    // console.log(archivo); // me lo toma como string
    fetch(archivo)
        // console.log(archivo); // me lo sigue tomando como string
        // .then(console.log(archivo)); // me lo sigue tomando como string
        // .then(console.log(archivo.json())) // dice que lo de adentro del then no es una funcion // ! POR LO QUE SÍ O SÍ TIENE QUE SER UNA FUNCIÓN LA QUE ESTÉ DENTRO DEL THEN
        // .then((resultado) => console.log(resultado)) // obtenemos una respuesta generada por fetch API en donde no aparecen el database por ningun lado
        // .then((resultado) => console.log(resultado.json())) // si le colocas un clg al contenido del function me imprime las caracteristicas de una promesa: prototype, estado de la promesa y el ***resultado de la promesa
        .then((resultado) => resultado.json()) // le aplico el formato .json al archivo (usando el metodo o funcion .json()) y lo retorno // recuerda que el argumento resultado toma el archivo que estableciste en fetch // ! recuerda que el .json() es propio de fetch, también es importante ponerlo o retornarlo en ese formato o también puede ser en texto
        .then((datos) => {
            console.log(datos);
        }); // al imprimir "datos" se imprime solo el ***resultado de la promesa. ¿pq? -> pq esto es lo que hace el then en APIs modernas que usan promises (como el fetch), las cuales manejan automaticamente las funciones de resolve() y reject(). por ello solo usamos el then, mostrandote el resultado directamente. // ! lo explico en 32notificatiopnAPI.js
}
leerDatos();
