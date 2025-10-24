/* ---------------------- obtenemos variables globales ---------------------- */
const form = document.querySelector('form');  // Selecto por etiqueta
const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');

/* -------------------------------------------------------------------------- */
/*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
/* -------------------------------------------------------------------------- */
form.addEventListener('submit', ( evento ) => {
    evento.preventDefault();
    console.log('Envio de formulario');
    // Para leer el valor del input
    const email = normalizarEmail( inputEmail.value );
    const password = normalizarTexto( inputPassword.value );
    if( ! validarEmail(email)){
        console.error('Email invalido');
        return;
    }
    login( email, password);
});


/* -------------------------------------------------------------------------- */
/*                     FUNCIÓN 2: Realizar el login                           */
/* -------------------------------------------------------------------------- */
const login = (email, password) => {
    console.log( email, password );
    // Por el momento simulamos el login
    if( email === 'admin@gmail.com' && password === '1234'){
        console.log('Credenciales correctas 😁');
        // Cambiamos la URL desde JS por medio de location
        location.href = 'tareas.html';
    } else {    
        // Por el momento usamos un alert
        alert('Usuario con contraseña Invalida');
    }
}