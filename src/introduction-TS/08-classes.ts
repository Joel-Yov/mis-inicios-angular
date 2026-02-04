export class Persona {
    public name: string; //SI SE USA PRIVATE EN UNA PROPIEDAD, SOLO SE PUEDE USAR DENTRO DE LA CLASE
    public address: string;


    /**
     * SI QUIERES QUE A LA HORA DE CREAR UN OBJETO, PIDA PARÁMETROS O NO
     * ESO ES DEFINIDO EN EL CONSTRUCTOR
     */
    constructor(name:string, address: string) {
        this.name = name;
        this.address = address;
    }

    /**
     * UNA FUNCIÓN DENTRO DE UNA CLASE ES UN MÉTODO
     */
}

/**
 * HERENCIA SIN PRIORIZAR COMPOSICIÓN SOBRE HERENCIA
 * export class Hero extends Persona {

     * TIENES QUE LLAMAR AL CONSTRUCTOR DEL PADRE CON super()
    
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ) {
        // super(realName, 'Piura')
    }
}
 */

export class Hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,

        /**
         * PRIORIZAND COMPOSICIÓN SOBRE HERENCIA
         */
        public persona: Persona
    ) {
        // super(realName, 'Piura')
    }
}


const peter : Persona = new Persona('Peter', 'Piura')
const ironman = new Hero('Spiderman', 45,'Peter Parker', peter);

console.table(ironman);