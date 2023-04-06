$(document).ready(function () {
    
    $("#btn").click(function(e){
        if($("#efectos input:radio").is(":checked")){
            let valor = $("#efectos input:radio[name=efectos]:checked").val();
            switch(valor){
                case "show":
                    $("img").show();
                    break;
                case "hide":
                    $("img").hide();
                    break;
                case "slide_down":
                    $("img").slideDown("slow");
                    break;
                case "slide_up":
                    $("img").slideUp("slow");
                    break;
                case "fade_out":
                    $("img").fadeIn("slow");
                    break;
                case "fade_to":
                    $("img").fadeOut("slow");
                    break;

            }
        }
    })


});