$(document).ready(function () {
    

    $("button").click(function (e) { 
        e.preventDefault();
        let elemento = $("#elemento").val();
        let hola = $(":input").val();


        // $("body").find(elemento).css({
        //     "color":"red", 
        //     "border":"2px solid red"
        // });
        $("body").find(hola).css({
            "color":"red", 
            "border":"2px solid red"
        });

        // $(elemento).removeClass("gris").addClass("color");
        

        
    });

    

});