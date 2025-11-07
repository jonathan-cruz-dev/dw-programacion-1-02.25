/* ----------------------- Seleccionamos los elementos ---------------------- */
const container = document.querySelector('#container');

let favoritos = []


/* ------------------------- Leemos del localStorage ------------------------ */
const leerFavoritos = () => {
    const data = localStorage.getItem('favoritos');
    const array = JSON.parse( data );
    favoritos = array ? array : [];

    mostrarPeliculas(favoritos)
}

/* --------- FUNCIÓN 2: Recibe el listado de peliculas y las muestra -------- */
const mostrarPeliculas = (peliculas) => {
    // alt + 96
    for(let i=0; i<peliculas.length; i++ ){
        const pelicula = peliculas[i];
     
        const card = document.createElement('li'); // Creamos el elemento del DOM
        card.classList.add('card'); // Agregamos una clase
        
        const a = document.createElement('a');
        a.setAttribute('href', 'detalle.html?id='+pelicula.id);
        // <img src="${pelicula.portada}" alt="${pelicula.titulo}">
        const img = document.createElement('img');
        img.setAttribute('src', pelicula.portada );
        img.setAttribute('alt', pelicula.titulo);

        const h2 = document.createElement('h2');
        h2.classList.add('movie-title');
        h2.textContent = pelicula.titulo;

        const p = document.createElement('p');
        p.textContent = pelicula.estreno;

        a.appendChild(img);
        a.appendChild(h2);
        a.appendChild(p);

        card.appendChild(a);
        container.appendChild(card);
        
    }

}



leerFavoritos();

console.log(favoritos);