leerPeliculaAccion();

function leerPeliculaAccion() {
    let arregloPeliculas = JSON.parse(localStorage.getItem("Pelis"));

    let contenedor = document.getElementById("contenedorAccion");

    for (i in arregloPeliculas) {

        if (arregloPeliculas[i].categoria == "accion" && arregloPeliculas[i].publicado == true) {

            let divPeliculas = '<div><a href="error404.html"><img src="./img/Peliculas/accion/' + arregloPeliculas[i].imagen + '"></a></div>';

            contenedor.innerHTML += divPeliculas;
        }
    }
}

leerPeliculaSuspenso();

function leerPeliculaSuspenso() {
    let arregloPeliculas = JSON.parse(localStorage.getItem("Pelis"));

    let contenedor = document.getElementById("contenedorSuspenso");

    for (i in arregloPeliculas) {

        if (arregloPeliculas[i].categoria == "suspenso" && arregloPeliculas[i].publicado == true) {

            let divPeliculas = '<div><a href="error404.html"><img src="./img/Peliculas/suspenso/' + arregloPeliculas[i].imagen + '"></a></div>';

            contenedor.innerHTML += divPeliculas;
        }
    }
}

leerPeliculaInfantil();

function leerPeliculaInfantil() {
    let arregloPeliculas = JSON.parse(localStorage.getItem("Pelis"));

    let contenedor = document.getElementById("contenedorInfantil");

    for (i in arregloPeliculas) {

        if (arregloPeliculas[i].categoria == "infantil" && arregloPeliculas[i].publicado == true) {

            let divPeliculas = '<div><a href="error404.html"><img src="./img/Peliculas/infantil/' + arregloPeliculas[i].imagen + '"></a></div>';

            contenedor.innerHTML += divPeliculas;
        }
    }
}

leerPeliculaDestacada()

function leerPeliculaDestacada() {
    let arregloPeliculas = JSON.parse(localStorage.getItem("PeliDestacada"));

    let titulo = document.getElementById("tituloDestacado");
    let descripcion = document.getElementById("descripcionDestacada");
    let fondo = document.getElementById("fondoDestacado");

    titulo.innerText = arregloPeliculas[0].nombre;
    descripcion.innerText = arregloPeliculas[0].descripcion;

    if (arregloPeliculas[0].categoria == "accion") {
        fondo.setAttribute("style", "background-image: url(./img/Peliculas/accion/" + arregloPeliculas[0].imagen + ");");

    } else if (arregloPeliculas[0].categoria == "infantil") {
        fondo.setAttribute("style", "background-image: url(./img/Peliculas/infantil/" + arregloPeliculas[0].imagen + ");");

    } else if (arregloPeliculas[0].categoria == "suspenso") {
        fondo.setAttribute("style", "background-image: url(./img/Peliculas/suspenso/" + arregloPeliculas[0].imagen + ");");
    }
}