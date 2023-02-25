//Declaracion de función

function sumar(a, b){
    return a + b;
}

console.log(sumar(4, 2));

let resta = (a,b) => console.log(a-b);
resta(10,5);
//iife

(function(){
    console.log('Esto es una función');
})();