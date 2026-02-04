// Mayormente tu usaras decaradores que se han creado para facilitarte algunas cosas, muy raro que tu crees un decorador desde cero
// Te acuerdas en spring boot usabamos algo como: @Controller, @Service, @Repository, de esta manera definimos 


export class SuperClass 
{
    public myProperty: string = 'Abc123';

    print() { console.log('Hola Mundo')}
}

// Para ver la definicion de mi clase en la consola ---> Buen punto para el debug
console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);

// REVIEW ABOUT METADATOS
// Es como el manual de instrucciones que acompaña a tu código para que el compilador o el framework sepa que hacer con él
/* @Component({
    selector: 'app-listado',      // Metadato 1: ¿Cómo se llamará la etiqueta HTML?
    templateUrl: './list.html',   // Metadato 2: ¿Dónde está el diseño?
    styleUrls: ['./list.css']     // Metadato 3: ¿Qué estilos usa?
   })
*/