function leerDatos() {
    const archivo = "js/database.json"; // creamos una variable para almacenar la ruta // ! recuerda que creo que toma como referencia el espacio de trabajo de vs code
    fetch(archivo) // aplicamos fetch colocandole la ruta del archivo .json // ! el fetch utiliza promises
        .then(resultado => resultado.json()) // recuerda que con arrow functions el ultimo pedazo tiene implicito un "return". por lo que estaria retornandome el archivo. recuerda que al retornar el archivo debes indicarle al fetch que tipo de respuesta es esa, es decir, indicarle que es .json o que sera un .json (pq también podria o puede ser texto) // ! recuerda que lo que se retorna va al siguiente .then, o sea va a datos
        .then((datos) => {
            // console.log(datos); // imprime todo el contenido del database tal cual como esta, o sea imprime el objeto entero // ! PARA ESTO SIRVE EL FETCH API, PARA EXTRAERNOS LOS DATOS
            const { empleados } = datos; // usamos destructuring para acceder AL ARRAY llamado "empleados" y crear su propia variable
            console.log(empleados);
            empleados.forEach(empleado => console.log(empleado));
                // con forEach() accedemos a cada elemento del array
        });
}
leerDatos();
