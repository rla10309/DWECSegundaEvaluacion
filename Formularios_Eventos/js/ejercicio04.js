var divBlue = document.getElementById("capa1");

divBlue.addEventListener("mouseover", cambiaColor);
divBlue.addEventListener("mouseout", cambiaColorOriginal);

function cambiaColor(){
    divBlue.style.background = "yellow";
}
function cambiaColorOriginal(){
    divBlue.style.background = "lightsteelblue"
}







divBlue.addEventListener("mouseover", function(){
    divBlue.style.cursor = "crosshair";
})
