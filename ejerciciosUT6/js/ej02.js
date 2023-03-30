/**
 * Crea un proyecto donde se asocie el script correspondiente para que al pasar el ratón  sobre un campo de texto lo cambie a mayúsculas.
 */

let parrafos = document.querySelectorAll('p');

console.log(parrafos);

parrafos.forEach(elemento => {
    elemento.addEventListener("mouseover", upperCase);
});
function upperCase(e){
    console.log(e);
    this.style.textTransform = "uppercase";
}