import { Component, input } from '@angular/core';
import type { Character } from "../../../interfaces/character.interface";

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.html',
})
export class CharacterList { 

  //Usar el .required para que sea obligatoria esta ENTRADA de datos del "mundo exterior" (osea otro componente)
  characters = input.required<Character[]>();
  listName = input.required<string>();
}
