<?php include 'includes/header.php';

// arreglo indexado es lo mismo en js y php, los objetos en js son como los arreglos asociados en php

// * formas de crear un array (ambas muy usadas)

// forma 1:
$array1 = ["Television", "Celular", "Laptop"];
echo $array1;
echo "<br>";

// añadir un elemento nuevo al array
$array1[3] = "agregado pero meh";
array_push($array1, "added w/ push");
array_unshift($array1, "added w/ unshift");
$array1[] = "added w/ CORCHETE SIMPLEEEEEE";

var_dump($array1);

echo "<pre>"; // * util para ver los contenidos de un array (da un mejor formato o vista para el var_dump)
var_dump($array1);
var_dump($array1[1]);
echo "</pre>";
// echo "<br>";

echo $array1[0]; // acceder a un elemento del array
echo "<br>";


// forma 2:
$array2 = array("forma 1", "forma2");
var_dump($array2);

include 'includes/footer.php';
