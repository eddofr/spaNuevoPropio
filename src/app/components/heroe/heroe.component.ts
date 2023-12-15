import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  heroe : any ={};

  constructor( activateRoute : ActivatedRoute,
               _heroesService : HeroesService
    ){
      activateRoute.params.subscribe(params => {
        this.heroe = _heroesService.getHeroe(params['id']);
      });
  }

}
