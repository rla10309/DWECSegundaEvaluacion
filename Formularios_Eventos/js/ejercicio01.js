window.onload = function(){
    document.getElementById("enviar").addEventListener('click', comprobar);
}




function comprobar(){
    let nombre = document.getElementById("nombre").value;

    alert(`El nombre ${nombre} ha sido enviado correctamente`);
}