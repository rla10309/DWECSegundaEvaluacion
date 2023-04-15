$(document).ready(function (e) {
  $("#instrucciones").click((e) => {
    alert(
      "Debes pinchar sobre el botón que aparece en la pantalla para sumar puntuación. Cada pulsación sumará un punto a tu marcador. Cuando acabes la partida, odrás reinicarla al pulsar -Aceptar- en la pantalla de la puntuación. ¡Ten cuidado que el tiempo corre desde que pulsas!¡Suerte!"
    );
  });

  document.getElementById("pulsame").addEventListener("click", iniciar);
  
  document.getElementById("pulsame").addEventListener("click", iniciarAnimacion);

  document.getElementById("pulsame").addEventListener("click", (e) => {
    console.log(pulsos);
    document.getElementById("pulsame").removeEventListener("click", iniciar);
    document.getElementById("pulsame").removeEventListener("click", iniciarAnimacion);
    pulsos ++;
  });
  

  let cont = 11;
  let pulsos = 0;
 

  function iniciar() {
    let intervalos = setInterval(cuentaAtras, 1000);
    function cuentaAtras() {
      cont--;
      document.getElementById("crono").innerHTML = cont;
      if (cont < 1) {
        clearInterval(intervalos);
        cont = 11;
        
        alert(`Has hecho ${pulsos-1} pulsos`);
      }
    }
  }
  function iniciarAnimacion() {
    let movimientos = setInterval(animacion, 1000);

    function animacion() {
      $("#pulsame")
        .animate({
            top: "-=200px",
          },1500,"linear")
        .animate({
            top: "+=200px",
          }, 1500, "linear");
    }
    setTimeout(function () {
      $("#pulsame").finish();
      clearInterval(movimientos);
     
    }, 10000);
  }
  
});




