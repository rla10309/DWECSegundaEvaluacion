window.onload = ejercicioBotones;

function ejercicioBotones() {
  var boton = document.getElementById("boton");
  var contenedor = document.getElementById("botones");
  var error = document.getElementById("informacion");
  var n = 1;
  var btn = "";
  boton.addEventListener("click", generaBotones);

  function generaBotones() {
    var dato = document.getElementById("dimension").value;
    if (dato === "" || dato < 2) {
      var alerta = document.createElement("p");
      alerta.setAttribute("class", "error");
      alerta.textContent =
        "Esa dimensión no es válida. Introduzca un número mayor de 1";
      error.appendChild(alerta);
    } else {
      for (var i = 1; i <= dato; i++) {
        for (var j = 1; j <= dato; j++) {
          btn = document.createElement("button");
          btn.setAttribute("class", "boton");
          btn.setAttribute("id", n);
          btn.textContent = n;
          contenedor.appendChild(btn);
          n++;
        }
        var salto = document.createElement("br");
        contenedor.appendChild(salto);
      }
    }
    var b = document.getElementsByClassName("boton");
    console.log(b);
 

  }
}
