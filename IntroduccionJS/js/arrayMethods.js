const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Television 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audífonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800}
];

//forEach
meses.forEach(mes => {
    if(mes === 'Marzo'){
        console.log('Marzo si existe');
    }
});

//Includes
const resultado = meses.includes('Marzo');
console.log(resultado);

//Some. ideal para arreglo de objetos
const resultado2 = carrito.some(producto =>{
     producto.nombre === 'Celular';}
)
console.log(resultado2);

// reduce
const resultado3 = carrito.reduce((total, producto) =>{
    return total + producto.precio;
}, 0);
console.log(resultado3);
//filter

const resultado4 = carrito.filter(function(producto){
    return producto.precio > 400;
})
console.log(resultado4);

