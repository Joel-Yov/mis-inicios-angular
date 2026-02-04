import { Component } from "@angular/core";

@Component({
    templateUrl: `./counter-page.component.html`,

})
export class CounterPageComponent {
    counter = 21;

    increaseBy(value: number): void
    {
        this.counter += value
    }

    resetCounter(): void {
        this.counter = 21;
    }

    decreaseBy(value: number): void 
    {
        this.counter -= value
    }
}