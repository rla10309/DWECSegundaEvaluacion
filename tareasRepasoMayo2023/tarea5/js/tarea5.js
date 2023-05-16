//prototipos y arrays

let arrayplatos= new Array();
/*
function Carta(){
    arrayplatos = new Array();
}
Carta.prototype.addPlato(p){
    arrayplatos.push(p);
}
*/


function Plato(id,nombre, precio){
    this.id=id;
    this.nombre=nombre;
    this.precio=precio;
}


function addPlato(p){
    arrayplatos.push(p);
}

function numPlatos(){
    return "<p> Actualmente hay "+arrayplatos.length+"</p>";
}

function mostrarPlatos(){
    arrayplatos.forEach(function (elemento){
        document.write("<p>ID:"+elemento.id+" "+elemento.nombre+" Precio= "+elemento.precio +"€</p>");
    });
}

function mostrarPlatosOrdenadoPrecio(){
    document.write("<h2>Los platos ordenados por Precio de Forma Descendete</h2>");
    arrayplatos.sort(function(a,b){
      /*  if(a.precio < b.precio){
            return 1;
        }
        if(a.precio > b.precio){
            return -1;
        }
        return 0;*/
        return b.precio-a.precio;
    });
    arrayplatos.forEach(function (elemento){
        document.write("<p>ID:"+elemento.id+" "+elemento.nombre+" Precio= "+elemento.precio +"€</p>");
    });
}


//PRUEBA DE PROGRAMA

platoa=new Plato(1,"ensalda mixta",12);
platob=new Plato(2,"merluza a la plancha",23);
platoc=new Plato(3,"ibericos",16);
addPlato(platoa);
addPlato(platob);
addPlato(platoc);
document.write(numPlatos());
mostrarPlatos();

mostrarPlatosOrdenadoPrecio();
