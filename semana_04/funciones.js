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

console.log('Soy un log');
console.info('Soy un info, en Chrome me veo igual al log :(');
console.warn('Soy un warning');
console.error('Soy un error');

mostrarFechaActual();


function saludar(nombre){ // nombre es el parámetro
    // Nombre es como una var local a la función
    console.log('Hola ' + nombre);
}

saludar('Zoe'); // Zoe es el argumento
saludar('Lucas'); // Zoe es el argumento
saludar('Sol'); // Zoe es el argumento

// Parámetro por Defecto
function mostrarNota(alumno, nota=0 ){
    console.log(alumno + ' Con la nota ' + nota);
}

mostrarNota('Carlos', 8 );
mostrarNota( 'Julia' );

function mostrarDoble(numero){
    let doble = numero * 2;
    return doble;
}

let resultado;
let n1 = 2;
let n2 = 3;
resultado = mostrarDoble(n1);
console.log(resultado);
resultado = mostrarDoble(n2);
console.log('El dobre de ' + n1 + ' es: ' +resultado);

