import { Component, inject, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";
import { DragonballService } from '../../services/dragonball.service';

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

  //AHORA SE USA ESTA MANERA DE INYECTAR DEPENDENCIAS, YA NO POR EL CONSTRUCTOR
  // constructor(
  //   public dragonBallService: DragonballService
  // ) {}
  public dragonballService = inject(DragonballService)
}
