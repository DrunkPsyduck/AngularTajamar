import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent implements OnInit {
  public peliculas: Array<Pelicula>;
  constructor(
    private _activedRouter: ActivatedRoute,
    private _service: PeliculasService
  ) {}
  cargarPeliculas(titulo) {}
  ngOnInit(): void {
    this._activedRouter.params.subscribe((params: Params) => {
      this.cargarPeliculas(params.titulo);
    });
  }
}
