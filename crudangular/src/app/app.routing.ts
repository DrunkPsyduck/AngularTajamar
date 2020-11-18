import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';

const appRoutes: Routes = [{ path: '', component: DepartamentosComponent }];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes
);
