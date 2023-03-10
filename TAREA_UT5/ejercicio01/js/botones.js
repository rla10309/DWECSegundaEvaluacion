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
      var b = contenedor.getElementsByClassName("boton");
      var eleccion;
      var cont = 0;
      for(var i=0;i<b.length;i++){
        b[i].addEventListener("click", function(e){
          eleccion = e.target.id;
          console.log(eleccion);
          for(var f=1;f<=dato;f++){
            for(var c=1;c<=dato;c++){
              cont++;
              if(cont == eleccion){
                alert(`Has pulsado el botón situado el la fila ${f} columna ${c}`);
              }
            }
          }
        });
      }
     

        
    }

  }
}