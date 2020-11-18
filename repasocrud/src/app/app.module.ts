import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing, appRoutingProvider } from './app.routing';
import { AppComponent } from './app.component';
import { HospitalesComponent } from './components/hospitales/hospitales.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { HospitalesService } from './services/hospitales.service';

@NgModule({
  declarations: [
    AppComponent,
    HospitalesComponent,
    ModificarComponent,
    MenuComponent,
    HospitalesComponent,
  ],
  imports: [BrowserModule, routing, HttpClientModule],
  providers: [appRoutingProvider, HospitalesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
