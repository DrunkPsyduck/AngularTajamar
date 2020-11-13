import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRoutingProviders, routing } from './app.routing';
import { AppComponent } from './app.component';
import { CollatzComponent } from './components/collatz/collatz.component';
import { MenuComponent } from './components/menu/menu.component';

import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { CocheComponent } from './components/coche/coche.component';
import { ConcesionarioComponent } from './components/concesionario/concesionario.component';

@NgModule({
  declarations: [
    AppComponent,
    CollatzComponent,
    MenuComponent,
    ListaproductosComponent,
    CocheComponent,
    ConcesionarioComponent,
  ],
  imports: [BrowserModule, routing],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
