let nombre = "juan";
let edad = 25;
let alumno = true;


function convertir1( texto){
    return texto.toUpperCase();

}

const convertir2 = function( texto) {
    return texto.toUpperCase();
}

//const convertir3 = ( texto) => { return texto.toUpperCase(); }

const convertir3 =  (texto) => texto.toUpperCase(); 

const formatear = (nombre, fn) => {
    const formato = "Nombre: " + nombre;
    return fn( formato);
}

const lenguajes = ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'HTML'];
// Recorrido de un ARRAY
/* for(let i=0; i<=4; i++){
    const lenguaje = lenguajes[i];
    console.log(lenguaje);
}
 */

console.log(typeof(nombre), nombre);
console.log(typeof(edad), edad);
console.log(typeof(alumno), alumno);
console.log(typeof(formatear));
console.log(typeof(lenguajes));


lenguajes.push('Python');
console.log( lenguajes.length)

lenguajes.forEach(  ( item) => {
    console.log(item) 
});

const index = lenguajes.findIndex( (item) => item == 'PHP');
const elemento = lenguajes.find( (item) => item == 'PHP');
const encotrados = lenguajes.filter( item => item == 'HTML');

console.log(encotrados)
// Objeto Literal
const curso = {
    // clave : valor
    materia: 'Programación I',
    profesor: {
        nombre:'Jonathan',
        email: 'jonthan.cruz.isec@gmail.com'
    },
    alumnos: ['EZEQUIEL', 'FRANCO', 'JOAQUIN', 'GUILLERMO', 'MILAGROS', 'SOFIA', 'SELENA' ],
    aula: 41,
    // Métodos
    iniciar: function() {
        alert('Iniciando Curso');
    },
    inscribir: function(){
        let estudiante = prompt('Ingrese el nombre del estudiate');
        this.alumnos.push( estudiante );
    }
}
const persona = {
    "nombre": "Lucas"
}
// Acceder a datos, con notación punto y notaciór corchetes
console.log( curso.materia );
console.log( curso.profesor);
console.log( curso['aula']);
console.log(curso.profesor.email);
console.log(curso.alumnos[2]);
// Agregar una propiedad
curso.turno = 'Mañana';
// para eliminar 
delete curso.profesor;
console.log(curso)
curso.alumnos.push('JOSÉ')
