/**
 * @author Pilar Fernández Nieto
 * @version 1.0
 * @description Recupera los datos de la AEMET mediante una petición asíncrona y los muestra en el navegador. Uso de jQuery.
 * @date 05/05/2023
 */


/**
 * función que inicia la ejecución sólo cuando la página esté cargada
 */
$(document).ready(function () {
  var url =
    "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/33024/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhcHJlaWxtY0BnbWFpbC5jb20iLCJqdGkiOiJmMzFlZWFmZC1lZmU4LTRjNzMtYmViYi01N2NkOGI5NzIwZmMiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTY4MjYxOTIxOCwidXNlcklkIjoiZjMxZWVhZmQtZWZlOC00YzczLWJlYmItNTdjZDhiOTcyMGZjIiwicm9sZSI6IiJ9._UtkCfCuK1AGDR2f_WHvUre7n2FsjKFcT5sGow6W9hw&nocache=" + new Date().getTime();

  /**
   * Primera petición de datos. La respuesta es un documento json con dos urls de las que solo necesitamos una para procesar en una siguiente petición.
   * 
   */
    $.ajax(url, {
    dataType: "json",
    success: function (data) {
      var datos = data.datos;
      console.log(datos);
      leerDatos(datos);
    }
  });

  
  /**
   * leerDatos
   * @param {String} datos 
   * recibe por parámetro la url donde se aloja el documento json que contiene los datos requeridos 
   */
  function leerDatos(datos) {
    $.ajax(datos + "?nocache=" + new Date().getTime(), {
      dataType: "json",
      success: function (data) {
       /*Recorremos el objeto json recibido como array y los procesamos*/
        $(data).each(function (item) {
          /*Recogemos el nombre de la ciudad*/
          $("#ciudad").text(item.nombre);

          /*Recogemos el array con las predicciones de la semana*/
        
          var semana = this.prediccion.dia;
          console.log(semana);


          /***DIA ACTUAL (CORRESPONDE A LA PRIMERA POSICIÓN DEL ARRAY 'semana')****/
          /*Día de la semana al que tenemos que dar formato*/
          var date = semana[0].fecha;
          /*Se inserta el día de la semana formateado*/
          $("#info_dactual div").append(`<h3>${dateTransform(date)}</h3>`);
          /*Se inserta el botón para más tarde obtener más información*/
          $("#info_dactual div").append("<button id='masInfo'>Más información</button>");
          $("#masInfo").addClass("btn btn-primary opacity-50");

          /*Se crea la tabla donde se va a mostrar la información cuando se cargue la página*/
          $("#info_dactual").append(`<table class='table w-50 mx-auto'><thead><tr></tr></thead><tbody><tr></tr></tbody></table>`);
          /*Se insertan las celdas de cabecera al principio de cada sección de la tabla*/
          $("table thead tr").prepend("<th>Por Horas</th>");
          $("table tbody tr").prepend("<th>Probabilidad</th>");

          /*Añadimos los 3 tramos horarios que se van a mostrar y su probabilidad de lluvia correspondiente*/
          for (var i = 3; i <= 6; i++) {
            $("#info_dactual table thead tr").append(`<th class="text-center">${semana[0].probPrecipitacion[i].periodo}</th></thead>`);
            $("#info_dactual table tbody tr").append(`<td class="text-center">${semana[0].probPrecipitacion[i].value}%</td></thead>`);
          }
          /*Se añaden los valores de temperatura para el día*/
          $("table tbody").append(`<tr><th>Temperatura máxima</th><td class="text-center" colspan="4">${semana[0].temperatura.maxima}\u00B0C</td></tr>`);
          $("table tbody").append(`<tr><th>Temperatura mínima</th><td class="text-center" colspan="4">${semana[0].temperatura.minima}\u00B0C</td></tr>`);

          /**SE REPITE EL CICLO PARA MOSTRAR LOS TRES DIAS SIGUIENTES A LA FECHA ACTUAL**/
          /***PRIMER DIA  (SEGUNDA POSICIÓN DEL ARRAY 'semana')***/
          var date1 = semana[1].fecha;
          $("#info_d1 div").append(`<h3>${dateTransform(date1)}</h3>`);
          $("#info_d1").append(`<table class='table w-50 mx-auto'><thead><tr></tr></thead><tbody><tr></tr></tbody></table>`);
          $("#info_d1 table thead tr").prepend("<th>Por Horas</th>");
          $("#info_d1 table tbody tr").prepend("<th>Probabilidad</th>");
          for (var i = 3; i <= 6; i++) {
            $("#info_d1 table thead tr").append(`<th class="text-center">${semana[1].probPrecipitacion[i].periodo}</th></thead>`);
            $("#info_d1 table tbody tr").append(`<td class="text-center">${semana[1].probPrecipitacion[i].value}%</td></thead>`);
          }
          $("#info_d1 table tbody").append(`<tr><th>Temperatura máxima</th>
            <td class="text-center" colspan="4">${semana[1].temperatura.maxima}\u00B0C</td></tr>`);
          $("#info_d1 table tbody").append(`<tr><th>Temperatura mínima</th>
            <td class="text-center" colspan="4">${semana[1].temperatura.minima}\u00B0C</td></tr>`);

          /***SEGUNDO DIA (TERCERA POSICIÓN DEL ARRAY 'semana')***/
          var date2 = semana[2].fecha;
          $("#info_d2 div").append(`<h3>${dateTransform(date2)}</h3>`);

          $("#info_d2").append(`<table class='table w-50 mx-auto'><thead><tr></tr>
            </thead><tbody><tr></tr></tbody></table>`);
          $("#info_d2 table thead tr").prepend("<th>Por Horas</th>");
          $("#info_d2 table tbody tr").prepend("<th>Probabilidad</th>");

          for (var i = 0; i < 3; i++) {
            $("#info_d2 table thead tr").append(`<th class="text-center">${semana[2].probPrecipitacion[i].periodo}</th></thead>`);
            $("#info_d2 table tbody tr").append(`<td class="text-center">${semana[2].probPrecipitacion[i].value}%</td></thead>`
            );
          }
          $("#info_d2 table tbody").append(`<tr><th>Temperatura máxima</th>
            <td class="text-center" colspan="4">${semana[2].temperatura.maxima}\u00B0C</td></tr>`);
          $("#info_d2 table tbody").append(`<tr><th>Temperatura mínima</th>
            <td class="text-center" colspan="4">${semana[2].temperatura.minima}\u00B0C</td></tr>`);

          /***TERCER DIA (CUARTA POSICIÓN DEL ARRAY 'semana')***/
          var date3 = semana[3].fecha;
          $("#info_d3 div").append(`<h3>${dateTransform(date3)}</h3>`);

          $("#info_d3").append(`<table class='table w-50 mx-auto'><thead><tr></tr></thead><tbody><tr></tr></tbody></table>`);
          $("#info_d3 table thead tr").prepend("<th>Por Horas</th>");
          $("#info_d3 table tbody tr").prepend("<th>Probabilidad</th>");
          for (var i = 0; i < 3; i++) {
            $("#info_d3 table thead tr").append(`<th class="text-center">${semana[3].probPrecipitacion[i].periodo}</th></thead>`);
            $("#info_d3 table tbody tr").append(`<td class="text-center">${semana[3].probPrecipitacion[i].value}%</td></thead>`);
          }
          $("#info_d3 table tbody").append(`<tr><th>Temperatura máxima</th>
            <td class="text-center" colspan="4">${semana[3].temperatura.maxima}\u00B0C</td></tr>`);
          $("#info_d3 table tbody").append(`<tr><th>Temperatura mínima</th>
            <td class="text-center" colspan="4">${semana[3].temperatura.minima}\u00B0C</td></tr>`);

          /***AUTORIZACION AEMET***/
          var autorizacion = this.origen.copyright;
          var notalegal = this.origen.notaLegal;
          $("#uso_legal").append(
            `<p class='mx-5'>${autorizacion} <a href='${notalegal}' class='link-opacity-75-hover text-decoration-none'>${notalegal}</a></p>`
          );

          /*****************************************************/
        });
      }

    });

    masInformacion();

  }

/*********************************************************************************/
  

/**
 * 
 */
function masInformacion() {
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
      console.log("CORRECTO");
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
            ulViento.innerHTML = "<li><span class='fw-bold'>Periodo</span>: " + periodo + "h</li><li><span class='fw-bold'>Dirección</span>: " + direccion + "</li><li><span class='fw-bold'>Velocidad</span>: " + velocidad + "km/h</li>"
            ul.innerHTML = "<li><span class='fw-bold'>Sensación Térmica Máxima:</span> " + sMaxima + "\u00B0</li>";
            ul.innerHTML += "<li><span class='fw-bold'>Sensación Térmica Mínima:</span> " + sMinima + "\u00B0</li>"
            ul.innerHTML += "<li><span class='fw-bold'>Humedad Relativa máxima:</span> " + hMaxima + "%</li>";
            ul.innerHTML += "<li><span class='fw-bold'>Humedad Relativa mínima:</span> " + hMinima + "%</li>";
            ul.innerHTML += "<li id='viento'><span  class='fw-bold'>Viento:</span> </li>";
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
  }



  /**
   * dateTransform
   * @param {Date} date 
   * @param {Number} n 
   * @returns {String} resultado
   * funcion para dar formato a una fecha
   */
  function dateTransform(date) {
    let d = new Date(date);
    let resultado;
    let dia = d.getDate();
    let mes = d.getMonth();
    let anio = d.getFullYear();
    let day = d.getDay();


    if (dia > 28 && mes == 1) {
      dia = 1;
      mes = 3;
    } else if (dia == 31 && (mes == 3 || mes == 5 || mes == 8 || mes == 10)) {
      dia = 1;
      mes = mes + 1;
    } else if (dia >= 32 && (mes == 0 || mes == 2 || mes == 4 || mes == 6 || mes == 7 ||
      mes == 9 || mes == 11)) {
      switch (dia) {
        case 32:
          dia = 1;
          mes = mes + 1;
          break;
        case 33:
          dia = 2;
          mes = mes + 1;
          break;
        case 34:
          dia = 3;
          mes = mes + 1;
      }
    } else {
      switch (dia) {
        case 32:
          dia = 2;
          mes = mes + 1;
          break;
        case 33:
          dia = 3;
          mes = mes + 1;
          break;
        case 34:
          dia = 4;
          mes = mes + 1;
          break;
      }
    }

    if (mes > 11) {
      anio++;
    }

    let diaSemana = muestraDia(day);
    let nombreMes = muestraMes(mes);
    resultado = diaSemana + ", " + dia + " de " + nombreMes + " de " + anio;

    return resultado;
  }

  /**
   * muestraDia
   * @param {Number} d 
   * @returns {String} diaSemana
   * devuelve el nombre del día de la semana pasado como número
   */
  function muestraDia(d) {
    switch (d) {
      case 7:
        d = 0;
        break;
      case 8:
        d = 1;
        break;
      case 9:
        d = 2;
        break;
    }
    if (d >= 7) d = 0;

    const dias = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    let diaSemana = dias[d];
    return diaSemana;
  }

  /**
   * muestraMes
   * @param {Number} m 
   * @returns {String} nombre
   * devuelve el nombre del mes pasado como número
   */
  function muestraMes(m) {
    const meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    let nombre = meses[m];
    return nombre;
  }



});
