import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TablasMultiplicar } from './components/tablasmultiplicar/tablasmultiplicar.component';
import { FormsModule } from '@angular/forms';
//import para utilizar las rutas
import { Route } from '@angular/router';
import { MusicaComponent } from './components/rutas/musica/musica.component';
import { HomeComponent } from './components/rutas/home/home.component';
import { CineComponent } from './components/rutas/cine/cine.component';
import { TelevisionComponent } from './components/rutas/television/television.component';
import { appRoutingProviders, routing } from './app.routing';
import { MenuComponent } from './components/rutas/menu/menu.component';
import { Error404Component } from './components/rutas/error404/error404.component';
import { NumerodobleComponent } from './components/numerodoble/numerodoble.component';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';

@NgModule({
  declarations: [
    AppComponent,
    TablasMultiplicar,
    HomeComponent,
    MusicaComponent,
    CineComponent,
    TelevisionComponent,
    MenuComponent,
    Error404Component,
    NumerodobleComponent,
    ListaproductosComponent,
  ],
  imports: [BrowserModule, FormsModule, routing],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
