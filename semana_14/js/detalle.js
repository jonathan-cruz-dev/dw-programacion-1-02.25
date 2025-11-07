const imgPelicula = document.querySelector('#imgPelicula');
const h3Titulo = document.querySelector('#h3Titulo');
const ulGeneros = document.querySelector('#ulGeneros');
const pDescripcion = document.querySelector('#pDescripcion');
const aLink = document.querySelector('#aLink');
const aFavoritos = document.querySelector('#aFavoritos');
const dEstreno = document.querySelector('#dEstreno');
const dDuracion = document.querySelector('#dDuracion');
const dDirector = document.querySelector('#dDirector');

let favoritos = [];

const mostrarDatos = ( pelicula) =>{
    imgPelicula.setAttribute('src',  pelicula.portada);
    imgPelicula.setAttribute('alt',  pelicula.titulo);
    h3Titulo.textContent = pelicula.titulo;
    pelicula.genero.forEach( genero => {
        console.log( genero)
        const li = document.createElement('li');
        li.classList.add('pill');
        li.classList.add('pill-text');

        li.textContent = genero;
        ulGeneros.appendChild(li);
    });
    pDescripcion.textContent = pelicula.descripcion;
    aLink.setAttribute('href', pelicula.trailer);
    dEstreno.textContent = pelicula.estreno;
    dDuracion.textContent = pelicula.duracion + ' min';
    dDirector.textContent = pelicula.director;
}

const agregarFavoritos = ( pelicula ) => {
    favoritos.push( pelicula);
    const dataString = JSON.stringify( favoritos ); 
    localStorage.setItem('favoritos', dataString);
} 

aFavoritos.addEventListener('click', (e) => {
    e.preventDefault();
    agregarFavoritos( pelicula );
    console.log(pelicula);
})

/* ----------------------- FUNCION 4 - Leer Favoritos ----------------------- */
const leerFavoritos = () => {
    const data = localStorage.getItem('favoritos');
    const array = JSON.parse( data );
    favoritos = array ? array : [];
}
// Leemos el Id que se paso por medio de la URL
const params = new URLSearchParams(  window.location.search);
const id = +params.get('id');

const pelicula = peliculas.find( pelicula => pelicula.id == id  );

if( !pelicula) {
    window.location.href = 'index.html';
}

mostrarDatos( pelicula);
console.log(id, pelicula);



leerFavoritos();