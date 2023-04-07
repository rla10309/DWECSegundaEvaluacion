$(document).ready(function () {
    
    $("#btn").click(function(e){
        e.preventDefault();
        if($("#efectos input:radio").is(":checked")){
            let valor = $("#efectos input:radio[name=efectos]:checked").val();
            let velocidad = $("#velocidad input:radio[name=velocidad]:checked").val();
            switch(valor){
                case "show":
                    $("img").show();
                    break;
                case "hide":
                    $("img").hide();
                    break;
                case "slide_down":
                    $("img").slideDown(velocidad);
                    break;
                case "slide_up":
                    $("img").slideUp(velocidad);
                    break;
                case "fade_out":
                    $("img").fadeIn(velocidad);
                    break;
                case "fade_to":
                    $("img").fadeOut(velocidad);
                    break;

            }
        }
    })


});