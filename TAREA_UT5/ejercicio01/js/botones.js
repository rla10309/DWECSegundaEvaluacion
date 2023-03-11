/**
 * @author Pilar Fernández Nieto
 * @version 1.0
 * @description Creación de una botonera flexible a la que pasaremos por pantalla el formato. Al puslar uno de los botones deberá devolver la fila y la columna del botón pulsado
 */
window.onload = ejercicioBotones;
/**
 *
 */
function ejercicioBotones() {
  var boton = document.getElementById("boton");
  var contenedor = document.getElementById("botones");
  var error = document.getElementById("informacion");
  var n = 1;
  var btn = "";
  var vueltas = 0;

  boton.addEventListener("click", generaBotones);

  function generaBotones() {
    var tamaño = document.getElementById("dimension").value;
    var entrada = document.getElementById("dimension");
    var b = contenedor.getElementsByClassName("boton");

    entrada.addEventListener("click", function () {
      if (vueltas != 0) {
        var bt = b.length - 1;

        for (var i = 1; i <= tamaño; i++) {
          for (var j = 1; j <= tamaño; j++) {
            contenedor.removeChild(b[bt]);
            bt--;
          }
        }
        n = 1;
        entrada.textContent = '';
      }
    });
    if (tamaño === "" || tamaño < 2) {
      var alerta = document.createElement("p");
      alerta.setAttribute("class", "error");
      alerta.textContent =
        "Esa dimensión no es válida. Introduzca un número mayor de 1";
      error.appendChild(alerta);
    } else {
      for (var i = 1; i <= tamaño; i++) {
        for (var j = 1; j <= tamaño; j++) {
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

      var btn_elegido;
      var cont = 0;

      for (var i = 0; i < b.length; i++) {
        b[i].addEventListener("click", getUbicacion);
      }
      function getUbicacion(e) {
        btn_elegido = e.target.id;
        for (var f = 1; f <= tamaño; f++) {
          for (var c = 1; c <= tamaño; c++) {
            cont++;
            if (cont == btn_elegido)
              alert(
                `Has pulsado el botón situado el la fila ${f} columna ${c}`
              );
          }
        }
      }
    }
    vueltas++;
  }
}
