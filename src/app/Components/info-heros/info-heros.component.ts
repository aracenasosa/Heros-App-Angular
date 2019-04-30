import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HerosService } from '../../services/heros-services';

@Component({
  selector: 'app-info-heros',
  templateUrl: './info-heros.component.html',
  styleUrls: ['./info-heros.component.css']
})
export class InfoHerosComponent {

  heros: any = {};

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HerosService) {

    this.activatedRoute.params.subscribe(params => {
      this.heros = heroesService.getInfo( params.id );
      console.log(this.heros);
    });
  }


}
