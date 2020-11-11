import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TablasMultiplicar } from './../components/tablasmultiplicar/tablasmultiplicar.component';
import { FormsModule } from '@angular/forms';
//import para utilizar las rutas
import { Route } from '@angular/router';
import { MusicaComponent } from './musica/musica.component';
import { HomeComponent } from './components/home/home.component';
import { CineComponent } from './components/cine/cine.component';
import { TelevisionComponent } from './components/television/television.component';
@NgModule({
  declarations: [AppComponent, TablasMultiplicar, MusicaComponent, HomeComponent, CineComponent, TelevisionComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
