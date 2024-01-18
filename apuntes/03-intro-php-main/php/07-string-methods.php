<?php include 'includes/header.php';
$nombre = "     Sebastian Grandes     ";

// longitud
echo strlen($nombre);
echo ("<br>");
var_dump($nombre);
echo ("<br>");

// borrar espacios en blanco
echo trim($nombre);
echo ("<br>");
var_dump(trim($nombre));
echo ("<br>");
// minusculas
echo strtolower($nombre);
echo ("<br>");
// mayusculas
echo strtoupper($nombre);
echo ("<br>");

// util
$mail1 = "sebastiangrandesc@gmail.com";
$mail2 = "SebastiangrandesC@Gmail.Com";
var_dump($mail1 === $mail2);
echo ("<br>");
var_dump(strtolower($mail1) === strtolower($mail2));
echo ("<br>");

// reemplazar
echo str_replace("sebastian", "andrea", $mail1);
echo ("<br>");

// buscar en el string en que posicion esta lo que quiero
echo strpos($mail1, "sebastian");
echo ("<br>");
echo strpos($mail1, "t");
echo ("<br>");
echo strpos($mail1, "lino"); // no bota nada pq no existe
echo ("<br>");

// ! concatenar strings
// * forma 1 (el profe usa esta)
echo "El email del señor" . $nombre . " es " . $mail1;
echo ("<br>");
// forma 2> similar al template string
echo "El email del señor {$nombre} es {$mail1}";

include 'includes/footer.php';