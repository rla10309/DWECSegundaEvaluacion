/**
 * @author Pilar Fernández Nieto
 * @version 1.0
 * @date 16/04/2023
 * @description Cuenta los enlaces de una página, muestra y oculta noticias y añade nuevas noticias a la lista
 */

/*Función principal que se ejecuta cuando la página esté cargada*/
$(document).ready(function () {
  /*Recogemos todos los enlaces de la página para mostrarlos al final de la sección de enlaces a periódicos*/

  var enlaces = $("#enlaces a").length;
  /*Le damos estilos para que sean más visibles*/
  $("p span").text(enlaces).css({
    "font-size": 1.5+"rem",
    "color":"red"});

  /*Añadimos un manejador al botón para añadir una nueva noticia*/
  $("button#nueva_noticia").click(function (e) {
    /*Variable con el valor introducido*/
    let noticia = $("input#nueva").val();

    if(noticia !== ""){

    /*añadimos la noticia si el campo no está vacío*/
    $("#tabla").append(
      "<tr><td><span></span>" + noticia + "</td>" +
        "<td><button><img src='img/eye-closed.png' alt='ojo_cerrado'></button><button><img src='img/eye.png' alt='ojo_abierto'></button></td></tr>"
    );
    }
    /*Utilizamos la función .each() para dar distintas funcionalides a los elementos que ya hay y a los que se vayan creando*/

    /*Numeramos las noticias*/
    $("#tabla tr td:first-of-type span").each(function (index) {
      $(this).text((index + 1) + ". ");
    });
    /*Damos estilo a los botones de la tabla*/
    $("#tabla :button").each(function () {
      $(this).addClass("eye");
    });
     /*asignamos clases diferentes a los botones*/
     $("#tabla button:nth-child(1)").each(function (e) {
        $(this).addClass("ocultar");
      });
      $("#tabla button:nth-child(2)").each(function (e) {
        $(this).addClass("mostrar");
      });
    $("#nueva").val("");

  });

  /*Utilizamos eventos delegados a los elementos a los que queremos dar manejadores. Tanto a los que están como a los que se vayan creando*/

  /*evento para ocultar */
  $("#tabla").on("click",".ocultar", function(e){
    $(this).parent().prev("td").css("visibility", "hidden");
  });
  /*evento para mostrar*/
  $("#tabla").on("click",".mostrar", function(e){
    $(this).parent().prev("td").css("visibility", "visible");
  });

     
});
