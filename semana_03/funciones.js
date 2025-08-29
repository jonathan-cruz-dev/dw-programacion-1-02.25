let saldo = 10000;
//saludar();
function saludar(){
    alert('hola!');
}


const solicitarViaje = function(){
    let viaje = prompt('¿Cuanto sale el viaje?');
    saldo = saldo - viaje;  // Act de la var de control
    console.info('Saldo: $' + saldo);
}
//solicitarViaje();
// Varibles Globales
let nombre = 'Juan';
let edad = 27;
const mostrarInformacion = function(){
    let equipo = 'Boca'; // Variable local
    console.log('El nombre es ' + nombre + ' Y es fanatico de ' + equipo);
}

console.log( typeof(nombre));
console.log( typeof(edad));
console.log( typeof(mostrarNombre));

let equipo = 'River';
console.log(nombre, equipo);

mostrarInformacion();

