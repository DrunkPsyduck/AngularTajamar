import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProvider } from './app.routing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DepartamentoService } from './services/departamento.service';
import { MenuComponent } from './components/menu/menu.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, DepartamentosComponent],
  imports: [BrowserModule, FormsModule, routing, HttpClientModule],
  providers: [appRoutingProvider, DepartamentoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
