// alert("Este es mi javascript");

var contenidoTitulo = "Cambiar titulo";
var titulo = document.querySelector(".section-principal .fuente-acento");
titulo.innerHTML = contenidoTitulo;

var textoTitulo = titulo.innerText;
console.log(textoTitulo);

if(textoTitulo == "Cambiar titulo"){
    titulo.innerHTML = "Amelia, te amo";
} else {
    console.log("no se cumple");
}

var nombre = "Andres";
var ciudad = "Cba";
var hija = "Amelita";

var parrafo = document.querySelector(".fuente-oscura");

function cambiarTexto(nombre, ciudad, hija) {
    var contenido = `Mi nombre es ${nombre}, soy fotografo, tecnico informatico y estudio programacion desde 2020, naci en ${ciudad}, tengo 29 años, resido actualmente en Jujuy con mi pareja y mi primer hija, ${hija}`;

return contenido;
}

parrafo.innerText = cambiarTexto(nombre, ciudad, hija);

var menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};