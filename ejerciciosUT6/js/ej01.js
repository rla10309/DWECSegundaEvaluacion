window.onload = function(){
    var btn_asociar = document.getElementById("asociar");
    var btn_eliminar = document.getElementById("eliminar");

    btn_asociar.addEventListener("click", mostrarEvento);
    btn_asociar.addEventListener("mouseover", mostrarEvento);
    btn_asociar.addEventListener("mouseout", mostrarEvento);
   
    btn_eliminar.addEventListener("click", eliminar);
    // btn_eliminar.addEventListener("mouseover", eliminar);
    // btn_eliminar.addEventListener("mouseout", eliminar);

    function mostrarEvento(e){
        console.log("Se ha capturado el evento: " + e.type);
    }
    function eliminar(e){
        btn_asociar.removeEventListener("click", mostrarEvento);
        btn_asociar.removeEventListener("mouseover", mostrarEvento);
        btn_asociar.removeEventListener("mouseout", mostrarEvento);
       
        console.log("Se ha eliminado el evento: " + e.type);
       

    }
}