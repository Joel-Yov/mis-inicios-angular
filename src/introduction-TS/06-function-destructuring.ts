export interface Producto {
    descripcion: string;
    precio: number;
}

const phone : Producto = {
    descripcion: 'Redmi 9',
    precio: 777
}

const tablet : Producto = {
    descripcion: 'iPad Air',
    precio: 250
}

const shoppingCart = [phone, tablet];
const igv : number = 0.18;

/**
 * CLEAN CODE: Una función debe tener como máximo 3 argumentos
 * SI SE PASA, convertirlos a objeto.
 */

interface IgvCalcularOpciones {
    igv: number;
    productos: Producto[]
}

/**
 * ================ DESESTRUCTURACIÓN 
 */


/** 
    function calcularIgv( opciones : IgvCalcularOpciones) : number[] {
        let total = 0;

        opciones.productos.forEach( producto => {   //Aquí se puede hacer desestructuración de objetos
            total += producto.precio;               //Aquí se puede hacer desestructuración de arrays
        });

        return [total, total * opciones.igv]
    }
*/

export function calcularIgv( opciones: IgvCalcularOpciones) : [number, number] {
    let total = 0;
    const { productos, igv } = opciones

    productos.forEach ( ({precio}) => {
        total += precio;
    })
    
    return [total, total * igv]
}


/**
 * SIN DESESTURCTUACIÓN
    const resultadoFinal = calcularIgv({
        productos: shoppingCart,
        igv
    });
    console.log(`Total: ${resultadoFinal[0]}`);
    console.log(`Igv: ${resultadoFinal[1]}`);
 */

const [total, igvFinal] = calcularIgv({
    productos: shoppingCart,
    igv
})
console.log(`Total: ${total}`);
console.log(`Igv: ${igvFinal}`);


/**
 * EJERCICIO 2
 */
interface Persona {
    nombre: string;
    edad: number;
    direccion: {
        ciudad: string;
        pais: string;
    };
}

const personas: Persona[] = [
    { nombre: 'Ana', edad: 28, direccion: { ciudad: 'Lima', pais: 'Perú' } },
    { nombre: 'Luis', edad: 35, direccion: { ciudad: 'Quito', pais: 'Ecuador' } },
    { nombre: 'Sofía', edad: 22, direccion: { ciudad: 'Bogotá', pais: 'Colombia' } }
];

// Desestructuración de argumentos en la función
function obtenerDatos(persona: Persona): [string, string] {
    const { nombre, direccion } = persona;
    const { ciudad } = direccion;
    return [nombre, ciudad];
}

// Llama la función para cada persona y guarda los resultados en un arreglo
const datosPersonas = personas.map(obtenerDatos);

// Desestructuración de arreglos: toma el nombre y ciudad de la primera persona del resultado
const [ [nombrePrimero, ciudadPrimero] ] = datosPersonas;

console.log(datosPersonas);
console.log(`Primera persona: ${nombrePrimero}, Ciudad: ${ciudadPrimero}`);



/**
 * EJERCICIO 3
 * Practica desestructuración de objetos, argumentos y arreglos
 */

interface Curso {
    titulo: string;
    duracion: number;
    profesor: {
        nombre: string;
        especialidad: string;
    };
}

const cursos: Curso[] = [
    { titulo: 'TypeScript Básico', duracion: 10, profesor: { nombre: 'Joel', especialidad: 'Frontend' } },
    { titulo: 'Angular Avanzado', duracion: 15, profesor: { nombre: 'Bryan', especialidad: 'Fullstack' } },
    { titulo: 'React Intermedio', duracion: 12, profesor: { nombre: 'Ana', especialidad: 'Frontend' } }
];

// 1. Desestructuración de argumentos en la función
function resumenCurso(curso: Curso): [string, string] {
    // Desestructura el objeto curso para obtener titulo y nombre del profesor
    const { titulo, profesor } = curso;
    const { nombre : nombreProfe} = profesor;
    return [titulo, nombreProfe];
}

// 2. Usa map para obtener un arreglo de resúmenes
const resumenes = cursos.map(resumenCurso);

// 3. Desestructuración de arreglos: toma el título y nombre del profesor del segundo curso
// const [ , , [tituloTercero, profesorTercero] ] = resumenes;

console.log(resumenes);
// console.log(`Tercer curso: ${tituloTercero}, Profesor: ${profesorTercero}`);


function reviewCursos ( curso : Curso) : string {
    const { titulo, profesor} = curso;
    const {
        nombre,
        especialidad
    } = profesor;
    
    return `El curso ${titulo}, lo dicta ${nombre} y su especialidad es ${especialidad}`;
}

const [ , , tercerCurso] = cursos;

const resultadoEjercicioFour = cursos.map(reviewCursos);
const resultadoSoloTercero = reviewCursos(tercerCurso);
console.log(resultadoSoloTercero);
console.log(resultadoEjercicioFour);





/**
 * EJERCICIO 4
 */

interface Libro {
    titulo: string;
    autor: {
        nombre: string;
        nacionalidad: string;
    };
    anio: number;
}

const biblioteca: Libro[] = [
    { titulo: 'Cien años de soledad', autor: { nombre: 'Gabriel García Márquez', nacionalidad: 'Colombiana' }, anio: 1967 },
    { titulo: 'Rayuela', autor: { nombre: 'Julio Cortázar', nacionalidad: 'Argentina' }, anio: 1963 },
    { titulo: 'Pedro Páramo', autor: { nombre: 'Juan Rulfo', nacionalidad: 'Mexicana' }, anio: 1955 }
];

//Desestructura el arreglo para obtener el primer y segundo libro en variables separadas.
const [ primerLibro, segundoLibro ] = biblioteca;

// Del primer libro, desestructura el objeto para obtener el título y el nombre del autor.
const { titulo, autor} = primerLibro;
const { nombre: nombreAutor } = autor 
console.log(`El título del primer libro es ${titulo} y su autor es ${nombreAutor}`);

// Del segundo libro, desestructura el objeto para obtener la nacionalidad del autor y el año de publicación.
const { autor : autorSegundo, anio } = segundoLibro;
const { nacionalidad: nacionalidadAutor } = autorSegundo;
console.log(`La nacionalidad del autor del segundo libro es ${nacionalidadAutor} y su año de publicación fue en  ${anio}`);

// Crea una función que reciba un libro y retorne un string con el formato: "Libro: [TÍTULO], Autor: [NOMBRE], Año: [AÑO], Nacionalidad: [NACIONALIDAD]"
function reviewLibro ( libro: Libro ) : string {
    const { titulo : tituloLibro, autor : autorLibro, anio : anioPublicacion } = libro;
    const {nombre, nacionalidad } = autorLibro;

    return `Libro: ${tituloLibro}, Autor: ${nombre}, Año: ${anioPublicacion}, Nacionalidad: ${nacionalidad}`;
}

// Llama la función solo para el primer y segundo libro y muestra ambos resultados en consola.
console.log(reviewLibro(primerLibro));
console.log(reviewLibro(segundoLibro));