// VARIABLES GLOBALES
let num1 = 4
let num2 = 2;


function sumar (n1, n2) {
    let suma = n1 + n2;
    return suma;
}

const restar = function (n1, n2){
    let resta = n1 - n2;
    return resta;
}


// Funciones de orden superior
function operar(n1, n2, fn){
    let result = fn(n1, n2);
    return result;
}

const r1 = operar(num1, num2, sumar);
const r2 = operar(num1, num2, restar)
console.log(r1);
console.log(r2);




// Mejor así 😁   0      1          2          3         4
let alumnos = ['José', 'Sofia', 'Jonathan', 'Evelyn', 'Carlos', 'Carlos' ];
alumnos.push('Matias');
// Para buscar una elemento dentro del array
function buscar(array, palabra){
    let pos = -1;
    for (let i = 0; i < array.length; i++) {
        let elemento = array[i] ;
        if( elemento == palabra){
            //console.log(i, elemento);
            pos = i;
        }
    }
    return pos;
    //console.log('Pos ', pos)
}

const posicion = buscar( alumnos, 'Jonathan');
console.log(posicion)

const condicion = ( elemento) => elemento === 'Carlos'


const pos = alumnos.findIndex(  condicion  );
console.log('La posicion es ', pos)

const numeros = [2, 3, 6, 8, 10, 6];
const index = numeros.findIndex( ( n) =>  n == 6 );

console.log( 'la posición es ', index)

const encontrado = alumnos.find( item => item == 'Carlos' );
console.log(encontrado)

const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'];

const frutas = ['🍐', '🍌', '🍊', '🍎', '🍌'];
const nombres = ['Zoe', 'Luz', 'Mateo', 'Romina', 'Marcos', 'Matias'];
const notas = [ 7, 8, 6, 2, 8, 10];

// Funcion de orden superior: filter
const filtrados = frutas.filter( item => item == '🍌' );
console.log(filtrados)
const promocionados = notas.filter( item => item >= 7);
console.log(promocionados)
const selec = nombres.filter( item => item.length <= 3);
console.log(selec)
