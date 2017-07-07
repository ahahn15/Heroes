import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    <router-outlet></router-outlet>`,
  styleUrls: [ './app.component.css' ],
  providers: [ HeroService ]
})

export class AppComponent  {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
