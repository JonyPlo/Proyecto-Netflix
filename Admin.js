class Pelicula {
    constructor(codigo, nombre, descripcion, categoria, imagen) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.imagen = imagen;
        this.publicado = true;
    }
}



var arregloPeliculas = [];

var existe = false;

leer();

if (localStorage.length > 0 && arregloPeliculas == 0) {
    arregloPeliculas = JSON.parse(localStorage.getItem("Pelis"));
}



function agregarPelicula() {
    let inputCodigo = document.getElementById("codigo").value;
    let inputNombre = document.getElementById("nombre").value;
    let inputDescripcion = document.getElementById("descripcion").value;
    let selectCategoria = document.getElementById("categoria").value;
    let inputPortada = document.getElementById("imagen").value;

    var objetoPelicula = new Pelicula(inputCodigo, inputNombre, inputDescripcion, selectCategoria, inputPortada);

    arregloPeliculas.push(objetoPelicula);

    localStorage.setItem("Pelis", JSON.stringify(arregloPeliculas));

    leer();

    limpiarform();
}

function limpiarform() {
    document.getElementById("codigo").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("imagen").value = "";
}

function leer() {

    let _pelisJSON = JSON.parse(localStorage.getItem("Pelis"));
    dibujarTabla(_pelisJSON);
}

function dibujarTabla(arreglo) {

    borrarTabla()

    for (i in arreglo) {

        let tr = document.createElement("tr");

        let celdaCodigo = document.createElement("th");
        let celdaNombre = document.createElement("td");
        let celdaCategoria = document.createElement("td");
        let celdaDescripcion = document.createElement("td");
        let celdaPortada = document.createElement("td");
        let celdaCheckbox = document.createElement("td");
        let inputCheckbox = document.createElement("input");

        let celdaBotones = document.createElement("td");
        let contenedorBotones = document.createElement("div");
        let botonBorrar = document.createElement("a");
        let dibujoBotonBorrar = document.createElement("i");
        let botonModificar = document.createElement("a");
        let dibujoBotonModificar = document.createElement("i");
        let botonDestacar = document.createElement("a");
        let dibujoBotonDestacar = document.createElement("i");

        celdaCodigo.innerText = arreglo[i].codigo;
        celdaNombre.innerText = arreglo[i].nombre;
        celdaPortada.innerText = arreglo[i].imagen;
        celdaDescripcion.innerText = arreglo[i].descripcion;
        celdaCategoria.innerText = arreglo[i].categoria;

        celdaCodigo.className = "py-5 align-middle";
        celdaNombre.className = "py-5 align-middle";
        celdaCategoria.className = "py-5 align-middle";
        celdaPortada.className = "py-5 align-middle";
        celdaDescripcion.className = "py-5 align-middle";
        celdaCheckbox.className = "py-5 align-middle";

        inputCheckbox.className = "text-center pt-2";
        inputCheckbox.type = "checkbox";

        celdaBotones.className = "py-5 align-middle";
        contenedorBotones.className = "d-flex justify-content-center";

        botonBorrar.addEventListener("click", borrarFila);
        botonBorrar.id = arreglo[i].codigo;
        dibujoBotonBorrar.className = "text-light fa fa-trash fa-2x px-2 botonesAdmin";

        botonModificar.addEventListener("click", modificarFila);
        botonModificar.id = arreglo[i].codigo;
        dibujoBotonModificar.className = "text-light fa fa-pencil-square-o fa-2x px-2 botonesAdmin";

        botonDestacar.addEventListener("click", destacarFila);
        botonDestacar.id = arreglo[i].codigo;
        dibujoBotonDestacar.className = "text-light fa fa-star-o fa-2x botonesAdmin";

        tr.appendChild(celdaCodigo);
        tr.appendChild(celdaNombre);
        tr.appendChild(celdaCategoria);
        tr.appendChild(celdaDescripcion);
        tr.appendChild(celdaPortada);
        tr.appendChild(celdaCheckbox);
        celdaCheckbox.appendChild(inputCheckbox);
        tr.appendChild(celdaBotones);
        celdaBotones.appendChild(contenedorBotones);
        contenedorBotones.appendChild(botonBorrar);
        botonBorrar.appendChild(dibujoBotonBorrar);
        contenedorBotones.appendChild(botonModificar);
        botonModificar.appendChild(dibujoBotonModificar);
        contenedorBotones.appendChild(botonDestacar);
        botonDestacar.appendChild(dibujoBotonDestacar);

        let tbody = document.getElementById("tbody");
        tbody.appendChild(tr);

    }
}

function borrarTabla() {
    let tbody = document.getElementById("tbody");
    if (tbody.children.length > 0) {
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }
    }
}

function borrarFila() {
    
    let _arregloViejo = JSON.parse(localStorage.getItem("Pelis"));

    let codigoPelicula = this.id;

    let _arregloNuevo = _arregloViejo.filter(function (peli) {
        return peli.codigo != codigoPelicula
    });

    localStorage.setItem("Pelis", JSON.stringify(_arregloNuevo));
    arregloPeliculas = _arregloNuevo;
    leer();

}

function modificarFila() {

    let _arregloViejo = JSON.parse(localStorage.getItem("Pelis"));

    let codigoPelicula = this.id;

    let objetoEncontrado = _arregloViejo.filter(function (peli) {
        return peli.codigo == codigoPelicula
    });

    let ventanaModal = document.getElementById("exampleModal");

    document.getElementById("codigo").value = objetoEncontrado[0].codigo;
    document.getElementById("nombre").value = objetoEncontrado[0].nombre;
    document.getElementById("descripcion").value = objetoEncontrado[0].descripcion;
    document.getElementById("categoria").value = objetoEncontrado[0].categoria;
    document.getElementById("imagen").value = objetoEncontrado[0].imagen;

    existe = true;
    $(ventanaModal).modal("show");
}

function guardarPelicula() {
    if (existe == false) {
        agregarPelicula();
    } else {
        guardarPeliculaModificada();
    }
}

function guardarPeliculaModificada() {

    let _arregloViejo = JSON.parse(localStorage.getItem("Pelis"));

    let inputCodigo = document.getElementById("codigo").value;

    for (i in _arregloViejo) {
        if (_arregloViejo[i].codigo == inputCodigo) {
            _arregloViejo[i].nombre = document.getElementById("nombre").value
            _arregloViejo[i].descripcion = document.getElementById("descripcion").value
            _arregloViejo[i].categoria = document.getElementById("categoria").value
            _arregloViejo[i].imagen = document.getElementById("imagen").value
        }
    }

    let ventanaModal = document.getElementById("exampleModal");
    localStorage.setItem("Pelis", JSON.stringify(_arregloViejo));

    existe = false;

    leer();

    $(ventanaModal).modal("hide");

}

function destacarFila() {

}