import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { HerosComponent } from './Components/heros/heros.component';
import { InfoHerosComponent } from './Components/info-heros/info-heros.component';
import { SearchComponent } from './Components/search/search.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heros', component: HerosComponent },
    { path: 'info-heros/:id', component: InfoHerosComponent },
    { path: 'search/:termino', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
