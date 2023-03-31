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
    let tds = $("tbody tr td:nth-child(1)");
    $(".ocultar").each(function(i){
        $(this).click(function(e){
            $("tbody tr td:nth-child(1)").eq(i).empty();
            $("tbody tr td:nth-child(2)").eq(i).empty();
        })
    });
    $(".mostrar").each(function(i){
        $(this).click(function(e){
            console.log(e);
            $("tbody tr td:nth-child(1)").eq(i).text($("tbody tr td:nth-child(1)"));
        })
    })
    




});
