import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HerosService } from '../../services/heros-services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private sendTermino: Router) {

   }

   buscarHeroe( termino: string ) {

    this.sendTermino.navigate(['/search', termino]);
    console.log(termino);
  }

}
