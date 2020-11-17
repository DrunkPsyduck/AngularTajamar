import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pelicula } from './../../models/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculasService],
})
export class PeliculasComponent implements OnInit {
  public peliculas: Array<Pelicula>;
  public peliculasGen: Array<Pelicula>;

  buscarPeliculasGen(gen) {
    this._service.getPeliculaGen(gen).subscribe(
      (response) => {
        this.peliculasGen = response;
        console.log(response);
        console.log('angular mierda');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  buscarPeliculas() {
    this._service.getPeliculas().subscribe(
      (response) => {
        this.peliculas = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  constructor(
    private _service: PeliculasService,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let gen = params.gen;
      console.log('gen ' + gen);
      this.buscarPeliculasGen(gen);
    });
  }
}
