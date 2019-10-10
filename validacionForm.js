var check = document.getElementById("check");

check.addEventListener("change", validarcheckbox);

function validarcheckbox() {
    if (check.checked) {
        check.className = "form-check-input is-valid"
    } else {
        check.className = "form-check-input is-invalid"
    }
}

function verificarDatos(elemento) {
    if (elemento.value != "") {
        elemento.className = "form-control is-valid";
        return true;
    } else {
        elemento.className = "form-control is-invalid";
        return false;
    }
}
