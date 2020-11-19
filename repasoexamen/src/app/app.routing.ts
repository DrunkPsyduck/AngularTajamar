import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PlantillaComponent } from './components/plantilla/plantilla.component';
import { SalariosComponent } from './components/salarios/salarios.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';

const appRoutes: Routes = [
  { path: '', component: PlantillaComponent },
  { path: 'empleado/:idEmpleado', component: EmpleadoComponent },
  { path: 'salarios', component: SalariosComponent },
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes
);
