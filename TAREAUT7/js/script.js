$(document).ready(inicio);

function inicio() {
  consultar(
    "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/33024/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhcHJlaWxtY0BnbWFpbC5jb20iLCJqdGkiOiJmMzFlZWFmZC1lZmU4LTRjNzMtYmViYi01N2NkOGI5NzIwZmMiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTY4MjYxOTIxOCwidXNlcklkIjoiZjMxZWVhZmQtZWZlOC00YzczLWJlYmItNTdjZDhiOTcyMGZjIiwicm9sZSI6IiJ9._UtkCfCuK1AGDR2f_WHvUre7n2FsjKFcT5sGow6W9hw&nocache=" +
      new Date().getTime()
  );
}
var xhr;
var xhr2;
function consultar(url) {
  xhr = createXHR();

  xhr.onreadystatechange = tratamientoResultado;
  var data = url;
  xhr.open("get", data);
  xhr.send();

  function createXHR() {
    var xhr = null;
    try {
      xhr = new XMLHttpRequest();
    } catch (Error) {
      try {
        xhr = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (Error) {
        try {
          xhr = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (Error) {
          xhr = null;
        }
      }
    }
    return xhr;
  }

  function tratamientoResultado() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(this.responseText);
      console.log(data.datos);
      var datos = data.datos;
      leerDatos(datos);
    }
  }

  function leerDatos(datos){
    xhr2 = createXHR();
    xhr2.onreadystatechange = function (e){
        if(xhr2.readyState == 4 && xhr2.status == 200){
            var doc = JSON.parse(this.responseText);

            doc.forEach(item => {
                var autorizacion = item.origen.copyright;
                var notalegal = item.origen.notaLegal;
                var parrafo = document.createElement("p");
                var enlace = document.createElement("a");
                enlace.setAttribute("href", notalegal);
                parrafo.textContent = autorizacion;
            
                document.getElementById("uso_legal").appendChild(parrafo);
                document.getElementById("uso_legal").appendChild(enlace);

            })
        }
    }
    xhr2.open("get", datos);
    xhr2.send();
  }
}
