
window.onload = function(){

   
    let add_btn = document.getElementById("add");
    
    
    
    add_btn.addEventListener("click",gestionSelect);
}

    

function gestionSelect(e){
    console.log(e);
    e.preventDefault();
    let lista = [];
    let indice = document.formulario.addaficiones.selectedIndex;
    let opcionAdd = document.formulario.addaficiones.options[indice];
    let opcionRem = document.formulario.eliminaaficiones.options[indice];
    lista.push(opcionRem.text);
    opcionAdd.classList.add("no_display");
    opcionRem.classList.remove("no_display");
    console.log(lista);
   
}
