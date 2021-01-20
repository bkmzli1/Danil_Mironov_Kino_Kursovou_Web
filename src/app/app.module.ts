import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HadComponent} from './had/had.component';
import {ListFilmComponent} from './list-film/list-film.component';
import {RouterModule, Routes} from '@angular/router';
import {AppService} from './app.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CrateFilmComponent } from './crate-film/crate-film.component';
import { FilmComponent } from './film/film.component';
import { FilmSerchComponent } from './film-serch/film-serch.component';

const appRoutes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'film/create', component: CrateFilmComponent},
  {path: 'film/filmSearch/:id', component: FilmSerchComponent},
  {path: 'film/filmSearch', component: FilmSerchComponent},
  {path: 'film/:id', component: FilmComponent},


];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HadComponent,
    ListFilmComponent,
    CrateFilmComponent,
    FilmComponent,
    FilmSerchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
