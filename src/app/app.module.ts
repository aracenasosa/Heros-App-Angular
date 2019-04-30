import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Routes
import { APP_ROUTING } from './app-routing';

// Services
import { HerosService } from './services/heros-services';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AboutComponent } from './Components/about/about.component';
import { HerosComponent } from './Components/heros/heros.component';
import { from } from 'rxjs';
import { InfoHerosComponent } from './Components/info-heros/info-heros.component';
import { SearchComponent } from './Components/search/search.component';
import { HerosTarjetaComponent } from './Components/heros-tarjeta/heros-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    HerosComponent,
    InfoHerosComponent,
    SearchComponent,
    HerosTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HerosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
