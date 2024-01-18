<?php include 'includes/header.php';

// while: 1. evalua y 2. ejecuta
$i = 0;
while ($i < 10) {
    echo $i;
    $i++;
}

echo "<br>";

// do while: 1. ejecuta una vez 2. evalua
$y = 100;
do {
    echo $y;
    $y++;
} while ($y < 10);

echo "<br>";

// for loop

for ($x = 10; $x > 0; $x--) {
    echo $x;
}

echo "<br>";

/* ejercicio:
multiplo de 3: echo "Fizz";
multiplo de 5: echo "Buzz;
multiplo de 3 y 5: echo "Fizz Buzz" */

for ($k = 0; $k <= 45; $k++) {
    // el multiplo de 15 va 1ero pq si pones los demas 1eros entonces al validarse la condicion se paran ahi (omiten los demas)
    if ($k % 3 === 0 && $k % 5 === 0) {
        echo $k . " - Fizz Buzz";
        echo "<br>";
    } else if ($k % 3 === 0) {
        echo $k . " - Fizz";
        echo "<br>";
    } else if ($k % 5 === 0) {
        echo $k . " - Buzz";
        echo "<br>";
    } else {
        echo $k . " - No es múltiplo de 3 ni de 5";
        echo "<br>";
    }
}

// otra forma
// for ($j = 0; $j <= 45; $j++) {
//     if ($j % 3 === 0) {
//         if ($j % 5 === 0) {
//             echo $j . " - Fizz Buzz";
//             echo "<br>";
//         } else {
//             echo $j . " - Fizz";
//             echo "<br>";
//         }
//     } else if ($j % 5 === 0) {
//         echo $j . " - Buzz";
//         echo "<br>";
//     } else {
//         echo $j . " - No es múltiplo de 3 ni de 5";
//         echo "<br>";
//     }
// }

include 'includes/footer.php';
