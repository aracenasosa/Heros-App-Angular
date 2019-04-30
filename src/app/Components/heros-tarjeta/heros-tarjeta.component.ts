import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heros-tarjeta',
  templateUrl: './heros-tarjeta.component.html',
  styleUrls: ['./heros-tarjeta.component.css']
})
export class HerosTarjetaComponent implements OnInit {

  @Input() heroes: any = {};
  @Input() index: number;
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe(){
     this.router.navigate( ['/info-heros', this.index] );
    //this.heroeSeleccionado.emit( this.index );
  }

}
