const showYear = function(){
    // Tema de la clase 06
    const date = new Date();
    let fecha = date.toLocaleDateString();
    let year = date.getFullYear();
    // Tema de la clase 07 o 08
    document.getElementById('year').innerText = year;
    console.log('La fecha es ' + fecha);
}

function mostrarFechaActual(){
    const date = new Date();
    const fecha = date.toLocaleDateString();
    document.getElementById('fecha').innerText = fecha;
}

showYear();
mostrarFechaActual();
// VARIABLES GLOBALES
let num1 = 0;
let num2 = 0;

function ingresarN1(){
    num1 = +prompt('Ingrese el número 1');
}

function ingresarN2(){
    num1 = +prompt('Ingrese el número 1');
}

function sumar (n1, n2) {
    let suma = n1 + n2;
    return suma;
}

const restar = function (n1, n2){
    let resta = n1 - n2;
    return resta;
}

const multiplicar = (n1, n2) => {
    let resultado = n1 * n2;
    return resultado;
}
// const sumar = (n1, n2) => n1 + n2; 
const dividir = (n1, n2) => {
    // No se debe permitir dividir por cero
    if( n2 == 0){
        alert('No es posible dividir por cero');
        return null;
    }
    return n1 / n2;
}

// Mucho lio 😥
let alumno1 = 'José';
let alumno2 = 'Sofia';
let alumno3 = 'Carlos';
let alumno4 = 'Ezequiel';
let alumno5 = 'Jonathan';

// Mejor así 😁   0      1          2          3         4
let alumnos = ['José', 'Sofia', 'Jonathan', 'Evelyn', 'Carlos'];
console.log( alumnos[4] );

alumnos[4] = 'Carlitos';
console.log( alumnos[4] );

console.log( alumnos[3] );

console.log('La cantidad de elementos son ',  alumnos.length );
alumnos[5] = 'Selena';
alumnos[ alumnos.length ] = 'Marcelo';


let cursos = [
    ['José', 'Sofia', 'Jonathan', 'Evelyn', 'Carlos'],
    ['Zoe', 'Juan', 'Ema', 'Lucas'],
    ['Sebastian', 'Julieta', 'Fernando', 'Lucas']
]

console.log('Lista de alumnos'.toUpperCase());
// Esto no, por favor 😪
console.log(  alumnos[0] );
console.log(  alumnos[1] );
console.log(  alumnos[2] );
console.log(  alumnos[3] );

alumnos[5] = 'Walter';
alumnos[7] = 'Pepe';
alumnos.push('Matias');
// Ahora con un bucle
for (let i = 0; i < alumnos.length; i++) {
    console.log(  alumnos[i] );
}





