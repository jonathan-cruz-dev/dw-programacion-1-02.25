class Persona {
    // Atributos
    nombre = "";
    apellido = "";
    edad=0;
    constructor(nombre, apellido, edad){  // Método que se ejecuta al crearse la instancia
        this.nombre = nombre;
        this.apellido =  apellido;
        this.edad = edad
    }
    // Métodos
    mostrarDatos(){
        console.log(`Soy ${this.nombre} ${this.apellido}`);
    }
    obtenerEdad(){
        return this.edad;
    }
    actualizarEdad(edad){
        this.edad = edad;
    }
}

const p1 = new Persona('Ezequiel', 'Ruiz', 25);
const p2 = new Persona('Sofia', 'Ruiz', 27);

console.log( "El nombre es " + p1.nombre );
console.log( `El apellido es ${p1.apellido} `)
let edad = p1.obtenerEdad();
console.log(` La edad de ${p1.nombre} es ${edad}`);
console.log(` La edad de ${p2.nombre} es ${ p2.obtenerEdad() }`);

p1.actualizarEdad( 28);
console.log(` La edad de ${p1.nombre} es ${ p1.obtenerEdad() }`);

console.log(p1)




