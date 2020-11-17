import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PeliculasService } from './services/peliculas.service';
import { FormsModule } from '@angular/forms';
import { appRoutingProvider, routing } from './app.routing';
import { GeneroComponent } from './components/genero/genero.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GeneroComponent,
    PeliculasComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, routing],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
