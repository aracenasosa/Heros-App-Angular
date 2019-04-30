import { Component, OnInit } from '@angular/core';
import { HerosService, IHeroes } from '../../services/heros-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

   recibirHeroes: IHeroes[] = [];

  constructor(private heroesService: HerosService, private router: Router) {

  }

  ngOnInit() {

    this.recibirHeroes = this.heroesService.getHeroes();
    console.log(this.recibirHeroes);
  }

  verHeroe( idx: number ) {
    this.router.navigate( ['/info-heros', idx] );
  }

}
