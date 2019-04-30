import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HerosService, IHeroes } from '../../services/heros-services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchHeros: any[] = [];
  termino: string = '';

// tslint:disable-next-line: no-shadowed-variable
  constructor(private activateRoute: ActivatedRoute, private herosService: HerosService) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(parametros => {
      this.termino = parametros.termino;
      this.searchHeros = this.herosService.buscarHeroe(parametros.termino);
      console.log( this.searchHeros );
    });
  }

}
