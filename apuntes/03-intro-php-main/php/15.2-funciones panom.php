<?php

declare(strict_types=1);

include 'includes/header.php';


function sumar(int $numero1, int $numero2)
{
    echo $numero1;
    echo "<br>";
    echo $numero2;
};

sumar(10, 20);
echo "<br>";
echo "----------";
echo "<br>";
sumar(numero2: 5, numero1: 70); // parametros nombrados (novedad de php 8)
echo "<br>";
