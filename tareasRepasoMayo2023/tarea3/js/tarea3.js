botones=document.getElementsByTagName("button");
var btAdd=botones[0];
var btDel=botones[1];
btAdd.addEventListener('click',addElemento);
btDel.addEventListener('click',delElemento);
let ordinales =['','primer','segundo','tercero','cuarto','quinto','sexto','septimo'];

function addElemento(){
    lista=document.getElementsByTagName('ul');
    elementos=lista[0].children;
    numeroelementos=elementos.length;
    nuevo=numeroelementos+1;
    nuevoElemento=document.createElement('li');
    nuevoElemento.innerHTML=ordinales[nuevo] +" dato";
    lista[0].appendChild(nuevoElemento);
}
function delElemento(){
    lista=document.getElementsByTagName('ul');
    elementos=lista[0].children;
    lista[0].removeChild(elementos[elementos.length-1]);
}