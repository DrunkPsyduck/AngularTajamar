import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneroComponent } from './components/genero/genero.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { Pelicula } from './models/pelicula';

const appRoutes: Routes = [
  { path: 'genero/:idgen', component: GeneroComponent },
  { path: '/genero', component: GeneroComponent },
  { path: 'pelicula/:idpel', component: PeliculasComponent },
  { path: 'peliculas', component: PeliculasComponent },
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes
);
