import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent {

  
  @Input() heroe : any = {};
  @Input() id = 0;
  constructor( private router : Router
  ){}


  verHeroe(idx : number){
    this.router.navigate(['heroe',idx])
  }

}
