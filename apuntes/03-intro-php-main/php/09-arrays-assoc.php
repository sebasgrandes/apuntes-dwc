<?php include 'includes/header.php';

// los arrays asociativos en php son como los objetos en js

$cliente = [
    "nombre" => "Sebastian Grandes",
    "saldo" => 300,
    "informacion" => [
        "tipo" => "premium",
        "disponible" => 100,
    ]
];

var_dump($cliente);
echo "<br>";
var_dump($cliente["nombre"]);
echo "<br>";
echo "<pre>";
var_dump($cliente["informacion"]);
echo "</pre>";
echo "<br>";

echo $cliente["informacion"]["tipo"];

// * agregando propiedad a mi arreglo A
$cliente["codigo"] = 20190155;
$cliente["nombre"] = "Andrea Lino"; // * reescribiendo
echo "<pre>";
echo $cliente["codigo"];
echo "<br>";
echo $cliente["nombre"];
echo "</pre>";

include 'includes/footer.php';
