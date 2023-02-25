//SELECCIONAMOS EL FORMULARIO

//Conociendo el id
var formulario = document.getElementById("miFormulario");
var formulario2 = document.forms["miFormulario"]; 

//Conociendo el número de formulario que es en la página
var formulario3 = document.getElementsByTagName("form")[0]; //selecciona el primer formulario
var formulario4 = document.forms[0];

//SELECCIONAR ELEMENTOS DE UN FORMULARIO
//.elements[] Devuelve un array con todos los inputs del formulario
//getElementById("idelemento") Devuelve un elemento con un id determinado
//getElementsByTag("etiqueta") Devuelve un array con tipos de elemento de tipos de etiqueta
//getElementsByName("nombre") Devuelve un array con elementos con el mismo nombre

window.onload = iniciar; 
function iniciar(){
    //asocia el botón enviar con un evento click que ejecuta la función validar
    document.getElementById("enviar").addEventListener("click", validar, false);
}
function validaNombre(){
    var elemento = document.getElementById("nombre");
    limpiarError(elemento);
    if(elemento.value == ""){
        alert("El campo no puede estar vacío");
        error(elemento);
        return false;
    }
    if(elemento.value.length>10){
        alert("El nombre no puede tener más de 10 caracteres");
    }
    return true;
}
function validaTelefono(){
    var elemento = document.getElementById("tfno");
    if(isNaN(elemento.value)){ //SI NO ES UN NÚMERO
        alert("El campo teléfono debe de ser numérico");
        return false;
    }
    return true;
}
function validaFecha(){
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var year = document.getElementById("year").value;
    var fecha = new Date(year, mes, dia);

    if(isNaN(fecha)){
        alert("Los campos de la fecha son incorrectos");
        return false;
    }
    return true;
}
function validaCheck(){
    var campocheck = document.getElementById("mayor");
    if(!campocheck.checked){
        alert("Debes ser mayor de edad");
        return false;
    }
    return true;
}
function validar(e){
    if(validaNombre() && validaTelefono() && validaFecha() && validaCheck() && confirm("Pulsa aceptar si deseas enviar el formulario")){
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}
function error(elemento){
    elemento.className = "error";
    elemento.focus();
}
function limpiarError(elemento){
    elemento.className = "";
}