import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//nombre de la clase
import {PrimerComponente} from "./../components/primercomponente/PrimerComponente.component";

@NgModule({
  declarations: [
    AppComponent, PrimerComponente
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }