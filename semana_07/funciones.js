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
let alumnos = ['José', 'Sofia', 'Carlos', 'Jonathan', 'Evelyn', 'Carlos', 'Carlos' ];
alumnos.push('Matias');
// Para buscar una elemento dentro del array
function buscar(array, palabra){
    let posicion = -1;
    for (let index = 0; index < array.length; index++) {
        let elemento = array[index] ;
        if( elemento == palabra){
            //console.log(i, elemento);
            posicion = index;
        }
    }
    return posicion;
    //console.log('Pos ', pos)
}

const posicion = buscar( alumnos, 'Jonathan');
console.log(posicion)


// Busca en un array y retorna la posición
const pos = alumnos.findIndex(  (item) =>  item == 'José'  );
console.log('La posicion es ', pos);

// Busca en un array y retorna el elemento o un undefine
const encontrado = alumnos.find(  item => item == 'Carlos' );
console.log( { encontrado} )

// Recorrio de un array
alumnos.forEach( item => console.log( item) );

// Para buscar varios elementos
const resultado = alumnos.filter( item => item == 'Carlos' );
console.log('Encontramos los resultados; ');
console.table( resultado)

console.table(alumnos);
const buscarAlumno = () => {
    let nombre = prompt('Ingrese el nombre');
    // trim Elimina los caracters de espacion en los laterales
    nombre = nombre.trim();
    //nombre = nombre.toLowerCase();
    // Pasar todo a minuscula
    console.log(nombre)
    const alumno = alumnos.find( item => item.toLowerCase() == nombre.toLowerCase());
    console.log(alumno);
    if( alumno){
        alert('Encontramos a ' + nombre);
    } else {
        alert('No encontramos a ' + nombre);
    }
}

// String y Array son objetos
