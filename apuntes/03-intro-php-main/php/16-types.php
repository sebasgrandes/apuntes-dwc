<?php

declare(strict_types=1); // para identificar errores (modo estricto digamos)

include 'includes/header.php';

// al codigo le añadiremos un tipado

function usuarioAutenticado(bool $autenticado): ?string // lo que retornará PUEDE SER un string
{
    if ($autenticado === true) {
        return "el usuario esta autenticado";
    } else {
        return null;
    }
}

$usuario = usuarioAutenticado(true);
echo $usuario;
echo "<br>";
$usuario = usuarioAutenticado(false);
echo $usuario;

echo "--------------";
echo "<br>";

function userAuten(bool $autenticado): string | int // lo que retornará SERÁ un string o un entero
{
    if ($autenticado === true) {
        return "user atent....";
    } else {
        return 350;
    }
}
$user = userAuten(true);
echo $user;
echo "<br>";
$user = userAuten(false);
echo $user;
echo "<br>";

echo "--------------";
echo "<br>";

function iuiu(bool $autenticado): void // no retornará nada, sino que imprimirá algo (o puede ser que retorne null)
{
    if ($autenticado === true) {
        echo "iuiuiuiu....";
    } else {
        echo 100;
    }
}
$iux = iuiu(true);
echo $iux;
echo "<br>";
$iux = iuiu(false);
echo $iux;

include 'includes/footer.php';
