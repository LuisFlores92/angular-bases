import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
      <h3>
        Counter: {{ counter }}
      </h3>

      <button (click)="increaseBy(+1)">+1</button>
      <button (click)="resetContador()">Reset</button>
      <button (click)="increaseBy(-1)">-1</button>

  `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  increaseBy(number: number){
    this.counter += number;
  }

  resetContador(){
    this.counter = 10;
  }

}
