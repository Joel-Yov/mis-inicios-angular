/**
 * ARRAYS
 */

/**
 * Se puede especificar el tipado de los elemetos dentro de un array 
 * Para agrupar diferentes tipos, usamos los () y operador |
 */
let skills : (string | boolean | number) [] = [
    'Bash', 'Counter', 'Healing', 123, false
]

/**
 * Si es solo un tipo para ese array, no es necesario los paréntesis
 * Si saben que su variable nunca va a cambiar, usen constante, como buena práctica
 * SI NO SABEN SI VA A CAMBIAR, igual usen constante, luego TS te avisará si hay un error
 */
const FRUTAS_TIENDA : string[] = 
[
    'Plátano', 'Manzana', 'Mandarina', 'Melón'
]


interface Personaje {
    name : string;
    hp: number | 'FULL';
    skills : string[];
    /**
     * SI QUIERES UNA PROPIEDAD SEA OPCIONAL USAS ?: 
     * Porque una vez declares propiedades en una interfaz, tus objetos que la usen tendrán que contar con
     * TODAS ESAS PROPIEDADES o sino saldrá ERROR
     */
    hometown ?: string;
}
/**
 * OBJETOS
 */
const joel : Personaje = {
    name : 'Joel',  //Para declarar un objeto no se pueden tipar las propiedades del objeto
    hp: 98,        //PARA ESO SE USAN LAS INTERFACES 
    skills : ['Bash', 'Counter']
}

const carlos : Personaje = {
    name : 'Joel', 
    hp: 98,        
    skills : ['Bash', 'Counter'],
    hometown : 'Piura'
}


/**
 * USAS EL . para hacer referencia a una propiedad del objeto
 */
joel.hometown = 'Piura';

console.table(joel);

export {

};