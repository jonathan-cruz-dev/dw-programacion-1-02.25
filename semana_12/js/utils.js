/* ---------------------------------- texto --------------------------------- */
function validarTexto(texto) {
    if( texto === "") { 
        return false
    } else {
        return true;
    }
}


const validar = texto =>  texto !== '' ? true : false;

// const validar = (texto) =>  (texto !== '') ? true : false;
/*
const validar = ( texto) => {
    //                 si  no es     if     else
    const esValido = texto !== '' ? true : false;
    return esValido;
}
*/




function normalizarTexto(texto) {
    return texto.trim();
}

/* ---------------------------------- email --------------------------------- */
function validarEmail(email) {
    if( email.includes('@') ) return true;
    return false
}

const normalizarEmail = (email) => email.trim();

/* -------------------------------- password -------------------------------- */
function validarContrasenia(contrasenia) {
    
}

function compararContrasenias(contrasenia_1, contrasenia_2) {
   

}

