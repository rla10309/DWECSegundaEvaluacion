/**
 * @autor Pilar Fernández Nieto
 * @version  1.0
 * @description Muestra información adicional sobre el tiempo en el navegador asociando un evento y utilizando una petición asíncrona y JavaScript.
 * */

/**
 * funcion inicio()
 * función principal que se activa cuando se haya cargado la página completa en el navegador
 */
var xhr = createXHR();
var xhr2 = createXHR();
  consultar(
    "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/33024/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhcHJlaWxtY0BnbWFpbC5jb20iLCJqdGkiOiJmMzFlZWFmZC1lZmU4LTRjNzMtYmViYi01N2NkOGI5NzIwZmMiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTY4MjYxOTIxOCwidXNlcklkIjoiZjMxZWVhZmQtZWZlOC00YzczLWJlYmItNTdjZDhiOTcyMGZjIiwicm9sZSI6IiJ9._UtkCfCuK1AGDR2f_WHvUre7n2FsjKFcT5sGow6W9hw&nocache=" +
    new Date().getTime()
  );






/**
 * funcion consultar
 * @param {String} url 
 * función que pasa como parámetro al objeto XMLHttpRequest la url de donde obtener los datos a tratar
 */
function consultar(url) {
  xhr.onreadystatechange = tratamientoResultado;
  var data = url;
  xhr.open("get", data);
  xhr.send();
}
/**
 * funcion createXHR
 * @returns {XMLHttpRequest} xhr
 * función que crea el objeto XMLHttpRequest atendiendo al navegador con el que trabajamos
 */
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


/**
 * función para recoger los datos que devuelve la petición
 */
function tratamientoResultado() {
  if (xhr.readyState == 4 && xhr.status == 200) {

    var data = JSON.parse(this.responseText);
    var datos = data.datos;
    console.log(datos);
    leerDatosJS(datos);
  }
}

function leerDatosJS(datos) {

  xhr2.onreadystatechange = function muestraDatos() {
    if (xhr2.readyState == 4 && xhr2.status == 200) {
      var doc = JSON.parse(this.responseText);
      let newSection = document.createElement("article");
      newSection.setAttribute("id", "newSection");
      newSection.classList.add("fondo", "border", "w-100", "mx-auto", "p-3");
  
      document.querySelector("#masInfo").addEventListener("click", function (e) {
        console.log(e);
        if (newSection.children.length != 0) {
          let elementos = newSection.children;
          newSection.removeChild(elementos[0]);
        }
        let dia = doc[0].prediccion.dia;
        console.log(dia);
        let viento = dia[0].viento;
        let sensacionT = dia[0].sensTermica;
        let sMaxima = sensacionT.maxima;
        let sMinima = sensacionT.minima
        let humedad = dia[0].humedadRelativa;
        let hMaxima = humedad.maxima;
        let hMinima = humedad.minima;
        let velocidad = viento[2].velocidad;
        let periodo = viento[2].periodo;
        let direccion = viento[2].direccion;
        let ul = document.createElement("ul");
        let ulViento = document.createElement("ul");
  
        ul.classList.add("list-group", "w-75", "mx-auto");
        ulViento.innerHTML = "<li><span class='fw-bold'>Periodo</span>: "+periodo+ "h</li><li><span class='fw-bold'>Dirección</span>: "+direccion+"</li><li><span class='fw-bold'>Velocidad</span>: "+velocidad+"km/h</li>"
        ul.innerHTML = "<li><span class='fw-bold'>Sensación Térmica Máxima:</span> " + sMaxima + "\u00B0</li>";
        ul.innerHTML += "<li><span class='fw-bold'>Sensación Térmica Mínima:</span> " + sMinima + "\u00B0</li>"
        ul.innerHTML += "<li><span class='fw-bold'>Humedad Relativa máxima:</span> " + hMaxima + "%</li>";
        ul.innerHTML += "<li><span class='fw-bold'>Humedad Relativa mínima:</span> " + hMinima + "%</li>";
        ul.innerHTML += "<li id='viento' class='fw-bold'>Viento: </li>";
        newSection.append(ul);
        document.getElementById("info_dactual").append(newSection);
        
        document.getElementById("viento").append(ulViento);
  
        let lista = document.getElementsByTagName("li");
        for (var i = 0; i < lista.length; i++) {
          lista[i].classList.add("list-group-item");
        }
      });
      
    }
   
  }
  xhr2.open("get", datos);
  xhr2.send();
 
}








