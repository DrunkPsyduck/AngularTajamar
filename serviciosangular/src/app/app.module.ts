import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { PersonaComponent } from './components/persona/persona.component';
import { CochesComponent } from './components/coches/coches.component';
import { FormsModule } from '@angular/forms';
import { EmpleadosSalarioComponent } from './components/empleados-salario/empleados-salario.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajeComponent,
    PersonaComponent,
    CochesComponent,
    EmpleadosSalarioComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
