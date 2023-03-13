/**
 * @author Pilar Fernández Nieto
 * @version 1.0
 * @description Creación de una botonera flexible a la que pasaremos por pantalla el formato. Al puslar uno de los botones deberá devolver la fila y la columna del botón pulsado
 */
window.onload = ejercicioBotones;
/**
 *ejercicioBotones
 * función principal del ejercicio que salta al cargar la ventana
 */
function ejercicioBotones() {
  /*Variable donde se almacena el botón que va a escuchar el evento*/
  var boton = document.getElementById("boton"); 
  /*Variable que almacena la etiqueta donde se va a generar la botonera*/
  var contenedor = document.getElementById("botones");
  /*Variable que almacena la etiqueta  donde se encuentra el botón y donde se va a generar el mensaje de error, si lo hubiera*/
  var primerDiv = document.getElementById("informacion");
  var n = 1;
  var btn = "";
  var vueltas = 0;

  
  boton.addEventListener("click", generaBotones);


  
  /**
   * generaBotones
   * funcion que se ejecutará al pulsar el botón que genera la botonera
   */
  function generaBotones() {
    /*variable para la dimensión de la botonera*/
    var tamaño = document.getElementById("dimension").value;
    /*variable para el input que recoge la dimensión*/
    var entrada = document.getElementById("dimension");
    /*Colección donde se almacenan todos los botonesd que se generen*/
    var b = contenedor.getElementsByClassName("boton");
    /*Párrafo para mostrar el mensaje de error, si lo hubiera*/
    var alerta = document.createElement("p");
   



    /*creamos un evento para eliminar la botonera creada, en caso de que la hubiera*/
    entrada.addEventListener("click", function (e) {
      var saltos = contenedor.querySelectorAll("br");
      var elementos = contenedor.querySelectorAll(".boton");
      entrada.value = '';
      if (vueltas != 0) {
        saltos.forEach(s => s.remove());
        elementos.forEach(elem => elem.remove());
      n=1;
    }
  });
    /*Condición para que siga adelante en caso de que los datos sean correctos o que muestra un mensaje en el caso de que no*/
    if (tamaño === "" || tamaño < 2) {
      alerta.setAttribute("class", "error");
      alerta.textContent = "Esa dimensión no es válida. Introduzca un número mayor de 1";
      primerDiv.appendChild(alerta);
      /*se añade un temporizador para que el mensaje de alerta desaparezca a los 3 segundos*/
      const temporizador = setTimeout(() => primerDiv.removeChild(alerta), 3000);
    } else {
      /*creamos la botonera*/
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

      /**
       * getUbitacion
       * @param {Event} e 
       * función que recoge la fila y columna del botón pulsado
       */
      function getUbicacion(e) {
        btn_elegido = e.target.id;
        for (var f = 1; f <= tamaño; f++) {
          for (var c = 1; c <= tamaño; c++) {
            cont++;
            if (cont == btn_elegido)
              alert(`Has pulsado el botón situado el la fila ${f} columna ${c}`);
          }
        }
      }
    }
    vueltas++;
  }
}
