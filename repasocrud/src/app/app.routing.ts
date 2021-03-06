import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalesComponent } from './components/hospitales/hospitales.component';
import { InsertarComponent } from './components/insertar/insertar.component';
import { ModificarComponent } from './components/modificar/modificar.component';

const appRoutes: Routes = [
  { path: '', component: HospitalesComponent },
  { path: 'modificar/:idhospital', component: ModificarComponent },
  { path: 'insertar', component: InsertarComponent },
  { path: 'borrar/:idhospital', component: HospitalesComponent },
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes
);
