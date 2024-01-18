<?php include 'includes/header.php';

// php y js se pueden comunicar por medio de json

$productos = [
    [
        "nombre" => "Tablet",
        "precio" => 200,
        "disponible" => true
    ],
    [
        "nombre" => "TelevisiÓÓÓn 24",
        "precio" => 980,
        "disponible" => true
    ],
    [
        "nombre" => "Monitor curvo",
        "precio" => 350,
        "disponible" => false
    ] // el ultimo no debe llevar coma
];


echo "<pre>";
var_dump($productos);
echo "<br>";

/* * convirtiendo mi array a json
- si o si debe ser un array
- este array lo convertira a un string (con forma de json)
- es convertido a json para que pueda ser consumido con js, react o vue...
*/

$json = json_encode($productos);
var_dump($json);
echo "<br>";
echo "<br>";

$json2 = json_encode($productos, JSON_UNESCAPED_UNICODE); // el 2do es para mostrar la tilde correctamente
var_dump($json2);
echo "<br>";
echo "<br>";

$json_array = json_decode($json2); // volviendo a convertir de string a array
var_dump($json_array);
echo "</pre>";

include 'includes/footer.php';
