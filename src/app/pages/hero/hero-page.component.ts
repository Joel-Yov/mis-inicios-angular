import { Component, signal } from "@angular/core";

@Component({
    templateUrl: './hero-page.component.html'
})
export class HeroPageComponent {

    //THE SIGNALS.

    //Usamos <> PARA TIPAR una signal
    name = signal<string>("Ironman");
    age = signal<number>(45);

    getHeroDescription() : string
    {
        let description : string = `Hi, my name is ${this.name()} and I'm ${this.age()} years old`;
        return description;
    }

    changeHero() : void
    {
        this.name.update((current) => "Spiderman");
        this.age.update((current) => 22);
    }

    changeAge() : void
    {
        this.age.update((current) => 60);
    }

    resetForm() : void
    {  
       this.name.set("Ironman");
       this.age.set(45); 
    }

    capitalizedName(): string {
        let nombreMayus: string = `${this.name().toLocaleUpperCase()}`;
        return nombreMayus;
    }
}