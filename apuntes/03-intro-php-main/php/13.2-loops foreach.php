<?php include 'includes/header.php';

// con arrays
$clientes = ["Pedro", "Juan", "Sebastian"];
foreach ($clientes as $cliente) {
    echo $cliente;
    echo "<br>";
}

echo "<br>";

// con arrays asociativos
$buyers = [
    "nombre" => "Sebastian Grandes",
    "saldo" => 200,
    "tipo" => "Premium",
];

echo "<br>";

// con "as" asignamos un alias creando una variable (no es obligatorio pero te facilitara la vida)
foreach ($buyers as $buyer) { // accedemos a los valores
    echo $buyer . "<br>";
}

echo "<br>";

foreach ($buyers as $key => $valor) { // accedemos a las llaves y los valores
    echo $key . " - " . $valor . "<br>";
}



/*
sintaxis a veces util (sin uso de comillas)

while ($i < 10):
    echo $i;
    $i++;
endwhile;

for ($k = 0; $k <= 45; $k++):
    if ($k % 3 === 0 && $k % 5 === 0):
        echo $k . " - Fizz Buzz";
        echo "<br>";
    elseif ($k % 3 === 0):
        echo $k . " - Fizz";
        echo "<br>";
    elseif ($k % 5 === 0):
        echo $k . " - Buzz";
        echo "<br>";
    else:
        echo $k . " - No es múltiplo de 3 ni de 5";
        echo "<br>";
    endif;
endfor;

*/


include 'includes/footer.php';
