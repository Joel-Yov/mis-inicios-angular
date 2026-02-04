interface AudioPlayer {
    audioVolumen : number;
    songDuration : number;
    song : string;
    details : DetailsSong;
}

interface DetailsSong {
    author: string;
    year: number;
}

/**
 * Puedes usar ctrl + . para que te llene el objeto con las propiedades tipadas de la interfaz
 */
const audioPlayer : AudioPlayer = {
    audioVolumen: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015 
    }
}

/**
 * EN VEZ DE USAR ESTA OPCIÓN 

    console.log('Canción: ' + audioPlayer.song);
    console.log('Duración: ' + audioPlayer.songDuration);
    console.log('Autor: ' + audioPlayer.details.author);

 * SE PUEDE USAR LA DESTRUCTURACIÓN DE OBJETOS
 * Coloca entre paréntesis las propiedades que quieres rescatar e igularla al objeto
 * y puedes con los : referenciarlas
*/

const { 
    song : cancion, 
    songDuration: duracion,
    details
} = audioPlayer;
//Si hay un objeto dentro de un objeto, desestructurizalo 
const { author } = details

console.log('Canción: ' + cancion);
console.log('Duración: ' + duracion);
console.log('Autor: ' + author);


/**
 * DESESTRUCTURACIÓN DE ARREGLOS 
 */
// console.log(`Persona 3: ${dbz[2]}`); Esta es la forma básica sin desestructuración 
// const dbz : string[] = ['Goku', 'Vegeta', 'Trunks'];

/**
 * El signo = es para declarar valor por defecto, mayormente cuando no exista 
 * OBLIGATORIO EL USO DE COMAS, aunque no uses los valores y solo te interese uno, deberías usar comass
 */
const [ , , trunks = 'No existe'] : string[] = ['Goku', 'Vegeta', 'Trunks'];
console.log(`Personaje 3: ${trunks}`);