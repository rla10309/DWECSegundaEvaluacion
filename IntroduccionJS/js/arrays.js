//Arrays

const numeros = [10, 20, 30, 40, 50];


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];


numeros[5] = 60;
numeros.push(70);
numeros.unshift(-10, -20, -30);
let n = numeros.shift();
console.table(numeros);
console.log(n);

//meses.pop();

meses.splice(2, 1);
console.table(meses);

// const arreglo = ['Hola', 10, true, 'Si', null, {nombre:'Juan', edad: 20}, [1, 2, 3]];

// console.table(arreglo);


// console.log(numeros[4]);
// console.log(meses.length);

// meses.forEach(element => console.log(element));

//rest operator o spread operator

const nuevoArreglo = [...meses, 'Junio'];
console.table(nuevoArreglo);