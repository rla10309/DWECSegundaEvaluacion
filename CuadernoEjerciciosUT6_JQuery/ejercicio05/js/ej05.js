$(document).ready(function () {

    //Funcionalidad de Editar
    $(".editar").each(function(i){
        $(this).click(function(e){
            $("input.precio").eq(i).removeAttr("readonly");
             
            });
        });
  
    $("input.precio").keypress(function (e) { 
        if(e.code == "Enter" || e.code =="NumpadEnter")
            $(this).attr("readonly", "true");
    });
    //Ocultar

    
$(".ocultar").each(function(i){
    $(this).click(function (e){
        $("tbody tr td:nth-child(1)").eq(i).css("visibility", "hidden");
        $("tbody tr td:nth-child(2)").eq(i).css("visibility", "hidden");
    })
     
  });
 $(".mostrar").each(function(i){
    $(this).click(function (e){
        $("tbody tr td:nth-child(1)").eq(i).css("visibility", "visible");
        $("tbody tr td:nth-child(2)").eq(i).css("visibility", "visible");
    })
     
  });
    
  $(".eliminar").each(function(i){
    $(this).click(function(e){
        $("tbody tr").eq(i).hide();
    })
  });




});
