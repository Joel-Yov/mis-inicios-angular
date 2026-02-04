import { Producto, calcularIgv } from "./06-function-destructuring";
/**
 * CUANDO IMPORTAS UN ARCHIVO, SE TRAE TODO EL ARCHIVO Y LO COMPILA,
 * es por ello que solo se deberían importar interfaces y funciones.
 */
const shoppingCart : Producto[] = [
    {
        descripcion: 'Nokia',
        precio: 100
    },
    {
        descripcion: 'iPad',
        precio: 150
    }
];

const [total, igv] = calcularIgv({
    productos : shoppingCart,
    igv: 0.18
});

console.log('Total: ' + total);
console.log('Igv: ' + igv);