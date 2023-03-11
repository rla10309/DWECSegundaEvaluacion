window.onload = function () {
  var btn_amarillo = document.getElementById("amarillo");
  var btn_verde = document.getElementById("verde");
  var btn_negro = document.getElementById("negro");
  var btn_rojo = document.getElementById("rojo");
  var btn_azul = document.getElementById("azul");
  var btn_blanco = document.getElementById("blanco");
  var estado_pincel = document.getElementById("estado");
  var panel = document.getElementById("panel");

  btn_amarillo.addEventListener("click", usaColor);
  btn_verde.addEventListener("click", usaColor);
  btn_negro.addEventListener("click", usaColor);
  btn_rojo.addEventListener("click", usaColor);
  btn_azul.addEventListener("click", usaColor);
  btn_blanco.addEventListener("click", usaColor);

  function usaColor(e) {
    var color_elegido = e.target.id;
    estado_pincel.textContent = "Pincel Activado.Color " + color_elegido;
    var c = panel.getElementsByClassName("cuadricula");
    for (var i = 0; i < c.length; i++) {
      var cuadrado = c[i];
      cuadrado.addEventListener("click", pinta);
    }
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
      }
    }
  }
};
