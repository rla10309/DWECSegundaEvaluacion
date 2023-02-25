var formulario = document.getElementById("miFormulario");
window.onload = iniciar;

function iniciar(){
    document.getElementById("enviar").addEventListener("click", valida, false);
    
}
function validaNombre(){
    var elemento = document.getElementById("nombre");
    if(elemento.value.length > 40){
        alert("El nombre no puede tener más de 40 caracteres");
        return false;
    }
    return true;
}