/* ---------------------- obtenemos variables globales ---------------------- */
const form = document.querySelector('form');   
const inputNombre = document.querySelector('#inputNombre');
const inputApellido = document.querySelector('#inputApellido');
const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
const inputPasswordRepetida = document.querySelector('#inputPasswordRepetida');


    

/* -------------------------------------------------------------------------- */
/*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
/* -------------------------------------------------------------------------- */
form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    console.log('Iniciando Registro');
})

/* -------------------------------------------------------------------------- */
/*                    FUNCIÓN 2: Realizar el signup [POST]                    */
/* -------------------------------------------------------------------------- */
function realizarRegister(datos) {
    // Guardamos en el localStorage el usuario

};
