//Objetos
const producto = {
    nombreProducto: 'Monitor 20"',
    precio: 300,
    disponible: true
};

// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

//console.log(nombreProducto);

//destructuring de objetos
const {precio, nombreProducto}= producto;


console.log(precio);
console.log(nombreProducto);
