// COMO BUENOS DESERROLLADORES DEBEMOS TRATAR LO MÁS POSIBLE DE EVITAR EL USO DE "ANY"
/*
Los genéricos nos permiten crear componentes reutilizables 
que funcionan con una variedad de tipos de datos en lugar de un solo tipo ---> IMPORTANTE
*/
// Esto nos ayuda a mantener la seguridad de tipos mientras escribimos código flexible y reutilizable.

// ESTE EJEMPLO ESTÁ MAL:
// export function whatsMyType(argument: any) : any
// {
//     return argument;
// }


// POR ESTANDAR NUESTRO PRIMER GENERICO SIEMPRE TENDRA LA LETRA T : <T>, porque puedes tener mas de una generico 
export function whatsMyType<T>(argument: T) : T
{
    return argument;
}

//el <T> "infiere" que tipo de dato le vas a Dato le vas a dar al generico, pero tu lo puedes especificar
// let amIString = whatsMyType('Hola Mundo');
let amIString = whatsMyType<string>('Hola Joel');

// let amINumber = whatsMyType(100);
let amINumber = whatsMyType<number>(100);

// let amIArray = whatsMyType([1,2,3,4,5]);
let amIArray = whatsMyType<number[]>([1,2,3,4,5,6]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));


// ====== POR SI UNA FUNCION RECIBE MAS DE UN ARGUMENTO ======
export function whatsMyTypeV2<T, A, B>(arg1: T, arg2: A, arg3: B) : [T, A, B]
{
    return [arg1, arg2, arg3];
}

let arrayArgumentosGenericos = whatsMyTypeV2<string, number, boolean>('Joel', 21, true);
console.table(arrayArgumentosGenericos);