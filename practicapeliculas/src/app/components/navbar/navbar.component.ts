import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Genero } from 'src/app/models/genero';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [PeliculasService],
})
export class NavbarComponent implements OnInit {
  public generos: Array<Genero>;
  //@ViewChild('selectorGenero') selectorgenero: ElementRef;

  constructor(private _service: PeliculasService) {
    this.generos = [];
    // this.selectorgenero = ElementRef.prototype;
  }

  buscarGeneros() {
    this.generos = [];
    this._service.getGeneros().subscribe(
      (response) => {
        this.generos = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.buscarGeneros();
  }
}
