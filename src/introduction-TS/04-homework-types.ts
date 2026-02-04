/*
    ===== Código de TypeScript =====
*/
interface Direccion {
    calle : string;
    country : string;
    ciudad : string
}

interface HeroIdentity {
    name : string;
    edad : number;
    address : Direccion; 
    showAddress : () => string
}

/**
 * PUEDES USAR fn + F2 para cambiar en todos los lados, por si quieres cambiar el nombre de variable
 */

const superHeroe: HeroIdentity = {
    name: 'Spiderman',
    edad: 30,
    address: {
        calle: 'Main St',
        country: 'USA',
        ciudad: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};