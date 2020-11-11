import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//Todos los componentes que se desean dibujar en la zona de rutas

import { HomeComponent } from './components/rutas/home/home.component';
import { MusicaComponent } from './components/rutas/musica/musica.component';
import { CineComponent } from './components/rutas/cine/cine.component';
import { TelevisionComponent } from './components/rutas/television/television.component';

//Se crea un array de rutas.Las rutas llevan implicita / por lo que no habria que ponerlas
//{path: ''; component: componente}
// Los componentes pueden repetirse
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'musica', component: MusicaComponent },
  { path: 'cine', component: CineComponent },
  { path: 'television', component: TelevisionComponent },
];

//Para poder utilizar esta clase debemos indicar que es un proveedor de rutas
//Son nombres de variables para llamarlas desde module.ts
export const appRoutingProviders: any[] = [];
//nombre que se utilizara en el import de mosule.ts
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes
);
