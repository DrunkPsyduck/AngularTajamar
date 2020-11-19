import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProvider } from './app.routing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { PlantillaComponent } from './components/plantilla/plantilla.component';
import { PlantillaService } from './services/plantilla.service';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { SalariosComponent } from './components/salarios/salarios.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, PlantillaComponent, EmpleadoComponent, SalariosComponent],
  imports: [BrowserModule, FormsModule, routing, HttpClientModule],
  providers: [appRoutingProvider, PlantillaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
