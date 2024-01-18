<?php include 'includes/header.php';

$productos = [
    [
        "nombre" => "Tablet",
        "precio" => 200,
        "disponible" => true
    ],
    [
        "nombre" => "Television 24",
        "precio" => 980,
        "disponible" => true
    ],
    [
        "nombre" => "Monitor curvo",
        "precio" => 350,
        "disponible" => false
    ] // el ultimo no debe llevar coma
];

// ! no es recomendable que algo que puede hacer el navegador se lo cargues al servidor (algo como un <li> o un <p>)

// forma incorrecta: HTML en PHP 
foreach ($productos as $producto) {
    echo "<li>";
    echo "HTML en PHP es una mala práctica por que lo hace (carga) desde el servidor (en vez de hacerlo desde el navegador)";
    echo "</li>";
}

// * forma correcta: PHP en HTML 
foreach ($productos as $producto) { ?> <!-- termina codigo php (inicia HTML) -->
    <li> <!-- el navegador ahora se encarga, no php -->
        <p>Producto: <?php echo $producto["nombre"]; ?></p> <!-- imprimo el nombre con php -->
        <p>Precio: <?php echo "$ " . $producto["precio"]; ?></p>
        <p>
            <!-- en vez de poner echo "<p>Disponible</p>" en el php lo ponemos en el html -->
            <?php echo ($producto["disponible"]) ? "Disponible" : "No disponible"; ?> <!-- usando el operador ternario para el if else -->
        </p>
    </li>
<?php // comienza codigo php
}


include 'includes/footer.php';
