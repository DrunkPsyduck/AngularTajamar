import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Generos } from 'src/app/models/genero';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculasService } from './../../services/peliculas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [PeliculasService],
})
export class NavbarComponent implements OnInit {
  public generos: Array<Generos>;
  //@ViewChild('selectorGenero') selectorgenero: ElementRef;

  constructor(private _service: PeliculasService) {
    // this.selectorgenero = ElementRef.prototype;
  }

  ngOnInit(): void {
    this._service.getGeneros().subscribe((response) => {
      this.generos = response;
    });
  }
}
