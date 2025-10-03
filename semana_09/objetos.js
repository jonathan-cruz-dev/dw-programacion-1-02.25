// Personas
const persona1 = {
    nombre: "Juan",
    apellido: "Ruiz",
    mostrarDatos(){
        // Template String ' " `  alt + 96   altGr + `
        console.log(`Soy ${this.nombre} ${this.apellido}`);
    }
}

const persona2 = {
    nombre: "Carlos",
    apellido: "Gomez",
    mostrarDatos(){
        console.log("Soy "+  this.nombre + " " + this.apellido);
    }
}

const persona3 = {
    nombre: "Maria",
    apellido: "Gomez"
}

persona1.mostrarDatos();
persona2.mostrarDatos();
