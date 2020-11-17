import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Pelicula } from './../../models/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculasService],
})
export class PeliculasComponent implements OnInit {
  public peliculasGen: Array<Pelicula>;
  constructor(
    private _service: PeliculasService,
    private _activeRoute: ActivatedRoute
  ) {}

  buscarPeliculasGen(gen) {
    this._service.getPeliculaGen(gen).subscribe(
      (response) => {
        this.peliculasGen = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  buscarTitulo() {
    let titulo;
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let gen = params['idgen'];

      this.buscarPeliculasGen(gen);
    });
  }
}
