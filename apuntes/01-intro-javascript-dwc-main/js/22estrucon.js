// estructuras de control
const numero = 100;
if (numero == "100") {
    // recuerda que el doble == no es tan estricto como el ===
    console.log("el numero es igual a 100");
} else {
    console.log("el numero es diferente de 100");
}

const user = "editor";
if (user == "administrador") {
    console.log("puedes entrar, eres un administrador");
} else if (user == "editor") {
    console.log("eres un editor, también puedes entrar");
} else {
    console.log("no eres nadie, asi que no puedes entrar :v");
} // ! recuerda que poner varios else if hace mas pesada o cargado el codigo, por lo que no se recomienda, en su lugar podría usarse un switch

const number = 99;
if (number > 100) {
    console.log("el numero es mayor a 100");
} else {
    console.log("el numero es menor a 100");
}

const numerin = 89;
