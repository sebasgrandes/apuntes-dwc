<?php include 'includes/header.php';

// el mismo comportamiento que en js
$numero1 = 10;
echo $numero1++;
echo "<br>";
echo $numero1;
echo "<br>";

$numero2 = 20;
echo --$numero2;
echo "<br>";

$numero3 = 30;
echo $numero3 += 70; // 100
echo "<br>";
echo $numero3; // 100


include 'includes/footer.php';
