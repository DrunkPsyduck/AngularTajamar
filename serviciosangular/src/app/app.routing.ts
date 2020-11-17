import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesempleadoComponent } from './components/detallesempleado/detallesempleado.component';
import { TablaempleadoComponent } from './components/tablaempleado/tablaempleado.component';

const appRoutes: Routes = [
  { path: 'empleados', component: TablaempleadoComponent },
  { path: 'detallesempleado/:empno', component: DetallesempleadoComponent },
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes
);
