/**
 * NO ES LO MISMO que tu función retorne void que undefined 
 * 
 * ADEMÁS any se usa cuando no se especifica o no se sabe el tipo de dato que va retornar
 * 
 * Se puede almacenar el resultado de un método en una variable.
 */

function sumarNumero (a : number, b: number)  : number {
    return a + b;
}

const resultado : number = sumarNumero(1, 6);

console.log(resultado);

/**
 * FUNCIONES FLECHA =>
 */

const sumarNumeroFlecha = (a : number, b : number): number => {
    return a + b;
}
const resultadoFlecha = sumarNumeroFlecha(6, 6);

console.log(resultadoFlecha);

/**
 * SE USA ` ` para escribir caracteres especiales o covertir esas expresiones en string
 */


/**
 * LA BUENA PRÁCTICA CUANDO DEFINAS PARÁMETROS DE UNA FUNCIÓN ES QUE DEBERÍAN IR:
 * PRIMERO LOS OBLIGATORIO
 * SEGUNDO LOS OPCIONALES: ?:
 * TERCERO LOS OPCIONALES CON VALOR
 */

function multiplicarNumeros(n1 : number, n2 ?: number, n3 : number = 3) {
    return n1 * n3;
}

const resultadorMultiplicacion = multiplicarNumeros(5, 2);

console.log(resultadorMultiplicacion)

function procesarDatos (datos : (string | number )[], ordenInverso ?: boolean ){
    if (ordenInverso){
        return datos.reverse();
    }

    return datos;
}

console.log(procesarDatos(['Bryan', 20, 'Joel', 10]));
console.table(procesarDatos(['Bryan', 20, 'Joel', 10], true));


/**
 * DENTRO DE UNA INTERFAZ TAMBIÉN SE PUEDEN TIPAR MÉTODOS
 */

interface Heroe {
    name : string;
    hp : number;

    /**
     * MÉTODO TIPADO : () => tipo
     */
    showHp ?: () => void;
}

const curarHeroe = (heroe : Heroe, chaleco : number ) => {
    return heroe.hp += chaleco;
}

const heoreBryan : Heroe = {
    name: 'Bryan',
    hp:  70,
    showHp() {
        console.log('Puntos de vida: ' + this.hp);
    }

}

/**
 * SI USAS OPCIONALES, Y QUIERES UTILIZAR, DEBE PASAR POR UNA VALIDACIÓN
 */

if (heoreBryan.showHp){   
    heoreBryan.showHp();
}

console.log(curarHeroe(heoreBryan, 30));