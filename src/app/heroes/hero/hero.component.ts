import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public nombre: string = 'ironman';
  public edad:   number = 49;

  get capitalizedName(): string {
    return this.nombre.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  changeHero(): void {
    this.nombre = 'capitana marvel';
  }

  changeAge(): void {
    this.edad = 31;
  }


}
