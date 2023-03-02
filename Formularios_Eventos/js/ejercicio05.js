// var capa1 = document.getElementById("capa1");
// var capa2 = document.getElementById("capa2");
// var capa3 = document.getElementById("capa3");
// //BUBBLING
// capa1.addEventListener("click", function(){
//     alert("Has pulsado la capa 1");
// });


// capa2.addEventListener("click", function(){
//     alert("Has pulsado la capa 2");
// });
// capa3. addEventListener("click", function(){
//     alert("Has pulsado la capa 3");
// });

window.onload = function(){
    function mostrarMsg(){
        window.alert("Has pulsado " + this.id);
    }
    // //Capturing
    // document.getElementById("capa1").addEventListener("click", mostrarMsg, true);
    // document.getElementById("capa2").addEventListener("click", mostrarMsg, true);
    // document.getElementById("capa3").addEventListener("click", mostrarMsg, true);

    //Bubbling
    document.getElementById("capa1").addEventListener("click", mostrarMsg, false);
    document.getElementById("capa2").addEventListener("click", mostrarMsg, false);
    document.getElementById("capa3").addEventListener("click", mostrarMsg, false);

}

