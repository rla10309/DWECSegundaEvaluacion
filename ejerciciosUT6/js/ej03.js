let datos = document.getElementById("datos");
let boton = document.getElementById("enviar");

boton.addEventListener("click", function (e) {
  e.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let edad = document.getElementById("edad").value;
  console.log(nombre + ' - ' + edad);
  let li = document.createElement("li");
  if(edad > 65){
    li.style.color = "green";
  }
  li.textContent = nombre + ' - ' + edad;
  datos.appendChild(li);
});
