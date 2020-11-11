import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TablasMultiplicar } from './../components/tablasmultiplicar/tablasmultiplicar.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, TablasMultiplicar],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
