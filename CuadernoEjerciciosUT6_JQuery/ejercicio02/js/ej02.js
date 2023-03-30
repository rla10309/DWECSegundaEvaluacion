$(document).ready(function () {


    $("button").click(function (e) { 
      
        $("p").hide(2000, function(){
            alert("El párrafo está oculto");
        });
        
    });
});