<?php include 'includes/header.php';

$numero1 = 20;
$numero2 = 30;
$numero3 = 30;
$numero4 = "30";

var_dump($numero2 >= $numero3);
echo "<br>";

// al igual que en js
var_dump($numero2 == $numero3); // este solo compara el valor
echo "<br>";
var_dump($numero2 === $numero4); // este solo compara el valor Y el tipo de dato
echo "<br>";

// comparador diferente: -1 si n1 < n2; 0 si n1 == n2; 1 si n1 > n2
var_dump($numero1 <=> $numero2);
echo "<br>";
var_dump($numero2 <=> $numero3);
echo "<br>";
var_dump($numero2 <=> $numero1);

include 'includes/footer.php';
