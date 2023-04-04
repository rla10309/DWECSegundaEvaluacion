
window.onload = function () {


    let add_btn = document.getElementById("add");
    let enviar_btn = document.getElementById("enviar");
    let lista = [];
    
    add_btn.addEventListener("click", gestionSelect);
    
       
    }
    




function gestionSelect(e) {
    e.preventDefault();
   
    let selectAdd = document.getElementById("addaficiones");
    let selectRem = document.getElementById("eliminaaficiones");
    

    for (var i=0;i<selectAdd.options.length;i++){
        if(selectAdd.options[i].selected === true){
            lista.push(selectAdd.options[i].text);
            selectAdd.options[i].classList.add("no_display");
            selectRem.options[i].classList.remove("no_display");
        }
        
    }
    console.log(lista);
    // let indice = document.formulario.addaficiones.selectedIndex;
    // let opcionAdd = document.formulario.addaficiones.options[indice];
    // let opcionRem = document.formulario.eliminaaficiones.options[indice];
    // lista.push(opcionRem.text);
    // opcionAdd.classList.add("no_display");
    // opcionRem.classList.remove("no_display");
    // console.log(lista);

}
// var arreglo = [];
// var selectObject = document.getElementById("secretariaTxt");
// for (var i = 0; i < selectObject.options.length; i++) {
//     if (selectObject.options[i].selected === true) {
//         arreglo.push(selectObject.options[i].value);
//         selectObject.options[i].value + '">' + selectObject.options[i].value + '</option>');