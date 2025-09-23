let nombre = "sebas";
let apellido = "Lescano"
let numero = 8;

const pi = 3.14; //no le puedo cambiar por que es CONST

nombre = 89; //si quiero transformarlo a otro dato lo puedo hacer.
apellido = null;

//pi = ""; //El error no va a saltar porque no compila, va a saltar cuando ejecuta.
//NO SE PUEDE CAMBIAR EL VALOR DE UNA CONSTANTE.


function mostrarNombre(){
    let variableLocal = "algo";
}

if(numero < false){ //Si los tipos de datos no coinciden se va por el ELSE.
    console.log("Verdadero")
} else { 
    console.log("Falso")
}

console.log("hola" + "mundo");

const hola = "hola";
const mundo = "mundo";

console.log(hola,mundo);

//console.log() //Se puede con backsticks tamsbien con ${hola} ${mundo}

/*
Solo se puede acceder a las variables dentro del scope
donde fueron definidas

console.log(mostrarNombre);
*/

// Objetos;
// JSON: { }
// Clases: Date, Error, JSON, Math, Map, Set, Objets, String, Number, Boolean
// Arrays, map,Set

//CAMEL CASE A TODO.

// Tipos de datos primitivos:
    //String -> cadenas
    let cadena = "string"
    // number -> numeros en general
    numero = 9.6;
    // bool -> true o false
    let buleano = false;
    // null -> "vacio"
    //undefined -> "No se asignó nada"


for(let i = 0; i < 10; i++){ //me lo suma hasta 10
    console.log("El valor de i es", i);
}

let j = 0;
do {
    j++
    console.log("Estoy en el DO");

    switch(j) {
    case 5:
        console.log("La j es 5")
    break;
    case 10:
        console.log("la j es 10");
    break;
    default:
        console.log("EL caso default")
}
} while(j<10);

console.log(" == FIN DEL MAIN == \n")

//ME QUEDE EN 1:17:37 CLASE 5 JS, JUSTO VAMOS A CREAR OTRA CLASE

