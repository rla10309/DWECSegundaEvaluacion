$(document).ready(function () {
  var enlaces = $("#enlaces a").length;
  $("p span").text(enlaces);

  //evento click para añadir noticias
  $("#nueva_noticia").click(function (e) {
    let noticia = $("#nueva").val();

    //añadimos la noticia
    $("#tabla").append(
      "<tr><td><span></span>" +
        noticia +
        "</td>" +
        "<td><button><img src='img/eye-closed.png' alt='ojo_cerrado'></button><button><img src='img/eye.png' alt='ojo_abierto'></button></td></tr>"
    );
    //Numeramos las noticias
    $("#tabla tr td:first-of-type span").each(function (index) {
      $(this).text(index + 1 + ". ");
    });
    //Damos estilo a los botones de la tabla
    $("#tabla :button").each(function () {
      $(this).addClass("eye");
    });
     //asignamos clases diferentes a los botones
     $("#tabla button:nth-child(1)").each(function (e) {
        $(this).addClass("ocultar");
      });
      $("#tabla button:nth-child(2)").each(function (e) {
        $(this).addClass("mostrar");
      });
    $("#nueva").val("");

  });
  //evento para ocultar 
  $("#tabla").on("click",".ocultar", function(e){
    $(this).parent().prev("td").css("visibility", "hidden");
  });
  //evento para mostrar
  $("#tabla").on("click",".mostrar", function(e){
    $(this).parent().prev("td").css("visibility", "visible");
  });

     
});
