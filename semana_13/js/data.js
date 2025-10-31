const peliculas = [
    {
        "id": 1,
        "titulo": "Evil Dead",
        "portada": "assets/movies/evil-dead.jpg",
        "descripcion": "En un edificio de apartamentos de Los Ángeles, dos hermanas luchan contra los demonios sedientos de sangre que han salido de un libro antiguo.",
        "estreno": 2023,
        "director": "Lee Cronin",
        "duracion": 95,
        "trailer": "https://www.youtube.com/watch?v=keW_fKq187k",
        "genero": [
            "Terror",
            "Fantasía"
        ]
    },
    {
        "id": 2,
        "titulo": "Culpa mía",
        "portada": "assets/movies/culpa-mia.jpg",
        "descripcion": "La joven Noah deja todo para mudarse a la mansión de William Leister, el flamante y rico marido de su madre Rafaela. Allí conoce a Nick, su nuevo hermanastro. Ella no tarda en descubrir que, tras la imagen de hijo modelo, Nick oculta algo.",
        "estreno": 2023,
        "director": "Domingo González",
        "duracion": 130,
        "trailer": "https://www.youtube.com/watch?v=sg4HGMIN9J4",
        "genero": [
            "Romance",
            "Juvenil"
        ]
    },
    {
        "id": 3,
        "titulo": "La extorsión",
        "portada": "assets/movies/la-extorsion.jpg",
        "descripcion": "Un experimentado piloto comercial se ve obligado a colaborar con los servicios de inteligencia de su país, Argentina, para evitar ser sancionado por una grave falta que cometió en el trabajo. Rápidamente se ve involucrado en una trama de intriga y extorsión que pondrá en riesgo su vida y tendrá que paga un precio muy alto para poder escapar de ella.",
        "estreno": 2023,
        "director": "Martino Zaidelis",
        "duracion": 105,
        "trailer": "https://www.youtube.com/watch?v=BrbYaKEYBe8",
        "genero": [
            "Misterio"
        ]
    },
    {
        "id": 4,
        "titulo": "Un vecino gruñón",
        "portada": "assets/movies/un-vecino-gruñon.jpg",
        "descripcion": "Otto es un hombre viudo, malhumorado y hur que vive en soledad. Un día, una joven familia se muda a la casa de al lado y, contra todo pronóstico, Otto entabla amistad con Marisol, una mujer embarazada, ingeniosa e inteligente.",
        "estreno": 2023,
        "director": "Marc Forster",
        "duracion": 126,
        "trailer": "https://www.youtube.com/watch?v=Zjx0QUetIS8",
        "genero": [
            "Comedia",
            "Drama"
        ]
    },
    {
        "id": 5,
        "titulo": "Marravilloso Desastre",
        "portada": "assets/movies/marravilloso-desastre.jpg",
        "descripcion": "Travis pelea por las noches en combates ilegales de boxeo. Intrigado por una nueva estudiante, Travis le ofrece una apuesta: si pierde el próximo combate, pasará un mes sin sexo; pero, si vence, ella vivirá un mes en su apartamento.",
        "estreno": 2023,
        "director": "Roger Kumble",
        "duracion": 105,
        "trailer": "https://www.youtube.com/watch?v=UqEPdjetemk",
        "genero": [
            "Romance",
            "Juvenil"
        ]
    },
    {
        "id": 6,
        "titulo": "Misión de rescate 2",
        "portada": "assets/movies/mision-rescate.jpg",
        "descripcion": "De vuelta del borde de la muerte, el comando Tyler Rake se embarca en una peligrosa misión para salvar a la familia encarcelada de un gángster despiadado.",
        "estreno": 2023,
        "director": "Sam Hargrave",
        "duracion": 122,
        "trailer": "https://www.youtube.com/watch?v=3j_SErnxepk",
        "genero": [
            "Acción",
            "Suspenso"
        ]
    },
    {
        "id": 7,
        "titulo": "Misión: Imposible - Nación Secreta",
        "portada": "assets/movies/mision-imposible.jpg",
        "descripcion": "El equipo enfrenta al Sindicato, una peligrosa corporación de agentes especiales muy preparados, y dispuestos a todo para establecer un nuevo orden mundial. Ethan regresa a la acción, acompañado de la enigmática agente doble británica Ilsa Faust, de quien no sabe con seguridad si colabora sinceramente con él, o está trabajando de forma oculta para el Sindicato.",
        "estreno": 2015,
        "director": "Christopher McQuarrie",
        "duracion": 131,
        "trailer": "https://www.youtube.com/watch?v=SxGt-oePGSw",
        "genero": [
            "Acción",
            "Aventura"
        ]
    },
    {
        "id": 8,
        "titulo": "G.I. Joe 2: El contraataque",
        "portada": "assets/movies/el-contraataque.jpg",
        "descripcion": "En la continuación de las aventuras del equipo G.I. Joe, Duke, el segundo en el comando Roadblock, y el resto de los Joes enfrentan una doble amenaza. No sólo su enemigo mortal, Cobra, muestra nuevamente su horrible cabeza, sino que también surge un peligro desde el propio Gobierno estadounidense: podría haber un impostor en la Casa Blanca. Mientras tanto, Snake Eyes busca la paz interna, pero descubre que Storm Shadow sigue vivo.",
        "estreno": 2013,
        "director": "Jon M. Chu",
        "duracion": 120,
        "trailer": "https://www.youtube.com/watch?v=55mMLQsUnp4",
        "genero": [
            "Acción",
            "Aventura"
        ]
    },
    {
        "id": 9,
        "titulo": "The plane",
        "portada": "assets/movies/the-plane.jpg",
        "descripcion": "El piloto Brodie Torrance salva a los pasajeros de la aeronave de un accidente al realizar un aterrizaje forzoso en una isla en guerra. Los rebeldes toman a todos como rehenes, y solo Torrance y un pasajero, un asesino, pueden salvarlos.",
        "estreno": 2023,
        "director": "Jean-François Richet",
        "duracion": 107,
        "trailer": "https://www.youtube.com/watch?v=C5JiLhxXMg0",
        "genero": [
            "Acción",
            "Aventura"
        ]
    },
    {
        "id": 10,
        "titulo": "Uncharted: Fuera del mapa",
        "portada": "assets/movies/uncharted.jpg",
        "descripcion": "El cazador de tesoros Victor Sullivan recluta a Nathan Drake para que lo ayude a recuperar una fortuna de 500 s de antigüedad. Lo que comienza como un atraco se convierte en una competencia contra el despiadado Santiago Moncada.",
        "estreno": 2022,
        "director": "Ruben Fleischer",
        "duracion": 116,
        "trailer": "https://www.youtube.com/watch?v=QHT-vrD7tds",
        "genero": [
            "Acción",
            "Aventura"
        ]
    },
    {
        "id": 11,
        "titulo": "El Misterio de Soho",
        "portada": "assets/movies/misterio-soho.jpg",
        "descripcion": "Una joven, amante de la moda, viaja en el tiempo y termina en Londres en la década de 1960. Allí conoce a su gran ídolo, una cantante. Sin embargo, descubre que la vida en ese momento en el Soho es diferente de lo que ella esperaba.",
        "estreno": 2021,
        "director": " Edgar Wright",
        "duracion": 116,
        "trailer": "https://www.youtube.com/watch?v=-tDIYpWmzFc",
        "genero": [
            "Terror",
            "Drama"
        ]
    },
    {
        "id": 12,
        "titulo": "La bruja",
        "portada": "assets/movies/la-bruja.jpg",
        "descripcion": "Nueva Inglaterra, 1630. Una familia compuesta por un matrimonio de colonos cristianos, padres de cinco hijos, vive cerca de un bosque al que la leyenda popular atribuye un carácter demoníaco. La convivencia estalla y la familia se desgarra al sospechar que su hija mayor practica la brujería, debido a que las cosechas no crecen y su bebé ha desaparecido.",
        "estreno": 2016,
        "director": "Robert Eggers",
        "duracion": 90,
        "trailer": "https://www.youtube.com/watch?v=JEPQVDIFpsw",
        "genero": [
            "Terror",
            "Drama"
        ]
    },
    {
        "id": 13,
        "titulo": "Megan",
        "portada": "assets/movies/megan.jpg",
        "descripcion": "Gemma, diseñadora de una muñeca de inteligencia artificial extraordinaria, se convierte en la tutora legal de una niña. Abrumada por la responsabilidad, cede su educación y protección a la muñeca, sin saber que las consecuencias serán terribles.",
        "estreno": 2023,
        "director": "Gerard Johnstone",
        "duracion": 102,
        "trailer": "https://www.youtube.com/watch?v=e_6JPqOCH3c",
        "genero": [
            "Terror",
            "Ficción"
        ]
    },
    {
        "id": 14,
        "titulo": "Gato con botas: El último deseo",
        "portada": "assets/movies/gato-con-botas.jpg",
        "descripcion": "El Gato con Botas descubre que, debido a su pasión por la aventura, ha gastado ya 8 de sus 9 vidas. Por tanto, emprende un peligroso viaje en busca del legendario Último Deseo para solicitar que le restauren las vidas que ya perdió.",
        "estreno": 2022,
        "director": "Joel Crawford",
        "duracion": 100,
        "trailer": "https://www.youtube.com/watch?v=QaiUm8jNiCk",
        "genero": [
            "Comedia",
            "Aventura"
        ]
    },
    {
        "id": 15,
        "titulo": "Mi vida a los diecisiete",
        "portada": "assets/movies/mi-vida-a-los-diecisiete.jpg",
        "descripcion": "Nadine y Krista asisten a la misma escuela secundaria y son amigas íntimas. Sin embargo, su relación peligra cuando Nadine descubre que Krista ha empezado a salir con su hermano mayor.",
        "estreno": 2016,
        "director": "Kelly Fremon",
        "duracion": 102,
        "trailer": "https://www.youtube.com/watch?v=TAXCaL5n6q8",
        "genero": [
            "Comedia",
            "Drama"
        ]
    },
    {
        "id": 16,
        "titulo": "La ciudad perdida",
        "portada": "assets/movies/ciudad-perdida.jpg",
        "descripcion": "Un modelo de portada viaja a una jungla exótica para rescatar a una escritora de aventuras de un excéntrico multimillonario.",
        "estreno": 2022,
        "director": "Aaron Nee, Adam Nee",
        "duracion": 112,
        "trailer": "https://www.youtube.com/watch?v=2kzxPG4cz2g",
        "genero": [
            "Acción",
            "Aventura"
        ]
    },
    {
        "id": 17,
        "titulo": "Como si fuera la primera vez",
        "portada": "assets/movies/como-si-fuera-la-primera-vez.jpg",
        "descripcion": "Henry, biólogo marino, no tiene la mínima intención de comprometerse con nadie, hasta que conoce a Lucy, la chica de sus sueños. Sin embargo, hay un pequeño problema, la joven se levanta cada mañana sin recordar absolutamente nada del día anterior.",
        "estreno": 2004,
        "director": "Peter Segal",
        "duracion": 99,
        "trailer": "https://www.youtube.com/watch?v=T-Ij457ykKE",
        "genero": [
            "Romance",
            "Comedia"
        ]
    },
    {
        "id": 18,
        "titulo": "¿No es romántico?",
        "portada": "assets/movies/no-es-romantico.jpg",
        "descripcion": "Natalie es una arquitecta neoyorquina que siempre ha tratado el amor con cinismo. Su peor pesadilla se convierte en realidad cuando, después de quedar inconsciente al ser atacada en el metro, despierta atrapada en una comedia romántica.",
        "estreno": 2019,
        "director": "Todd Strauss-Schulson",
        "duracion": 88,
        "trailer": "https://www.youtube.com/watch?v=cD-XeEqKz00",
        "genero": [
            "Romance",
            "Comedia"
        ]
    },
    {
        "id": 19,
        "titulo": "Bajo el mismo cielo",
        "portada": "assets/movies/bajo-el-mismo-cielo.jpg",
        "descripcion": "Un contratista militar se encuentra en una encrucijada amorosa mientras trabaja en Hawái. Por un lado, Tracy, un viejo amor. Y por el otro, Allison, una dura piloto con la que conecta totalmente. Mientras su misión avanza, Tracy le desvelará algo trascendental acerca de su pasado.",
        "estreno": 2015,
        "director": "Cameron Crowe",
        "duracion": 105,
        "trailer": "https://www.youtube.com/watch?v=gc0s6yFBKus",
        "genero": [
            "Romance",
            "Comedia"
        ]
    },
    {
        "id": 20,
        "titulo": "Palm Springs",
        "portada": "assets/movies/palm-springs.jpg",
        "descripcion": "Nyles y Sarah, invitados a la boda de sus amigos Tale y Abe, entran en una cueva que emite una luz extraña y, más tarde, descubren que han quedado atrapados en el tiempo. Poco a poco, se enamoran mientras sufren juntos la repetición del mismo día.",
        "estreno": 2020,
        "director": "Max Barbakow",
        "duracion": 87,
        "trailer": "https://www.youtube.com/watch?v=aQ7Np-dl9hU",
        "genero": [
            "Romance",
            "Comedia"
        ]
    }
]