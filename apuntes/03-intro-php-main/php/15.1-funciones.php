<?php
// ese declare debe estar en la parte superior
declare(strict_types=1); // tipo modo estricto, te permite ver errores (tener una mejor calidad de codigo)
// esos errores impiden la ejecucion del codigo posterior
include 'includes/header.php';

// * php tiene tipado, es decir: INT, FLOAT, ARRAY, BOOL, etc

function sumar(int $numero1 = 0, int $numero2 = 0)
{ // * le añadimos un tipado mas fuerte -> estos (int) son los tipados
    echo $numero1 + $numero2;
};

sumar(10);
echo "<br>";
sumar(10, 20);
echo "<br>";

function multi(bool $numero3, array $numero4)
{ // estos (bool) (array) son los tipados
    echo $numero3 . " " . $numero4;
};
multi(true, ["raa"]);

// ! gracias al tipado mas fuerte y strict_types evitamos este tipo de errores:

sumar(20.123, []); // * error identificado gracias al strict_types
echo "<br>";
sumar(true, "hola"); // error identificado gracias al strict_types
echo "<br>";

multi("hi", 10); // error identificado gracias al strict_types

include 'includes/footer.php';
