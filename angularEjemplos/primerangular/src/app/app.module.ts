import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//nombre de la clase
import {PrimerComponente} from "./../components/primercomponente/PrimerComponente.component";
import {CiclosVida} from "./../components/ciclosvida/ciclosvida.component"
import {Deportes} from "./../components/deportes/deportes.component"
import {NumerosRandom} from "./../components/numerosRandom/numerosrandom.component"
@NgModule({
  declarations: [
    AppComponent, PrimerComponente,CiclosVida, Deportes, NumerosRandom
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
