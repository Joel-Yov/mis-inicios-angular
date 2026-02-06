import { Component, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page-super',
  imports: [CharacterList, CharacterAdd],
  templateUrl: './dragonball-page-super.html',
})
export class DragonballSuperPage {

  tittle = 'DRAGON BALL SUPER';

  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 8005
    }
  ])

  addCharacter(newCharacter : Character) : void 
  {
    this.characters.update(
      listaPersonajes => [...listaPersonajes, newCharacter]
    )
  }
}
