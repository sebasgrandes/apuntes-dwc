function leyendoDatosUsuarios() {
    return new Promise((resolve) => {
        console.log("leyendo base de datos...");
        // ! el 1er valor del setTimeout SÍ O SÍ tiene que ser una función
        setTimeout(() => {
            resolve("base de datos completamente leída");
        }, 5000);
    });
}

// el async (codigo de ejecucion asincrona) se ejecuta de forma paralela al resto del codigo, es de cir, permite que el resto del codigo se ejecute sin necesidad de que este async termine de ejecutare (lo cual sería el comportamiento normal de JS)
async function app() {
    try {
        console.log(
            "este codigo no se bloquea debido al async (ejecucion asincrona)"
        );
        const resultadix = await leyendoDatosUsuarios(); // ! el await funciona de manera similar al "then" en un Promise, pero para el ASYNC. con el await decimos que una vez todo el codigo dentro de la promesa se ejecute, continue ejecutando el codigo restante del async
        console.log(resultadix);
        console.log("este código si se bloquea (debido al await)");
    } catch {
        console.log(error);
    }
}

app();

console.log("este codigo no se bloquea debido al async (ejecucion asincrona)");
