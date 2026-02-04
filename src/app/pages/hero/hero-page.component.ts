import { UpperCasePipe } from "@angular/common";
import { Component, computed, Signal, signal } from "@angular/core";

@Component({
    templateUrl: './hero-page.component.html',
    imports: [UpperCasePipe],
})
export class HeroPageComponent {

    //THE SIGNALS.

    //Usamos <> PARA TIPAR una signal
    name = signal<string>("Ironman");
    age = signal<number>(45);


    // SIGNALS COMPUTADA: todo aquella que cambia automaticamente cuando sus otras
    // signals (es dependiente de otras) ya han cambiado, osea directamente no pueden ser cambiadas
    heroDescription: Signal<string> = computed(() => 
    {
        const description = `${this.name()} - ${this.age()}`;
        return description;
    })

    getHeroDescription = computed(() =>
    {
        let description : string = `Hi, my name is ${this.name()} and I'm ${this.age()} years old`;
        return description;
    })

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

    // capitalizedName: Signal<string> = computed(() =>
    // {
    //     let nombreMayus: string = `${this.name().toLocaleUpperCase()}`;
    //     return nombreMayus;
    // })
}