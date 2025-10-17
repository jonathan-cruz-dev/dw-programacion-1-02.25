console.log('TO DO - APP');
const titulo = document.querySelector('h1');
const userName = document.querySelector('#user-name');
const listaTareas = document.querySelector('ul');
// Para modificar el texto de una etiqueta usamos textContent
titulo.textContent = 'To Do APP v1';

// Creamos datos para prueba
const tareas = [
    { id:1, descripcion: 'Parcial de Programación I', fecha: '21-10-25' },
    { id:2, descripcion: 'Descanso', fecha: '25-10-25' },
    { id:3, descripcion: 'Ir al Cine', fecha: '01-11-25' }
]

// Leemos el localStorage
let nombre = localStorage.getItem('usuario');
if( !nombre) { // Si no hay datos en el localStorage, pedimos el nombre del usuario
    nombre = prompt('¿Cúal es tu nombre?');
    // Guardar el nombre en el localStorage para nuevo inicios
    localStorage.setItem('usuario', nombre);
}

userName.textContent = nombre;

// Funcion 01 - Renderizado de tareas
const redenderizarTares = (lista) => {
    /*
    for (let i = 0; i < 3; i++) {
            let item = `<li class="tarea">
                    <button class="change">
                        <i class="fa-solid fa-circle-check"></i>
                    </button>
                    <div class="descripcion">
                        <p class="nombre"> ${lista[i].descripcion} </p>
                        <p class="timestamp">  17-10-25 </p>
                    </div>
                </li>`;
        listaTareas.innerHTML = listaTareas.innerHTML + item;
    }
    */
    lista.forEach(tarea => {
    console.log(tarea);
    // template String  `  alt + 96 
    const item = `<li class="tarea">
                    <button class="change">
                        <i class="fa-solid fa-circle-check"></i>
                    </button>
                    <div class="descripcion">
                        <p class="nombre"> ${tarea.descripcion} </p>
                        <p class="timestamp">  ${tarea.fecha}</p>
                    </div>
                </li>`;
    listaTareas.innerHTML +=  item;
    });

}

console.log(listaTareas);

redenderizarTares(tareas);