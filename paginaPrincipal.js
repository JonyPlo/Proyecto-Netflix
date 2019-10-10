leerPeliculaAccion();

function leerPeliculaAccion() {
    let arregloPeliculas = JSON.parse(localStorage.getItem("Pelis"));

    let contenedor = document.getElementById("contenedorAccion");

    for (i in arregloPeliculas) {

        if (arregloPeliculas[i].categoria == "accion") {

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

        if (arregloPeliculas[i].categoria == "suspenso") {

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

        if (arregloPeliculas[i].categoria == "infantil") {

            let divPeliculas = '<div><a href="error404.html"><img src="./img/Peliculas/infantil/' + arregloPeliculas[i].imagen + '"></a></div>';

            contenedor.innerHTML += divPeliculas;
        }
    }
}