function leyendoDatosUsuarios() {
    return new Promise((resolve) => {
        console.log("leyendo base de datos... espere...");
        setTimeout(() => {
            resolve("base de datos completamente leída");
        }, 5000);
    });
}
function escribiendoKotlinUser() {
    return new Promise((resolve) => {
        console.log("escribiendo kotlin user... espere...");
        setTimeout(() => {
            resolve("kotlin user completado");
        }, 3000);
    });
}

async function app() {
    try {
        // ! los siguientes comentarios muestran la forma INCORRECTA de ejecutar 2 promesas con await
        // const resultadix = await leyendoDatosUsuarios(); // este await hace que el codigo await de abajo se ejecute despues de los 5 segundos, por lo que en total demorarían 8 segundos
        // const resultopo = await escribiendoKotlinUser();
        // console.log(resultadix);
        // console.log(resultopo);
        // * pregunnta de entrevista de trabajo: como optimizar el codigo de un async await
        // ! la forma correcta es asi: mejorando la performance, y ejecutando 2 promesas a la vez (demorarian solo 5 segundos, es decir el mayor, pq el de 3 segundos se mete dentro de el de los 5 segundos)
        const todo = await Promise.all([ // * se ejecutan las 2 funciones al mismo tiempo
            // en forma de array
            leyendoDatosUsuarios(),
            escribiendoKotlinUser(),
        ]); // recuerda que el parentesis de .all es porque es una funcion
        // console.log(todo); // esto hace que se muestre como un array
        console.log(todo[0]); // esto hace que ya muestre el elemento 0 del array
        console.log(todo[1]);
    } catch {
        console.log(error);
    }
}

app();
