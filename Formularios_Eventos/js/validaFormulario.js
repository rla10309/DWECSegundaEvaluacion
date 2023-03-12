window.onload = iniciar;

function iniciar(){
    var btn_enviar = document.getElementById("enviar");
    

    btn_enviar.addEventListener("click", valida);

    function valida(e){
        var nombre = document.getElementById("nombre").value;
        var apellidos = document.getElementById("apellidos").value;
        var edad = document.getElementById("edad").value;
        var matricula = document.getElementById("matricula").value;
        
        if(validaNombre(nombre) && validaApellidos(apellidos) && validaEdad(edad) &&validaMatricula(matricula) && confirm("¿Desea enviar el formulario?")){
           console.log("vale");
           return true;
        } else {
            console.log("no vale");
            //cancelamos el evento de envío
            e.preventDefault();
            return false;
        }

    }

    function validaNombre(n){
        let expNombre = /[A-Z]\w{1,20}/;
        if(expNombre.test(n)){
            document.getElementById("nombre").removeAttribute("class");
            return true;
        } else {
            document.getElementById("nombre").className = "error";
            document.getElementById("infoname").innerHTML = "Nombre incorrecto";
            return false;
        }
    }
    function validaApellidos(ap){
        let expApe = /^([A-Z][a-z]+)\s([A-Z][a-z]+)?/gm;
        if(expApe.test(ap)){
            return true;
        } else {
            document.getElementById("infoape").innerHTML = "Apellidos incorrectos";
            return false;
        }
    }
    function validaEdad(edad){
        let expEdad = /\d[18, 100]/;
        if(expEdad.test(Number(edad))){
            return true;
        } else {
            document.getElementById("infoedad").innerHTML = "Edad incorrecta";
        }
    }
    function validaMatricula(m){
        let expMatricula = /^\d{4}\s?[A-Z]{3}$/;
        if(expMatricula.test(m)){
            return true;
        } else {
            document.getElementById("infomatricula").innerHTML = "Matrícula incorrecta";
            return false;
        }
    }



}