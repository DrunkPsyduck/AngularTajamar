import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { PersonaComponent } from './components/persona/persona.component';
import { CochesComponent } from './components/coches/coches.component';
import { FormsModule } from '@angular/forms';
import { EmpleadosSalarioComponent } from './components/empleados-salario/empleados-salario.component';
import { EmpleadosOficioComponent } from './components/empleados-oficio/empleados-oficio.component';
import { appRoutingProvider, routing } from './app.routing';
import { TablaempleadoComponent } from './components/tablaempleado/tablaempleado.component';
import { DetallesempleadoComponent } from './components/detallesempleado/detallesempleado.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajeComponent,
    PersonaComponent,
    CochesComponent,
    EmpleadosSalarioComponent,
    EmpleadosOficioComponent,
    TablaempleadoComponent,
    DetallesempleadoComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, routing],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
