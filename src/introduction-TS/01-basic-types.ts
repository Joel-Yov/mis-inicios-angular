const name : string = 'Joel';

//the variable can has got two types WITH |
let hpPoints : number | string = 6114;

//Incluso tiparlo con cosas exactas
let hpPoints2 : number | 'Hola' | 'Joel' = 'Joel';  //Es sensible a mayúsculas y minúsculas.

const isAlive : boolean = false;

console.log({
    name, hpPoints, hpPoints2, isAlive
});

export {
};