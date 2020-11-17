import {
  Component,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

import { Generos } from 'src/app/models/genero';
import { PeliculasService } from './../../services/peliculas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [PeliculasService],
})
export class NavbarComponent implements OnInit {
  public generos: Array<Generos>;
  @ViewChild('buscarPelicula') buscarPelicula: ElementRef;

  busqueda() {
    let titulo = this.buscarPelicula.nativeElement.value;
    console.log(titulo);
    return this.busqueda;
  }

  constructor(private _service: PeliculasService) {
    this.buscarPelicula = ElementRef.prototype;
  }

  ngOnInit(): void {
    this._service.getGeneros().subscribe((response) => {
      this.generos = response;
    });
  }
}
