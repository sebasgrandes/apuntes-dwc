<?php include 'includes/header.php';
$array1 = [];
$array2 = array();
$array3 = array("Sebastian Grandes", "Andrea Lino");
$arrayA4 = [
    "nombre" => "Sebo",
    "precio" => 400,
];

// * empty() revisa si un arreglo esta vacío
var_dump(empty($array1));
var_dump(empty($array2));
var_dump(empty($array3));
var_dump(empty($arrayA4));
echo "<br>";

// * isset() revisa si un arreglo existe o si la propiedad de un arregloAsociativo existe
var_dump(isset($array1));
var_dump(isset($array2));
echo "<br>";

var_dump(isset($array3));
var_dump(isset($array3[0]));
var_dump(isset($array3[2]));
echo "<br>";
var_dump(isset($arrayA4));
var_dump(isset($arrayA4["nombre"]));
var_dump(isset($arrayA4["codigo"]));
echo "<br>";
var_dump(isset($array5));



include 'includes/footer.php';
