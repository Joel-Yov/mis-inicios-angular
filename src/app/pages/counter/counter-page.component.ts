import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    templateUrl: `./counter-page.component.html`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPageComponent {
    counter = 21;
    counterSignal = signal(10);

    constructor()
    {
        // setInterval(() => 
        // {
        //     this.counterSignal.update((current) => current + 1);
        // }, 2000);
    }

    increaseBy(value: number): void
    {
        this.counter += value

        //Usamos el current para obtener el valor actual de la señal
        this.counterSignal.update((current) => current + value);
    }

    resetCounter(): void {
        this.counter = 0;
        this.counterSignal.set(0); //Usamos el set para establecerle el valor que está entre ()
    }

    decreaseBy(value: number): void 
    {
        this.counter -= value
        this.counterSignal.update((current) => current - value)
    }
}