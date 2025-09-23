console.log(" == OBJETOS == ");

// Agrupacion de atributos y metodos

class Persona{ //no hace falta el LET
    nombre ="";
    apellido = "";

    constructor(nombre,apellido){

        if(typeof nombre == "string" && typeof apellido == "string"){ //Comprobacion de tipos, para que se asignen bien
            this.nombre = nombre;
            this.apellido = apellido;

        } else {
            throw "Pasaste algo mal"
        }
        
    }

    //metodos

    saludar(){
        console.log(`Hola soy, ${this.nombre} ${this.apellido}`); //Ya me aseguro qye esté todo bien
    } 

}

//TODO ESTA SINTAXIS ES BIEN ORIENTADA A OBJETOS, pero no es la más usada en JS


const p1 = new Persona("Agus", "F");
console.log(p1);

try{
    const p2 = new Persona("Agus", 9)
    console.log(p2);
} catch (error){
    console.log(error)
}

const p3 = new Persona("Nico","F");
console.log(p3);

p1.saludar();
p3.saludar();


//Forma generica para crear objetos.
p3.saludar();
p1.saludar();

//--------------------------------------------- Formas de abreviar codigo--------------------------------------------------------------------------------------------------------

function saludarSuelto1 (cadena){
    console.log(cadena);
}

const saludarSuelto = function (cadena){ //Funcion vacia que la puedo llamar
    console.log("Hola");
}

const saludarSuelto2 = () => { //Funcion vacia que la puedo llamar
    console.log("Hola");
}

const saludarSuelto3 = (cadena) => { //Funcion vacia que la puedo llamar
    console.log(cadena);
}

const devolverMasCorto = (cadena) => cadena; //Manera más corta para devolver


saludarSuelto();

const p4 = {
    nombre: "Pepito",
    apellido: "Oreo",
    saludar: () => {
        console.log("Hola soy " + this.nombre + " " + this.apellido);
    }
};

console.log(p4)
p4.saludar();

console.log(" == FIN DE OBJETOS == ")