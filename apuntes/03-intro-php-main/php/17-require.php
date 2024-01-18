<?php

// include: incluye otros archivos para hacerlo mas facil de reutilizar y evitar la repeticion de codigo (este header.php puedo colocarlo en los 5 millones de productos de mi e-commerce)
include 'includes/header.php'; // la ruta puede ir entre parentesis  // ! recuerda que es ruta relativa (es decir, el espacio de trabajo en donde esta el presente archivo)


// require: otra forma de agregar archivos.
// require 'includes/header.php';

// ? cuando utilizo require e include
// require: utiliza cuando tengas funciones que son criticas para tu aplicación, como una funcion para la conexion para la base de datos. tal que cuando falla al encontrar o cargar el archivo EL REQUIRE SE ENCARGA DE QUE LA APLICACIÓN NO SE EJECUTE (es decir, se detenga todo)
// include: cuando quieras incluir otros templates. tal que cuando falla el incluir el template (tu aplicacion no funcione al 100%) va a seguir funcionando (no se detiene) o seguir cargando el archivo // depende de la configuracion también
// require_once: igual que require pero primero revisa si tu archivo fue incluido, cosa que si no ha sido incluido entonces lo incluirá

// ! aplicando
require 'funciones.php'; // importo mi codigo de otro archivo
iniciarApp();

include 'includes/footer.php';
