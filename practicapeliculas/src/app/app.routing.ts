import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { GeneroComponent } from './components/genero/genero.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';

const appRoutes: Routes = [
  { path: 'genero/:idgen', component: GeneroComponent },
  { path: 'peliculasgenero/:idgen', component: PeliculasComponent },
  { path: 'busqueda/:busqueda', component: BusquedaComponent },
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes
);
