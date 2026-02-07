import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = () : Character[] => 
{ 
  //Usamos el getItem(key) para obtener los datos del localStorage
  //NUNCA GRABAR INFORMACIÓN SENSIBLE EN EL LOCALSTORAGE
  const characters = localStorage.getItem('characters')
  return characters ? JSON.parse(characters) : []
}

@Injectable({
  providedIn: 'root',
})
export class DragonballService {

  characters = signal<Character[]>(loadFromLocalStorage())

  /*
  USAMOS EFFECTOS PARA LANZAR UNA ACCION SECUNDARIA
  CASOS DE USO DE EFECTOS: 
  - LOGEOS DE INFORMACIÓN
  - Mantener la data sincronizada con el LocalStorage
  - Agregar algun comportamiento especifico en el DOM

  NO SE USAN PARA HACER PETICIONES HTTP (SE PUEDE PERO NO SE RECOMIENDA)
  */

  //USAMOS UN EFECTO DESTINADO PARA UNA TAREA, NO COMPLEJIDAD
  saveToLocalStorage = effect(() => {
     console.log(`Contador de persoanjes ${this.characters().length}`);

     //SIEMPRE SE ALMACE LA LLAVE Y EL VALOR (SIEMPRE TIENE QUE SER STRING)
     //USAMOS JSON.stringify para serailizarlo como un string
     localStorage.setItem('characters', JSON.stringify(this.characters()))
  });

  addCharacter(newCharacter : Character) : void 
  {
    this.characters.update(
      listaPersonajes => [...listaPersonajes, newCharacter]
    )
  }
}
