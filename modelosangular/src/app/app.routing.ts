import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {MenuComponent} from './components/menu/menu.component';
import { CollatzComponent } from './components/collatz/collatz.component';

const appRoutes: Routes = [
    {path: 'collatz/:numero', component: CollatzComponent}
]

export const appRoutingProviders: any[]=[];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
    appRoutes
  );