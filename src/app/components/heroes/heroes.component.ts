import { Component, OnInit } from '@angular/core';
import { Heroe,HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit{

  heroes : Heroe[] = [];
  constructor(private _HeroesService : HeroesService){

  }
  ngOnInit(): void {
    this.heroes = this._HeroesService.getHeroes();
    console.log(this.heroes);
  }
}
