var cajas = document.getElementsByTagName("div");
var primeraCaja = document.getElementById("primeraCaja");

// primeraCaja.innerHTML = "<u>Hola Mundo</u>";

var caja = document.createElement("div");
var contenido = document.createTextNode("Hola Mundo");
caja.appendChild(contenido);
// caja.setAttribute("class", "caja naranja");

var contenedor = document.getElementById("contenedor");
contenedor.appendChild(caja);

//Modificando id o clase

caja.id = "quintaCaja";
caja.className = "caja naranja";

var padre = cajas[0].parentNode;

// padre.insertBefore(caja, cajas[2]);

padre.replaceChild(caja, cajas[2]);

padre.removeChild(cajas[3]);