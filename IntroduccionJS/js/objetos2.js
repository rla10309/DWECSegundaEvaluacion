
//'use strict';
const producto = {
    nombreProducto: 'Monitor 20"',
    precio: 300,
    disponible: true
};

Object.freeze(producto);
producto.imagen = 'imagen.jpg';

console.log(Object.isFrozen(producto));

console.log(producto);