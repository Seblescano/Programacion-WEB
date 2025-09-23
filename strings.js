console.log("== STRINGS ==");

/**
 * 
 * @param {string} cadena 
 */
function mostrar(cadena){
    console.log(cadena);
}

/**
 * Es un metodo que devuelve una cadena que le pasas
 * Posta, no hace nada más
 * jsdoc para ver como funciona, ahi está toda la documentacion.
 * @param {*} cadena 
 * @returns {string}
 */

function devolver(cadena){
    return cadena;
}

const resultado = devolver("HOLA PROGRAMACION III, que clase..."); //aca esta im jdoc

// Como sé el tipo de dato?

const texto = "HOLA PROGRAMACION III, que clase...";


console.log(typeof resultado);
console.log(typeof 8);
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);

if(typeof resultado == "string"){
    console.log("Es un String")
}
mostrar(texto.length) //length obtengo el largo de una cadena

//javadoc -> documentacion java
//jsdoc -> documentacion js, solo sirve para documentacion.
mostrar(resultado.slice(6,12)) //obtengo una parte del string (Se excluye el caracter 6 y el 12)
mostrar(resultado.trim()) //Este borra los espacios al principio y al final (MUY UTIL!!)
mostrar(resultado.replace("III","IV")) //Reemplazo el 3 con el 4
mostrar(resultado.toLocaleLowerCase());
mostrar(resultado.toUpperCase());
mostrar(resultado.charAt(20)); //me indica en que posicion esta el caracter en la posicion 20
mostrar(resultado.concat("hola", " ", "mundo"));
mostrar(resultado.startsWith("  "));
mostrar(resultado.indexOf("III"));

// tengo texto al principio, tengo un @ en el medio, tenga texto despues, tenga un punto despues y termine con  com o com.ar





