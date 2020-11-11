import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//nombre de la clase
import { PrimerComponente } from './../components/primercomponente/PrimerComponente.component';
import { CiclosVida } from './../components/ciclosvida/ciclosvida.component';
import { Deportes } from './../components/deportes/deportes.component';
import { PositivoNegativo } from './../components/positivosnegativos/positivonegativo.component';
import { FormularioPersona } from './../components/formulariopersona/formulariopersona.component';
@NgModule({
  declarations: [
    AppComponent,
    PrimerComponente,
    CiclosVida,
    Deportes,
    PositivoNegativo,
    FormularioPersona,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
