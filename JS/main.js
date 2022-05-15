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



// function seleccionarCategoria() {
//     let categoria = document.getElementById('categoria');
//     let resultado = categoria.value;
//     document.getElementById('totalPagar').innerText = `${resultado}`;
// }


const precioTicket= 200;

let nCantidad = parseInt(document.getElementById('cantidad')).value;
let nCategoria = parseInt(document.getElementById('categoria')).value;

function totalPrecio(){
   let total= nCantidad*precioTicket-nCategoria;

   document.getElementById('totalPagar').innerText = `${total}`;
   

}