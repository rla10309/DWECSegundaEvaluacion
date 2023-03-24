/**
 * @author Pilar Fernández Nieto
 * @version 1.0
 * @date 19/03/2023
 * @description aplicación que simule un panel de dibujo
 */


/**
 * función principal que se ejecuta al cargar la página
 */
window.onload = function () {
  /* VARIABLES */
  var btn_amarillo = document.getElementById("amarillo");
  var btn_verde = document.getElementById("verde");
  var btn_negro = document.getElementById("negro");
  var btn_rojo = document.getElementById("rojo");
  var btn_azul = document.getElementById("azul");
  var btn_blanco = document.getElementById("blanco");
  var estado_pincel = document.getElementById("estado");
  var panel = document.getElementById("panel");

  /*Al hacer click en alguno de los colores se activa la función de pintar*/
  btn_amarillo.addEventListener("click", usaColor);
  btn_verde.addEventListener("click", usaColor);
  btn_negro.addEventListener("click", usaColor);
  btn_rojo.addEventListener("click", usaColor);
  btn_azul.addEventListener("click", usaColor);
  btn_blanco.addEventListener("click", usaColor);

  
  /**
   * usaColor 
   * @param {Event} e 
   * función que activa el panel de dibujo
   */
  function usaColor(e) {
    /*Se carga el id del color elegido*/
    var color_elegido = e.target.id;
    /*Array con los elementos vacíos de la cuadricula que sirve de panel*/
    var c = panel.getElementsByClassName("cuadricula");
    estado_pincel.textContent = "Pincel Activado.Color " + color_elegido;
    estado_pincel.addEventListener("click", desactiva);
    
    /*Con este bucle se asigna el evento y manejador para cada cuadricula del panel*/
    for (var i = 0; i < c.length; i++) {
      var cuadrado = c[i];
      cuadrado.addEventListener("click", pinta);
    }

    /**
     * pinta
     * función que cambia el color de fondo de la cuadrícla con el color elegido
     */
    function pinta() {
      switch (color_elegido) {
        case "amarillo":
          this.style.background = "yellow";
          break;
        case "verde":
          this.style.background = "green";
          break;
        case "negro":
          this.style.background = "black";
          break;
        case "rojo":
          this.style.background = "red";
          break;
        case "azul":
          this.style.background = "blue";
          break;
        case "blanco":
          this.style.background = "white";
          break;
      }
    }

    /**
     * desactiva
     * al hacer click en el panel informativo se desactiva la función de pintar
     */
    function desactiva(){
      estado_pincel.innerHTML = "Pincel desactivado";
      for (var i = 0; i < c.length; i++) {
        var cuadrado = c[i];
        cuadrado.removeEventListener("click", pinta);
      }
      
  }
}
}
