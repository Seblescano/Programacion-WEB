// Declara una variable usando let que guarde tu nombre y muéstralo por consola.

let nombre = "sebas";

console.log("Mi nombre es",nombre);


//Crea dos variables usando comillas dobles y simples (" y '). Muestra ambos valores en consola.

let variable1 = "puede ser";
let variable2 = "pai"

console.log(variable1,"y",variable2);

//Usa una template string (comillas invertidas) para concatenar un nombre, un apellido y el lugar donde vive. // Ejemplo de salida: "Hola, mi nombre es Juan Cruz y soy de monte grande."

let nombre2 = "juan";
let apellido = "cruz";

let casa = "monte grande";

console.log(`Hola soy ${nombre2} ${apellido} y soy de ${casa}`) //backsticks al lado del enter


//Crea una función tradicional llamada saludar que reciba un nombre como parámetro y devuelva "Hola <nombre>, esto es programación 3"

function saludar (){
    console.log(`Hola ${nombre}, esto es programacion 3`);
}

saludar(nombre);

//Reescribe la función saludar del ejercicio anterior usando función flecha (=>).


const saludarFuncion = () =>{ //CON EL ARROW NO VA LA FUNCION FLECHA
    console.log(`Hola ${nombre}, esto es programacion 3, pero con flecha`);
}

saludarFuncion(nombre);

//Crea una función llamada sumar que acepte dos números y que el segundo número sea opcional (predeterminado a 0).
// Si llamo sumar(5), debería devolver 5
// Si llamo sumar(5, 10), debería devolver 15

function sumar(a,b = 0){
    resultado = a + b;
    mensaje = `El resultado de ${a} + ${b} es ${resultado}`;
    
    console.log(mensaje);
}

sumar(5,10)

//Crea una función llamada crearArray que reciba varios números como argumentos usando el parámetro
//rest (...numeros) y devuelva un array.
//EJ:
// crearArray(1, 2, 3, 4); // [1, 2, 3, 4]

function crearArray(...numerosArray){ // "numerosArray" es el array donde se van a guardar todos los datos.
    console.log(numerosArray)
}

crearArray(1,2,3,4,5,6,7,8,9);

//Usando el operador spread (...), crea una copia de un array y agrega un nuevo elemento al final.
//Ej:
// Original: const frutas = ["manzana", "banana"];
// Resultado: ["manzana", "banana", "naranja"]

const frutas =["manzana","banana"]; //Se crea el Array
const nuevaFrutas = [...frutas,"Naranja"]; //Creo un nuevo array y con el metodo SPREAD: "...", Lo que hace esto es CREAR UN NUEVO ARRAY con la informacion del array indicado y poner el nuevo dato al final del array

console.log(frutas);
console.log(nuevaFrutas);

//Crea una función flecha llamada formatearProducto que reciba un nombre de producto y lo devuelva
//todo en minúscula, excepto la primera letra que debe ir en mayúscula.
// Ejemplo:
//formatearProducto("CAFE") ➔ "Cafe"


//const saludarFuncion = () =>{ //CON EL ARROW NO VA LA FUNCION FLECHA
    //console.log(`Hola ${nombre}, esto es programacion 3, pero con flecha`);
//}

const formatearProducto = (palabra) => {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    
    //charAt(0).toUpperCase() → agarra la primera letra y la pone en mayúscula.
    //slice(1).toLowerCase() → toma el resto de la palabra (desde el índice 1) y lo pone en minúscula.
};

console.log(formatearProducto("PuedeSeTTpAix")); 

//Crea una función generarEmail que reciba un nombre, un apellido y un parámetro opcional dominio (que
//por defecto sea "gmail.com"). La función debe devolver el correo electrónico en minúsculas, con el formato:
//nombre.apellido@dominio.
// Ejemplo:
//generarEmail("Tony", "Stark") ➔ "tony.stark@gmail.com"
//generarEmail("Peter", "Parker", "hotmail.com") ➔ "peter.parker@hotmail.com"

function generarEmail(nombre, apellido, dominio = "gmail.com") {
    return `${nombre.toLowerCase()}.${apellido.toLowerCase()}@${dominio.toLowerCase()}`;
}

// Ejemplos:

console.log(generarEmail("Tony", "Stark")); 

// "tony.stark@gmail.com"


console.log(generarEmail("Peter", "Parker", "hotmail.com")); 

// "peter.parker@hotmail.com"












