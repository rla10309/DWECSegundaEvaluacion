$(document).ready(function () {
    let ancho = $("#bloque").width();
    let alto = $("#bloque").height();

    $("button").click(function (e) { 
        e.preventDefault();
        $("p:nth-child(1)").text(`ANCHO DE DIV: ${ancho}`).css({"font-weight":"bold", "margin-left":"1rem"});
        $("p:nth-child(2)").text(`ALTO DE DIV: ${alto}`).css({"font-weight":"bold", "margin-left":"1rem"});
        

        
    });
    console.log(ancho);
    console.log(alto);


});