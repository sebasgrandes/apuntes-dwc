<?php include 'includes/header.php';

$nombre = "Sebastian Grandes";
echo $nombre;
var_dump($nombre);

// en php si se puede realizar esto, en js no (crear variable con _ al inicio o final)
$_nombre2 = "Andre Conqui";
$nombre2_ = "Conqui Andre";

// ! este tipo de variables SI se pueden reasignar (son como el let en js)
$nombre = "Andrea Lino";
echo $nombre;
var_dump($nombre);


// ! este tipo de variables NO se pueden reasignar (TIPO CONSTANTES, son como el const en js)
define("constante", "esta es una variable constante");
echo constante; // no lleva ya el $
var_dump(constante);

// otra forma menos comun de crear variables constantes
const constante2 = " | otra cte no tan comun";
echo constante2;

// * forma mas comun de nombrar las variables que creas
$nombreApellido = "Sebastian Grandes comun en JS"; // esta forma es mas comun en JS (el profe igual sigue usando esta)
$nombre_apellido = "Andrea Lino COMUN EN PHP"; // * esta forma es mas comun en PHP

include 'includes/footer.php';
