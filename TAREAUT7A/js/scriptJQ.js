$(document).ready(function () {
  var url =
    "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/33024/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhcHJlaWxtY0BnbWFpbC5jb20iLCJqdGkiOiJmMzFlZWFmZC1lZmU4LTRjNzMtYmViYi01N2NkOGI5NzIwZmMiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTY4MjYxOTIxOCwidXNlcklkIjoiZjMxZWVhZmQtZWZlOC00YzczLWJlYmItNTdjZDhiOTcyMGZjIiwicm9sZSI6IiJ9._UtkCfCuK1AGDR2f_WHvUre7n2FsjKFcT5sGow6W9hw&nocache=" +
    new Date().getTime();

  $.ajax(url, {
    dataType: "json",
    success: function (data) {
      leerDatos(data.datos);
    },
  });
  function leerDatos(datos) {
    $.ajax(datos + "?nocache=" + new Date().getTime(), {
      dataType: "json",
      success: function (data) {
        $(data).each(function (index, element) {
          $("#ciudad").text(this.nombre);
          var semana = this.prediccion.dia;
          /***DIA ACTUAL****/
          var date = this.elaborado;
     
          $("#info_dactual div").append(`<h3>${dateTransform(date, 0)}</h3>`);
          $("#info_dactual div").append("<button class='btn btn-primary opacity-50'>Más información</button>");

          $("#info_dactual").append(`<table class='table w-50 mx-auto'><thead><tr></tr></thead><tbody><tr></tr></tbody></table>`);
          $("table thead tr").prepend("<th>Por Horas</th>");
          $("table tbody tr").prepend("<th>Probabilidad</th>");

          for (var i = 3; i <= 6; i++) {
            $("#info_dactual table thead tr").append(`<th class="text-center">${semana[0].probPrecipitacion[i].periodo}</th></thead>`);
            $("#info_dactual table tbody tr").append(`<td class="text-center">${semana[0].probPrecipitacion[i].value}%</td></thead>`);
          }
          $("table tbody").append(`<tr><th>Temperatura máxima</th><td class="text-center" colspan="4">${semana[0].temperatura.maxima}\u00B0C</td></tr>`);
          $("table tbody").append(`<tr><th>Temperatura mínima</th><td class="text-center" colspan="4">${semana[0].temperatura.minima}\u00B0C</td></tr>`);

          /***PRIMER DIA***/
          $("#info_d1 div").append(`<h3>${dateTransform(date, 1)}</h3>`);
          $("#info_d1 div").append("<button class='btn btn-primary opacity-50'>Más información</button>");
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

          /***SEGUNDO DIA***/
          $("#info_d2 div").append(`<h3>${dateTransform(date, 2)}</h3>`);
          $("#info_d2 div").append("<button class='btn btn-primary opacity-50'>Más información</button>");
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

          /***TERCER DIA***/
          $("#info_d3 div").append(`<h3>${dateTransform(date, 3)}</h3>`);
          $("#info_d3 div").append("<button class='btn btn-primary opacity-50'>Más información</button>");
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
      },
    });
  }

  function dateTransform(date, n) {
    let d = new Date(date);
    let resultado;
    let dia = d.getDate() + n;
    let mes = d.getMonth();
    let anio = d.getFullYear();
    let day = d.getDay() + n;

    //day>6 ? diaSemana = "Domingo": diaSemana = muestraDia(day);

    if (dia + n > 28 && mes == 1) {
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
  console.log(resultado);

  return resultado;
}


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
