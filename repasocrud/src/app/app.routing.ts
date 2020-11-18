import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalesComponent } from './components/hospitales/hospitales.component';
import { ModificarComponent } from './components/modificar/modificar.component';

const appRoutes: Routes = [
  { path: '', component: HospitalesComponent },
  { path: 'modificar', component: ModificarComponent },
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes
);
