
/*
Enlaces de Consulta que puedes utilizar
https://www.javascripttutorial.net/web-apis/javascript-drag-and-drop/
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondragenter

*/



   var elem;
   function dragstart(caja, evento) {
     elem = caja.id;
     // el elemento a arrastrar
     evento.dataTransfer.setData("Data", caja.id);
     document.getElementById("info").innerHTML = elem + " Me arrastran .....  ";
   }
   function over(target, evento) {
     console.log("Arrastrable en Over " + elem);
     console.log("Contenedor en Over " + target.id);

     if (elem == "bart1" && target.id == "contenedor1"){
          document.getElementById("info").innerHTML =
            elem + " Estoy sobre el contenedor 1 .....  ";
            return false;
     } 
     else if (elem == "bart2" && target.id == "contenedor2") {
          document.getElementById("info").innerHTML =
            elem + " Estoy sobre el contenedor 2 .....  ";
       return false;
     } else return true;
   }

   function drop(target, evento) {
     console.log("Arrastrable " + elem);
     // obtenemos los datos
     var contenedor = evento.dataTransfer.getData("Data");
     // agregamos el elemento de arrastre al contenedor
     target.appendChild(document.getElementById(contenedor));
   }