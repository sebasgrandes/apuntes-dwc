<?php include 'includes/header.php';

// ! in_array busca elementos en un arreglo
$carrito = ["Tablet", "computadora", "Television"];
var_dump(in_array("Television", $carrito));
var_dump(in_array("Celular", $carrito));

// ! orden de elementos de un array

// * ordenando un array
$numeros = [5, 9, 8, 1, 3, 5, 4];
// en orden ascendente (menor a mayor)
sort($numeros);
echo "<pre>";
var_dump($numeros);
echo "</pre>";
// en orden descendente (mayor a menor): rsort($numeros)

// * ordenando un array asociativo
$producto = [
    "nombre" => "Television",
    "precio" => 300,
    "estado" => "Buen estado",
];
// orden ascendente (menor a mayor)
asort($producto); // lo ordena segun los valores (1. numero, 2. strings segun su primera letra)
echo "<pre>";
var_dump($producto);
echo "</pre>";

ksort($producto); // lo ordena segun las propiedades (llaves)
echo "<pre>";
var_dump($producto);
echo "</pre>";

// en orden descendente (mayor a menor): arsort($producto) y krsort($producto)

include 'includes/footer.php';
