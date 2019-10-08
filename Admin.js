class Pelicula {
    constructor(codigo, nombre, descripcion, categoria) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.publicado = true;
    }
}

var arregloPeliculas = [];
var existe = false;
leer();

if (localStorage > 0 && arregloPeliculas == 0) {
    arregloPeliculas = localStorage;
}

function agregarPelicula() {
    let inputCodigo = document.getElementById("codigo").value;
    let inputNombre = document.getElementById("nombre").value;
    let inputDescripcion = document.getElementById("descripcion").value;
    let selectCategoria = document.getElementById("categoria").value;

    var objetoPelicula = new Pelicula(inputCodigo, inputNombre, inputDescripcion, selectCategoria);

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
}

function leer() {

    let pelisLS = localStorage.getItem("Pelis");
    let _pelisJSON = JSON.parse(pelisLS);
    dibujarTabla(_pelisJSON);
}

function dibujarTabla(arreglo) {

    for (i in arreglo) {

        let tr = document.createElement("tr");

        let celdaCodigo = document.createElement("th");
        let celdaNombre = document.createElement("td");
        let celdaCategoria = document.createElement("td");
        let celdaDescripcion = document.createElement("td");
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

        celdaCodigo.innerText = arreglo[i].inputCodigo;
        celdaNombre.innerText = arreglo[i].inputNombre;
        celdaDescripcion.innerText = arreglo[i].inputDescripcion;
        celdaCategoria.innerText = arreglo[i].selectCategoria;

        celdaCodigo.className = "py-5 align-middle";
        celdaNombre.className = "py-5 align-middle";
        celdaCategoria.className = "py-5 align-middle";
        celdaDescripcion.className = "py-5 align-middle";
        celdaCheckbox.className = "py-5 align-middle";

        inputCheckbox.className = "text-center pt-2";
        inputCheckbox.type = "checkbox";

        celdaBotones.className = "py-5 align-middle";
        contenedorBotones.className = "d-flex justify-content-center";

        // botonBorrar.addEventListener("click", borrarFila);
        botonBorrar.id = arreglo[i].inputCodigo;
        dibujoBotonBorrar.className = "text-light fa fa-trash fa-2x px-2 botonesAdmin";

        // botonModificar.addEventListener("click", modificarFila);
        botonModificar.id = arreglo[i].inputCodigo;
        dibujoBotonModificar.className = "text-light fa fa-pencil-square-o fa-2x px-2 botonesAdmin";

        // botonDestacar.addEventListener("click", destacarFila);
        botonDestacar.id = arreglo[i].inputCodigo;
        dibujoBotonDestacar.className = "text-light fa fa-star-o fa-2x botonesAdmin";

        tr.appendChild(celdaCodigo);
        tr.appendChild(celdaNombre);
        tr.appendChild(celdaCategoria);
        tr.appendChild(celdaDescripcion);
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