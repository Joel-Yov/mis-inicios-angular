import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.html',
  styleUrl: './dragonball-page.scss',
})
export class DragonballPage {

  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001,
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 8000,
    },
    {
      id: 4,
      name: 'Yamsha',
      power: 500,
    },
    {
      id: 3,
      name: 'Picolo',
      power: 3000,
    },
  ]);
}
