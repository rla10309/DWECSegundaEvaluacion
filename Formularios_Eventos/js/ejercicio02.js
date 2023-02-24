window.onload = function(){
    document.getElementById("pulsa").addEventListener('click', add );
}
window.onload = function(){
    document.getElementById("muestra").addEventListener('click', mostrar);
}
// let cont = 1;
// function contador(){
//    return cont++;
// }
function add() {
    let counter = 0;
    function plus() {counter += 1;}
    plus();   
    return counter;
  }

function mostrar(){
    let contador = add();
    window.alert(`Contador ${contador}`);
}

