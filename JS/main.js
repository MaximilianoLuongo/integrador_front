document.getElementById("header").innerHTML = `
<nav class="navbar navbar-expand-sm flex-column flex-md-row bg-dark navbar-dark">
<div class="a-izq">
    <div class="container">
        <a class="navbar-brand a-izq" href="index.html">
            <img src="./Imagenes/codoacodo.png" alt="" width="80" height="50"
                class="d-inline-block align-text-center">
            Conf Bs As
        </a>
    </div>
</div>
<div class="a-der">
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link active" href="#">La conferencia</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#oradores">Los oradores</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#texto-der">El lugar y la fecha</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#conv-orador">Conviértete en orador</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-success" href="compra.html">Comprar tickets</a>
        </li>
    </ul>
</div>
</nav>
                
`
//Header

document.getElementById("footer").innerHTML = `

<ul class="nav bg-footer">
                <li class="nav-item">
                    <a class="nav-link c-fff" href="#">Preguntas frecuentes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link c-fff" href="#">Contáctanos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link c-fff" href="#">Prensa</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link c-fff" href="#">Conferencias</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link c-fff" href="#">Términos y condiciones</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link c-fff" href="#">Privacidad</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link c-fff" href="#">Estudiantes</a>
                </li>
            </ul>

`
//Footer

function seleccionarCategoria() {
    let categoria = document.getElementById("categoria")
    let select = parseFloat(categoria.value)
    return select
}

function precioTotal() {
    let cantidad = parseFloat(document.getElementById("cantidad").value);
    let precio = parseFloat(document.getElementById("precio").textContent);
    let descuento = seleccionarCategoria();
    let totalDescuento = cantidad * precio - ((cantidad * precio) * descuento)
    document.getElementById("total").innerHTML = totalDescuento;
}

function borrarElementos() {
    document.getElementById("total").innerHTML = "";
}

let resumen = document.getElementById("resumen")
resumen.addEventListener("click", precioTotal)
let borrar = document.getElementById("borrar")
borrar.addEventListener("click", borrarElementos)
