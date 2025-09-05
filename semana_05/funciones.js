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
let num1 = +prompt('Ingrese el número 1');
let num2 = parseInt( prompt('Ingrese el número 2') );

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

const resultadoSuma = sumar(num1, num2);
const resultadoResta = restar(num1, num2);
console.log(resultadoSuma, resultadoResta);








