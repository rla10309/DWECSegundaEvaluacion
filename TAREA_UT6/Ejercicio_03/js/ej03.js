/**
 * @author Pilar Fernández Nieto
 * @version 1.0
 * @date 16/04/2023
 * @description Crea un juego con animaciones que puntúe las veces que haces click en un botón. Se utilizará JavaScript nativo y jQuery
 */

/*Función principal que se ejecutará al cargar la página completamente*/
$(document).ready(function () {

  /*Se muestran y ocultan las instrucciones del juego*/
  $("#instrucciones").click(() => {
    $("#panel").show();
  });
  $("#cerrar").click(function (e) { 
    $("#panel").hide();
    
  });
  //iniciar();

  document.getElementById("pulsame").addEventListener("click", iniciar);
  
  document.getElementById("pulsame").addEventListener("click", iniciarAnimacion);

  document.getElementById("pulsame").addEventListener("click", (e) => {
    
    document.getElementById("pulsame").removeEventListener("click", iniciar);
    document.getElementById("pulsame").removeEventListener("click", iniciarAnimacion);
    pulsos ++;
  });
  
  /*Variables globales*/
  /*cont se inicializa a 11 porque la función que la va a utilizar tiene un retardo de 1 segundo*/
  let cont = 11;
  let pulsos = 0;
 

  /**
   * iniciar()
   * inicia la cuenta atrás y la muestra en el navegador
   */
  function iniciar() {
    let intervalos = setInterval(cuentaAtras, 1000);
    /**
     * cuentaAtras()
     * función que se ejecuta dentro del método setInterval. Resta uno al contador inicilizado a 11 en intervalos de un segundo.
     */
    function cuentaAtras() {
      cont--;
      document.getElementById("crono").innerHTML = cont;
      if (cont < 0) {
       /*Detenemos los intervalos cuando el tiempo llega a 0*/
        clearInterval(intervalos);
        /*Se muestra el mensaje con la puntuación. Se resta uno al contador total para que no cuente el click que activa el juego*/
        alert(`Has conseguido ${pulsos-1} puntos`);
        /*Recarga la página para empezar otra vez*/
        location.reload();
      }
    }
  }

  /**
   * iniciarAnimacion()
   * función que ejecuta la animación durante 10 segundos
   */
  function iniciarAnimacion() {
    let movimientos = setInterval(animacion);
    /**
     * animacion()
     * función que hace que el botón se mueva arriba y abajo
     */
    function animacion() {
      $("#pulsame")
        .animate({
            top: "-=200px",
          },1500,"linear")
        .animate({
            top: "+=200px",
          }, 1500, "linear");
    }
    /*Temporizador que controla el fin de la animación*/
    //setTimeout(function () {
      if(cont < 0){
      $("#pulsame").finish();
      clearInterval(movimientos);
      }
    //}, 10000);
  }
  
});




