<?php include 'includes/header.php';

$autenticado = true;
$admin = false;

// if
if ($autenticado === true && $admin === false) {
    echo "Usuario autenticado correctamente";
} else {
    echo "Usuario no autenticado, inicia sesión";
}

echo "<br>";

$cliente = [
    "nombre" => "Sebastian Grandes",
    "saldo" => 200,
    "informacion" => [
        "tipo" => "Premium"
    ]
];

// if anidado
if (!empty($cliente)) { // el ! niega el empty
    echo "El cliente existe";
    if ($cliente["saldo"] > 0) {
        echo " El cliente tiene saldo";
    } else {
        echo "No hay saldo";
    }
}

echo "<br>";

//else if: revisa por una condicional más
if ($cliente["saldo"] > 0) {
    echo "El cliente tiene saldo";
} else if ($cliente["informacion"]["tipo"] === "Premium") {
    echo " El cliente es Premium pero no tiene saldo";
} else {
    echo " El cliente no tiene saldo ni es premium";
}




$cliente = [
    "nombre" => "Sebastian Grandes",
    "saldo" => 0,
    "informacion" => [
        "tipo" => "Premium"
    ]
];

echo "<br>";

$tecnologia = "PHP";

// switch
switch ($tecnologia) {
    case "PHP":
        echo "El tipo de tecnología es PHP";
        break;
    case "JavaScript":
        echo "El tipo de tecnología es JavaScript";
        break;
    default:
        echo "No sé que tipo de tecnología es...";
        break;
}

include 'includes/footer.php';
