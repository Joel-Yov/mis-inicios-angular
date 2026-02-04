export interface Passenger 
{
    name: string;
    children?: string[];
}

const pasajero1: Passenger = 
{
    name: 'Joel',
}

const pasajero2: Passenger = 
{
    name: 'Roso',
    children: ['Joel', 'Briamna', 'Rosita'],
}

const printChildren = (pasajero: Passenger) =>
{
    // ESTO ES EL ENCADENAMIENTO OPIONA ?. cuando intentes acceder a un propiedad que puede llegar a ser null o undefined
    const howManyChildren = pasajero.children?.length || 0;
    /**
     * Si lo que está a la izquierda es nulo, se detiene y devuelve undefined en lugar de lanzar un error.
     */

    /**
     * BONUS
     * ??
     * Se llama Nullish Coalescing. Se usa para poner valores por defecto:
     * 
     * EJEMPLO
     * // Si el nombre es null, usa 'Invitado'
        const nombre = persona?.nombre ?? 'Invitado';
     */

    // SI EN VEZ DE ?. usamos el !. significa que estmaos seguros que NUNCA SERA NULO, siempre irá algo (en este caso siempre habrán children).
    // const howManyChildren = pasajero.children!.length
    console.log(pasajero.name + ' tiene ' + howManyChildren + ' hijos.');


}

printChildren(pasajero1);
printChildren(pasajero2);