import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html'
})
export class CharacterAdd {

  isNaN = isNaN;
  Number = Number;

  name = signal<string>('');
  power = signal<number>(0);

  newCharacter = output<Character>();

  addCharacter() : void 
  {
    console.log(`[${this.name()} - ${this.power()}]`);

    if(!this.name() || !this.power() || this.power() <= 0)
    {
      console.log("Please, ingrese bien los datos");
      return
    }

    const newCharacter : Character =
    {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    }

    console.log(newCharacter);
    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields() : void 
  {
    this.name.set('');
    this.power.set(0);
  }

}
